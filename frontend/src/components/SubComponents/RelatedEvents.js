import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image1 from '../../assets/arenas.jpg'
import Image2 from '../../assets/background.jpg'
import Image3 from '../../assets/avatar.png'
import Image4 from '../../assets/bangalorephoto.jpg'
import Image5 from '../../assets/basketplayground.jpg'
import Image6 from '../../assets/basketplayground.jpg'
import Image7 from '../../assets/ground.jpeg'
import Image8 from '../../assets/blog-1.png'
import Image9 from '../../assets/comedy.jpeg'
import Image10 from '../../assets/comedy1.jpeg'
import Image11 from '../../assets/comedy2.jpg'
import Image12 from '../../assets/comedy3.jpg'
import Image13 from '../../assets/comedy4.webp'
import Image14 from '../../assets/practise.png'
import Image15 from '../../assets/playgrounds.jpg'
import Image16 from '../../assets/image.jpg'
import Image17 from '../../assets/quotationMark.png'
import Image18 from '../../assets/shake.png'
import Image19 from '../../assets/stade.jpg'

const RelatedEvents = () => {
  const data = [
    {
      id: 1,
      img: Image1,
      header: "Wedding",
      description: "Describe this related event.",
      additionaltext: "This is an additional text.",
      additionalImg: Image2,
      additionalDesc: "This is an additional Description.",
      divStyles: "",
      imgStyles: "",
      textStyles: "",
      additionalStyles: "",
      otherStyles: ""
    },
    {
      id: 2,
      img: Image3,
      header: "Wedding",
      description: "Describe this related event.",
      additionaltext: "This is an additional text.",
      additionalImg: Image4,
      additionalDesc: "This is an additional Description.",
      divStyles: "",
      imgStyles: "",
      textStyles: "",
      additionalStyles: "",
      otherStyles: ""
    },
    {
      id: 3,
      img: Image5,
      header: "Wedding",
      description: "Describe this related event.",
      additionaltext: "This is an additional text.",
      additionalImg: Image6,
      additionalDesc: "This is an additional Description.",
      divStyles: "",
      imgStyles: "",
      textStyles: "",
      additionalStyles: "",
      otherStyles: ""
    },
    {
      id: 4,
      img: Image7,
      header: "Wedding",
      description: "Describe this related event.",
      additionaltext: "This is an additional text.",
      additionalImg: Image8,
      additionalDesc: "This is an additional Description.",
      divStyles: "",
      imgStyles: "",
      textStyles: "",
      additionalStyles: "",
      otherStyles: ""
    },
    {
      id: 5,
      img: Image9,
      header: "Wedding",
      description: "Describe this related event.",
      additionaltext: "This is an additional text.",
      additionalImg: Image10,
      additionalDesc: "This is an additional Description.",
      divStyles: "",
      imgStyles: "",
      textStyles: "",
      additionalStyles: "",
      otherStyles: ""
    },
    {
      id: 6,
      img: Image10,
      header: "Wedding",
      description: "Describe this related event.",
      additionaltext: "This is an additional text.",
      additionalImg: Image11,
      additionalDesc: "This is an additional Description.",
      divStyles: "",
      imgStyles: "",
      textStyles: "",
      additionalStyles: "",
      otherStyles: ""
    },
    {
      id: 7,
      img: Image12,
      header: "Wedding",
      description: "Describe this related event.",
      additionaltext: "This is an additional text.",
      additionalImg: Image13,
      additionalDesc: "This is an additional Description.",
      divStyles: "",
      imgStyles: "",
      textStyles: "",
      additionalStyles: "",
      otherStyles: ""
    },
    {
      id: 8,
      img: Image14,
      header: "Wedding",
      description: "Describe this related event.",
      additionaltext: "This is an additional text.",
      additionalImg: Image15,
      additionalDesc: "This is an additional Description.",
      divStyles: "",
      imgStyles: "",
      textStyles: "",
      additionalStyles: "",
      otherStyles: ""
    },
    {
      id: 9,
      img: Image16,
      header: "Wedding",
      description: "Describe this related event.",
      additionaltext: "This is an additional text.",
      additionalImg: Image17,
      additionalDesc: "This is an additional Description.",
      divStyles: "",
      imgStyles: "",
      textStyles: "",
      additionalStyles: "",
      otherStyles: ""
    },
    {
      id: 10,
      img: Image18,
      header: "Wedding",
      description: "Describe this related event.",
      additionaltext: "This is an additional text.",
      additionalImg: Image19,
      additionalDesc: "This is an additional Description.",
      divStyles: "",
      imgStyles: "",
      textStyles: "",
      additionalStyles: "",
      otherStyles: ""
    }
  ]
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  
  return (
    <div className='my-10 w-full px-5 py-10 bg-[#ecfcf6]'>
      <div>
      <Slider {...settings}>
        {data.map((carousel) => (
          <div className={`w-40 h-60 rounded-md flex flex-col justify-center items-center text-center p-3`} id={carousel.id}>
            <img src={carousel.img} alt={carousel.description} title={carousel.description} className='w-1/2 h-1/2 m-auto rounded-full self-center' />
            <div className='text-[#20B486] text-center'>
              <h1 className='text-xl font-semibold'>{carousel.header}</h1>
              <p className='text-md'>{carousel.description}</p>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
  )
}

export default RelatedEvents
