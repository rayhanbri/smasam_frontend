import React from 'react';
import Navbar from '../Root/Navbar';
import { Outlet } from 'react-router';
import Banner from '../Root/Banner';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Banner></Banner>
        </div>
    );
};

export default Root;