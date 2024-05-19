import React from 'react'
import {GrStatusGood} from 'react-icons/gr'

export default function BookingStepIII() {
  return (
      <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-x text-center w-full h-full md:max-h-[90vh] sm:max-h-[90vh] bg-white text-violet-950 rounded-2xl  relative overflow-x-scroll">
          <GrStatusGood size={80} className='mx-auto my-3' />
          <h3 className=' text-center'>Payment Successful!</h3>
          <h1 className='text-center'> Order ID: 124450</h1>
          <p className='text-center py-4'>Tickets has been mailed via
              Email/ SMS</p>
          <div className='w-full absolute bottom-0 flex-shrink-0 flex justify-center'>
              <button className="bg-violet-950 text-white px-4 py-2 rounded-md w-4/5 mx-auto mb-3">Download Ticket</button>
          </div>
      </div>
  )
}
