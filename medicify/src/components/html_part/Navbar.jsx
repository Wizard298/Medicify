import React from 'react'
import '../css_part/NavbarStyle.css'

function Navbar() {
  return (
    <>
    
    <header className='head'>

        <div className="main-nav">
            <div className="navbar">
                <div className="main-head">
                    <a className="main-anchor" href="/">Medicify</a>
                </div>
                <div className="main-search">
                    <input type="search" className="main-search-bar" placeholder="Search for medicine & wellness products" aria-label="Search"/>
                </div>
            </div>


            <div className="nav2">
                {/* <button type="button" className="view">View</button> */}

                <div className="medicine">
                    <button className='medicine-btn'><a className="access" href="/cart">Medicine</a></button>
                </div>
                <div className="health">
                    <button className='health-btn'><a className="access" href="/cart">Health</a></button>
                </div>

                <div className="cart">
                    <button className='cart-btn'><a className="access" href="/cart">Cart</a></button>
                </div>

                <div className="login">
                    <button className='login-btn'> <a className="access" href="/login">Sign in/ Sign Up</a> </button> 
                </div>
            </div>
        </div>

    </header>
    
    </>
  )
}

export default Navbar;
