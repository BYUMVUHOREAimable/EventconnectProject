import React from 'react'
import { Link } from 'react-router-dom'

const MissingBody = () => {
  return (
    <div className='w-full p-3 text-center h-screen flex flex-col justify-center'>
       <div className='w-5/6 p-10 self-center shadow-2xl shadow-current align-middle'>
          <span className='text-slate-800 text-4xl'>404: <br />Page Not Found</span>
          <div className='text-2xl text-slate-800 pt-20'><Link to='/home' className='hover:text-blue-900'>Return <span className='text-blue-700'>Home</span> </Link></div>
       </div>
    </div>
  )
}

export default MissingBody