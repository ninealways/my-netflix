import React from 'react';

import './navbar.styles.scss';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <ul className="menu-list">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Search</Link></li>
    </ul>
);

export default Navbar;