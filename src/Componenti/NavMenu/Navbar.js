import React, {useState} from 'react';

import {Link} from 'react-router-dom';

import NavLinks from './NavLinks';

import SideDrawer from './SideDrawer';
import Backdrop from '../Modal/Backdrop';

import './Navbar.css';

const Navbar = (props) => {

    const [drawerIsOpen,setDrawerIsOpen] = useState(false);

    const openDrawer = () => {
        setDrawerIsOpen(true);
    }

    const closeDrawer = () => {
        setDrawerIsOpen(false);
    }

    return (
      <React.Fragment>
        {drawerIsOpen && <Backdrop onClick={closeDrawer} />}
        <SideDrawer show={drawerIsOpen} onClick={closeDrawer}>
          <nav className="main-navigation__drawer-nav">
            <NavLinks />
          </nav>
        </SideDrawer>
        <header className="main-header">
          <button className="main-navigation__menu-btn" onClick={!drawerIsOpen ? openDrawer : closeDrawer}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <h1 className="main-navigation__title">
            <Link to="/">LiveCovid Italia</Link>
          </h1>
          <nav className="main-navigation__header-nav">
            <NavLinks />
          </nav>
        </header>
      </React.Fragment>
    );
}

export default Navbar;