import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc'

export default function BookingTransc1() {


     return (
          <div className="flex items-center  bg-blue-950 bg-opacity-50 justify-center w-full h-screen">
               <div className="w-2/6  h-[90vh] bg-white rounded-2xl p-3 justify-center items-center ">
                    <h1 className='text-center'>Add a Card</h1>
                    <form>
                         <input type="text" className="form-control" placeholder="Enter your name (FROM)" name="cardName" />
                         <input type="text" className="form-control" placeholder="Enter receivers name (TO)" name="cardNumber" />
                         <input type="number" className="form-control" placeholder="Message (60 words)" name="cardNumber" />
                         <div className='grid grid-cols-2 gap-5'>
                              <div className=''>
                                   <p>Expiry Date</p>
                                   <input type="date" className="form-control" placeholder="Date" name="date" />
                              </div>
                              <div className=''>
                                   <p>CVV</p>
                                   <input type="time" className="form-control" placeholder="Time" name="time" />
                              </div>
                         </div>
                    </form>
                    <ul>
                         <li>
                              copy Link
                         </li>
                    </ul>
               </div>
          </div>
     );
}



