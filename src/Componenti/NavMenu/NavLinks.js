import React from 'react';
import {NavLink} from 'react-router-dom';

import './NavLinks.css';

const NavLinks = () => {
    return (
        <ul className='nav-links'>
            <li>
                <NavLink to='/' exact> Nella tua città </NavLink>
            </li>
            <li>
                <NavLink to='/situazioneGenerale' exact> Situazione Generale </NavLink>
            </li>
            <li>
                <NavLink to='/miti'> Falsi Miti </NavLink>
            </li>
            <li>
                <NavLink className='tasto_dona' to='/donate'> Offrimi un caffè!</NavLink>
            </li>
        </ul>
    );
};

export default NavLinks;