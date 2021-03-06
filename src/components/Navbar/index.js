import React, { useState, useEffect } from 'react';
import { Button } from '../Button/index';
import { Link } from 'react-router-dom';
import './style.modules.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

 

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h2>Breaking Infos</h2>
            
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/characters'
                className='nav-links'

                onClick={closeMobileMenu}
              >
                Characters
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/episodes'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Episodes
              </Link>
            </li>
			<li className='nav-item'>
              <Link
                to='/forum'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Forum
              </Link>
            </li>

            
          </ul>
         
        </div>
      </nav>
    </>
  );
}

export default Navbar;