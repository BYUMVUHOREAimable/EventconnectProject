import React from 'react'
import { Outlet } from 'react-router-dom'
import background from '../assets/background.jpg'

export default function authe_layout() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
        <div className='hidden sm:block'>
            <img className='w-full h-full object-cover' src={background} alt="background" />
            </div>        
            <Outlet/>
        </div>
        
    )
}
