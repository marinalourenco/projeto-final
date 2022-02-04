import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';

function AppRoutes() {
  return (
      <Routes>
        <Route path="/" index element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/notfound" element={<NotFound />}/>
        <Route path="/*" element={<NotFound/>} />
      </Routes>
  );
}

export default  AppRoutes;