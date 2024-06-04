import React from 'react';
import { ChevronLeft } from 'react-feather';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Step3 = ({ handlePayment }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-md mx-auto w-full h-full md:max-h-[80vh] bg-white text-gray-900 rounded-2xl relative overflow mt-20 p-4 md:p-6 shadow-lg z-20">
        <ChevronLeft size={30} className="absolute top-4 left-4 cursor-pointer" />
        <h1 className="text-center py-4 text-lg md:text-xl lg:text-2xl font-bold">Add a Card</h1>
        <form onSubmit={handlePayment} className="py-4 px-6">
          <div className="grid gap-4 md:grid-cols-2">
            <input
              type="text"
              className="py-3 border-b-2 focus:outline-none focus:border-blue-500"
              name="NameOnCard"
              placeholder="Name on Card"
              required
            />
            <input
              type="number"
              className="py-3 border-b-2 focus:outline-none focus:border-blue-500"
              name="CardNumber"
              placeholder="Card Number"
              required
            />
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 mt-6">
            <div className="flex flex-col w-full md:w-1/2">
              <label htmlFor="DateEX" className="text-gray-600 text-sm">Expiry Date</label>
              <input
                type="date"
                className="py-3 border-b-2 focus:outline-none focus:border-blue-500"
                id="DateEX"
                name="DateEX"
                required
              />
            </div>
            <input
              type="text"
              className="py-3 border-b-2 focus:outline-none focus:border-blue-500 w-full md:w-1/2"
              name="CVV"
              placeholder="CVV"
              required
            />
          </div>
          <div className="mt-8 flex justify-center">
            <Link to="/step3">
              <button type="submit" className="bg-green-600 text-white px-6 py-3 rounded-md w-full md:w-auto">
                Make Payment
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step3;
