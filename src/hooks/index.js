import React from 'react';
import { CartProvider } from './useCart';
import { ModalProvider } from './useModal';

function AppProvider({ children }) {
  return (
    
      <CartProvider>
        <ModalProvider>
        { children }
        </ModalProvider>
        </CartProvider>

  );
}

export default AppProvider;