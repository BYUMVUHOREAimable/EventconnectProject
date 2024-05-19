import React, { useState } from 'react';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FcGoogle } from 'react-icons/fc'

export default function BookingTransc1() {


     return (
          <div className="flex items-center  bg-blue-950 bg-opacity-50 justify-center w-full h-screen">
               <div className="w-2/6  h-[90vh] bg-white rounded-2xl p-3 justify-center items-center ">
                    <h1 className='text-center'>Add a Card</h1>
                    <form>
                         <input type="text" className="form-control" placeholder="Full Name" name="cardName" />
                         <input type="text" className="form-control" placeholder="Phone Number" name="cardNumber" />
                         <input type="email" className="form-control" placeholder="Email address" name="cardNumber" />
                         <input type="number" className="form-control" placeholder="No. of guests*  (min 50)" name="cardNumber" />
                         <h1>Function Type</h1>
                         <input type="radio" className="form-control"  name="cardNumber"  value="Pre-Wedding"/>
                         <input type="radio" className="form-control"  name="cardNumber"  value="Wedding"/>
                         <input type="radio" className="form-control"  name="cardNumber"  Value="Other Celebration"/>
                         
                    </form>
                    <button className="bg-violet-950 text-white px-4 py-2 rounded-md w-80 mb-4">Share</button>
               </div>
          </div>
     );
}



