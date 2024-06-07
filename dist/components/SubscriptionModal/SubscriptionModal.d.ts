import React from 'react';
import './SubscriptionModal.scss';
export type ISubscriptionPlan = {
    id: string;
    amount: string;
    interval: string;
    timeframe: 'days' | 'weeks' | 'months' | 'years';
};
export declare const SubscriptionModal: () => React.JSX.Element;
