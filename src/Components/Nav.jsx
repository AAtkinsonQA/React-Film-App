import React from 'react';
import {Link } from 'react-router-dom';
const Nav = () => {
return( 

    <div className="navbar-dark">
        <Link to="/">Home </Link>
        <Link to="/about">About </Link>
    </div>


 );
}
export default Nav;