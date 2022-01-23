import React from 'react';
import logo from "../Assets/logo.png";
import basket from '../Assets/icons/Basket.png'

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className="headerLogo">
        <img src={logo} alt="" className='logo'/>
      </div>
      <nav className='pcView'>
        <span className="navSearch">
          <i className="far fa-search"></i>
          <span>Search</span>
        </span>
        <span>Help</span>
        <span>Account</span>
        <span>
          <img src={basket} alt="" />
        </span>
      </nav>
      <nav className='mobileView'>
          <i className="far fa-search"></i>
          <img src={basket} alt="" />
          <i class="far fa-bars"></i>
      </nav>
    </div>)
};

export default Header;
