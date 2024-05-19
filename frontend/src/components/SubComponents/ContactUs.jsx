import React from 'react'

const ContactUs = () => {
  return (
    <div className='my-[1rem] flex max-lg:flex-col xl:flex-row max-sm:p-[1rem] max-sm:px-[0%] md:p-[3rem] justify-center items-center'>
      <div className='flex flex-col gap-4 px-[3rem] max-sm:px-0'>
          <h2 className='text-2xl font-bold '>Contact Us</h2>
          <p>Need To Get In Touch With Us? Either FIll Out The Form With The Inquiry Or Find The 
               <a href="mailto: aimablebyumvuhore@gmail.com" className='text-blue-600'> Department Email</a> You Would Like To Contact Below
          </p>
      </div>
      <form className='w-full shadow-2xl lg:w-4/5 px-[2rem] py-[2rem] max-sm:px-[4%]'>
          <div className='flex w-full gap-5 max-lg:flex-row max-sm:flex-col max-xl:flex-col 2xl:flex-row'>
               <span className='w-full'>
                    <label>First Name</label>
                    <input type="text" className='bg-slate-200 w-full p-2 max-sm:px-[1rem] max-sm:py-[2%] rounded-sm' required />
               </span>
               <span className='w-full'>
                    <label>Last Name</label>
                    <input type="text" className='bg-slate-200 w-full p-2 max-sm:px-[1rem] max-sm:py-[2%] rounded-sm' required />
               </span>
          </div>
          <div className='w-full gap-5 my-[1rem]'>
               <label>Email</label>
               <input type="email" className='bg-slate-200 w-full p-2 max-sm:px-[1rem] max-sm:py-[2%] rounded-sm' required />
          </div>
          <div className='w-full gap-5 mb-[1rem]'>
               <label className='max-xl:text-sm'>What Can We Help You With</label>
               <textarea className='bg-slate-200 w-full p-2 max-sm:px-[1rem] max-sm:py-[2%] rounded-sm max-h-[4rem] outline-none' required ></textarea>
          </div>
          <div className='w-full flex justify-center'><button className='px-[2rem] py-[.7rem] mt-[1rem] text-white bg-[#20B486] hover:bg-[#6beac2] rounded-md'>Send</button></div>
      </form>
    </div>
  )
}

export default ContactUs

