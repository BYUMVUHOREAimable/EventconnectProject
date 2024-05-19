import React from 'react'
import{
    Dribbble,
    Sliders,
    Key
} from 'react-feather'

export default function Sports() {
  return (
    <>
          <div className="mt-4">
              <p className="font-semibold text-gray-800">Available Sports</p>
              <div className="flex items-center ml-2">
                  <div className="flex items-center">
                      <Dribbble size={20} className="mr-1" />
                      <p className="mr-4 text-gray-400">Football</p>
                  </div>
                  <div className="flex items-center">
                      <Sliders size={20} className="mr-1" />
                      <p className="mr-4 text-gray-400">Badminton</p>
                  </div>
                  <div className="flex items-center">
                      <Key size={20} className="mr-1" />
                      <p className='text-gray-400'>Box Cricket</p>
                  </div>
              </div>
          </div>
    </>
  )
}
