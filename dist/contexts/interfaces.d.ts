export interface IRequestData {
    apiKey: string;
    productId?: number;
    defaultPlanId?: number;
}
export interface IProductDetails {
    data: any;
    error: boolean;
    isLoading: boolean;
}
export interface IGetProductArgs {
    apiKey?: string;
    productId?: number;
}
export type IModals = 'subscription-modal';
export interface IOpenModalArgs {
    modal?: IModals;
    productId?: number;
    apiKey?: string;
    defaultPlanId?: number;
}
export interface IAcctContextValue {
    ready: boolean;
    isMfaEnabled: boolean;
    authenticated: boolean;
    isSmartAccountReady: boolean;
    smartAddress: string | undefined;
    subscribeToPlan: () => void;
    defaultPlanId: number | undefined;
    selectedPlan: number | undefined;
    setSelectedPlan: (selectedPlan: number) => void;
    activeModal: string;
    closeModal: () => void;
    productDetails: {
        data: any;
        error: boolean;
        isLoading: boolean;
    };
    openSubscription: ({ modal, productId, apiKey }: IOpenModalArgs) => void;
    getProductDetails: ({ productId, apiKey }: IGetProductArgs) => void;
}
