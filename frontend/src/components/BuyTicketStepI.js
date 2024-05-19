import React, { useState } from 'react';
import { BiMoney, BiTime } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
export default function BookingTransc1() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-x text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl  relative overflow-x-scroll">
      <h1 className='text-center py-6'>Coolulu Kormangala turf park</h1>
      <div className='bg-gray-300 w-10/12 rounded-lg p-2 text-xs mx-auto grid-rows-3'>
        <p className='flex gap-2 p-1'><AiOutlineCalendar size={"1.3em"} /> Sun,30th march</p>
        <p className='flex gap-2 p-1'><BiTime size={"1.3em"} /> 05:00 pm -06:00pm</p>
        <p className='flex gap-2 p-1'><BiMoney size={"1.3em"} />$1600</p>
      </div>
      <div className='w-10/12 mx-auto text-xs py-3 grid grid-cols-2 gap-11'>
        <p>Convenience fee</p>
        <p className=''>$ 0.00</p>
      </div>
      <div className='w-10/12 mx-auto text-sm py-3 grid grid-cols-2 gap-11'>
        <p>Total Amount</p>
        <p className=''>$1600 </p>
      </div>
      <div className='w-10/12 mx-auto'>
        <button className='w-full text-start border-b-2 text-[.8em] font-light' onClick={toggleDropdown}>Booking Policy {isOpen ? <IoIosArrowUp className=' float-right' /> : <IoIosArrowDown className=' float-right' />}</button>
        {isOpen && <text className='home md:text-[.8em] sm:text-[.7em] text-[.5em]'><h1>Rescheduling policy</h1>
          <p>Rescheduling is allowed 2 Hours prior to slot time.
            Rescheduling of a booking can be done only 2 times.
            Once rescheduled, booking cannot be cancelled.</p>
          <h1>Cancel policy</h1>
          <p>0-2 hrs prior to slot: Cancellations not allowed.
            greater than 2 hrs prior to slot: 15.0% of Gross Amount will
            be deducted as cancellation fee.</p></text>}
      </div>
      <div className='w-full absolute bottom-2 flex-shrink-0 flex justify-center'>
        <a href='/buyTicket/stepI' className="bg-violet-950 text-white px-4 py-2 rounded-md w-[70%] mx-auto">Proceed to Pay</a>
      </div>
    </div>
  );
}

 
 
