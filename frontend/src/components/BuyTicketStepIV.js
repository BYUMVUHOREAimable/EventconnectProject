import React from 'react'

export default function BookingStepIV() {
  return (
      <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-x text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl  relative overflow-x-scroll">
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
                  <button className="bg-violet-950 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3">Make payment</button>
              </div>
          </form>
      </div>
  )
}
