import { createWalletClient, custom, getAddress } from 'viem';
import { ConnectedWallet } from '@privy-io/react-auth';
import { MultiOwnerModularAccount } from '@alchemy/aa-accounts';
import { WalletClientSigner, polygonAmoy } from '@alchemy/aa-core';
import { createModularAccountAlchemyClient } from '@alchemy/aa-alchemy';

import { PluginClient } from './contracts';
import { SS_ALCHEMY_API_KEY, SS_ACCOUNT_ABSTRATION_POLICY_ID } from './constants';

type SuperSubSmartWallet = {
  smartAccountClient: any;
  pluginClient: PluginClient;
  account: MultiOwnerModularAccount<WalletClientSigner>;
};

const generateSuperSubSmartWallet = async (privyEoa: ConnectedWallet): Promise<SuperSubSmartWallet> => {
  const privyProvider = await privyEoa.getEthereumProvider();
  const privyClient = createWalletClient({
    account: getAddress(privyEoa.address),
    transport: custom(privyProvider),
  });
  const privySigner = new WalletClientSigner(privyClient, 'json-rpc');

  const smartAccountClient = await createModularAccountAlchemyClient({
    chain: polygonAmoy,
    signer: privySigner,
    apiKey: SS_ALCHEMY_API_KEY,
    gasManagerConfig: {
      policyId: SS_ACCOUNT_ABSTRATION_POLICY_ID,
    },
  });

  const client = new PluginClient(smartAccountClient);

  return {
    smartAccountClient,
    pluginClient: client,
    account: smartAccountClient.account,
  };
};

export { generateSuperSubSmartWallet };
