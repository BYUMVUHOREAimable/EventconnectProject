import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
import { FaMapMarker } from 'react-icons/fa'
const ViewMore = ({ data, onClose }) => {
  return (
    <div className='fixed top-[3cm] max-lg:top-[2.4cm] left-[3cm] max-md:left-[.3rem] right-[3cm] max-md:right-[.3rem] bg-slate-200 p-[2rem] max-sm:p-[.4rem] z-10 flex flex-row max-lg:flex-col shadow-2xl text-left' key={data.id}>
     <AiFillCloseCircle className='absolute top-[.5rem] right-[.5rem] text-3xl text-[#20B486]' onClick={onClose} />
     <div className='w-3/5 max-lg:w-full max-md:h-5/6 max-sm:h-[4.6cm]'>
          <img src={data.img} alt={data.title} className='w-full h-full max-lg:max-h-[10cm] max-lg:inline hidden xl:inline' />
          <img src={data.img2} alt={data.title} className='w-full h-full max-lg:max-h-[10cm] max-lg:hidden xl:hidden' />
     </div>
     <div className='w-full px-[3rem] max-md:px-[1rem]'>
          <h1 className='text-xl font-bold'>{data.title}</h1>
          <p className='my-[.7rem] max-sm:text-md' id='viewmoreMainP'>
               {data.mainContent} <span className='max-sm:hidden'>{data.subContent1}</span>
          </p>
          <h3 className='text-lg flex items-center'><FaMapMarker className='mr-2' />Detail</h3>
          <div className='text-end max-sm:text-sm float-end' id='priceDetails'>
               <ol>
                    <li className='font-bold'>{data.topic === "Events" ? <span>Ticket</span> : <span>Price</span>}: {data.normalTicket} Frw</li>
                    {data.vipTicket && <li className={`font-bold ${data.topic === "Events" ? 'block' : 'hidden'}`}>VIP: {data.vipTicket} {data.title === "Kwita izina" ? "$" : "Frw"}</li>}
                    {data.vvipTicket && <li className={`font-bold ${data.topic === "Events" ? 'block' : 'hidden'} max-sm:hidden`}>VVIP: {data.vvipTicket} {data.title === "Kwita izina" ? "$" : "Frw"}</li>}
               </ol>
          </div>
          {data.topic === "Events" ? <ol className='max-sm:text-sm'>
               <li>Address: {data.address}</li>
               <li>Hours: {data.hours}</li>
               {data.phone ? <li>Phone: {data.phone}</li> : null}
               <li className=' max-lg:hidden'>Photos: 
                    <div className='flex'>
                    { data.photos.map((photo) => {
                         return (
                              <div className='w-full h-[3.5cm] p-2'>
                                   <img src={photo} alt={data.title} className='w-full h-full rounded-lg' />
                              </div>
                         )
                    })
                    }
                    </div>
               </li>
          </ol> : <ol className='max-sm:text-sm'>
               <li>Items: {data.items}</li>
               <li>Periods: {data.hours}</li>
               <li>Providers: {data.provider}</li>
               <li className=' max-lg:hidden'>Photos: 
                    <div className='flex'>
                    { data.photos.map((photo) => {
                         return (
                              <div className='w-full h-[3.5cm] p-2'>
                                   <img src={photo} alt={data.title} className='w-full h-full rounded-lg' />
                              </div>
                         )
                    })
                    }
                    </div>
               </li>
          </ol>}
     </div>
    </div>
  )
}
export default ViewMore
