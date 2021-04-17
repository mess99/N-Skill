import React from 'react'
import banniereDesktop from '../../assets/images/banniere.png'
import banniere from '../../assets/images/phone.png'

import './header.css'
const Header = () => {
    return (
        <header className="header">
            <img className="banniere-phone" src={banniere} alt="" />
            <img className="banniere-desktop" src={banniereDesktop} alt="" />
            <button className="header__login">SIGN UP</button>
        </header>
    );
};

export default Header;