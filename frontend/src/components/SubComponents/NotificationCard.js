import React from 'react'
import Image from '../../assets/image.jpg'

export default function NotificationCard() {
  return (
      <div className='flex p-3 gap-3 text-justify hover:bg-gray-100 rounded-3xl'>
          <div className=' aspect-square w-2/12 bg-cover bg-center rounded-full' style={{ backgroundImage: `url(${Image})` }}></div>
          <div className='w-9/12 text-[.6em]'>
              lorem ipsum dolor sit amet, consectetur adipiscing el aspect et lorem ipsum
          </div>
      </div>
  )
}
