import React from 'react';
import Navbar from '../Root/Navbar';
import { Link, Outlet } from 'react-router';
import { GiChickenLeg, GiChickenOven, GiHotMeal, GiKebabSpit, GiTakeMyMoney } from 'react-icons/gi';
import { MdContactMail, MdLunchDining } from 'react-icons/md';

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
                    <ul className="menu   min-h-full w-80 p-4 sticky top-0 h-screen border-2 bg-[#23422A] text-white shadow-lg rounded-xl">
                        {/* Sidebar content here */}
                            <li className=' font-light  mt-10'>
                        <Link to='/dashBoard'>
                                <GiKebabSpit className="text-lg text-white" />
                                Afghan Menu
                        </Link>
                            </li>
                        <li><Link to='persian'>
                            <GiChickenOven className="text-lg text-white" />
                            Persian Menu
                        </Link></li>

                        <li><Link to='indian'>
                            <GiHotMeal className="text-lg text-white" />
                            Indian Menu</Link></li>

                        <li><Link to='lamb'>
                            <GiChickenLeg className="text-lg text-white" />
                            Rosted Lamb</Link></li>

                        <li><Link to='lunch'>
                            <MdLunchDining className="text-lg text-white" />
                            Lunch Menu</Link></li>

                        <li><Link to='takeAway'>
                            <GiTakeMyMoney className="text-lg text-white" />
                            Take Away Menu</Link></li>

                        <li><Link to='contact'>
                            <MdContactMail className="text-lg text-white" />
                            Contact Form</Link></li>

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default dashBoard;