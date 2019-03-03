import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Import
import SignInLink from './SignInLink';
import SignOutLink from './SignOutLink';

const Navbar = () => {
  return (
    <nav className="nav-wrapper blue darken-3">
      <div className="container">
        <Link to='/' className='brand-logo'>FullStact React Project</Link>
        <SignInLink></SignInLink>
        <SignOutLink></SignOutLink>
      </div>
    </nav>
  )
}

export default Navbar;
