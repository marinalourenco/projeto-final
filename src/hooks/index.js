import React from 'react';
import { CartProvider } from './useCart';
import { ModalProvider } from './useModal';
import { AuthProvider } from './useAuth';

function AppProvider({ children }) {
  return (
      <AuthProvider>
      <CartProvider>
        <ModalProvider>
        { children }
        </ModalProvider>
        </CartProvider>
      </AuthProvider>

  );
}

export default AppProvider;