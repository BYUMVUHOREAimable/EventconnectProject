import React from 'react'
//import Navbar from './Navbar'
import Popular from './SubComponents/Popular'
//import Footer from './Footer'
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
               link: "/bookVenueTicket/:id",
               title: "Event 1",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               subContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               subContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               subContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               goldStars: 3,
               blankStars: 2,
               img: Image1
          },
          {
               id: 2,
               link: "/bookVenueTicket/:id",
               title: "Event 2",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               subContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               subContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               subContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               goldStars: 4,
               blankStars: 1,
               img: Image2
          },
          {
               id: 3,
               link: "/bookVenueTicket/:id",
               title: "Event 3",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               subContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               subContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               subContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               goldStars: 3,
               blankStars: 2,
               img: Image3
          },
          {
               id: 4,
               link: "/bookVenueTicket/:id",
               title: "Event 4",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               subContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               subContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               subContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               goldStars: 5,
               blankStars: 0,
               img: Image4
          },
          {
               id: 5,
               link: "/bookVenueTicket/:id",
               title: "Event 5",
               shortDesc: "This is a short description of this event",
               mainContent: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dicta accusamus enim, animi aperiam",
               subContent1: "inventore necessitatibus impedit laboriosam quibusdam. Accusantium adipisci, explicabo mollitia est sunt nam laborum quod exercitationem nesciunt.",
               subContent2: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               subContent3: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               subContent4: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio, voluptate. Eius aut blanditiis ducimus porro fugit. Commodi, quod odio.",
               goldStars: 3,
               blankStars: 2,
               img: Image1
          }
     ]
  return (
    <div>
            {/*<Navbar />*/}
     <main className='pt-20 max-sm:px-[.5rem] md:pl-[5rem] md:mr-[10cm] flex flex-col text-center justify-center'>
          <div className='justify-center items-center'>
               <h className='text-2xl font-bold'>Popular Events</h>
               <article>
                    <p className='mb-[1rem]'>
                         Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vero esse suscipit quae adipisci sed dolore, assumenda totam aliquid aut iusto.
                         <span className='max-sm:hidden'>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vero esse suscipit quae adipisci sed dolore, assumenda totam aliquid aut iusto.
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo vero esse suscipit quae adipisci sed dolore, assumenda totam aliquid aut iusto.
                         </span>
                    </p>
                    <Link to={'/planners'} className='max-sm:px-2 sm:px-4 md:px-[6%] py-2 max-sm:py-1 sm:mx-[1rem] md:m-0 rounded-lg bg-[#20B486] text-white shadow-md'>For Event Planners</Link>
               </article>
               <Popular data={ newEvents } />
          </div>
          <div>
               <h className='text-2xl font-bold'>New Events</h>
               <p className='my-[1rem]'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id aspernatur nobis quaerat enim in eum quae voluptatibus beatae rerum voluptate, eaque natus commodi, modi incidunt quam impedit veritatis nam.
               </p>
               <NewEvents newEvents={ newEvents } />
          </div>
     </main>
            {/*<Footer />*/}
    </div>
  )
}

export default Services