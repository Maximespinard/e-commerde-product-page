import React, { useState } from 'react';

import menuIcon from '../../assets/icons/icon-menu.svg';
import logo from '../../assets/icons/logo.svg';
import cartIcon from '../../assets/icons/icon-cart.svg';
import profileImage from '../../assets/images/image-avatar.png';
import iconClose from '../../assets/icons/icon-close.svg';

import useViewport from '../../hooks/useViewport';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { width } = useViewport();

  const breakpoint = 1224;
  const isDesktop = width <= breakpoint;

  const displayLinks = () => {
    return (
      <div>
        <a href='#collection'>Collections</a>
        <a href='#men'>Men</a>
        <a href='#women'>Women</a>
        <a href='#about'>About</a>
        <a href='#contact'>Contact</a>
      </div>
    );
  };

  return (
    <header className='header'>
      <div className='header-left'>
        {isDesktop ? (
          <button type='button' onClick={() => setMenuOpen(true)}>
            <img src={menuIcon} alt='menu icon' />
          </button>
        ) : (
          displayLinks()
        )}
        <img className='header-left--logo' src={logo} alt='logo'></img>
      </div>
      <div className='header-right'>
        <button type='button'>
          <img src={cartIcon} alt='cart icon' />
        </button>
        <button>
          <img className='header-right--profileImage' src={profileImage} alt='profile icon' />
        </button>
      </div>
      <aside className={`header-menu ${menuOpen && 'header-menu--open'}`}>
        <>
          <button type='button' onClick={() => setMenuOpen(false)}>
            <img src={iconClose} alt='icon-close' />
          </button>
          {displayLinks()}
        </>
      </aside>
    </header>
  );
};

export default Header;
