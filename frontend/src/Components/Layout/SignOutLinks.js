import React from 'react'
import { NavLink } from 'react-router-dom'

const SignOutLinks = () => {
  return (
    <div>
        <div className="container">
          <ul id="dropdownMenu" className="dropdown-content">
            <li><NavLink to="/">Lenses</NavLink></li>
            <li className="divider"></li>
            <li><NavLink to="/">Log In</NavLink></li>
            <li><NavLink to="/">Log Out</NavLink></li>
          </ul>
          <ul className="right hide-on-med-and-down">
          <li><a className="dropdown-trigger" href="#!" data-target="dropdownMenu">Menu<i className="material-icons right">arrow_drop_down</i></a></li>
          </ul>
        </div>
    </div>
  )
}

export default SignOutLinks