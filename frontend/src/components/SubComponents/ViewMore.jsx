import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'
const ViewMore = ({ data, onClose }) => {
  return (
    <div className='fixed top-[3cm] max-sm:top-[2cm] left-[3cm] max-md:left-[1rem] right-[3cm] max-md:right-[.6cm] h-fit overflow-y-auto bg-slate-100 p-[2rem] max-sm:p-[.4rem] z-10 flex flex-row max-lg:flex-col shadow-xl'>
     <AiFillCloseCircle className='absolute top-[.5rem] right-[.5rem] text-3xl text-[#20B486]' onClick={onClose} />
     <div className='bg-slate-400 w-2/5 max-lg:w-full lg:max-h-[12cm] max-lg:h-[6cm]'>
          <img src={data.img} alt={data.title} className='w-full h-full' />
     </div>
     <div className='p-[1rem] w-full px-[3rem] max-md:px-[1rem]'>
          <h1 className='text-2xl font-bold'>{data.title}</h1>
          <p className='my-[1rem] max-sm:text-xs'>
               {data.mainContent} <span className='max-sm:hidden'>{data.subContent1}</span>
          </p>
          <p className='grid gap-[1rem]' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(270px , 1fr))" }}>
               <span className='max-sm:hidden'>
                    {data.subContent2}
               </span>
               <span className='max-lg:hidden'>
                    {data.subContent3}
               </span>
               <span className='max-2xl:hidden'>
                    {data.subContent4}
               </span>
          </p>
     </div>
    </div>
  )
}
export default ViewMore
