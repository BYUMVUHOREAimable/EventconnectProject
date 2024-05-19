import React from 'react';
import Image1 from '../../assets/comedy.jpeg';
import { FaGoogle, FaAdn, FaAddressCard, FaAccessibleIcon } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AboutFirst = () => {
  return (
    <div className='w-full'>
      <div className='flex flex-col justify-center items-center'>
        <div className='flex flex-row justify-evenly items-center p-2 md:p-4 max-w-screen-lg mx-auto my-8'>
         <Link to="/services"> <button className='px-4 py-2 mx-2 md:mx-0 rounded-lg bg-[#20B486] text-white'>Popular Events</button></Link>
         <Link to="/contact"> <button className='px-6 py-2 mx-2 md:mx-0 rounded-lg text-[#20B486] shadow-md'>Contact Us</button></Link>
        </div>
        <div className='grid gap-4 sm:grid-cols-2 md:flex md:justify-center items-center'>
          <div className='hidden md:block md:grid-cols-1 lg:p-4'>
            <div className='border my-4 border-[#20B486] rounded-lg p-3 relative'>
              <FaGoogle className='text-3xl mx-4' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita</p>
            </div>
            <div className='border my-4 border-[#20B486] rounded-lg p-3 relative'>
              <FaAdn className='text-3xl mx-4' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita</p>
            </div>
            <div className='border my-4 border-[#20B486] rounded-lg p-3 relative'>
              <FaAddressCard className='text-3xl mx-4' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita</p>
            </div>
            <div className='border my-4 border-[#20B486] rounded-lg p-3 relative'>
              <FaAccessibleIcon className='text-3xl mx-4' />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita</p>
            </div>
          </div>
          <div className='w-full max-w-md md:max-w-[10cm] md:h-[13cm] bg-slate-100 text-center md:text-xl shadow-xl'>
            <img src={Image1} alt="" className='w-full h-[7cm] md:h-[9cm]' />
            <div className='p-4'>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita.</p>
              <span className='text-blue-700 block'>lorem Ipsum</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutFirst;
