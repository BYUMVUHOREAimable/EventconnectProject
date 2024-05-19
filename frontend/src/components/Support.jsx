import React from 'react'
import Navbar from './Navbar'
import { FaMoneyBill } from 'react-icons/fa'
import Footer from './Footer'
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
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vero esse suscipit quae adipisci sed dolore, assumenda totam aliquid aut iusto.
                         <span className='max-sm:hidden'>
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vero esse suscipit quae adipisci sed dolore, assumenda totam aliquid aut iusto.
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vero esse suscipit quae adipisci sed dolore, assumenda totam aliquid aut iusto.
                         </span>
                    </p>
               </article>
          </div>
          <div className='text-center my-[1rem] justify-center items-center flex flex-col'>
               <h2 className='text-xl font-bold'>Contributions</h2>
               <div className='grid gap-[1rem] my-[1rem] max-sm:w-full md:w-5/6' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(290px , 1fr))" }}>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaMoneyBill className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>First Contribution</h3>
                    </article>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaMoneyBill className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>First Contribution</h3>
                    </article>
                    <article className='p-[1rem] flex flex-col shadow-lg justify-center items-center'>
                         <FaMoneyBill className='text-4xl text-[#20B486]' />
                         <h3 className='text-xl'>First Contribution</h3>
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

