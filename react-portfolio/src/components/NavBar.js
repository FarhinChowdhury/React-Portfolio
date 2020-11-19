import React from "react";
import {NavLink} from "react-router-dom"

function Navbar() {
    return (
      <nav className="navbar" style={{backgroundColor:"#f1763a"}}>
        <NavLink className="navbar-brand" to="/"style={{color:"white"}}>

        </NavLink>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink className="navbar-brand nav-link" to="/" style={{color:"antiquewhite"}}>
                About Me
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/portfolio" style={{color:"antiquewhite"}}>
                Portfolio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" style={{color:"antiquewhite"}}>
                Contact
              </NavLink>
            </li>
          </ul>
      </nav>
    );
  }

export default Navbar;