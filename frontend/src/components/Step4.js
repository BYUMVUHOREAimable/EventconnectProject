import React from 'react';
import { ChevronLeft } from 'react-feather';
import { GrStatusGood } from 'react-icons/gr';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Step4 = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-md mx-auto w-full h-full md:max-h-[80vh] bg-gray-100 flex justify-center items-center mt-20 p-4 md:p-6">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg relative w-full md:w-3/4 lg:w-1/2 text-center">
          <ChevronLeft size={30} className="absolute top-4 left-4 cursor-pointer" />
          <GrStatusGood size={80} className="mx-auto my-3 text-green-600" />
          <h3 className="text-lg md:text-xl font-bold mb-2">Payment Successful!</h3>
          <h1 className="text-base md:text-lg mb-2">Order ID: 124450</h1>
          <p className="mb-6 text-sm md:text-base">Tickets have been mailed via Email/SMS</p>
         <Link to="/step5"> <button className="bg-green-600 text-white px-6 py-3 rounded-md w-full md:w-auto focus:outline-none">
            Download Ticket
          </button>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Step4;
