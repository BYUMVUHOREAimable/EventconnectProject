import React from 'react'
import { Outlet } from 'react-router-dom'
import background from '../assets/shake.png'
//import HeaderBar from '../components/HeaderBar';
import { Navbar } from '../components'

export default function SignInOption() {
    return (
        <div className='h-fit min-h-screen w-screen overflow-hiddengrid flex' id='authMain'>
            <Navbar />
            <div className='flex justify-center w-full' id='authImg'>
                <img className='w-1/2 h-2/3 self-center' src={background} alt="background" />
            </div>
            <Outlet />
        </div>
    )
}