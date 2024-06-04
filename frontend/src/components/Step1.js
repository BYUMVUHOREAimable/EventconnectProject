import React, { useState } from 'react';
import { AiOutlineCalendar } from 'react-icons/ai';
import { BiMoney, BiTime } from 'react-icons/bi';
import { ChevronLeft } from 'react-feather';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Step1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-md mx-auto w-full h-full md:max-h-[80vh] bg-gray-200 text-green-600 rounded-2xl relative overflow mt-20 p-2 md:p-6 shadow-lg">
        <ChevronLeft size={30} className="absolute top-4 left-4 cursor-pointer" />
        <h1 className="text-center py-4 text-base md:text-lg lg:text-xl font-bold">Coolulu Kormangala Turf Park</h1>
        <div className="bg-gray-300 w-full md:w-10/12 rounded-lg p-3 text-xs md:text-sm mx-auto grid gap-y-2 mb-3">
          <div className="flex items-center space-x-2"><AiOutlineCalendar size="1.3em" /> <span>Sun, 30th March</span></div>
          <div className="flex items-center space-x-2"><BiTime size="1.3em" /> <span>05:00 pm - 06:00 pm</span></div>
          <div className="flex items-center space-x-2"><BiMoney size="1.3em" /> <span>$1600</span></div>
        </div>
        <div className="w-full md:w-10/12 mx-auto text-xs md:text-sm py-2 grid grid-cols-2 gap-4">
          <p>Convenience fee</p>
          <p>$0.00</p>
        </div>
        <div className="w-full md:w-10/12 mx-auto text-xs md:text-sm py-2 grid grid-cols-2 gap-4">
          <p>Total Amount</p>
          <p>$1600</p>
        </div>
        <div className="w-full md:w-10/12 mx-auto">
          <button className="w-full text-start border-b-2 text-xs md:text-sm font-light py-1" onClick={toggleDropdown}>
            Booking Policy {isOpen ? <IoIosArrowUp className="float-right" /> : <IoIosArrowDown className="float-right" />}
          </button>
          {isOpen && (
            <div className="text-xs md:text-sm mt-2">
              <h2 className="text-sm md:text-lg font-semibold mt-2">Rescheduling Policy</h2>
              <p className="mb-2">Rescheduling is allowed 2 hours prior to slot time. Rescheduling of a booking can be done only 2 times. Once rescheduled, booking cannot be cancelled.</p>
              <h2 className="text-sm md:text-lg font-semibold">Cancellation Policy</h2>
              <p>0-2 hrs prior to slot: Cancellations not allowed. Greater than 2 hrs prior to slot: 15% of Gross Amount will be deducted as cancellation fee.</p>
            </div>
          )}
        </div>
        <Link to="/step2">
          <div className="w-full flex justify-center">
            <button className="bg-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-md w-full md:w-[70%] mt-4 mb-2">Proceed to Pay</button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Step1;
