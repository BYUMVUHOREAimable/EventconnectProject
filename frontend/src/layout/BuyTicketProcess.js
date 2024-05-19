import React from 'react'
import { Outlet } from 'react-router-dom'


export default function BookProcess() {
    return (
        <div className="flex items-center bg-blue-950 bg-opacity-50 justify-center w-full h-screen">
            <Outlet/>
        </div>
    )
}
