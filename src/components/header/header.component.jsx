import React from 'react';

import './header.styles.scss';
import Navbar from '../navbar/navbar.component';
import Logo from '../logo/logo.component';

const Header = () => (
    <div className="header">
        <Logo />
        <Navbar />
    </div>
)

export default Header;
