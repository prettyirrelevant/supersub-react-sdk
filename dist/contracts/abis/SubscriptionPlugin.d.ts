export declare const subscriptionPluginAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "chainId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_bridge";
        readonly type: "address";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly inputs: readonly [];
    readonly name: "AlreadyInitialized";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "InvalidAction";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "caller";
        readonly type: "address";
    }];
    readonly name: "NotContractCaller";
    readonly type: "error";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "selector";
        readonly type: "bytes4";
    }, {
        readonly internalType: "uint8";
        readonly name: "functionId";
        readonly type: "uint8";
    }];
    readonly name: "NotImplemented";
    readonly type: "error";
}, {
    readonly inputs: readonly [];
    readonly name: "NotInitialized";
    readonly type: "error";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "productId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "planId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "price";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "chargeInterval";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "isActive";
        readonly type: "bool";
    }];
    readonly name: "PlanCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "planId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "isActive";
        readonly type: "bool";
    }];
    readonly name: "PlanUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "productId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "bytes32";
        readonly name: "name";
        readonly type: "bytes32";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "description";
        readonly type: "string";
    }, {
        readonly indexed: false;
        readonly internalType: "string";
        readonly name: "logoUrl";
        readonly type: "string";
    }, {
        readonly indexed: false;
        readonly internalType: "enum SubscriptionPlugin.ProductType";
        readonly name: "productType";
        readonly type: "uint8";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "chargeToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "receivingAddress";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "destinationChain";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "isActive";
        readonly type: "bool";
    }];
    readonly name: "ProductCreated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "productId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "receivingAddress";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "destinationChain";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "bool";
        readonly name: "isActive";
        readonly type: "bool";
    }];
    readonly name: "ProductUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "subscriber";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "product";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "plan";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "subscriptionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "endTime";
        readonly type: "uint256";
    }];
    readonly name: "Subscribed";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "subscriber";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "recipient";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "subscriptionId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "planId";
        readonly type: "uint256";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "productId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "timestamp";
        readonly type: "uint256";
    }];
    readonly name: "SubscriptionCharged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "subscriber";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "uint256";
        readonly name: "id";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "endTime";
        readonly type: "uint256";
    }];
    readonly name: "SubscriptionEndTimeUpdated";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "subscriptionId";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "planId";
        readonly type: "uint256";
    }];
    readonly name: "SubscriptionPlanChanged";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "user";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "subscriptionId";
        readonly type: "uint256";
    }];
    readonly name: "UnSubscribed";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "AUTHOR";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "NAME";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "VERSION";
    readonly outputs: readonly [{
        readonly internalType: "string";
        readonly name: "";
        readonly type: "string";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_chainId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint64";
        readonly name: "_selector";
        readonly type: "uint64";
    }];
    readonly name: "addChainSelector";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "admin";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "ccipChainSelectors";
    readonly outputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "subscriptionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "endTime";
        readonly type: "uint256";
    }];
    readonly name: "changeSubscriptionEndTime";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "changeSubscriptionPlan";
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "subscriber";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "subscriptionId";
        readonly type: "uint256";
    }];
    readonly name: "charge";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_productId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint32";
        readonly name: "_chargeInterval";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint256";
        readonly name: "_price";
        readonly type: "uint256";
    }];
    readonly name: "createPlan";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_name";
        readonly type: "bytes32";
    }, {
        readonly internalType: "string";
        readonly name: "_description";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "_logoUrl";
        readonly type: "string";
    }, {
        readonly internalType: "enum SubscriptionPlugin.ProductType";
        readonly name: "_type";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "_chargeToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_receivingAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_destinationChain";
        readonly type: "uint256";
    }];
    readonly name: "createProduct";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_name";
        readonly type: "bytes32";
    }, {
        readonly internalType: "string";
        readonly name: "_description";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "_logoUrl";
        readonly type: "string";
    }, {
        readonly internalType: "enum SubscriptionPlugin.ProductType";
        readonly name: "_type";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "_chargeToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_receivingAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_destinationChain";
        readonly type: "uint256";
    }, {
        readonly components: readonly [{
            readonly internalType: "uint256";
            readonly name: "price";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint32";
            readonly name: "chargeInterval";
            readonly type: "uint32";
        }];
        readonly internalType: "struct SubscriptionPlugin.InitPlanParam[]";
        readonly name: "_plans";
        readonly type: "tuple[]";
    }];
    readonly name: "createProductWithPlans";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "_name";
        readonly type: "bytes32";
    }, {
        readonly internalType: "string";
        readonly name: "_description";
        readonly type: "string";
    }, {
        readonly internalType: "string";
        readonly name: "_logoUrl";
        readonly type: "string";
    }, {
        readonly internalType: "address";
        readonly name: "_chargeToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_receivingAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_destinationChain";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint32";
        readonly name: "_chargeInterval";
        readonly type: "uint32";
    }, {
        readonly internalType: "uint256";
        readonly name: "_endTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_price";
        readonly type: "uint256";
    }];
    readonly name: "createRecurringPayment";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "currentChainId";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "getManifestHash";
    readonly outputs: readonly [{
        readonly internalType: "bytes32";
        readonly name: "";
        readonly type: "bytes32";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly name: "onInstall";
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly name: "onUninstall";
    readonly outputs: readonly [];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "addr";
        readonly type: "address";
    }, {
        readonly internalType: "uint8";
        readonly name: "functionId";
        readonly type: "uint8";
    }];
    readonly name: "pack";
    readonly outputs: readonly [{
        readonly internalType: "FunctionReference";
        readonly name: "";
        readonly type: "bytes21";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "planNonce";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "plans";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "productId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "planId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "price";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint32";
        readonly name: "chargeInterval";
        readonly type: "uint32";
    }, {
        readonly internalType: "bool";
        readonly name: "isActive";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pluginManifest";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "bytes4[]";
            readonly name: "interfaceIds";
            readonly type: "bytes4[]";
        }, {
            readonly internalType: "bytes4[]";
            readonly name: "dependencyInterfaceIds";
            readonly type: "bytes4[]";
        }, {
            readonly internalType: "bytes4[]";
            readonly name: "executionFunctions";
            readonly type: "bytes4[]";
        }, {
            readonly internalType: "bytes4[]";
            readonly name: "permittedExecutionSelectors";
            readonly type: "bytes4[]";
        }, {
            readonly internalType: "bool";
            readonly name: "permitAnyExternalAddress";
            readonly type: "bool";
        }, {
            readonly internalType: "bool";
            readonly name: "canSpendNativeToken";
            readonly type: "bool";
        }, {
            readonly components: readonly [{
                readonly internalType: "address";
                readonly name: "externalAddress";
                readonly type: "address";
            }, {
                readonly internalType: "bool";
                readonly name: "permitAnySelector";
                readonly type: "bool";
            }, {
                readonly internalType: "bytes4[]";
                readonly name: "selectors";
                readonly type: "bytes4[]";
            }];
            readonly internalType: "struct ManifestExternalCallPermission[]";
            readonly name: "permittedExternalCalls";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes4";
                readonly name: "executionSelector";
                readonly type: "bytes4";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum ManifestAssociatedFunctionType";
                    readonly name: "functionType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "functionId";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "dependencyIndex";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ManifestFunction";
                readonly name: "associatedFunction";
                readonly type: "tuple";
            }];
            readonly internalType: "struct ManifestAssociatedFunction[]";
            readonly name: "userOpValidationFunctions";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes4";
                readonly name: "executionSelector";
                readonly type: "bytes4";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum ManifestAssociatedFunctionType";
                    readonly name: "functionType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "functionId";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "dependencyIndex";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ManifestFunction";
                readonly name: "associatedFunction";
                readonly type: "tuple";
            }];
            readonly internalType: "struct ManifestAssociatedFunction[]";
            readonly name: "runtimeValidationFunctions";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes4";
                readonly name: "executionSelector";
                readonly type: "bytes4";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum ManifestAssociatedFunctionType";
                    readonly name: "functionType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "functionId";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "dependencyIndex";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ManifestFunction";
                readonly name: "associatedFunction";
                readonly type: "tuple";
            }];
            readonly internalType: "struct ManifestAssociatedFunction[]";
            readonly name: "preUserOpValidationHooks";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes4";
                readonly name: "executionSelector";
                readonly type: "bytes4";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum ManifestAssociatedFunctionType";
                    readonly name: "functionType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "functionId";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "dependencyIndex";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ManifestFunction";
                readonly name: "associatedFunction";
                readonly type: "tuple";
            }];
            readonly internalType: "struct ManifestAssociatedFunction[]";
            readonly name: "preRuntimeValidationHooks";
            readonly type: "tuple[]";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes4";
                readonly name: "executionSelector";
                readonly type: "bytes4";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum ManifestAssociatedFunctionType";
                    readonly name: "functionType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "functionId";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "dependencyIndex";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ManifestFunction";
                readonly name: "preExecHook";
                readonly type: "tuple";
            }, {
                readonly components: readonly [{
                    readonly internalType: "enum ManifestAssociatedFunctionType";
                    readonly name: "functionType";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint8";
                    readonly name: "functionId";
                    readonly type: "uint8";
                }, {
                    readonly internalType: "uint256";
                    readonly name: "dependencyIndex";
                    readonly type: "uint256";
                }];
                readonly internalType: "struct ManifestFunction";
                readonly name: "postExecHook";
                readonly type: "tuple";
            }];
            readonly internalType: "struct ManifestExecutionHook[]";
            readonly name: "executionHooks";
            readonly type: "tuple[]";
        }];
        readonly internalType: "struct PluginManifest";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "pluginMetadata";
    readonly outputs: readonly [{
        readonly components: readonly [{
            readonly internalType: "string";
            readonly name: "name";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "version";
            readonly type: "string";
        }, {
            readonly internalType: "string";
            readonly name: "author";
            readonly type: "string";
        }, {
            readonly components: readonly [{
                readonly internalType: "bytes4";
                readonly name: "functionSelector";
                readonly type: "bytes4";
            }, {
                readonly internalType: "string";
                readonly name: "permissionDescription";
                readonly type: "string";
            }];
            readonly internalType: "struct SelectorPermission[]";
            readonly name: "permissionDescriptors";
            readonly type: "tuple[]";
        }];
        readonly internalType: "struct PluginMetadata";
        readonly name: "";
        readonly type: "tuple";
    }];
    readonly stateMutability: "pure";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "functionId";
        readonly type: "uint8";
    }, {
        readonly internalType: "bytes";
        readonly name: "preExecHookData";
        readonly type: "bytes";
    }];
    readonly name: "postExecutionHook";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "functionId";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "preExecutionHook";
    readonly outputs: readonly [{
        readonly internalType: "bytes";
        readonly name: "";
        readonly type: "bytes";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "functionId";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "preRuntimeValidationHook";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "functionId";
        readonly type: "uint8";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "callGasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "verificationGasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "preVerificationGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxFeePerGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPriorityFeePerGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "paymasterAndData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly internalType: "struct UserOperation";
        readonly name: "userOp";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes32";
        readonly name: "userOpHash";
        readonly type: "bytes32";
    }];
    readonly name: "preUserOpValidationHook";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "productNonce";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "products";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "productId";
        readonly type: "uint256";
    }, {
        readonly internalType: "enum SubscriptionPlugin.ProductType";
        readonly name: "productType";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "chargeToken";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "receivingAddress";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "destinationChain";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "isActive";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "functionId";
        readonly type: "uint8";
    }, {
        readonly internalType: "address";
        readonly name: "sender";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "value";
        readonly type: "uint256";
    }, {
        readonly internalType: "bytes";
        readonly name: "data";
        readonly type: "bytes";
    }];
    readonly name: "runtimeValidationFunction";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_bridgeAddr";
        readonly type: "address";
    }];
    readonly name: "setTokenBridge";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "planId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "endTime";
        readonly type: "uint256";
    }];
    readonly name: "subscribe";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "subscribedToProduct";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly name: "subscriptionNonces";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "bytes4";
        readonly name: "interfaceId";
        readonly type: "bytes4";
    }];
    readonly name: "supportsInterface";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "tokenBridge";
    readonly outputs: readonly [{
        readonly internalType: "contract ITokenBridge";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "subscriptionId";
        readonly type: "uint256";
    }];
    readonly name: "unSubscribe";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_planId";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "_isActive";
        readonly type: "bool";
    }];
    readonly name: "updatePlan";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "_productId";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "_receivingAddr";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_destChain";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "_isActive";
        readonly type: "bool";
    }];
    readonly name: "updateProduct";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint8";
        readonly name: "functionId";
        readonly type: "uint8";
    }, {
        readonly components: readonly [{
            readonly internalType: "address";
            readonly name: "sender";
            readonly type: "address";
        }, {
            readonly internalType: "uint256";
            readonly name: "nonce";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "initCode";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "callData";
            readonly type: "bytes";
        }, {
            readonly internalType: "uint256";
            readonly name: "callGasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "verificationGasLimit";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "preVerificationGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxFeePerGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "uint256";
            readonly name: "maxPriorityFeePerGas";
            readonly type: "uint256";
        }, {
            readonly internalType: "bytes";
            readonly name: "paymasterAndData";
            readonly type: "bytes";
        }, {
            readonly internalType: "bytes";
            readonly name: "signature";
            readonly type: "bytes";
        }];
        readonly internalType: "struct UserOperation";
        readonly name: "userOp";
        readonly type: "tuple";
    }, {
        readonly internalType: "bytes32";
        readonly name: "userOpHash";
        readonly type: "bytes32";
    }];
    readonly name: "userOpValidationFunction";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "";
        readonly type: "uint256";
    }];
    readonly name: "userSubscriptions";
    readonly outputs: readonly [{
        readonly internalType: "uint256";
        readonly name: "subscriptionId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "product";
        readonly type: "uint256";
    }, {
        readonly internalType: "address";
        readonly name: "provider";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "plan";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "lastChargeDate";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "endTime";
        readonly type: "uint256";
    }, {
        readonly internalType: "bool";
        readonly name: "isActive";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}];
