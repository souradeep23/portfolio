// src/components/Navbar/Navbar.js
import React from 'react';
import './navbar.css';
import logo from '../../Assets/logo.png';
import { Link } from 'react-scroll';
import contactImg from '../../Assets/Contact.png';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="logo" className="nav-logo" />
      </div>

      <div className="nav-center">
        <Link
          activeClass="active"
          to="intro"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Home
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          About
        </Link>
        <Link
          activeClass="active"
          to="works"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Portfolio
        </Link>
        <Link
          activeClass="active"
          to="clients"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuListItem"
        >
          Clients
        </Link>
      </div>

      <div className="nav-right">
        <Link
          to="contact"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="desktopMenuBtn"
        >
          <img src={contactImg} alt="contact" className="desktopMenuImg" />
          Contact Me
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
