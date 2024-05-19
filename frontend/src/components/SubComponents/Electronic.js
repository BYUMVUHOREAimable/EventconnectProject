import React, { useState } from 'react';

const Electronic = () => {
  const [ticketCount, setTicketCount] = useState(1);

  const handleDecrement = () => {
    setTicketCount((prevCount) => Math.max(prevCount - 1, 1));
  };

  const handleIncrement = () => {
    setTicketCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="bg-green-500 min-h-screen flex items-center justify-center">
      <div className="bg-white rounded-lg p-8 mt-2 mb-2">
        {/* Header */}
        <h1 className="text-3xl font-semi-bold text-center">Electronic Steve</h1>
        <p className="text-lg text-center">Music Festival</p>
        <p className="text-xl text-red-400 mt-5 text-center">Stage</p>

        {/* Div with black background color */}
        <div className="w-80 h-2 bg-black mt-4"></div>

        {/* Div with brown background color */}
        <div className="w-80 h-10 bg-red-300 mt-2"></div>

        {/* Two square boxes */}
        <div className="  mt-4 grid grid-cols-2 gap-1">
          {/* Left box */}
          <div className="h-40 bg-amber-200 flex flex-col items-center justify-center">
            <p className="text-center">B block</p>
            <p className="text-sm">(Premium)</p>
            <p className="text-lg text-center">Rs 5000</p>
          </div>

         

          {/* Right box */}
          <div className="h-40 bg-teal-300 flex flex-col items-center justify-center">
            <p className="text-center">C block</p>
            <p className="text-sm">(Premium)</p>
            <p className="text-lg text-center">Rs 5000</p>
          </div>
        </div>

        {/* Rectangular box */}
        <div className="w-80 h-36 mt-4 bg-fuchsia-400 flex flex-col items-center justify-center">
          <p className="text-center">D block</p>
          <p className="text-sm">(Superior) Rs 1600</p>
        </div>

        {/* Ticket Count */}
        <div className="flex items-center mt-4 ">
          <p className="ml-2 mr-20">No of tickets</p>
          <div className="grid grid-cols-3 bg-gray-200 rounded-xl w-20  ml-14">
          <button className="" onClick={handleDecrement}>
            -
          </button>
          <p className="text-center justify-center py-2">{ticketCount}</p>
          <button className="" onClick={handleIncrement}>
            +
          </button>
          </div>
           </div>

        {/* Book Now Button */}
        <button className="bg-fuchsia-950 w-80 text-white px-4 py-2 mt-6 rounded">Book Now</button>
        </div>
       
    </div>
  );
};

export default Electronic;
