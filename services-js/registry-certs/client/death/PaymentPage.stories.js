// @flow

import React from 'react';
import { storiesOf } from '@storybook/react';
import { runInAction } from 'mobx';

import fullPageDecorator from '../../storybook/full-page-decorator';
import PaymentPage from './PaymentPage';

import {
  TYPICAL_CERTIFICATE,
  PENDING_CERTIFICATE,
  NO_DATE_CERTIFICATE,
} from '../../fixtures/client/death-certificates';

import Cart from '../store/Cart';

function makeCart(loading: boolean) {
  const cart = new Cart();

  if (loading) {
    runInAction(() => {
      cart.pendingFetches = 2;
      cart.items = ([
        {
          id: TYPICAL_CERTIFICATE.id,
          cert: null,
          quantity: 5,
        },
        {
          id: PENDING_CERTIFICATE.id,
          cert: null,
          quantity: 3,
        },
      ]: any);
    });
  } else {
    cart.add(TYPICAL_CERTIFICATE, 1);
    cart.add(PENDING_CERTIFICATE, 3);
    cart.add(NO_DATE_CERTIFICATE, 1);
  }

  return cart;
}

storiesOf('PaymentPage', module)
  .addDecorator(fullPageDecorator)
  .add('loading', () => <PaymentPage cart={makeCart(true)} />)
  .add('normal page', () => <PaymentPage cart={makeCart(false)} />);
