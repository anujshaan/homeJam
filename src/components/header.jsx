import React from 'react';
import logo from "../Assets/logo.png";
import basket from '../Assets/icons/Basket.png'

const Header = () => {
  return (
    <div className='headerWrapper'>
      <div className="headerLogo">
        <img src={logo} alt="" className='logo'/>
      </div>
      <nav>
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
    </div>)
};

export default Header;
