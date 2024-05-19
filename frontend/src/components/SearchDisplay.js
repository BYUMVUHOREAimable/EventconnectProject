import React from 'react'
import SearchCard from './SubComponents/SearchCard'

export default function SearchDisplay() {
  return (
<div className='w-full mx-auto bg-gray-100 p-2 rounded-b-xl absolute z-10 '>
      <div className='flex gap-2 h-10 border-b-2 border-black text-white sm:text-xs md:text-xs text-[0.5em] overflow-x-scroll w-1/4ll'>
            <button type="" className=' bg-indigo-800 rounded-t sm:w-1/4 md:w-1/4 w-2/5' >Events</button>
            <button type='' className=' bg-indigo-800 rounded-t sm:w-1/4 md:w-1/4 w-2/5'>Wedding Venues</button>
            <button type="" className=' bg-indigo-800 rounded-t sm:w-1/4 md:w-1/4 w-2/5'>Meeting Venues</button>
            <button type="" className=' bg-indigo-800 rounded-t sm:w-1/4 md:w-1/4 w-2/5'>Saved</button>
        </div>
        <div className=' overflow-y-scroll'>
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
            <SearchCard/>
        </div>
    </div>
  )
}
