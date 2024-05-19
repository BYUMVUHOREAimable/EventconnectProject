import React from 'react'

export default function BookStepI() {
  return (
      <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-x text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl  relative overflow-x-scroll">
          <h1 className='py-6'>Add a Card</h1>
          <form>
              <div className='grid gap-2 grid-rows-2 md:w-4/5 w-5/6 mx-auto'>
                  <input type="text" className="py-3 border-b-2" name="name" placeholder='Full Name' required />
                  <input type="number" className="py-3 border-b-2" name="phone" placeholder='Phone Number' required />
                  <input type="email" className="py-3 border-b-2" name="email" placeholder='Email Address' required />
                  <input type="number" className="py-3 border-b-2" name="guestNumber" placeholder='No. of guests*(Min 50)' required />
              </div>
              <div className='grid gap-2 grid-rows-4 md:w-45 w-5/6 mx-auto text-left py-3'>
                  <h1 className=' row-span-2'>Function Type</h1>
                  <span className='flex gap-3'>
                      <input type='radio' name="functionType" id='function' value="ValueA" required /> Pre wedding
                  </span>
                  <span className='flex gap-3'>
                      <input type='radio' name="functionType" id='function' value="ValueB" required /> Wedding
                  </span>
                  <span className='flex gap-3'>
                      <input type='radio' name="functionType" id='function' value="valueC" required />Other Celebration
                  </span>
              </div>
              <div className='w-full  text-[.5em] md:text-xs sm:text-xs absolute bottom-2 grid grid-flow-row text-center '>
                  <button type='submit' className="bg-violet-950 w-4/5 mx-auto text-white rounded-md p-3">Make payment</button>
              </div>
          </form>
      </div>
  )
}
