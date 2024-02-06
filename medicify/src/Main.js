import './App.css';
import { Routes, Route } from "react-router-dom";
// import React, { useState } from 'react';

import Navbar from './components/html_part/Navbar';
import Home from './components/html_part/Home';
import Cart from './components/html_part/Cart';
import Health from './components/html_part/Health';
import Login from './components/html_part/Login';
import Footer from './components/html_part/Footer';
import Covid from './components/html_part/Covid';
import Diabetes from './components/html_part/Diabetes';
import Fitness from './components/html_part/Fitness';
import CardiacCare from './components/html_part/CardiacCare';
import Ayurvedic from './components/html_part/Ayurvedic';
import SignUp from './components/html_part/SignUp';
import AddtoCart from './components/html_part/AddtoCart';
import AboutUs from './components/html_part/AboutUs';
import Services from './components/html_part/Services';
import Contact from './components/html_part/Contact';
import Weight from './components/html_part/Weight';
import BoneJoint from './components/html_part/BoneJoint';
import Caring from './components/html_part/Caring';
import Lung from './components/html_part/Lung';


function App() {

  return (
    <>
    
    <Navbar/>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/health" element={<Health/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<SignUp/>} />
          <Route path="/addtocart" element={<AddtoCart/>} />
          <Route path="/health/covid" element={<Covid/>} />
          <Route path="/health/diabetes" element={<Diabetes/>} />
          <Route path="/health/fitness" element={<Fitness/>} />
          <Route path="/health/CardiacCare" element={<CardiacCare/>} />
          <Route path="/health/ayurvedic" element={<Ayurvedic/>} />
          <Route path="/health/weight" element={<Weight/>} />
          <Route path="/health/joint" element={<BoneJoint/>} />
          <Route path="/health/care" element={<Caring/>} />
          <Route path="/health/lung" element={<Lung/>} />
          <Route path="/home/aboutus" element={<AboutUs/>} />
          <Route path="/home/services" element={<Services/>} />
          <Route path="/home/contact" element={<Contact/>} />
        </Routes>
    
    <Footer/>

    </>
  );
}

export default App;



// import { lazy, Suspense } from 'react';

// TO reduce the reload
// const Navbar = lazy(()=> import("./components/html_part/Navbar"))
// const Home = lazy(()=> import("./components/html_part/Home"))
// const Cart = lazy(()=> import("./components/html_part/Cart"))
// const Login = lazy(()=> import("./components/html_part/Login"))
// const Footer = lazy(()=> import("./components/html_part/Footer"))
// const Loader = lazy(()=> import("./components/html_part/Loader"))
// const Health = lazy(()=> import("./components/html_part/Health"))


// <Suspense fallback={<Loader/>}>
// </Suspense> 