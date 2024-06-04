import React from 'react'
//import Navbar from './Navbar'
import Popular from './SubComponents/Popular'
//import Footer from './Footer'
import NewEvents from './SubComponents/NewEvents'
import Image1 from '../assets/img4.webp'
import Image2 from '../assets/kglUp.jpg'
import Image3 from '../assets/genz1.png'
import Image4 from '../assets/kglUp1.jpg'
import Image5 from '../assets/gorilla.jpg'
import Image6 from '../assets/gorilla.webp'
import Image7 from '../assets/kigaliUpFestival.jpeg'
import Image8 from '../assets/virunga.webp'
import Image9 from '../assets/genz.jpg'
import Image10 from '../assets/gorilla2.jpeg'
import Image11 from '../assets/genz.webp'
import Image12 from '../assets/genz.png'
import Image13 from '../assets/genz.jpeg'
import { Link } from 'react-router-dom'

const Services = () => {
     const newEvents = [
          {
               id: 1,
               topic: "Events",
               link: "/bookVenueTicket/:id",
               title: "Kwita izina",
               shortDesc: "Participate the ceremony and give your name.",
               mainContent: "Experience one of the world's most important celebrations of nature and meet Rwanda’s newborn baby gorillas",
               subContent1: "The ceremony is an opportunity to thank the communities that live around Volcanoes National Park, our research partners, vets and the dedicated conservationists, rangers and trackers who protect the gorillas.",
               address: "Musanze",
               hours: "full day",
               phone: "078 221 1212",
               photos: [Image6, Image10, Image5, Image8],
               normalTicket: 5000,
               vipTicket: 1200,
               img: Image1,
               img2: Image10
          },
          {
               id: 2,
               topic: "Events",
               link: "/bookVenueTicket/:id",
               title: "KIGALI UP FESIVA",
               shortDesc: "Festivals By ishyoarts",
               mainContent: "Ishyo has been a partner of this unique outdoor music festival which brings together, every year since 2011, world-renowned artists from different horizons for live shows.",
               subContent1: "Over the years, this music festival has featured world music, reggae, funk, blues, hip hop and root artists from around the globe.",
               address: "Kigali",
               hours: "15-22 h",
               phone: "078 221 1212",
               photos: [Image7, Image2, Image4],
               normalTicket: 5000,
               vipTicket: 12000,
               vvipTicket: 30000,
               img: Image2,
               img2: Image2
          },
          {
               id: 3,
               topic: "Events",
               link: "/bookVenueTicket/:id",
               title: "Genz Comedy Show",
               shortDesc: "It showcases stand up comedians across Rwanda.",
               mainContent: "GEN-Z COMEDY SHOW Innovative comedy show, founded by Rwandan comedian @mercindaruhutse, known as Fally Merci.",
               subContent1: "Gen Z comedy show celebrates two years in mega concert.",
               address: "CAMP KIGALI",
               hours: "From 18 h",
               phone: "078 221 1212",
               photos: [Image9, Image11, Image3, Image13],
               normalTicket: 5000,
               vipTicket: 10000,
               img: Image3,
               img2: Image12
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