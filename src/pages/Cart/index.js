import React from 'react';
import CartTable from '../../components/CartTable'
import ModalComplete from '../../components/ModalComplete';

function Cart() {
  return (
    <React.Fragment>
      <CartTable />
      <ModalComplete />
    </React.Fragment>
  );
}

export default Cart;