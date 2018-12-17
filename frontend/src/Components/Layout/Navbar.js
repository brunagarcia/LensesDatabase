// Functional Component - Doesn't have state
import React from 'react';
// import SignOutLinks from './SignOutLinks';s
import SignInLinks from './SignInLinks';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <Link to='/' className="brand-logo">Lens-yclopedia</Link>
          <SignInLinks></SignInLinks>
          {/* <SignOutLinks></SignOutLinks> */}
        </div>
     </nav>
    </div>
  )
}

export default Navbar;