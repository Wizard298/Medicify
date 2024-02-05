import React from 'react'
import '../css_part/NavbarStyle.css'
import { Link } from 'react-router-dom';
import image from '../images/navbar-icon.png'

const Navbar =({ activeButton })=> {
  return (
    <>
    
    <header className='head'>

        <div className="main-nav">
            <div className="navbar">
                <div className="main-head">
                    <img className='nav-icon' src={image} alt="Error" />
                    <Link className="main-anchor" to="/">Medicify</Link>
                </div>
                <div className="main-search">
                    <input type="search" className="main-search-bar" placeholder="Search for medicine & wellness products" aria-label="Search"/>
                </div>
            </div>


            <div className="nav2">
                {/* <button type="button" className="view">View</button> */}

                <div className="medicine">
                    <Link className="access" to="/"><button className='medicine-btn'>Home</button></Link>
                    {/* <Link className="access" to="/"><button className={activeButton === 'home' ? 'active' : 'medicine-btn'}>Home</button></Link> */}
                </div>
                <div className="health">
                    <Link className="access" to="/health"><button className='health-btn '>Medicine</button></Link>
                    {/* <Link className="access" to="/health"><button className={activeButton === 'health' ? 'active' : 'medicine-btn'}>Medicine</button></Link> */}
                </div>

                <div className="cart">
                    <Link className="access" to="/cart"><button className='cart-btn '>Cart</button></Link>
                    {/* <Link className="access" to="/cart"><button className={activeButton === 'cart' ? 'active' : 'medicine-btn'}>Cart</button></Link> */}
                </div>

                <div className="login">
                    <Link className="access" to="/login"><button className='login-btn '> Login</button></Link> 
                    {/* <Link className="access" to="/login"><button className={activeButton === 'login' ? 'active' : 'medicine-btn'}>Login</button></Link> */}
                </div>
            </div>
        </div>

    </header>
    
    </>
  )
}

export default Navbar;
