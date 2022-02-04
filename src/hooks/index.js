import React from 'react';
import { CartProvider } from './useCart';
import { ModalProvider } from './useModal';
import { AuthProvider } from './useAuth';
import { SearchProvider } from './useSearch';

function AppProvider({ children }) {
  return (
      <AuthProvider>
      <CartProvider>
        <ModalProvider>
          <SearchProvider>
        { children }
          </SearchProvider>
        </ModalProvider>
        </CartProvider>
      </AuthProvider>

  );
}

export default AppProvider;