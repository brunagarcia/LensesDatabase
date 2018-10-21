
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul id="dropdownMenu" className="dropdown-content">
        <li><a href="#!">Lenses</a></li>
        <li className="divider"></li>
        <li><a href="#!">SignIn</a></li>
        <li><a href="#!">SignUp</a></li>
      </ul>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">Lenscyclopedia</Link>

          <ul className="right hide-on-med-and-down">
          <li><a className="dropdown-trigger" href="#!" data-target="dropdownMenu">Menu<i className="material-icons right">arrow_drop_down</i></a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar