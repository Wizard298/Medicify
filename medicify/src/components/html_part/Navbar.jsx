import React from 'react'
import '../css_part/NavbarStyle.css'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <>
    
    <header className='head'>

        <div className="main-nav">
            <div className="navbar">
                <div className="main-head">
                    <Link className="main-anchor" to="/">Medicify</Link>
                </div>
                <div className="main-search">
                    <input type="search" className="main-search-bar" placeholder="Search for medicine & wellness products" aria-label="Search"/>
                </div>
            </div>


            <div className="nav2">
                {/* <button type="button" className="view">View</button> */}

                <div className="medicine">
                    <button className='medicine-btn'><Link className="access" to="/">Home</Link></button>
                </div>
                <div className="health">
                    <button className='health-btn'><Link className="access" to="/health">Medicine</Link></button>
                </div>

                <div className="cart">
                    <button className='cart-btn'><Link className="access" to="/cart">Cart</Link></button>
                </div>

                <div className="login">
                    <button className='login-btn'> <Link className="access" to="/login">Login</Link> </button> 
                </div>
            </div>
        </div>

    </header>
    
    </>
  )
}

export default Navbar;
