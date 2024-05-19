import React, { useState } from 'react';
import { BiMoney, BiTime, BiLogoVisa } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { ChevronRight,ChevronLeft } from 'react-feather';
import { GrStatusGood } from 'react-icons/gr';
import { FaCcVisa } from 'react-icons/fa';
import BookPage from '../../layout/Event/EventBooking';


export default function BookProcess() {
const [paymentStatus,setPayementStatus] = useState(null)
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
            <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-x text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl  relative overflow-x-scroll">
                <ChevronLeft size={30} onClick={goToPreviousStep} className='absolute top-4 left-4 cursor-pointer'/>
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
              <button onClick={()=>goToAddCard(2)} className="bg-violet-950 text-white px-4 py-2 rounded-md w-[70%] mx-auto">Proceed to Pay</button>
            </div>
          </div>
        );
      case 2:
        return (
            <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-xs w-4/5 min-h-[90vh] bg-white rounded-2xl p-3 relative">
                <ChevronLeft size={30} onClick={goToPreviousStep} className='absolute top-4 left-4 cursor-pointer'/>
            <h1 className='text-center text-sm py-7'>Payment method</h1>
            <div className='w-10/12 p-2 rounded-lg grid grid-flow-row gap-4 text-xs bg-gray-200 mx-auto my-2 overflow-x-scroll'>
                 <h1 className='text-left text-sm'>UP1</h1>
                 <button onClick={()=>goToAddCard(4)} className='grid grid-cols-3  gap-8 border-b-2 border-gray-300 py-2'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></button>
                 <button onClick={()=>goToAddCard(4)} className='grid grid-cols-3  gap-8 border-b-2 border-gray-300 py-2'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></button>
                 <button onClick={()=>goToAddCard(4)} className='grid grid-cols-3  gap-8 py-2'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></button>
            </div>
            <div className='w-10/12 rounded-lg p-2 grid grid-flow-row gap-4 bg-gray-200 mx-auto my-2 overflow-x-scroll'>
                 <button onClick={()=>goToAddCard(4)} className='text-left flex w-full'> <p className=''>Debit/Credit Cards<FaCcVisa size={24}/></p> <ChevronRight size={16} className=" md:ml-[30%] sm:ml-[20%] ml-6" /></button>
            </div>
            <div className='w-10/12 rounded-lg p-2 grid grid-flow-row gap-4 text-xs bg-gray-200 mx-auto my-2 overflow-x-scroll'>
                 <h1 className='text-left text-sm'>Wallet</h1>
                 <button onClick={()=>goToAddCard(4)} className='grid grid-cols-3  gap-8 border-b-2 py-2 border-gray-300'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></button>
                 <button onClick={()=>goToAddCard(4)} className='grid grid-cols-3  gap-8 border-b-2 py-2 border-gray-300'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></button>
                 <button onClick={()=>goToAddCard(4)} className='grid grid-cols-3  gap-8'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></button>
            </div>
            <button onClick={()=>goToAddCard(4)}  className='w-10/12 block rounded-lg px-2 py-4 text-sm bg-gray-200 mx-auto my-2 '>Net Banking</button>
        </div>
        );
      case 3:
        return (
        <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-x text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl  relative overflow-x-scroll">
            <ChevronLeft size={30} onClick={goToPreviousStep} className='absolute top-4 left-4 cursor-pointer'/>
            <GrStatusGood size={80} className='mx-auto my-3' />
            <h3 className=' text-center'>Payment Successful!</h3>
            <h1 className='text-center'> Order ID: 124450</h1>
            <p className='text-center py-4'>Tickets has been mailed via
                Email/ SMS</p>
            <div className='w-full absolute bottom-0 flex-shrink-0 flex justify-center'>
                <button onClick={()=>goToAddCard(5)} className="bg-violet-950 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3">Download Ticket</button>
            </div>
        </div>
        );
      case 4:
        return (
            <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-x text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl  relative overflow-x-scroll">
                <ChevronLeft size={30} onClick={goToPreviousStep} className='absolute top-4 left-4 cursor-pointer'/>
            <h1 className='py-4'>Add a Card</h1>
            <form>
                <div className='grid gap-2 grid-rows-2 md:w-4/5 w-5/6 mx-auto'>
                    <input type="text" className="text-center py-3 border-b-2" name="NameOnCard" placeholder='Name on Card' />
                    <input type="number" className="text-center py-3 border-b-2" name="CardNumber" placeholder='Card Number' />
                </div>
                <div className='grid gap-2 md:grid-cols-2 sm:grid-cols-2  grid-flow-row md:w-4/5 w-5/6 mx-auto'>
                    <div className='grid grid-flow-row'>
                        <label for="DateEX" className='text-[.5em] text-center'>Expiry Date</label>
                        <input type="date" className="text-center text-sm py-3 border-b-2" id='DateEX' name="NameOnCard" />
                    </div>
                    <input type="text" className="text-center border-b-2 py-3" name="CVV" placeholder='CVV' />
                </div>
                <div className='w-full absolute bottom-0 flex-shrink-0 flex justify-center'>
                    <button onClick={()=>goToAddCard(5)} className="bg-violet-950 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3">Make payment</button>
                </div>
            </form>
        </div>
        );
        case 5:
        return (
            <>
            {paymentStatus?<div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-x text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl  relative overflow-x-scroll">
                <ChevronLeft size={30} onClick={goToPreviousStep} className='absolute top-4 left-4 cursor-pointer'/>
            <div className='sm:w-full md:w-full w-[15rem] mx-auto text-[.5em] md:text-xs sm:text-xs  grid grid-flow-row text-center '>
                <GrStatusGood size={80} className='mx-auto my-3' />
                <h3 className=' text-center text-base'>Payment Successful!</h3>
                <h1 className='text-center text-sm'> Order ID: 124450</h1>
                <p className='text-center py-4'>Tickets has been mailed via
                    Email/ SMS</p>
            </div>
            <div className='w-full absolute bottom-2 flex-shrink-0 justify-center grid grid-flow-row'>
                <a href='/#' className='w-full py-2'>Go to Home</a>
                <div className='w-11/12 grid grid-cols-2 gap-2 mx-auto md:text-xs sm:text-xs text-[.6em]'>
                    <button className="bg-violet-950 text-white rounded-md  sm:py-3 md:py-3 py-2 px-1">Download Invoice</button>
                    <button className="bg-violet-950 text-white  rounded-md sm:py-3 md:py-3 py-2 px-1">Download Share invite</button>
                </div>
            </div>
        </div>:goToAddCard(1)}
        </>
        );
      default:
        return null;
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const goToAddCard=(cas)=>{
    setCurrentStep(cas)
  }

  return (
    <div className=' relative'>
    <div className="flex items-center bg-black bg-opacity-70 justify-center w-full h-screen fixed z-10">
      {renderCurrentStep()}
    </div>
    <BookPage/>
    </div>
  );
}
