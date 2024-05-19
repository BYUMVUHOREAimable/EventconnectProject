import React from 'react';

const AboutSecond = () => {
  return (
    <div className='flex flex-col justify-center items-center px-4'>
      <div className='my-8'>
        <h2 className='text-2xl text-center font-bold mb-4'>Heading Story</h2>
        <div className='grid gap-4 md:text-xl text-center' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(20rem , 1fr))" }}>
          <p className='px-4 py-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum autem ipsum nemo, asperiores corporis tempora magnam est voluptatem nisi illum beatae ratione quidem temporibus odit rerum explicabo, quam blanditiis velit
          </p>
          {/* Repeat other paragraphs */}
        </div>
      </div>
      <div className='my-8'>
        <h2 className='text-2xl text-center font-bold mb-4'>Project Description</h2>
        <div className='grid gap-4 md:text-xl text-center' style={{ gridTemplateColumns: "repeat(auto-fill, minmax(20rem , 1fr))" }}>
          <p className='px-4 py-2'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum autem ipsum nemo, asperiores corporis tempora magnam est voluptatem nisi illum beatae ratione quidem temporibus odit rerum explicabo, quam blanditiis velit
          </p>
          {/* Repeat other paragraphs */}
        </div>
      </div>
    </div>
  )
}

export default AboutSecond;
