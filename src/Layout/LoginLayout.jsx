import React from 'react';
import { Outlet } from 'react-router-dom';

import NavigationBar from '../NavigationBar';


const LoginLayout = () => {
    return (
        <>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </>
    );
};

export default LoginLayout;