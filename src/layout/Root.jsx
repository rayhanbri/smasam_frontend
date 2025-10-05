import React from 'react';
import Navbar from '../Root/Navbar';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='md:max-w-7xl md:mx-auto md:mt-5'>
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;