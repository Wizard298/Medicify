import React, { useState } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";

import Navbar from './components/html_part/Navbar';
import Home from './components/html_part/Home';
import Footer from './components/html_part/Footer';

import AddtoCart from './components/html_part/AddtoCart';
import CartPage from './components/html_part/CartPage';

import Login from './components/html_part/auth/Login';
import SignUp from './components/html_part/auth/SignUp';

import Medicine from './components/html_part/category/Medicine';
import Health from './components/html_part/category/Health';
import Covid from './components/html_part/category/Covid';
import Diabetes from './components/html_part/category/Diabetes';
import Fitness from './components/html_part/category/Fitness';
import CardiacCare from './components/html_part/category/CardiacCare';
import Ayurvedic from './components/html_part/category/Ayurvedic';
import Weight from './components/html_part/category/Weight';
import BoneJoint from './components/html_part/category/BoneJoint';
import Caring from './components/html_part/category/Caring';
import Lung from './components/html_part/category/Lung';

import AboutUs from './components/html_part/footer_comp/AboutUs';
import Services from './components/html_part/footer_comp/Services';
import Contact from './components/html_part/footer_comp/Contact';
import TandC from './components/html_part/footer_comp/TandC';
import Privacy from './components/html_part/footer_comp/Privacy';
import OurCartP from './components/html_part/footer_comp/OurCartP';
import MoreDetails from './components/html_part/footer_comp/MoreDetails';

import ScrollToTop from './components/html_part/ScrollToTop';
import Search from './components/html_part/Search';
import Cancel from './components/html_part/payment/Cancel';
import Success from './components/html_part/payment/Success';
import MyOrder from './components/html_part/MyOrder';
import Profile from './components/html_part/Profile';


function Main() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
    
    <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery}/>

    <ScrollToTop/>

        <Routes>
          <Route path="/" element={<SignUp/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path="/home" element={<Home/>} />
          
          <Route path="/health" element={<Health/>} />
          <Route path="/health/allmedicine" element={<Medicine/>} />
          <Route path="/health/covid" element={<Covid/>} />
          <Route path="/health/diabetes" element={<Diabetes/>} />
          <Route path="/health/fitness" element={<Fitness/>} />
          <Route path="/health/CardiacCare" element={<CardiacCare/>} />
          <Route path="/health/ayurvedic" element={<Ayurvedic/>} />
          <Route path="/health/weight" element={<Weight/>} />
          <Route path="/health/joint" element={<BoneJoint/>} />
          <Route path="/health/care" element={<Caring/>} />
          <Route path="/health/lung" element={<Lung/>} />

          <Route path="/cart" element={<CartPage/>} />
          <Route path="/addtocart/:id" element={<AddtoCart/>} />
          <Route path="/myOrder" element={<MyOrder/>} />
          
          <Route path="/home/about" element={<AboutUs/>} />
          <Route path="/home/services" element={<Services/>} />
          <Route path="/home/contact" element={<Contact/>} />
          <Route path="/home/terms" element={<TandC/>} />
          <Route path="/home/privacy" element={<Privacy/>} />
          <Route path="/home/cartPolicy" element={<OurCartP/>} />
          <Route path="/home/details" element={<MoreDetails/>} />

          <Route path="/home/search" element={<Search searchQuery={searchQuery} />} />

          {/* payment */}
          <Route path="/success" element={<Success/>} />
          <Route path="/cancel" element={<Cancel/>} />


        </Routes>
    
    <Footer/>

    </>
  );
}

export default Main;
