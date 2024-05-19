import React from 'react'
import Navbar from './Navbar'
import AboutFirst from './SubComponents/AboutFirst'
import AboutSecond from './SubComponents/AboutSecond'
import AboutTeam from './SubComponents/AboutTeam'
import Footer from './Footer'

const About = () => {
  return (
    <div>
     <Navbar />
     <main className='pt-16 flex flex-col'>
          <h1 className='max-sm:text-xl md:text-4xl text-center p-3 font-bold sm:w-full md:w-3/4 self-center'>Find Event Near You Easily And Broadcast Your Events For Free</h1>
          <AboutFirst />
          <AboutSecond />
          <AboutTeam />
     </main>
     <Footer />
    </div>
  )
}

export default About