import { Toaster } from 'sonner';
import React, { useContext } from 'react';
import { PrivyProvider } from '@privy-io/react-auth';
import { Info, XCircle, CheckCircle, WarningCircle } from '@phosphor-icons/react';

import { SS_PRIVY_APP_ID } from '../constants';
import { SubscriptionContext, SubscriptionProvider } from './SubscriptionContext';

interface SupersubProviderProps {
  children: JSX.Element;
}

export const SuperSubProvider = ({ children }: SupersubProviderProps): JSX.Element => {
  return (
    <>
      <PrivyProvider
        appId={`${SS_PRIVY_APP_ID}`}
        config={{
          mfa: {
            noPromptOnMfaRequired: false,
          },
          appearance: {
            theme: 'dark',
            logo: `https://res.cloudinary.com/alphaglitch/image/upload/v1717428083/dnyj76cptuilpvw7o8mt.png`,
          },
          loginMethods: ['email'],
          embeddedWallets: {
            createOnLogin: 'users-without-wallets',
          },
        }}
      >
        <SubscriptionProvider>
          {children}

          <Toaster
            theme="dark"
            position="top-center"
            className="toast-block"
            icons={{
              info: <Info size={16} weight="fill" color="#eba267" />,
              error: <XCircle size={16} weight="fill" color="#ff5c5c" />,
              success: <CheckCircle size={18} weight="fill" color="#16f19d" />,
              warning: <WarningCircle size={16} weight="fill" color="#eba267" />,
            }}
          />
        </SubscriptionProvider>
      </PrivyProvider>
    </>
  );
};

export const useSuperSub = () => {
  const value = useContext(SubscriptionContext);
  if (!value) {
    throw new Error('useSuperSub must be wrapped in a <SuperSubProvider />');
  }

  return value;
};
