import React from 'react';
import { FaTachometerAlt, FaChartBar, FaTable, FaBell, FaIcons, FaMap, FaPlus } from 'react-icons/fa';

const menuItems = [
  { icon: <FaTachometerAlt />, label: 'Dashboard' },
  { icon: <FaPlus />, label: 'Create event' },
  { icon: <FaChartBar />, label: 'Widgets' },
  { icon: <FaTable />, label: 'Tables' },
  { icon: <FaBell />, label: 'Notifications' },
  { icon: <FaIcons />, label: 'Icons' },
  { icon: <FaMap />, label: 'Maps' },
  // Add more items as needed
];

function SidebarDashboard() {
  return (
    <div className="w-64 bg-gray-800 text-white h-full hidden md:block">
      <div className="p-4">
        <h1 className="text-2xl font-bold">Event connect</h1>
      </div>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className="flex items-center px-4 py-2 hover:bg-gray-700">
            <span className="mr-2">{item.icon}</span>
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SidebarDashboard;
