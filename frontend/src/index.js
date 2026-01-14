import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import HomePage from './landingPage/home/HomePage';
import Signup from './landingPage/signup/Signup';
import AboutPage from './landingPage/about/AboutPage';
import ProductPage from './landingPage/products/ProductPage';
import PricingPage from './landingPage/pricing/PricingPage';
import SupportPage from './landingPage/support/SupportPage';
import Navbar from './landingPage/Navbar';
import Footer from './landingPage/Footer';
import NotFound from './landingPage/NotFound';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Navbar />
  <Routes>
    <Route path="/" element={<HomePage/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/about" element={<AboutPage/>}></Route>
    <Route path="/products" element={<ProductPage/>}></Route>
    <Route path="/pricing" element={<PricingPage/>}></Route>
    <Route path="/support" element={<SupportPage/>}></Route>
    <Route path="*" element={<NotFound/>}></Route>
  </Routes>
  <Footer />
  </BrowserRouter>
);

