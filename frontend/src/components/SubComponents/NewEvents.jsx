import React, { useState } from 'react'
import { FaStar, FaStarHalf } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import ViewMore from './ViewMore'

const NewEvents = ( { newEvents } ) => {
  const [viewMoreData, setViewMoreData] = useState(null);

  const handleViewMoreClick = (data) => {
    setViewMoreData(data);
  };
  return (
    <div className='grid gap-[1rem] my-[5rem] self-center' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(270px , 1fr))" }}>
      { newEvents.map((events) => (
          <div className='bg-slate-100 max-sm:h-[7cm] md:h-[10cm] w-full'>
               <div className='w-full h-3/4 relative overflow-hidden group'>
                    <img src={events.img} alt={events.title} className='w-full h-full' />
                    <div className='absolute bottom-[-4.3cm] max-sm:bottom-[-3.4cm] right-0 left-0 p-[.7rem] text-white bg-[#3335] group-hover:bottom-0' style={{transition: ".2s"}}>
                         <h3 className='text-xl mb-[1rem]'>{events.title}</h3>
                         <div>
                              <p className='mb-[2rem] max-sm:mb-0'>{events.shortDesc}</p>
                              <button className='border-2 border-white px-[1rem] py-[.3rem]' onClick={() => handleViewMoreClick(events)}>View More</button>
                         </div>
                    </div>
               </div>
               <div className='justify-between flex flex-row w-full items-center p-[1rem]'>
                    <span className='flex flex-row justify-between text-orange-400'>
                         <FaStar />
                         <FaStar />
                         <FaStar />
                         <FaStarHalf />
                         <FaStarHalf />
                    </span>
                    <Link to={events.link} className='px-[1rem] py-[.3rem] bg-[#20B486] text-white rounded-lg'>Book</Link>
               </div>
          </div>
     ))}
          {viewMoreData && <ViewMore data={viewMoreData} onClose={() => setViewMoreData(null)} />}
    </div>
  )
}

export default NewEvents