import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

import "./NavBar.css"

class NavBar extends React.Component {
  render () {
    return (
      <React.Fragment>
        <nav className="NavbarItems">
          <Link to="/"><h1 className="navbar-logo">Schedulr</h1></Link>
          <ul className="navbar-menu">
            <Link to="/login"><li className="navbar-link">Login</li></Link>
          </ul>
        </nav>
      </React.Fragment>
    );
  }
}

export default NavBar
