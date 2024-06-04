import React from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import { FcGoogle } from 'react-icons/fc';
import { FaCcVisa } from 'react-icons/fa';
import { FaPaypal } from 'react-icons/fa';
import Navbar from './Navbar';

const Step2 = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-md mx-auto w-full h-full md:max-h-[80vh] bg-white text-green-600 rounded-2xl relative overflow mt-20 p-4 md:p-6 shadow-lg">
        <ChevronLeft size={30} className="absolute top-4 left-4 cursor-pointer" />
        <h1 className="text-center py-4 text-base md:text-lg lg:text-xl font-bold">Payment Method</h1>
        <div className="w-full md:w-10/12 p-4 rounded-lg grid grid-flow-row gap-4 text-xs md:text-sm bg-gray-200 mx-auto my-2">
          <h2 className="text-left text-sm md:text-base font-semibold">UPI</h2>
          {['Google Pay'].map((pay, idx) => (
            <button key={idx} className="flex items-center justify-between border-b-2 border-gray-300 py-2">
              <FcGoogle size="1.1em" /> <span>{pay}</span> <ChevronRight size={16} />
            </button>
          ))}
        </div>
        <div className="w-full md:w-10/12 p-4 rounded-lg grid grid-flow-row gap-4 text-xs md:text-sm bg-gray-200 mx-auto my-2">
          <button className="flex items-center justify-between">
            <span>Debit/Credit Cards</span> <FaCcVisa size={24} /> <ChevronRight size={16} />
          </button>
        </div>
        <div className="w-full md:w-10/12 p-4 rounded-lg grid grid-flow-row gap-4 text-xs md:text-sm bg-gray-200 mx-auto my-2">
          <h2 className="text-left text-sm md:text-base font-semibold">Wallet</h2>
          {['PayPal'].map((pay, idx) => (
            <button key={idx} className="flex items-center justify-between border-b-2 border-gray-300 py-2">
              <FaPaypal size="1.1em" /> <span>{pay}</span> <ChevronRight size={16} />
            </button>
          ))}
        </div>
        <button className="w-full md:w-10/12 block rounded-lg px-4 py-3 text-sm md:text-base bg-gray-200 mx-auto my-2">Net Banking</button>
      </div>
    </div>
  );
};

export default Step2;
