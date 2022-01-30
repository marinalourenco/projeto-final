import React from 'react';
import { CartProvider } from './useCart';

function AppProvider({ children }) {
  return (
  <CartProvider>{ children }</CartProvider>
  );
}

export default AppProvider;