// Functional Component - Doesn't have state
import React from 'react';
// import SignInLinks from './SignInLinks';
import { Link } from 'react-router-dom';
import SignOutLinks from './SignOutLinks';

const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">Lens-yclopedia</Link>
          {/* <SignInLinks></SignInLinks> */}
          <SignOutLinks></SignOutLinks>
        </div>
     </nav>
    </div>
  )
}

export default Navbar;