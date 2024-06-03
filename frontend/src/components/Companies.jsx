import React from 'react';
import { companyLogo1, companyLogo2, companyLogo3, companyLogo4  } from '../assets';

const Companies = () => {
  return (
    <div className='w-full bg-white py-[50px]'>
        <div className='md:max-w-[1480px] m-auto max-w-[600px]  px-4 md:px-0'>
            <h1 className='text-center text-2xl font-bold text-[#536E96]'>Trusted by over 500 teams around the Rwanda.</h1>
            <p className='text-center  text-[#536E96] text-xl'>Event Connect partners offer the high-quality of goods and services to all.</p>
            <div className='flex justify-center py-8 md:gap-8 '>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-2'>
                  <img src={companyLogo1} alt='companyLogo1' className='max-h-[5rem] min-w-[10rem]' />
                  <img src={companyLogo2} alt='companyLogo2' className='max-h-[5rem] min-w-[10rem]' />
                  <img src={companyLogo3} alt='companyLogo3' className='max-h-[5rem] min-w-[10rem]' />
                  <img src={companyLogo4} alt='companyLogo4' className='max-h-[5rem] min-w-[10rem]'/>
                </div>
            </div>
        
        </div>

    </div>
  )
}

export default Companies