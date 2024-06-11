import React from 'react';
import Navbar from './Navbar';
import SidebarDashboard from './SiderbarDashboard';

const NewDashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="flex-1 p-4 mt-20">
        <SidebarDashboard />
         </div>
      <div className="flex-1 p-4 mt-20">
      
      <header className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold">Welcome Aamir</h1>
          <p className="text-gray-600">All systems are running smoothly! You have <span className="text-blue-500">3 unread alerts</span>!</p>
        </div>
        <div>
          <p className="text-gray-600">Today (10 Jan 2021)</p>
        </div>
      </header>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <p className="text-2xl">31°C</p>
          <p className="text-gray-600">Chicago, Illinois</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg">
          <p className="text-2xl">4006</p>
          <p>Today's Bookings</p>
        </div>
        <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg">
          <p className="text-2xl">61344</p>
          <p>Total Bookings</p>
        </div>
        <div className="bg-red-500 text-white p-6 rounded-lg shadow-lg">
          <p className="text-2xl">47033</p>
          <p>Number of Clients</p>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
        <h2 className="text-xl font-bold mb-4">Order Details</h2>
        <p className="text-gray-600">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc.</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Sales Report</h2>
        <p className="text-gray-600">The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc.</p>
      </div>
      </div>
      </div>

  );
}

export default NewDashboard;