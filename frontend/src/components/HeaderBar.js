import React from 'react'
import { MapPin, ChevronDown, Bell } from 'react-feather';
import profilePicture from '../assets/image.jpg'


export default function HeaderBar() {
  return (
      <header className="flex items-center justify-between px-4 py-2  text-gray-600">
          <div className="flex items-center">
              <MapPin size={20} />
              <div className="ml-2">
                  <div className="flex items-center">
                      <div className="mr-2 text-xs Akaya">Bangalore</div>
                      <ChevronDown size={20} />
                  </div>
                  <div className="text-gray-800 text-sm AdventPro">Sheshadri Road</div>
              </div>
          </div>
          <div className="flex items-center">
              <Bell size={25} className="text-pink-600 mr-2" />
              <a  href='/profile'
                  className="w-8 aspect-square mr-1"
              ><div 
                    style={{
                        backgroundImage: `url(${profilePicture})`,
                    }}
                    className='w-full h-full bg-center bg-cover rounded-full'></div>
              </a>
          </div>
      </header>
  )
}
