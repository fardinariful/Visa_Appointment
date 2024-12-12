import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';


const Layout = () => {
    return (
        <div>
            
            <section className='  bg-[#356a91]' ><Header></Header></section>
            <section className='w-11/12 mx-auto'><Outlet></Outlet></section>
            <section className='w-11/12 mx-auto mt-5 mb-2'><Footer></Footer></section>
            
            
        </div>
    );
};

export default Layout;