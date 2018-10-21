import React from 'react'
import { NavLink } from 'react-router-dom'

const SignInLinks = () => {
  return (
    <div>
        <div className="container">
          <ul id="dropdownMenu" className="dropdown-content">
            <li><NavLink to="/">Lenses</NavLink></li>
            <li><NavLink to="/">Add Lens</NavLink></li>
            <li className="divider"></li >
            <li><NavLink to="/">Sign Out</NavLink></li>
          </ul>
          <ul className="right hide-on-med-and-down">
          <li><a className="dropdown-trigger" href="#!" data-target="dropdownMenu">Menu<i className="material-icons right">arrow_drop_down</i></a></li>
          <li><NavLink to="/" className='btn btn-floating green lighten-2'>LL</NavLink></li>
          </ul>
        </div>
    </div>
  )
}

export default SignInLinks