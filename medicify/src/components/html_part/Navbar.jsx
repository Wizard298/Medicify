import React, { useState } from 'react';
import '../css_part/NavbarStyle.css'
import { Link, useLocation } from 'react-router-dom';
import image from '../images/navbar-icon.png'

const Navbar =()=> {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(getActiveButton(location.pathname));

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  // Helper function to determine the active button based on the current route
  function getActiveButton(pathname) {
    if (pathname === '/') {
      return 'home';
    } else if (pathname.startsWith('/health')) {
      return 'health';
    } else if (pathname === '/signup') {
      return 'login';
    }
    // Add more conditions for other routes if needed
    return '';
  }

  return (
    <>
    
    <header className='head'>

        <div className="main-nav">
            <div className="navbar">
                <div className="main-head">
                    <img className='nav-icon' src={image} alt="Error" />
                    <Link className="main-anchor" to="/home">Medicify</Link>
                </div>
                <div className="main-search">
                    <input type="search" className="main-search-bar" placeholder="Search for medicine & wellness products" aria-label="Search"/>
                </div>
            </div>


            <div className="nav2">

                <div className="medicine">
                    {/* <Link className="access" to="/"><button className='medicine-btn'>Home</button></Link> */}
                    <Link  onClick={() => handleButtonClick('home')} className="access" to="/home"><button className={location.pathname === '/home' ? 'active' : 'medicine-btn'}>Home</button></Link>
                </div>
                <div className="health">
                    {/* <Link className="access" to="/health"><button className='health-btn '>Medicine</button></Link> */}
                    <Link  onClick={() => handleButtonClick('health')} className="access" to="/health"><button className={location.pathname === '/health' ? 'active' : 'medicine-btn'}>Medicine</button></Link>
                </div>

                <div className="cart">
                    {/* <Link className="access" to="/cart"><button className='cart-btn '>Cart</button></Link> */}
                    <Link  onClick={() => handleButtonClick('cart')} className="access" to="/cart"><button className={location.pathname === '/cart' ? 'active' : 'medicine-btn'}>Cart</button></Link>
                </div>

                <div className="login">
                    {/* <Link className="access" to="/login"><button className='login-btn '> Login</button></Link>  */}
                    <Link  onClick={() => handleButtonClick('login')} className="access" to="/login"><button className={location.pathname === '/login' ? 'active' : 'medicine-btn'}>Login</button></Link>
                </div>
            </div>
        </div>

    </header>
    
    </>
  )
}

export default Navbar;
