import React from 'react';
import { FaBell } from 'react-icons/fa'
import NotificationCard from './SubComponents/NotificationCard';

export default function Notification() {
    return (
        <div className="flex items-center  bg-blue-950 bg-opacity-50 justify-center w-full h-screen absolute top-0 left-0 z-10">
            <div className="md:w-2/6 sm:w-1/2 md:text-sm sm:text-x text-center w-full h-full md:max-h-[94vh] sm:max-h-[94vh] bg-white rounded-2xl  overflow-y-scroll absolute md:left-4 sm:left-2 left-0">
                <div className='flex'>
                    <button type="" className=' float-right px-4 md:invisible sm:invisible visible'>x</button>
                    <h1 className='text-center md:w-full sm:w-full w-4/5 py-6 px-12 flex gap-4 float-left'> <FaBell size={20} /> Notifications</h1>
                </div>
                <div className='w-11/12 grid gap-1 grid-flow-row mx-auto'>
                    {/* Cards */}
                    <NotificationCard/>
                    <NotificationCard/>
                </div>
            </div>
        </div>
    );
}