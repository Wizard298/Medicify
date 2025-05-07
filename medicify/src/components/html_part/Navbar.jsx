import React, { useState, useEffect } from 'react';
import '../css_part/NavbarStyle.css'
import { Link, useLocation, useNavigate  } from 'react-router-dom';

const Navbar = ({searchQuery, setSearchQuery}) => {
  const location = useLocation();
  const navigate = useNavigate();
//   const matchHealth = useMatch('/health');
//   console.log(matchHealth)
  const [user, setUser] = useState(null); 

  const handleKeyDown = (e) => {
    if(e.key === 'Enter' && searchQuery.trim() !== ''){
        navigate('/home/search');
    }
  }


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
        setUser(JSON.parse(loggedInUser)); // Parse user data
    }
  }, []);

  const [open, setOpen] = useState(true);
  const handleResponsive = () => {
    setOpen(!open);
  }

  const handleLogout = () => {
    localStorage.removeItem("user"); // Clear user data

    alert("Logged Out Successfully!...")
    setUser(null); // Reset state
    window.location.reload();
  };

  return (
    <>
    
    <header className='head'>

        <div className="main-nav">
            <div className="navbar">
                <div className="main-head">
                    <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" className="bi bi-list nav-icon" viewBox="0 0 16 16" onClick={handleResponsive}>
                      <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    <span className="main-anchor">Medicify</span>
                </div>
                <div className="main-search">
                    <input 
                        type="search" 
                        className="main-search-bar" 
                        placeholder="Search for medicine & wellness products" 
                        aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div className="login-visible">
                    {user?(
                    <>
                        <div className="dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="white" className="bi bi-person-circle profile-icon" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        <div className="dropdown-content">
                            <Link to="/profile" className='dropdown-profile'>View Profile</Link>
                            <Link onClick={handleLogout}  className='dropdown-logout dropdown-radius'>Log Out</Link>
                        </div>
                        </div>
                    </>
                    ) : (
                        <>
                            <Link className="access" to="/login"><button className={location.pathname === '/login' ? 'active' : 'medicine-btn'} style={{fontSize: "1.27em"}}>Login</button></Link>
                        </>
                    )}
                </div>
            </div>


            <div className={`nav2 ${open? '': 'nav2-none'}`}>
                <div className="main-search-visible">
                    <input 
                        type="search" 
                        className="main-search-bar" 
                        placeholder="Search for medicine & wellness products" 
                        aria-label="Search"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyDown={handleKeyDown}
                    />
                </div>

                <div className="medicine">
                    <Link className="access" to="/home"><button className={location.pathname === '/home' ? 'active' : 'medicine-btn'}>Home</button></Link>
                </div>

                <div className="health">
                    <Link className="access" to="/health"><button className={location.pathname === '/health' ? 'active' : 'medicine-btn'}>Medicine</button></Link>
                </div>

                <div className="cart">
                    <Link className="access" to="/home/about"><button className={location.pathname === '/home/about' ? 'active' : 'medicine-btn'}>About</button></Link>
                </div>
                
                <div className="cart">
                    <Link className="access" to="/cart"><button className={location.pathname === '/cart' ? 'active' : 'medicine-btn'}>Cart</button></Link>
                </div>
                
                <div className="login">
                    {user?(
                    <>
                        <div className="dropdown">
                        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" fill="white" className="bi bi-person-circle profile-icon" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
                            <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
                        </svg>
                        <div className="dropdown-content">
                            <Link to="/profile" className='dropdown-profile'>View Profile</Link>
                            <Link onClick={handleLogout}  className='dropdown-logout dropdown-radius'>Log Out</Link>
                        </div>
                        </div>
                    </>
                    ) : (
                        <>
                            <Link className="access" to="/login"><button className={location.pathname === '/login' ? 'active' : 'medicine-btn'}>Login</button></Link>
                        </>
                    )}
                </div>

            </div>
        </div>

    </header>
    
    </>
  )
}

export default Navbar;
