import React from 'react';

const AboutSecond = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4'>
      <div className='my-8'>
        <h2 className='text-2xl text-center font-bold mb-4'>Event Connect Objective</h2>
        <div className='flex gap-4 max-sm:text-sm max-md:text-md lg:text-lg text-left max-md:flex-col lg:flex-row'>
          <p className='px-4 py-2'>
            Event Connect is an event management system aimed at digitalizing the process of event preparation through connecting event planners and event owners.
          </p>
          <p className='px-4 py-2'>
            The platform allows users to register events such as festivals, weddings, and meetings, and provides features for venue selection, ticketing, and exploring related offers and services.   
          </p>
          {/* Repeat other paragraphs */}
        </div>
      </div>
      <div className='my-8'>
        <h2 className='text-2xl text-center font-bold mb-4'>Goals, Objectives and Missions</h2>
        <div className='grid gap-4 md:text-xl text-center' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(21rem , 1fr))" }}>
          <p className='px-4 py-2'>
            Digitalize the event preparation process.
          </p>
          <p className='px-4 py-2'>
            Streamline event registration and prepayment
          </p>
          <p className='px-4 py-2'>
            Provide a platform for event organizers to find suitable venues and services
          </p>
          <p className='px-4 py-2'>
            Enhance user experience and convenience in event plan.
          </p>
          {/* Repeat other paragraphs */}
        </div>
      </div>
      <div className='w-full'>
        <h2 className='text-2xl text-center font-bold mb-4'>Impacts In The Society</h2>
        <div className='flex justify-evenly text-xl lg:gap-10 max-md:gap-0 lg:flex-row max-md:flex-col'>
          <ol className='text-left max-md:text-center p-1 flex flex-col'>
            <li>Enhanced Local Economy</li>
            <li>Efficient Event Planning</li>
            <li>Improved Communication</li>
          </ol>
          <ol className='text-right max-md:text-center p-1 flex flex-col'>
            <li>Increased Accessibility</li>
            <li>Local Artists and Entrepreneurs support</li>
          </ol>
        </div>
      </div>
      <div className='my-5 w-full flex items-center flex-col px-[2rem]'>
        <h2 className='text-2xl text-center font-bold mb-4'>Our Uniqueness</h2>
        <div className='grid gap-[1rem] text-center items-center' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(19rem , 1fr))" }}>
          <div className='w-full h-full border-2 border-[#20B486] rounded-lg flex flex-col items-center justify-center p-[1rem]'>
            <span className='border-b-2'>
              <h3 className="font-bold text-xl border-b-2 border-black">Unique User Experience</h3>
            </span>
            <span className='p-[1rem]'>
              <p>The system offers a unique and intuitive user experience that simplifies the process of finding and attending events.
              </p>
            </span>
          </div>
          <div className='w-full h-full border-2 border-[#20B486] rounded-lg flex flex-col items-center justify-center p-[1rem]'>
            <span className=''>
              <h3 className="font-bold text-xl border-b-2 border-black">User Engagement</h3>
            </span>
            <span className='p-[1rem]'>
              <p>The system facilitates seamless connections and interaction between attendees and event planners, creating a vibrant community and enhancing the overall event experience.
              </p>
            </span>
          </div>
          <div className='w-full h-full border-2 border-[#20B486] rounded-lg flex flex-col items-center justify-center p-[1rem]'>
            <span className=''>
              <h3 className="font-bold text-xl border-b-2 border-black">Revenue Potencial</h3>
            </span>
            <span className='p-[1rem]'>
              <p>The platform uses innovative algorithms to provide personalised event recommendations based on user preferences, enhancing user experience and increasing event discovery.
              </p>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSecond;
