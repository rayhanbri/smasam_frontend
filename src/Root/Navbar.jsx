import React from 'react';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links=<>
    <NavLink to='/' className={({ isActive }) => isActive ? "border-b-2 text-blue-800 font-medium" : "hover:text-blue-800 font-medium"}>Home</NavLink>
    <NavLink to='/dashBoard'  className={({ isActive }) => isActive ? "border-b-2 text-blue-800 font-medium" : "hover:text-blue-800 font-medium"}>DashBoard</NavLink>
    </>
    return (
       <div className="navbar bg-base-100 shadow-sm sticky z-0">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className='flex gap-2'>
                    <img src="https://www.smasam.dk/wp-content/uploads/2024/11/SMASAM-7-e1732729089462.png" className='w-40  sm:block' alt="" />
                    <h1 className='flex items-center text-xl md:text-4xl font-bold'></h1>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 flex lg:gap-4 gap-2">
                    {
                        links
                    }
                </ul>
            </div>
        </div>
    );
};

export default Navbar;