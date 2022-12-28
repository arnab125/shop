//fnctional component
import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';


const Header = () => {
    return (
         <nav className='header'>
            <img src={logo} alt="logo" />
            <div>
                <a href="/shop">Shop</a>
                <a href="/review">Order</a>
                <a href="/manage">Inventory</a>
                <a href="/login">About Us</a>
            </div>
         </nav>
    );
};

export default Header;