import React from 'react'
import { FaChartLine, FaCommentDots, FaDonate, FaGift, FaHandsHelping, FaHandshake, FaPen, FaShareSquare } from 'react-icons/fa'
import { TbNews, } from 'react-icons/tb'
import Footer from './Footer'
import Navbar from './Navbar'
import ContactUs from './SubComponents/ContactUs'

const Support = () => {
  return (
    <div className=''>
     <Navbar />
      <main className='pt-16 my-[1rem]'>
          <div className='justify-center items-center text-center px-[.5rem] max-md:w-full w-5/6 py-[1rem]'>
               <h className='text-2xl text-left font-bold'>How Can We Help You?</h>
               <article className='my-[1rem]'>
                
                    <p className='mb-[1rem]'>
                    Supporting our mission means more than just a financial contribution; it's about becoming a vital part of our journey towards growth and improvement.
                         <span className='max-sm:hidden'>
                         Your support enables us to expand our reach, enhance our services, and create meaningful experiences for our community. Every contribution, no matter how small, plays a significant role in our collective success. <span className='max-lg:hidden'>Together, we can strive for excellence and achieve our goals. Thank you for considering to support our mission.</span>
                         </span>
                    </p>
               </article>
          </div>
          <div className='text-center my-[1rem] justify-center items-center flex flex-col'>
               <h2 className='text-xl font-bold'>Contributions</h2>
               <div className='grid gap-[1rem] my-[1rem] max-sm:w-full md:w-5/6' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(290px , 1fr))" }}>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaHandsHelping className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>Volunteering</h3>
                    </article>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaPen className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>Creating Content</h3>
                    </article>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaDonate className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>Monetary Contribution</h3>
                    </article>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <TbNews className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>Attending Events</h3>
                    </article>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaHandshake className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>Partnership</h3>
                    </article>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaChartLine className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>Buy Shares</h3>
                    </article>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaGift className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>Donating Resources</h3>
                    </article>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaShareSquare className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>Referral Programs</h3>
                    </article>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaCommentDots className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>Providing Feedback</h3>
                    </article>
               </div>
          </div>
          <ContactUs />
      </main>
     <Footer />
    </div>
  )
}

export default Support

