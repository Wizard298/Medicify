import React from 'react'
import '../css_part/NavbarStyle.css'

function Navbar() {
  return (
    <>
    
    <header>

        <div className="nav">
            <div className="nav1">
                <div className="main-list">
                    <a className="main-anchor" href="/">Medicify</a>
                </div>
                <div className="search">
                    <input type="search" className="search-bar" placeholder="Search for medicine & wellness products" aria-label="Search"/>
                </div>
            </div>


            <div className="nav2">
                <button type="button" className="view">View</button>

                <div className="cart">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                        className="bi bi-cart-fill icon" viewBox="0 0 16 16">
                        <path
                            d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    <a className="access" href="/cart">Cart</a>
                </div>

                <div className="signin">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                        className="bi bi-person-circle icon icon-2" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                        <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                    </svg>
                    <a className="access" href="/login">Sign in/ Sign Up</a>
                </div>
            </div>
        </div>

    </header>
    
    </>
  )
}

export default Navbar;
