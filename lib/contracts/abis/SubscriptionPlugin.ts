export const subscriptionPluginAbi = [
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'chainId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_bridge',
        type: 'address',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    inputs: [],
    name: 'AlreadyInitialized',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InvalidAction',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'caller',
        type: 'address',
      },
    ],
    name: 'NotContractCaller',
    type: 'error',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'selector',
        type: 'bytes4',
      },
      {
        internalType: 'uint8',
        name: 'functionId',
        type: 'uint8',
      },
    ],
    name: 'NotImplemented',
    type: 'error',
  },
  {
    inputs: [],
    name: 'NotInitialized',
    type: 'error',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'productId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'planId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'chargeInterval',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    name: 'PlanCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'planId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    name: 'PlanUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'productId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'provider',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bytes32',
        name: 'name',
        type: 'bytes32',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'description',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'string',
        name: 'logoUrl',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'enum SubscriptionPlugin.ProductType',
        name: 'productType',
        type: 'uint8',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'chargeToken',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receivingAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'destinationChain',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    name: 'ProductCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'productId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'receivingAddress',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'destinationChain',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    name: 'ProductUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'subscriber',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'provider',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'product',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'plan',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'subscriptionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endTime',
        type: 'uint256',
      },
    ],
    name: 'Subscribed',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'subscriber',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'address',
        name: 'recipient',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'subscriptionId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'planId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'productId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'timestamp',
        type: 'uint256',
      },
    ],
    name: 'SubscriptionCharged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'subscriber',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'endTime',
        type: 'uint256',
      },
    ],
    name: 'SubscriptionEndTimeUpdated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'subscriptionId',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'planId',
        type: 'uint256',
      },
    ],
    name: 'SubscriptionPlanChanged',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'user',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'subscriptionId',
        type: 'uint256',
      },
    ],
    name: 'UnSubscribed',
    type: 'event',
  },
  {
    inputs: [],
    name: 'AUTHOR',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'NAME',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'VERSION',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_chainId',
        type: 'uint256',
      },
      {
        internalType: 'uint64',
        name: '_selector',
        type: 'uint64',
      },
    ],
    name: 'addChainSelector',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'admin',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'ccipChainSelectors',
    outputs: [
      {
        internalType: 'uint64',
        name: '',
        type: 'uint64',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'subscriptionId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'endTime',
        type: 'uint256',
      },
    ],
    name: 'changeSubscriptionEndTime',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'changeSubscriptionPlan',
    outputs: [],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'subscriber',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'subscriptionId',
        type: 'uint256',
      },
    ],
    name: 'charge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_productId',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_chargeInterval',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'createPlan',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_name',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: '_description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_logoUrl',
        type: 'string',
      },
      {
        internalType: 'enum SubscriptionPlugin.ProductType',
        name: '_type',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: '_chargeToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_receivingAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_destinationChain',
        type: 'uint256',
      },
    ],
    name: 'createProduct',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_name',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: '_description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_logoUrl',
        type: 'string',
      },
      {
        internalType: 'enum SubscriptionPlugin.ProductType',
        name: '_type',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: '_chargeToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_receivingAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_destinationChain',
        type: 'uint256',
      },
      {
        components: [
          {
            internalType: 'uint256',
            name: 'price',
            type: 'uint256',
          },
          {
            internalType: 'uint32',
            name: 'chargeInterval',
            type: 'uint32',
          },
        ],
        internalType: 'struct SubscriptionPlugin.InitPlanParam[]',
        name: '_plans',
        type: 'tuple[]',
      },
    ],
    name: 'createProductWithPlans',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes32',
        name: '_name',
        type: 'bytes32',
      },
      {
        internalType: 'string',
        name: '_description',
        type: 'string',
      },
      {
        internalType: 'string',
        name: '_logoUrl',
        type: 'string',
      },
      {
        internalType: 'address',
        name: '_chargeToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '_receivingAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_destinationChain',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: '_chargeInterval',
        type: 'uint32',
      },
      {
        internalType: 'uint256',
        name: '_endTime',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '_price',
        type: 'uint256',
      },
    ],
    name: 'createRecurringPayment',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'currentChainId',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getManifestHash',
    outputs: [
      {
        internalType: 'bytes32',
        name: '',
        type: 'bytes32',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onInstall',
    outputs: [],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onUninstall',
    outputs: [],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
      {
        internalType: 'uint8',
        name: 'functionId',
        type: 'uint8',
      },
    ],
    name: 'pack',
    outputs: [
      {
        internalType: 'FunctionReference',
        name: '',
        type: 'bytes21',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'planNonce',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'plans',
    outputs: [
      {
        internalType: 'uint256',
        name: 'productId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'planId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'provider',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'price',
        type: 'uint256',
      },
      {
        internalType: 'uint32',
        name: 'chargeInterval',
        type: 'uint32',
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pluginManifest',
    outputs: [
      {
        components: [
          {
            internalType: 'bytes4[]',
            name: 'interfaceIds',
            type: 'bytes4[]',
          },
          {
            internalType: 'bytes4[]',
            name: 'dependencyInterfaceIds',
            type: 'bytes4[]',
          },
          {
            internalType: 'bytes4[]',
            name: 'executionFunctions',
            type: 'bytes4[]',
          },
          {
            internalType: 'bytes4[]',
            name: 'permittedExecutionSelectors',
            type: 'bytes4[]',
          },
          {
            internalType: 'bool',
            name: 'permitAnyExternalAddress',
            type: 'bool',
          },
          {
            internalType: 'bool',
            name: 'canSpendNativeToken',
            type: 'bool',
          },
          {
            components: [
              {
                internalType: 'address',
                name: 'externalAddress',
                type: 'address',
              },
              {
                internalType: 'bool',
                name: 'permitAnySelector',
                type: 'bool',
              },
              {
                internalType: 'bytes4[]',
                name: 'selectors',
                type: 'bytes4[]',
              },
            ],
            internalType: 'struct ManifestExternalCallPermission[]',
            name: 'permittedExternalCalls',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'bytes4',
                name: 'executionSelector',
                type: 'bytes4',
              },
              {
                components: [
                  {
                    internalType: 'enum ManifestAssociatedFunctionType',
                    name: 'functionType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint8',
                    name: 'functionId',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint256',
                    name: 'dependencyIndex',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ManifestFunction',
                name: 'associatedFunction',
                type: 'tuple',
              },
            ],
            internalType: 'struct ManifestAssociatedFunction[]',
            name: 'userOpValidationFunctions',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'bytes4',
                name: 'executionSelector',
                type: 'bytes4',
              },
              {
                components: [
                  {
                    internalType: 'enum ManifestAssociatedFunctionType',
                    name: 'functionType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint8',
                    name: 'functionId',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint256',
                    name: 'dependencyIndex',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ManifestFunction',
                name: 'associatedFunction',
                type: 'tuple',
              },
            ],
            internalType: 'struct ManifestAssociatedFunction[]',
            name: 'runtimeValidationFunctions',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'bytes4',
                name: 'executionSelector',
                type: 'bytes4',
              },
              {
                components: [
                  {
                    internalType: 'enum ManifestAssociatedFunctionType',
                    name: 'functionType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint8',
                    name: 'functionId',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint256',
                    name: 'dependencyIndex',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ManifestFunction',
                name: 'associatedFunction',
                type: 'tuple',
              },
            ],
            internalType: 'struct ManifestAssociatedFunction[]',
            name: 'preUserOpValidationHooks',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'bytes4',
                name: 'executionSelector',
                type: 'bytes4',
              },
              {
                components: [
                  {
                    internalType: 'enum ManifestAssociatedFunctionType',
                    name: 'functionType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint8',
                    name: 'functionId',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint256',
                    name: 'dependencyIndex',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ManifestFunction',
                name: 'associatedFunction',
                type: 'tuple',
              },
            ],
            internalType: 'struct ManifestAssociatedFunction[]',
            name: 'preRuntimeValidationHooks',
            type: 'tuple[]',
          },
          {
            components: [
              {
                internalType: 'bytes4',
                name: 'executionSelector',
                type: 'bytes4',
              },
              {
                components: [
                  {
                    internalType: 'enum ManifestAssociatedFunctionType',
                    name: 'functionType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint8',
                    name: 'functionId',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint256',
                    name: 'dependencyIndex',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ManifestFunction',
                name: 'preExecHook',
                type: 'tuple',
              },
              {
                components: [
                  {
                    internalType: 'enum ManifestAssociatedFunctionType',
                    name: 'functionType',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint8',
                    name: 'functionId',
                    type: 'uint8',
                  },
                  {
                    internalType: 'uint256',
                    name: 'dependencyIndex',
                    type: 'uint256',
                  },
                ],
                internalType: 'struct ManifestFunction',
                name: 'postExecHook',
                type: 'tuple',
              },
            ],
            internalType: 'struct ManifestExecutionHook[]',
            name: 'executionHooks',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct PluginManifest',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pluginMetadata',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'name',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'version',
            type: 'string',
          },
          {
            internalType: 'string',
            name: 'author',
            type: 'string',
          },
          {
            components: [
              {
                internalType: 'bytes4',
                name: 'functionSelector',
                type: 'bytes4',
              },
              {
                internalType: 'string',
                name: 'permissionDescription',
                type: 'string',
              },
            ],
            internalType: 'struct SelectorPermission[]',
            name: 'permissionDescriptors',
            type: 'tuple[]',
          },
        ],
        internalType: 'struct PluginMetadata',
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'functionId',
        type: 'uint8',
      },
      {
        internalType: 'bytes',
        name: 'preExecHookData',
        type: 'bytes',
      },
    ],
    name: 'postExecutionHook',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'functionId',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'preExecutionHook',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'functionId',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'preRuntimeValidationHook',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'functionId',
        type: 'uint8',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'initCode',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'callGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'verificationGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'preVerificationGas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxFeePerGas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxPriorityFeePerGas',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'paymasterAndData',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
        ],
        internalType: 'struct UserOperation',
        name: 'userOp',
        type: 'tuple',
      },
      {
        internalType: 'bytes32',
        name: 'userOpHash',
        type: 'bytes32',
      },
    ],
    name: 'preUserOpValidationHook',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'productNonce',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'products',
    outputs: [
      {
        internalType: 'uint256',
        name: 'productId',
        type: 'uint256',
      },
      {
        internalType: 'enum SubscriptionPlugin.ProductType',
        name: 'productType',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'provider',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'chargeToken',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'receivingAddress',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'destinationChain',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'functionId',
        type: 'uint8',
      },
      {
        internalType: 'address',
        name: 'sender',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'runtimeValidationFunction',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '_bridgeAddr',
        type: 'address',
      },
    ],
    name: 'setTokenBridge',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'planId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'endTime',
        type: 'uint256',
      },
    ],
    name: 'subscribe',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'subscribedToProduct',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'subscriptionNonces',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenBridge',
    outputs: [
      {
        internalType: 'contract ITokenBridge',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'subscriptionId',
        type: 'uint256',
      },
    ],
    name: 'unSubscribe',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_planId',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isActive',
        type: 'bool',
      },
    ],
    name: 'updatePlan',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '_productId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: '_receivingAddr',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '_destChain',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: '_isActive',
        type: 'bool',
      },
    ],
    name: 'updateProduct',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint8',
        name: 'functionId',
        type: 'uint8',
      },
      {
        components: [
          {
            internalType: 'address',
            name: 'sender',
            type: 'address',
          },
          {
            internalType: 'uint256',
            name: 'nonce',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'initCode',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'callData',
            type: 'bytes',
          },
          {
            internalType: 'uint256',
            name: 'callGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'verificationGasLimit',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'preVerificationGas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxFeePerGas',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'maxPriorityFeePerGas',
            type: 'uint256',
          },
          {
            internalType: 'bytes',
            name: 'paymasterAndData',
            type: 'bytes',
          },
          {
            internalType: 'bytes',
            name: 'signature',
            type: 'bytes',
          },
        ],
        internalType: 'struct UserOperation',
        name: 'userOp',
        type: 'tuple',
      },
      {
        internalType: 'bytes32',
        name: 'userOpHash',
        type: 'bytes32',
      },
    ],
    name: 'userOpValidationFunction',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'userSubscriptions',
    outputs: [
      {
        internalType: 'uint256',
        name: 'subscriptionId',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'product',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'provider',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'plan',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'lastChargeDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'endTime',
        type: 'uint256',
      },
      {
        internalType: 'bool',
        name: 'isActive',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
] as const;
