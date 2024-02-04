import React from "react";
import "./NavBar.css";
import Tilt from 'react-parallax-tilt';

function Navbar() {
  return (
    <div>
      <nav className="navbar" style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Tilt className="br2 shadow-2" style={{ justifyContent: 'flex-start' }}>
          <div style={{ height: '100px', width: '100px' }}>
            <p>logo</p>
          </div>
        </Tilt>
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <p><a className="f4 dim white pointer navbar-link" href="/">Home</a></p>
          <p><a className="f4 dim white pointer navbar-link" href="/about">About</a></p>
          <p><a className="f4 dim white pointer navbar-link" href="/contact">Contact</a></p>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;