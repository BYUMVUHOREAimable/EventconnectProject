import React from 'react'
import { MapPin } from 'react-feather'

export default function Direction(props) {
  return (
    <>
          {/* Map Pin, Directions */}
          <div className="flex items-center mt-4">
              <MapPin size={20} className="ml-1 text-gray-400" />
              <p className='text-gray-400'>Directions</p>
          </div>

          {/* Address */}
          <div className="mt-4 flex">
              <p className="font-semibold underline  text-gray-800">Address:</p>
              <p className="ml-1 text-gray-400">
                  234, 3rd Cross Red, Jokkasandra Extension, Koramangala, Bengaluru, Karnataka 560034
              </p>
          </div>

          {/* Hours */}
          <div className="mt-2 flex">
              <p className="font-semibold underline text-gray-800">Hours:</p>
              <p className="ml-1 text-gray-400">7am - 2am</p>
          </div>

          {/* Phone */}
          <div className="mt-2 flex">
              <p className="font-semibold underline text-gray-800">Phone:</p>
              <p className="ml-1 text-gray-400">07406388666</p>
          </div>
    </>
  )
}
