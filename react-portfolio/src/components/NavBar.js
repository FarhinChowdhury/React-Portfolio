import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#01652B"}}>
        <NavLink className="navbar-brand" to="/"style={{color:"white"}}>
          Farhin Chowdhury
        </NavLink>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" style={{color:"antiquewhite"}}>
                About me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" style={{color:"antiquewhite"}}>
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact" style={{color:"antiquewhite"}}>
                Contact
              </NavLink>
            </li>
          </ul>
      </nav>
    );
  }

export default Navbar;