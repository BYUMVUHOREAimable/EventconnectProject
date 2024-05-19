import React from 'react'
import { GrStatusGood } from 'react-icons/gr';
import { Link } from 'react-feather';

export default function BookingStepIV() {
  return (
      <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-x text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl  relative overflow-x-scroll">
          <div className='sm:w-full md:w-full w-[15rem] mx-auto text-[.5em] md:text-xs sm:text-xs  grid grid-flow-row text-center '>
              <GrStatusGood size={80} className='mx-auto my-3' />
              <h3 className=' text-center text-base'>Payment Successful!</h3>
              <h1 className='text-center text-sm'> Order ID: 124450</h1>
              <p className='text-center py-4'>Tickets has been mailed via
                  Email/ SMS</p>
          </div>
          <div className='w-full absolute bottom-2 flex-shrink-0 justify-center grid grid-flow-row'>
              <Link to='/dashboard' className='w-full py-2'>Go to Home</Link>
              <div className='w-11/12 grid grid-cols-2 gap-2 mx-auto md:text-xs sm:text-xs text-[.6em]'>
                  <button className="bg-violet-950 text-white rounded-md  sm:py-3 md:py-3 py-2 px-1">Download Invoice</button>
                  <button className="bg-violet-950 text-white  rounded-md sm:py-3 md:py-3 py-2 px-1">Download Share invite</button>
              </div>
          </div>
      </div>
  )
}
