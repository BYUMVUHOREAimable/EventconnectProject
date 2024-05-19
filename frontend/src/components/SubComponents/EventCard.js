import React from 'react';
import Image from '../../assets/profile-picture.jpg';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineCalendar } from 'react-icons/hi';
import { FiDollarSign} from 'react-icons/fi'

export default function EventCard() {
  return (
    <div className="md:h-24 md:w-[33em] sm:w-[20] sm:h-20 w-[23em]  p-1 flex">
      <div className="md:w-1/6 sm:w-1/6 w-3/12 aspect-square bg-cover bg-center rounded-xl" style={{ backgroundImage: `url(${Image})` }}></div>
      <div className="w-4/6">
        <h1 className='p-1 px-2 font-bold AdventPro'>Electronic Steve-Music Festival</h1>
        <div className="w-full">
          <div className="float-left p-1">
            <p className="flex text-gray-500 Akaya">
              <CiLocationOn size={18} /> Bangalore
            </p>
            <p className="flex text-gray-500 Akaya">
              <HiOutlineCalendar size={18} />10 February
            </p>
          </div>
          <div className="float-right">
            <p className="text-gray-500 Akaya">starting from</p>
            <p className="flex"><FiDollarSign size={18} /> 1230</p>
          </div>
        </div>
      </div>
    </div>
  );
}
