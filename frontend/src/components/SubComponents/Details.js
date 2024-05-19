import React from 'react'
import {Share2,Bookmark,DollarSign} from 'react-feather'

export default function Details() {
  return (
      <div className="flex items-center ml-4">
          <div>
              <div>
                  <Share2 size={20} className="mr-1 text-gray-400" />
                  <Bookmark size={20} className="mr-1 text-gray-400" />
              </div>
              <p className="font-semibold text-[.5em] sm:text-sm md:text-lg text-gray-600 ">Starting from</p>
              <div className="flex items-center">
                  <DollarSign size={18} className="mr-1 text-gray-600" />
                  <p className="mr-1 text-gray-600">1200</p>
              </div>
          </div>
      </div>
  )
}
