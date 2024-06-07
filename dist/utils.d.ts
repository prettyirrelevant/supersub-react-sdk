import { ConnectedWallet } from '@privy-io/react-auth';
import { MultiOwnerModularAccount } from '@alchemy/aa-accounts';
import { WalletClientSigner } from '@alchemy/aa-core';
import { PluginClient } from './contracts';
type SuperSubSmartWallet = {
    smartAccountClient: any;
    pluginClient: PluginClient;
    account: MultiOwnerModularAccount<WalletClientSigner>;
};
declare const generateSuperSubSmartWallet: (privyEoa: ConnectedWallet) => Promise<SuperSubSmartWallet>;
export { generateSuperSubSmartWallet };
