// Functional Component - Doesn't have state
import React from 'react';
// import SignOutLinks from './SignOutLinks';s
import { AppBar } from '@material-ui/core'
// import { makeStyles } from '@material-ui/core/styles';
import SignInLinks from './SignInLinks';
import { Link } from 'react-router-dom';


// const navStyle = makeStyles({
//   base: {
//     background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
//     border: 0,
//     borderRadius: 3,
//     boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
//     color: 'white',
//     height: 48,
//     padding: '0 30px',
//     },
//   button: {
//     color: 'grey',
//   }
// })


const Navbar = () => {
  // const classes = navStyle();
  return (
    <div>
      <nav className="nav-wrapper grey darken-3">
        <div className="container">
          <AppBar>
          <Link to='/' className="brand-logo">Lens-yclopedia</Link>
          <SignInLinks> </SignInLinks>
          </AppBar>
          {/* <SignOutLinks></SignOutLinks> */}
        </div>
     </nav>
    </div>
  )
}

export default Navbar;