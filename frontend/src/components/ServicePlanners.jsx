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

const ServicePlanners = () => {
     const eventVenues = [
          {
               id: 1,
               topic: "Products",
               link: "/bookVenueTicket/:id",
               title: "Event 1",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               provider: "Bangarole",
               items: 2,
               hours: "12hrs",
               photos: [Image1, Image2, Image3, Image4],
               normalTicket: 2000,
               vipTicket: 5000,
               vvipTicket: 10000,
               img: Image1
          },
          {
               id: 2,
               topic: "Products",
               link: "bookVenueTicket/:id",
               title: "Product 2",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               provider: "Kinchasa",
               items: 10,
               hours: "24hrs",
               photos: [Image1, Image2, Image3, Image4],
               normalTicket: 4000,
               vipTicket: 6000,
               img: Image2
          },
          {
               id: 3,
               topic: "Products",
               link: "bookVenueTicket/:id",
               title: "Product 3",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               provider: "Camp Kgl",
               items: 5,
               hours: "24/7",
               photos: [Image1, Image2, Image3, Image4],
               normalTicket: 5000,
               vipTicket: 7000,
               vvipTicket: 15000,
               img: Image3
          },
          {
               id: 4,
               topic: "Products",
               link: "bookVenueTicket/:id",
               title: "Product 4",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               provider: "Arena",
               items: 100,
               hours: "12hrs",
               photos: [Image1, Image2, Image3, Image4],
               normalTicket: 2500,
               vipTicket: 5500,
               vvipTicket: 12000,
               img: Image4
          },
          {
               id: 5,
               topic: "Products",
               link: "bookVenueTicket/:id",
               title: "Product 5",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               provider: "Pele Stad",
               items: 78,
               hours: "10hrs",
               photos: [Image1, Image2, Image3, Image4],
               normalTicket: 3000,
               img: Image1
          }
     ]
  return (
    <div>
     <Navbar />
     <main className='pt-20 max-sm:px-[.5rem] md:pl-[1rem] md:mr-[2cm] flex flex-col text-center justify-center'>
          <div className='justify-center items-center w-full'>
               <h className='text-2xl font-bold'>Event Venues</h>
               <article>
                    <p className='mb-[1rem]'>
                         Where every detail matters and every moment is memorable. <br />
                         <span className='max-sm:hidden'>
                              Crafting perfection in every detail, creating memories in every moment. Our events are designed to delight and leave a lasting impression, ensuring that every second is unforgettable.
                         </span>
                    </p>
                    <Link to={'/services'} className='max-sm:px-2 sm:px-4 md:px-[6%] py-2 max-sm:py-1 sm:mx-[1rem] md:m-0 rounded-lg bg-[#20B486] text-white shadow-md'>Attending Events</Link>
               </article>
               <Popular data={ eventVenues } />
          </div>
          <div>
               <h className='text-2xl font-bold'>Available Decorations</h>
               <p className='my-[1rem]'>
                    Transform your event into a spectacular affair with our exquisite decorations. We blend elegance with affordability, ensuring your celebration stands out without breaking the bank.               </p>
               <NewEvents newEvents={eventVenues} />
          </div>
          <div>
               <h className='text-2xl font-bold'>Available Meals</h>
               <p className='my-[1rem]'>
                    Savor a culinary journey filled with tantalizing flavors and impeccable hygiene. Our diverse menu offers a delightful array of dishes, each crafted with the highest standards of cleanliness and freshness, ensuring a dining experience that delights the senses and nourishes the soul.
               </p>
               <NewEvents newEvents={eventVenues} />
          </div>
          <div>
               <h className='text-2xl font-bold'>Additional Items</h>
               <p className='my-[1rem]'>
                    Elevate every moment of your event with our premium audiovisual services, designed to captivate and engage your audience without breaking the bank. From crisp sound to vibrant visuals, we provide state-of-the-art technology and expert support, ensuring that every aspect of your event shines with professionalism and impact.
               </p>
               <NewEvents newEvents={eventVenues} />
          </div>
     </main>
     <Footer />
    </div>
  )
}

export default ServicePlanners