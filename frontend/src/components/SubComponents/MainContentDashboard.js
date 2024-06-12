import React from 'react';
import { heroImg } from '../../assets';


const stats = [
  { bg: 'bg-blue-500', title: "Today's Bookings", count: 4006, percent: '10.00% (30 days)' },
  { bg: 'bg-purple-500', title: 'Total Bookings', count: 61344, percent: '22.00% (30 days)' },
  { bg: 'bg-indigo-500', title: 'Number of Meetings', count: 34040, percent: '2.00% (30 days)' },
  { bg: 'bg-red-500', title: 'Number of Clients', count: 47033, percent: '0.22% (30 days)' },
];

const reports = [
  { title: 'Order Details', description: 'The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc.' },
  { title: 'Sales Report', description: 'The total number of sessions within the date range. It is the period time a user is actively engaged with your website, page or app, etc.' },
];

function MainContentDashboard() {
  return (
    <div className="flex-grow p-4 bg-gray-100 overflow-auto">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/2">
           <div className="text-center">
            <h3 className="text-2xl font-semibold">31°C Kigali, Rwanda</h3>
          </div>
         <img src={heroImg} alt="Weather" className="w-full h-auto" />
         
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:w-1/2 mt-4 md:mt-0">
          {stats.map((item, index) => (
            <div key={index} className={`${item.bg} text-white p-4 rounded`}>
              <h4 className="text-xl">{item.title}</h4>
              <p className="text-2xl">{item.count}</p>
              <p>{item.percent}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        {reports.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded shadow">
            <h4 className="text-xl font-semibold">{item.title}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContentDashboard;
