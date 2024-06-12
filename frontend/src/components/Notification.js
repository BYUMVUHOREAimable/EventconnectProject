import React from 'react';
import { FaBell } from 'react-icons/fa';
import NotificationCard from './SubComponents/NotificationCard';
import Navbar from './Navbar';

export default function Notification() {
    return (
        <div>
      <Navbar/>
    <div className="flex items-center bg-blue-950 bg-opacity-50 justify-center w-full h-screen fixed top-0 left-0 z-10">
      <div className="md:w-2/6 sm:w-1/2 w-full md:max-h-[94vh] max-h-full bg-white rounded-2xl overflow-y-scroll relative">
        <div className="flex justify-between items-center p-6 border-b">
          <h1 className="flex items-center text-xl font-semibold gap-2">
            <FaBell size={24} /> Notifications
          </h1>
          <button type="button" className="text-lg font-semibold">x</button>
        </div>
        <div className="p-4 space-y-4">
          {/* Cards */}
          <NotificationCard />
          <NotificationCard />
        </div>
      </div>
            </div>
            </div>
  );
}
