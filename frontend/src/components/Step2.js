import React from 'react';
import { Link } from 'react-router-dom';
import { FaPaypal } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { MdEmail } from 'react-icons/md';
import Navbar from './Navbar';

const FreeTrialPage = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-md mx-auto w-full bg-gray-100 text-center rounded-2xl mt-24 p-6 shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Activate your free trial</h1>
        <p className="text-lg mb-2">$0 due until July 4, 2024, then $9.99/month.</p>
        <div className="flex items-center justify-center mb-8 text-sm text-gray-500">
          <MdEmail className="mr-2" /> Don’t worry, we’ll email you before your trial ends.
        </div>
        <div className="border-solid border-2 rounded border-sky-200 p-5 bg-white">
        <div className="space-y-4">
          <Link to="/step4">
            <button className="w-full py-3 mb-2  bg-yellow-500 text-lg rounded-lg flex items-center justify-center hover:bg-yellow-600 transition duration-200">
              <FaPaypal className="mr-2" /> PayPal
            </button>
          </Link>
          <Link to="/step4">
            <button className="w-full py-3 bg-black mb-2 text-white text-lg rounded-lg flex items-center justify-center hover:bg-gray-800 transition duration-200">
              <FcGoogle className="mr-2" /> Google Pay
            </button>
          </Link>
          <Link to="/step4">
            <button className="w-full py-3 mb-2 border-solid border-2 border-sky-500 bg-gray-400 text-lg rounded-lg flex items-center justify-center hover:bg-gray-300 transition duration-200">
              Credit or Debit Card
            </button>
          </Link>
        </div>
         <Link to="/">
        <p className="mt-8 text-sm text-gray-500 cursor-pointer hover:text-gray-700 transition duration-200">Cancel anytime.</p>
     </Link>
      </div>
      </div>
      </div>
  );
};

export default FreeTrialPage;
