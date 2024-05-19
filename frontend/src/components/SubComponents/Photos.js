import React from 'react'
import { ChevronRight } from 'react-feather'
import playgroundsImg from '../../assets/playgrounds.jpg'
export default function Photos() {
  return (
    <>
          <p className="mt-4 font-semibold text-gray-800">Photos</p>
          <p className="flex-shrink-0 flex justify-end font-light text-xs text-pink-950">view all</p>
          <div>
              <div className="mt-2 flex rounded-lg overflow-x-auto">
                  <div className="flex rounded-lg">
                      <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
                      <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
                      <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
                      <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
                      <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
                      <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
                      <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
                      <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
                      <img src={playgroundsImg} alt="PlaygroundPhoto" className="w-32 h-32 mr-2" />
                  </div>
              </div>
          </div>
          <div className="flex-shrink-0 flex justify-end">
              <ChevronRight size={24} className="mr-4" />
          </div>
    </>
  )
}
