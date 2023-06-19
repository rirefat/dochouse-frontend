import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/navLogo.png";

const Navbar = () => {
    return (
        <div className="navbar bg-primary py-8 px-16">
            <div className="flex-1">
                <Link to="/">
                    <img src={logo} alt="DocHouse Logo" />
                </Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar; <h1>This is Navbar</h1>