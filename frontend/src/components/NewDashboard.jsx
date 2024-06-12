import React from 'react';
import HeaderDashboard from './SubComponents/HeaderDashboard';
import MainContentDashboard from './SubComponents/MainContentDashboard';
import SidebarDashboard from './SubComponents/SiderbarDashboard';
import NavbarDash from './NavbarDash';
import Footer from "./Footer";
import Navbar from './Navbar';

const NewDashboard = () => {
  return (
    <div>
      <div className="flex h-screen overflow-hidden">
        <Navbar/>
      <div className='mt-14 z-20'>
        <NavbarDash/>
      </div>
      <div className="flex flex-col md:flex-row flex-grow">
        <SidebarDashboard />
        <div className="flex flex-col flex-grow">
          <HeaderDashboard />
          <MainContentDashboard />
        </div>
       
      </div>
      
      </div>
      <Footer/>
      </div>
  );
}

export default NewDashboard;
