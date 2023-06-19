import React from 'react';
import { Link } from 'react-router-dom';
import { RiMenu3Line } from 'react-icons/ri';
import logo from '../../assets/images/navLogo.png';

const Navbar = () => {
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/login">Login</Link></li>
    </>
    return (
        <div className="navbar bg-primary text-white py-8 mx-auto justify-between px-[10%]">
            <div className="navbar-start">
                <Link><img src={logo} alt="Logo" className='max-w-[75%]' /></Link>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {menuItems}
                </ul>
            </div>
            <div className="dropdown lg:hidden z-50 ">
                <label tabIndex={0} className="btn btn-ghost lg:hidden text-3xl relative">
                    <RiMenu3Line></RiMenu3Line>
                </label>
                <ul tabIndex={0} className="menu menu-lg dropdown-content mt-3 p-2 shadow bg-[#133B38] rounded-box w-52 absolute right-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Navbar;