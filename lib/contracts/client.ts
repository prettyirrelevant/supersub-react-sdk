import { UserOperationCallData, BatchUserOperationCallData, SmartContractAccount } from '@alchemy/aa-core';
import { getContract, createPublicClient, http, GetContractReturnType, getAddress, encodeFunctionData } from 'viem';
import { accountLoupeActions, pluginManagerActions } from '@alchemy/aa-accounts';
import { AlchemySmartAccountClient } from '@alchemy/aa-alchemy';
import { polygonAmoy } from 'viem/chains';

import { subscriptionTokenBridgeAbi } from './abis/SubscriptionTokenBridge';
import { subscriptionPluginAbi } from './abis/SubscriptionPlugin';
import { CcipBridgeAddress, SubscriptionPluginAddress } from './constants';

const publicClient = createPublicClient({
  chain: polygonAmoy,
  transport: http(),
});

export class PluginClient {
  pluginAddress: `0x${string}`;
  smartAccountClient: AlchemySmartAccountClient;
  pluginContract: GetContractReturnType<typeof subscriptionPluginAbi, typeof publicClient>;
  bridgeContract: GetContractReturnType<typeof subscriptionTokenBridgeAbi, typeof publicClient>;

  constructor(client: AlchemySmartAccountClient) {
    this.pluginAddress = SubscriptionPluginAddress;
    this.pluginContract = getContract({
      address: SubscriptionPluginAddress,
      abi: subscriptionPluginAbi,
      client: publicClient,
    });
    this.bridgeContract = getContract({
      address: CcipBridgeAddress,
      abi: subscriptionTokenBridgeAbi,
      client: publicClient,
    });
    this.smartAccountClient = client;
  }

  async getInstalledPluginsForSmartAccount() {
    const accountLoupeActionsExtendedClient = this.smartAccountClient.extend(accountLoupeActions);
    return await accountLoupeActionsExtendedClient.getInstalledPlugins({
      account: this.smartAccountClient.account as SmartContractAccount,
    });
  }

  async isPluginInstalled() {
    const installedPlugins = await this.getInstalledPluginsForSmartAccount();
    if (installedPlugins.map((addr) => addr.toLowerCase()).includes(this.pluginAddress.toLowerCase())) {
      return true;
    }
    return false;
  }

  async installPlugin() {
    const pluginDependency0 = await this.pluginContract.read.pack([
      getAddress('0xcE0000007B008F50d762D155002600004cD6c647'),
      0,
    ]);
    const pluginDependency1 = await this.pluginContract.read.pack([
      getAddress('0xcE0000007B008F50d762D155002600004cD6c647'),
      1,
    ]);

    const accountLoupeActionsExtendedClient = this.smartAccountClient.extend(pluginManagerActions);
    await accountLoupeActionsExtendedClient.installPlugin({
      pluginAddress: this.pluginAddress,
      dependencies: [pluginDependency0, pluginDependency1],
      account: this.smartAccountClient.account as SmartContractAccount,
    });
  }

  async execute(param: UserOperationCallData | BatchUserOperationCallData) {
    const userOp = await this.smartAccountClient.sendUserOperation({
      uo: param,
      account: this.smartAccountClient.account as SmartContractAccount,
    });
    const hash = await this.smartAccountClient.waitForUserOperationTransaction({
      hash: userOp.hash,
    });
    return hash;
  }

  async subscribe(planId: number, endTime: number) {
    if (!(await this.isPluginInstalled())) {
      await this.installPlugin();
    }

    const param = encodeFunctionData({
      abi: subscriptionPluginAbi,
      functionName: 'subscribe',
      args: [BigInt(planId), BigInt(endTime)],
    });

    return await this.execute(param);
  }
}

export default PluginClient;
