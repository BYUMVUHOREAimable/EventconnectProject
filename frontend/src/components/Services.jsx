import React from 'react'
import Navbar from './Navbar'
import Popular from './SubComponents/Popular'
import Footer from './Footer'
import NewEvents from './SubComponents/NewEvents'
import Image1 from '../assets/background.jpg'
import Image2 from '../assets/stade1.jpeg'
import Image3 from '../assets/achievement.png'
import Image4 from '../assets/bangalorephoto.jpg'
import { Link } from 'react-router-dom'

const Services = () => {
     const newEvents = [
          {
               id: 1,
               topic: "Events",
               link: "/bookVenueTicket/:id",
               title: "Event 1",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               address: "Bangarole",
               hours: "7-10 h",
               phone: "078 221 1212",
               photos: [Image1, Image2, Image3, Image4],
               normalTicket: 2000,
               vipTicket: 5000,
               vvipTicket: 10000,
               img: Image1
          },
          {
               id: 2,
               topic: "Events",
               link: "/bookVenueTicket/:id",
               title: "Event 2",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               address: "Kinchasa",
               hours: "7-10 h",
               phone: "078 221 1212",
               photos: [Image1, Image2, Image3, Image4],
               normalTicket: 4000,
               vipTicket: 6000,
               img: Image2
          },
          {
               id: 3,
               topic: "Events",
               link: "/bookVenueTicket/:id",
               title: "Event 3",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               address: "Camp Kgl",
               hours: "3-10 h",
               phone: "078 221 1212",
               photos: [Image1, Image2, Image3, Image4],
               normalTicket: 5000,
               vipTicket: 7000,
               vvipTicket: 15000,
               img: Image3
          },
          {
               id: 4,
               topic: "Events",
               link: "/bookVenueTicket/:id",
               title: "Event 4",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               address: "Arena",
               hours: "8- 19 h",
               phone: "078 221 1212",
               photos: [Image1, Image2, Image3, Image4],
               normalTicket: 2500,
               vipTicket: 5500,
               vvipTicket: 12000,
               img: Image4
          },
          {
               id: 5,
               topic: "Events",
               link: "/bookVenueTicket/:id",
               title: "Event 5",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               address: "Pele Stad",
               hours: "7-10 h",
               phone: "078 221 1212",
               photos: [Image1, Image2, Image3, Image4],
               normalTicket: 3000,
               img: Image1
          }
     ]
  return (
    <div>
     <Navbar />
     <main className='pt-20 max-sm:px-0 max-sm:mx-[.2rem] md:pl-[1rem] md:mr-[1cm] flex flex-col text-center justify-center'>
          <div className='justify-center items-center'>
               <h className='text-2xl font-bold'>Popular Events</h>
               <article>
                    <p className='mb-[1rem]'>
                         Crafting experiences that leave a lasting impression. <br />
                         <span className='max-sm:hidden'>
                              At the heart of our event planning is a commitment to creating moments that resonate long after the day has passed. We meticulously design each element to not just meet but exceed your expectations, ensuring that every experience we craft leaves a lasting impression on you and your guests. From the ambiance to the smallest detail, we aim to create events that are unforgettable
                         </span>
                    </p>
                    <Link to={'/planners'} className='max-sm:px-2 sm:px-4 md:px-[6%] py-2 max-sm:py-1 sm:mx-[1rem] md:m-0 rounded-lg bg-[#20B486] text-white shadow-md'>For Event Planners</Link>
               </article>
               <Popular data={ newEvents } />
          </div>
          <div>
               <h2 className='text-2xl font-bold'>New Events</h2>
               <p className='my-[1rem]'>
                    Embrace the future with our cutting-edge event solutions. From corporate gatherings to personal celebrations, we ensure your events are a step ahead, leaving a lasting impact.
               </p>
               <NewEvents newEvents={ newEvents } />
          </div>
     </main>
     <Footer />
    </div>
  )
}

export default Services