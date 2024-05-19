import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FastForward, Framer, Figma } from 'react-feather';

const ImgCarousel = () => {
  const data = [
    {
      "id": 1,
      "head": "Wedding",
      "otherContent": "This is also another content",
      "icon": <FastForward />
    },
    {
      "id": 2,
      "head": "Meeting",
      "otherContent": "This is also another content",
      "icon": <Figma />
    },
    {
      "id": 3,
      "head": "Birthday",
      "otherContent": "This is also another content",
      icon: <Framer />
    },
    {
      "id": 5,
      "head": "Festival",
      "otherContent": "This is also another content",
      icon: <FastForward />
    },
    {
      "id": 6,
      "head": "Church",
      "otherContent": "This is also another content",
      icon: <Figma />
    },
    {
      "id": 7,
      "head": "Wedding",
      "otherContent": "This is also another content",
      icon: <FastForward />
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000
  };

  return (
    <div className='w-full md:w-11/12 lg:w-3/4 xl:w-2/3 mx-auto'>
      <Slider {...settings} className='mt-10 md:mt-20 lg:mt-32'>
        {data.map((carousel) => (
          <div key={carousel.id} className="w-full p-4 md:p-2 bg-white rounded-xl relative overflow-hidden">
            <div className='w-full h-auto md:h-[18rem] lg:h-[20rem] flex flex-col justify-center items-center'>
              <span className='text-4xl text-indigo-700 font-bold'>{carousel.icon}</span>
              <strong className='font-bold text-2xl md:text-3xl lg:text-4xl text-blue-950'>{carousel.head} <span className='text-indigo-400'>VENUE</span></strong>
              <span className='text-sm text-blue-950'>{carousel.otherContent}</span>
            </div>
            <div className='absolute bg-blue-950 w-full h-5 bottom-0'></div>
            <div className='absolute bg-blue-950 w-1/3 h-10 bottom-0'></div>
            <div className='absolute bg-blue-950 w-1/3 h-10 bottom-0 right-0'></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImgCarousel;
