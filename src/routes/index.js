import React from 'react';
import { Routes, Route } from "react-router-dom";
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import NotFound from '../pages/NotFound';
import  Login  from '../pages/Login/Login'; 

function AppRoutes() {
  return (
      <Routes>
         <Route path="/login" index element={<Login />}/>
        <Route path="/" index element={<Home />}/>
        <Route path="/cart" element={<Cart />}/>
        <Route path="/profile" element={<Profile />}/>
        <Route path="/notfound" element={<NotFound />}/>
      </Routes>
  );
}

export default  AppRoutes;