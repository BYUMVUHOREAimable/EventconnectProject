import React from 'react';
import backgroundImg from '../../assets/bangalorephoto.jpg'; // Replace with your own background image
import { Bookmark, MapPin, Calendar, DollarSign } from 'react-feather';

const HomepagePhoto = () => {
  return (
    <div className="flex flex-col w-[14em] h-[11em] sm:w-[17em] sm:h-[12em] md:w-[20em] md:h-[16em] ">
      {/* Background Image */}
      <div
        className="flex-grow h-[80%] relative bg-cover bg-center"
        style={{
          backgroundImage: `url(${backgroundImg})`,
          borderRadius: '10px',
        }}
      >
        <Bookmark size={20} className="absolute top-4 right-4" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center">
          <h1 className=" font-semibold-100 text-white text-center text-xs bg-white bg-opacity-80 p-2 mb-0 w-full">See Details</h1>
        </div>
      </div>
      <main className="bg-white-600 py-2 px-2 flex-grow">
        <div className='flex'>
          <h2 className="font-semibold text-[0.7em] md:text-sm AdventPro">Coolulu Kormangala Turf Park</h2>
        <div className="flex justify-center flex-grow">
          <DollarSign size={17} />
          <p className="mr-2 text-light-100 text-[0.8em] ">1600</p>
        </div>
        </div>
        <div className='flex flex-grow md:text-sm Akaya text-gray-700 py-3'>
          <MapPin size={"1em"} />
          <p className="ml-1 text-[0.5em] md:text-xs">Bangalore</p>
          <Calendar size={15} className="ml-3" />
          <p className="ml-1 text-[0.5em] md:text-xs">10 February</p>
        </div>
      </main>
    </div>
  );
};

export default HomepagePhoto;
