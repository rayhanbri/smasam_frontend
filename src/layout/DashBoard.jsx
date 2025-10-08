import React from 'react';
import Navbar from '../Root/Navbar';
import { Link, Outlet } from 'react-router';

const dashBoard = () => {
    return (
        <div className=' md:mt-5'>
            <Navbar></Navbar>
            {/* dash Board layout  */}
            <div className="drawer lg:drawer-open">
                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ">
                    {/* navbar  */}
                    <div className="navbar bg-base-300 w-full lg:hidden">
                        <div className="flex-none ">
                            <label htmlFor="my-drawer-2" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    ></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2 lg:hidden">DashBoard</div>
                    </div>
                    {/* Page content here */}
                    <Outlet></Outlet>
                    {/* Page content here */}

                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link to='/dashBoard'>Afghan Menu</Link></li>
                        <li><Link to='persian'>Persian Menu</Link></li>
                        <li><Link to='indian'>Indian Menu</Link></li>
                        <li><Link to='lamb'>Rosted Lamb</Link></li>
                        <li><Link to='lunch'>Lunch Menu</Link></li>
                        <li><Link to='takeAway'>Take Away Menu</Link></li>
                        <li><Link to='contact'>Contact Form</Link></li>
                        
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default dashBoard;