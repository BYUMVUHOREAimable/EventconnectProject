import React from 'react';

export default function BookingTransc1() {


     return (
          <div className="flex items-center  bg-blue-950 bg-opacity-50 justify-center w-full h-screen">
               <div className="w-2/6  h-[90vh] bg-white rounded-2xl p-3 justify-center items-center ">
                    <h1 className='text-center'>Add a Card</h1>
                    <form>
                         <input type="text" className="form-control" placeholder="Name on Card" name="cardName" />
                         <input type="text" className="form-control" placeholder="Card Number" name="cardNumber" />
                         <div className='grid grid-cols-2 gap-5'>
                              <div className=''>
                                   <p>Expiry Date</p>
                                   <input type="date" className="form-control" placeholder="Expiry Date" name="date" />
                              </div>
                              <div className=''>
                                   <p>CVV</p>
                                   <input type="date" className="form-control" placeholder="Expiry Date" name="date" />
                              </div>
                         </div>
                    </form>
                    <button className="bg-violet-950 text-white px-4 py-2 rounded-md w-80 mb-4">Make Payment</button>
               </div>
          </div>
     );
}



