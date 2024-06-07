/// <reference types="react" />
interface SupersubProviderProps {
    children: JSX.Element;
}
export declare const SuperSubProvider: ({ children }: SupersubProviderProps) => JSX.Element;
export declare const useSuperSub: () => import("./interfaces").IAcctContextValue;
export {};
