import React from 'react'
import HeaderBar from '../components/HeaderBar'
import Footer from '../components/Footer'
import CategoryCard from '../components/SubComponents/CategoryCard'
import UpcmEventCard from '../components/SubComponents/UpcmEventCard'
import EventCard from '../components/SubComponents/EventCard'
import Searchbar from '../components/Searchbar'
// eslint-disable-next-line
import SearchDisplay from '../components/SearchDisplay'
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
          <HeaderBar />
          <Searchbar/>
          <SearchDisplay/>
          <main className="flex-grow flex flex-col mt-2">
              <div className="mb-4 ml-5">
                  <div className="font-bold text-left text-gray-700 py-3 AdventPro" >Categories</div>
                  <div className='grid grid-flow-col gap-2 overflow-x-scroll'>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                    <CategoryCard/>
                  </div>
                  <div className="font-bold text-left text-gray-700 py-3 AdventPro" >Up Coming Events</div>
                  <div className='grid grid-flow-col gap-2 overflow-x-scroll py-4'>
                      <UpcmEventCard />
                      <UpcmEventCard />
                      <UpcmEventCard />
                      <UpcmEventCard/>
                      <UpcmEventCard />
                  </div>
                  <div className="font-bold text-left text-gray-700 py-3 AdventPro" >Events around</div>
                  <div className='grid grid-flow-col w-full gap-2 overflow-x-scroll py-2'>
                      <EventCard />
                      <EventCard />
                      <EventCard />
                      <EventCard />
                      <EventCard />
                  </div>
              </div>
          </main>
          <Footer/>
    </div>
  )
}
