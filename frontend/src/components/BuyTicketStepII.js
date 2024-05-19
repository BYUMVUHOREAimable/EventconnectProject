import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import {ChevronRight} from 'react-feather'

export default function BookingTransc1() {
     

     return (
          <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-xs w-4/5 min-h-[90vh] bg-white rounded-2xl p-3 relative">
               <h1 className='text-center text-sm py-7'>Payment method</h1>
               <div className='w-10/12 p-2 rounded-lg grid grid-flow-row gap-4 text-xs bg-gray-200 mx-auto my-2 overflow-x-scroll'>
                    <h1 className='text-left text-sm'>UP1</h1>
                    <a href='/buyTicket/stepII' className='grid grid-cols-3  gap-8 border-b-2 border-gray-300 py-2'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></a>
                    <a href='/buyTicket/stepII' className='grid grid-cols-3  gap-8 border-b-2 border-gray-300 py-2'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></a>
                    <a href='/buyTicket/stepII' className='grid grid-cols-3  gap-8 py-2'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></a>
               </div>
               <div className='w-10/12 rounded-lg p-2 grid grid-flow-row gap-4 bg-gray-200 mx-auto my-2 overflow-x-scroll'>
                    <a href='/buyTicket/stepII' className='text-left flex w-full'>Debit/Credit Cards  <ChevronRight size={16} className=" md:ml-[30%] sm:ml-[20%] ml-6" /></a>
               </div>
               <div className='w-10/12 rounded-lg p-2 grid grid-flow-row gap-4 text-xs bg-gray-200 mx-auto my-2 overflow-x-scroll'>
                    <h1 className='text-left text-sm'>Wallet</h1>
                    <a href='/buyTicket/stepII' className='grid grid-cols-3  gap-8 border-b-2 py-2 border-gray-300'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></a>
                    <a href='/buyTicket/stepII' className='grid grid-cols-3  gap-8 border-b-2 py-2 border-gray-300'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></a>
                    <a href='/buyTicket/stepII' className='grid grid-cols-3  gap-8'><FcGoogle size={"1.1em"} /> Google Pay  <ChevronRight size={16} className="md:ml-[30%] sm:ml-[20%] ml-6" /></a>
               </div>
               <a href='/buyTicket/stepII'  className='w-10/12 block rounded-lg px-2 py-4 text-sm bg-gray-200 mx-auto my-2 '>Net Banking</a>
          </div>
     );
}



