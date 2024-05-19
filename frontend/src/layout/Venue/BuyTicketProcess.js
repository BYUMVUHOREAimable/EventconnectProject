import React, { useState } from 'react';
import { BiMoney, BiTime } from 'react-icons/bi';
import { AiOutlineCalendar } from 'react-icons/ai';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc';
import { ChevronRight, ChevronLeft } from 'react-feather';
import { GrStatusGood } from 'react-icons/gr';
import { FaCcVisa } from 'react-icons/fa';
import BookPage from './Book';
import { Link } from 'react-router-dom';

export default function BookProcess() {
  const [paymentStatus, setPaymentStatus] = useState(null); // Payment status to track if the payment was successful
  const [currentStep, setCurrentStep] = useState(1);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="md:w-2/6 sm:w-1/2 text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl relative overflow-x-scroll">
            <ChevronLeft size={30} onClick={goToPreviousStep} className="absolute top-4 left-4 cursor-pointer" />
            <h1 className="text-center py-6">Coolulu Kormangala turf park</h1>
            <div className="bg-gray-300 w-10/12 rounded-lg p-2 text-xs mx-auto grid-rows-3">
              <p className="flex gap-2 p-1"><AiOutlineCalendar size="1.3em" /> Sun, 30th March</p>
              <p className="flex gap-2 p-1"><BiTime size="1.3em" /> 05:00 pm - 06:00pm</p>
              <p className="flex gap-2 p-1"><BiMoney size="1.3em" />$1600</p>
            </div>
            <div className="w-10/12 mx-auto text-xs py-3 grid grid-cols-2 gap-11">
              <p>Convenience fee</p>
              <p>$ 0.00</p>
            </div>
            <div className="w-10/12 mx-auto text-sm py-3 grid grid-cols-2 gap-11">
              <p>Total Amount</p>
              <p>$1600</p>
            </div>
            <div className="w-10/12 mx-auto">
              <button className="w-full text-start border-b-2 text-[.8em] font-light" onClick={toggleDropdown}>
                Booking Policy {isOpen ? <IoIosArrowUp className="float-right" /> : <IoIosArrowDown className="float-right" />}
              </button>
              {isOpen && (
                <div className="home md:text-[.8em] sm:text-[.7em] text-[.5em]">
                  <h1>Rescheduling policy</h1>
                  <p>Rescheduling is allowed 2 hours prior to slot time. Rescheduling of a booking can be done only 2 times. Once rescheduled, booking cannot be cancelled.</p>
                  <h1>Cancel policy</h1>
                  <p>0-2 hrs prior to slot: Cancellations not allowed. Greater than 2 hrs prior to slot: 15.0% of Gross Amount will be deducted as cancellation fee.</p>
                </div>
              )}
            </div>
            <div className="w-full absolute bottom-2 flex-shrink-0 flex justify-center">
              <button onClick={() => goToStep(2)} className="bg-violet-950 text-white px-4 py-2 rounded-md w-[70%] mx-auto">Proceed to Pay</button>
            </div>
          </div>
        );
      case 2:
        return (
          <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-xs w-4/5 min-h-[90vh] bg-white rounded-2xl p-3 relative">
            <ChevronLeft size={30} onClick={goToPreviousStep} className="absolute top-4 left-4 cursor-pointer" />
            <h1 className="text-center text-sm py-7">Payment Method</h1>
            <div className="w-10/12 p-2 rounded-lg grid grid-flow-row gap-4 text-xs bg-gray-200 mx-auto my-2 overflow-x-scroll">
              <h1 className="text-left text-sm">UPI</h1>
              {['Google Pay', 'Google Pay', 'Google Pay'].map((pay, idx) => (
                <button key={idx} onClick={() => goToStep(4)} className="grid grid-cols-3 gap-8 border-b-2 border-gray-300 py-2">
                  <FcGoogle size="1.1em" /> {pay} <ChevronRight size={16} className="ml-6 md:ml-[30%] sm:ml-[20%]" />
                </button>
              ))}
            </div>
            <div className="w-10/12 rounded-lg p-2 grid grid-flow-row gap-4 bg-gray-200 mx-auto my-2 overflow-x-scroll">
              <button onClick={() => goToStep(4)} className="text-left flex w-full">
                <p>Debit/Credit Cards <FaCcVisa size={24} /></p> <ChevronRight size={16} className="ml-6 md:ml-[30%] sm:ml-[20%]" />
              </button>
            </div>
            <div className="w-10/12 rounded-lg p-2 grid grid-flow-row gap-4 text-xs bg-gray-200 mx-auto my-2 overflow-x-scroll">
              <h1 className="text-left text-sm">Wallet</h1>
              {['Google Pay', 'Google Pay', 'Google Pay'].map((pay, idx) => (
                <button key={idx} onClick={() => goToStep(4)} className="grid grid-cols-3 gap-8 border-b-2 border-gray-300 py-2">
                  <FcGoogle size="1.1em" /> {pay} <ChevronRight size={16} className="ml-6 md:ml-[30%] sm:ml-[20%]" />
                </button>
              ))}
            </div>
            <button onClick={() => goToStep(4)} className="w-10/12 block rounded-lg px-2 py-4 text-sm bg-gray-200 mx-auto my-2">Net Banking</button>
          </div>
        );
      case 3:
        return (
          <div className="md:w-2/6 sm:w-1/2 text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl relative overflow-x-scroll">
            <ChevronLeft size={30} onClick={goToPreviousStep} className="absolute top-4 left-4 cursor-pointer" />
            <GrStatusGood size={80} className="mx-auto my-3" />
            <h3 className="text-center text-base">Payment Successful!</h3>
            <h1 className="text-center text-sm">Order ID: 124450</h1>
            <p className="text-center py-4">Tickets have been mailed via Email/SMS</p>
            <div className="w-full absolute bottom-0 flex-shrink-0 flex justify-center">
              <button onClick={() => goToStep(5)} className="bg-violet-950 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3">Download Ticket</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="md:w-2/6 sm:w-1/2 text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl relative overflow-x-scroll">
            <ChevronLeft size={30} onClick={goToPreviousStep} className="absolute top-4 left-4 cursor-pointer" />
            <h1 className="py-4">Add a Card</h1>
            <form onSubmit={handlePayment}>
              <div className="grid gap-2 grid-rows-2 md:w-4/5 w-5/6 mx-auto">
                <input type="text" className="text-center py-3 border-b-2" name="NameOnCard" placeholder="Name on Card" required />
                <input type="number" className="text-center py-3 border-b-2" name="CardNumber" placeholder="Card Number" required />
              </div>
              <div className="flex justify-around w-full gap-1 py-4 px-3">
                <div className="grid grid-flow-row gap-2">
                  <label htmlFor="DateEX" className="text-center">Expiry Date</label>
                  <input type="date" className="text-center text-sm py-3 border-b-2" id="DateEX" name="DateEX" required />
                </div>
                <input type="text" className="text-center border-b-2 py-3" name="CVV" placeholder="CVV" required />
              </div>
              <div className="w-full absolute bottom-0 flex-shrink-0 flex justify-center">
                <button type="submit" className="bg-violet-950 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3">Make Payment</button>
              </div>
            </form>
          </div>
        );
      case 5:
        return (
          <>
            {paymentStatus ? (
              <div className="md:w-2/6 sm:w-1/2 text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl relative overflow-x-scroll">
                <ChevronLeft size={30} onClick={goToPreviousStep} className="absolute top-4 left-4 cursor-pointer" />
                <div className="sm:w-full md:w-full w-[15rem] mx-auto text-[.5em] md:text-xs sm:text-xs grid grid-flow-row text-center">
                  <GrStatusGood size={80} className="mx-auto my-3" />
                  <h3 className="text-center text-base">Payment Successful!</h3>
                  <h1 className="text-center text-sm">Order ID: 124450</h1>
                  <p className="text-center py-4">Tickets have been mailed via Email/SMS</p>
                </div>
                <div className="w-full absolute bottom-2 flex-shrink-0 justify-center grid grid-flow-row">
                  <Link to="/dashboard" className="w-full py-2">Go to Home</Link>
                  <div className="w-11/12 grid grid-cols-2 gap-2 mx-auto md:text-xs sm:text-xs text-[.6em]">
                    <button className="bg-violet-950 text-white rounded-md sm:py-3 md:py-3 py-2 px-1">Download your ticket</button>
                 <Link to="/sharing"> <button className="bg-violet-950 text-white rounded-md sm:py-3 md:py-3 py-2 px-1">Share to social media</button> </Link>
                  </div>
                </div>
              </div>
            ) : goToStep(1)}
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

  const goToStep = (step) => {
    setCurrentStep(step);
  };

  const handlePayment = (event) => {
    event.preventDefault();
    //to Simulate payment processing...
    setTimeout(() => {
      setPaymentStatus(true);
      goToStep(3);
    }, 1000);
  };

  return (
    <div className="relative">
      <div className="flex items-center bg-black bg-opacity-70 justify-center w-full h-screen fixed z-10">
        {renderCurrentStep()}
      </div>
      <BookPage />
    </div>
  );
}
