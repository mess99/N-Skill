import React from 'react'
import banniereDesktop from '../../assets/images/banniere.png'
import banniere from '../../assets/images/phone.png'

import './header.css'
const Header = () => {
    return (
        <header className="header">
            <img className="banniere-phone" src={banniere} alt="banniere" />
            <img className="banniere-desktop" src={banniereDesktop} alt="banniere" />
            <button className="header__login">LOG IN</button>
        </header>
    );
};

export default Header;