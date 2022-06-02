import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../../images/logo.png';

const Header = () => {

    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">About us</Link></li>
        <li><Link to="/">Projects</Link></li>
        <li><Link to="/">Contact</Link></li>
        <li class="flex lg:hidden">
            <Link to="/"><button class="btn bg-secondary text-base-100 text-lg">Login</button></Link>
        </li>
    </>;

    return (
        <div class="navbar bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabIndex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-secondary text-lg">
                        {
                            menuItems
                        }
                    </ul>
                </div>
                <Link to="/" class="normal-case text-xl cursor-pointer">
                    <img src={logo} alt="" height={50} width={100} />
                </Link>
            </div>
            <div class="navbar-center hidden lg:flex">
                <ul class="menu menu-horizontal p-0 text-secondary text-lg">
                    {
                        menuItems
                    }
                </ul>
            </div>
            <div class="navbar-end hidden lg:flex">
                <Link to="/"><button class="btn bg-secondary text-base-100 text-lg">Login</button></Link>
            </div>
        </div>
    );
};

export default Header;