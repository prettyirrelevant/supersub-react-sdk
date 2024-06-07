import { toast } from 'sonner';
import Modal from 'react-modal';
import React, { useState, useEffect, useCallback } from 'react';
import { usePrivy, useLogin, useWallets, useMfaEnrollment, ConnectedWallet } from '@privy-io/react-auth';

import { generateSuperSubSmartWallet } from '../utils';
import { IAcctContextValue, IOpenModalArgs } from './interfaces';
import { SubscriptionModal } from '../components/SubscriptionModal';

Modal.setAppElement('#root');

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const SubscriptionContext = React.createContext<IAcctContextValue>({} as IAcctContextValue);

export const SubscriptionProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeModal, setActiveModal] = useState('subscription-modal');
  const [requestData, setRequestData] = useState<IOpenModalArgs>({
    apiKey: '',
    productId: undefined,
    defaultPlanId: undefined,
  });
  const [productDetails, setProductDetails] = useState({
    data: null,
    error: false,
    isLoading: false,
  });
  const [selectedPlan, setSelectedPlan] = useState<number | undefined>(
    requestData?.defaultPlanId ?? (productDetails?.data as any)?.plans[0].onchainReference
  );

  const { ready, authenticated, user, logout } = usePrivy();
  const { showMfaEnrollmentModal } = useMfaEnrollment();
  const { login } = useLogin({
    onOAuthLoginComplete: () => {
      showMfaEnrollmentModal();
    },
    onComplete: async () => {
      try {
        const { wallets } = useWallets();
        const embeddedWallet = wallets.find((wallet) => wallet.walletClientType === 'privy');
        const { pluginClient } = await generateSuperSubSmartWallet(embeddedWallet as ConnectedWallet);
        console.log('i got here.');
        const subscriptionResult = await pluginClient.subscribe(selectedPlan!, 0);
        console.log('i got here too.');
        console.log('hi', subscriptionResult, pluginClient, embeddedWallet, wallets);
        toast.success(`Subscribed to ${(productDetails.data as any)?.name ?? 'plan'} successfully`);
      } catch (error) {
        toast.error(`Failed to subscribe${error?.details ? ` with code ${JSON.parse(error?.details)?.code}` : ''}`, {
          description: error?.details ? JSON.parse(error?.details)?.message : undefined,
        });
      } finally {
        await logout();
      }
    },
  });

  const isMfaEnabled = (user?.mfaMethods.length ?? 0) > 0;

  const removePasskeyButton = useCallback(async () => {
    if (!document.getElementById('privy-modal-content')) return;

    const buttons = document.querySelectorAll('#privy-dialog button');
    buttons?.forEach((btn) => {
      if (btn.textContent === 'I have a passkey') {
        btn.remove();
      }
    });
  }, []);

  const getProductDetails = useCallback(
    async ({ apiKey = requestData.apiKey, productId = requestData.productId }) => {
      setProductDetails((prev) => ({ ...prev, isLoading: true }));

      try {
        const res = await fetch(`https://supersub.up.railway.app/api/products/${productId}`, {
          headers: {
            'x-api-key': apiKey!,
          },
        });

        if (!res.ok) throw new Error('Failed to fetch product details');

        const data = await res.json();

        setProductDetails({
          error: false,
          isLoading: false,
          data: data?.data?.product,
        });
      } catch (error) {
        setProductDetails((prev) => ({ ...prev, error: true, isLoading: false }));
      }
    },
    [requestData.apiKey, requestData.productId]
  );

  useEffect(() => {
    if (selectedPlan) return;
    setSelectedPlan(requestData?.defaultPlanId ?? (productDetails?.data as any)?.plans[0].onchainReference);
  }, [requestData.defaultPlanId, productDetails?.data]);

  const subscribeToPlan = useCallback(async () => {
    if (!authenticated) {
      login();
      setTimeout(removePasskeyButton, 120);
    } else if (!isMfaEnabled) {
      showMfaEnrollmentModal();
    }

    console.log('subscribing to plan', selectedPlan);
  }, [authenticated, isMfaEnabled, login, selectedPlan, removePasskeyButton, showMfaEnrollmentModal]);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);

    if (authenticated) {
      logout();
    }
  }, [authenticated, logout]);

  const openSubscription = useCallback(
    ({ modal = 'subscription-modal', productId, defaultPlanId, apiKey }: IOpenModalArgs) => {
      setActiveModal(modal);
      setIsModalOpen(true);

      if (modal === 'subscription-modal') {
        setRequestData({
          apiKey: apiKey,
          productId: productId,
          defaultPlanId: defaultPlanId,
        });
        getProductDetails({ productId: productId, apiKey: apiKey });
      }
    },
    [getProductDetails]
  );

  const value = {
    ready,
    isMfaEnabled,
    authenticated,
    subscribeToPlan,
    selectedPlan,
    setSelectedPlan,
    defaultPlanId: requestData.defaultPlanId,
    activeModal,
    productDetails,
    closeModal,
    openSubscription,
    getProductDetails,
  };

  return (
    <SubscriptionContext.Provider value={value}>
      <>
        <Modal style={customStyles} isOpen={isModalOpen} onRequestClose={closeModal} bodyOpenClassName="modal-open">
          {activeModal === 'subscription-modal' ? <SubscriptionModal /> : null}
        </Modal>
        {children}
      </>
    </SubscriptionContext.Provider>
  );
};
