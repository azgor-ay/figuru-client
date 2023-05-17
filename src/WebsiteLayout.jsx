import React from 'react';
import Header from './Components/ShareAble/Header';
import { Outlet } from 'react-router-dom';
import Footer from './Components/ShareAble/Footer';

const WebsiteLayout = () => {
  return (
    <div className='container mx-auto'>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  );
};

export default WebsiteLayout;