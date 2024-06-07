import React, { useState } from 'react';
import { BarLoader, ClipLoader } from 'react-spinners';
import { CaretDoubleRight, XCircle } from '@phosphor-icons/react';

import { useSuperSub } from '../../contexts';
import { ProductPlan } from '../ProductPlan';
import './SubscriptionModal.scss';

export type ISubscriptionPlan = {
  id: string;
  amount: string;
  interval: string;
  timeframe: 'days' | 'weeks' | 'months' | 'years';
};

export const SubscriptionModal = () => {
  const { productDetails, getProductDetails, subscribeToPlan } = useSuperSub();

  const [loading, _] = useState(false);

  return productDetails?.isLoading || productDetails?.error ? (
    <>
      <div className="empty-state">
        <div className="empty-state__content">
          <div
            style={{
              minHeight: '60px',
            }}
            className="empty-state__content--icons"
          >
            {productDetails?.isLoading ? (
              <>
                <BarLoader color={'#888'} aria-label="Loading Spinner" />
              </>
            ) : productDetails?.error ? (
              <XCircle size={60} weight="fill" color="#ff5c5c" />
            ) : null}
          </div>

          <p className="empty-state__text">
            {productDetails?.isLoading
              ? 'Fetching product details...'
              : productDetails?.error
                ? 'An error occurred while fetching product details'
                : ''}
          </p>

          {productDetails?.error && (
            <div
              className={`base-btn`}
              onClick={() => {
                getProductDetails({});
              }}
            >
              <p>Refetch</p>
            </div>
          )}
        </div>
      </div>
    </>
  ) : (
    <div className="base-modal product-preview">
      <div className="c-img-input">
        <div className="c-img-input__preview sm">
          <img alt="preview" src={productDetails?.data?.logoUrl} />
        </div>
      </div>

      <div className="base-modal__header">
        <div className="base-modal__header-block">
          <h2>{productDetails?.data?.name}</h2>
          <p
            style={{
              maxWidth: '300px',
            }}
          >
            {productDetails?.data?.description}
          </p>
        </div>
      </div>

      <div className="base-modal__body">
        <div className="product-plans">
          {productDetails?.data?.plans.map((plan: any, ind: number) => {
            return <ProductPlan key={ind} plan={plan} token={productDetails?.data?.token} />;
          })}
        </div>
      </div>

      <div
        className={`base-btn ${loading ? 'disabled' : ''}`}
        onClick={() => {
          subscribeToPlan();
        }}
      >
        <p>Subscribe to plan</p>

        {!loading && (
          <div className="base-btn__icon">
            <CaretDoubleRight size={15} weight="bold" />
          </div>
        )}

        {loading && (
          <div className="c-spinner">
            <ClipLoader size={16} color={'#000'} loading={loading} aria-label="Loading Spinner" />
          </div>
        )}
      </div>
    </div>
  );
};
