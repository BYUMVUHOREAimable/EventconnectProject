import React from 'react'
import Image from '../../assets/profile-picture.jpg';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineCalendar,HiBookmark } from 'react-icons/hi';
import { FiDollarSign } from 'react-icons/fi'

export default function SearchCard() {
  return (
      <div className="md:h-24 md:w-[97%] sm:w-[20] sm:h-20 w-[23em]  p-1 flex mx-auto">
          <div className="md:w-1/6 sm:w-1/6 w-3/12 aspect-square bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${Image})` }}></div>
          <div className="w-4/6">
            <div className='flex'>
                <h1 className='p-1 px-2 font-bold text-xs AdventPro'>Electronic Steve-Music Festival</h1>
                <HiBookmark size={20} className=' ml-[55%]'/>
            </div>
              <div className="w-full">
                  <div className="float-left p-1">
                      <p className="flex text-gray-500 text-[0.8em] Akaya">
                          <CiLocationOn size={14} /> Bangalore
                      </p>
                      <p className="flex text-gray-500 text-[0.6em] Akaya">
                          <HiOutlineCalendar size={14} />10 February
                      </p>
                  </div>
                  <div className="float-right">
                      <p className="text-gray-500 text-[0.6em] Akaya">starting from</p>
                      <p className="flex"><FiDollarSign size={16} /> 1230</p>
                  </div>
              </div>
          </div>
      </div>
  )
}
