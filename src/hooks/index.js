import React from 'react';
import { CartProvider } from './useCart';
import { ModalProvider } from './useModal';

function AppProvider({ children }) {
  return (
    <ModalProvider>
      <CartProvider>
        { children }
        </CartProvider>
    </ModalProvider>
  );
}

export default AppProvider;