import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <div className="navbar-name">kayla chen</div>
      <ul className="navbar-menu">
        <li>about</li>
        <li>experience</li>
        <li>projects</li>
        <li>contact</li>
      </ul>
    </nav>
    </>
);
};

export default Navbar;