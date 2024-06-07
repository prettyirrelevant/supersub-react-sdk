export declare const subscriptionTokenBridgeAbi: readonly [{
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_router";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_link";
        readonly type: "address";
    }, {
        readonly internalType: "uint64[]";
        readonly name: "_supportedDestinationChains";
        readonly type: "uint64[]";
    }];
    readonly stateMutability: "nonpayable";
    readonly type: "constructor";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferRequested";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "from";
        readonly type: "address";
    }, {
        readonly indexed: true;
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }];
    readonly name: "OwnershipTransferred";
    readonly type: "event";
}, {
    readonly anonymous: false;
    readonly inputs: readonly [{
        readonly indexed: true;
        readonly internalType: "bytes32";
        readonly name: "messageId";
        readonly type: "bytes32";
    }, {
        readonly indexed: true;
        readonly internalType: "uint64";
        readonly name: "destinationChainSelector";
        readonly type: "uint64";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "receipient";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "token";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "address";
        readonly name: "feeToken";
        readonly type: "address";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "amount";
        readonly type: "uint256";
    }, {
        readonly indexed: false;
        readonly internalType: "uint256";
        readonly name: "fees";
        readonly type: "uint256";
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
    readonly name: "TokenTransferred";
    readonly type: "event";
}, {
    readonly inputs: readonly [];
    readonly name: "acceptOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "_chainSelector";
        readonly type: "uint64";
    }];
    readonly name: "addDestinationChainSupport";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "";
        readonly type: "uint64";
    }];
    readonly name: "allowedDestinationChains";
    readonly outputs: readonly [{
        readonly internalType: "bool";
        readonly name: "";
        readonly type: "bool";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [];
    readonly name: "owner";
    readonly outputs: readonly [{
        readonly internalType: "address";
        readonly name: "";
        readonly type: "address";
    }];
    readonly stateMutability: "view";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "to";
        readonly type: "address";
    }];
    readonly name: "transferOwnership";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "_chainSelector";
        readonly type: "uint64";
    }, {
        readonly internalType: "address";
        readonly name: "_receiver";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_subId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_planId";
        readonly type: "uint256";
    }];
    readonly name: "transferToken";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "uint64";
        readonly name: "_chainSelector";
        readonly type: "uint64";
    }, {
        readonly internalType: "address";
        readonly name: "_receiver";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_token";
        readonly type: "address";
    }, {
        readonly internalType: "uint256";
        readonly name: "_amount";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_subId";
        readonly type: "uint256";
    }, {
        readonly internalType: "uint256";
        readonly name: "_planId";
        readonly type: "uint256";
    }];
    readonly name: "transferTokenPayNative";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_beneficiary";
        readonly type: "address";
    }];
    readonly name: "withdrawNative";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly inputs: readonly [{
        readonly internalType: "address";
        readonly name: "_beneficiary";
        readonly type: "address";
    }, {
        readonly internalType: "address";
        readonly name: "_token";
        readonly type: "address";
    }];
    readonly name: "withdrawToken";
    readonly outputs: readonly [];
    readonly stateMutability: "nonpayable";
    readonly type: "function";
}, {
    readonly stateMutability: "payable";
    readonly type: "receive";
}];
