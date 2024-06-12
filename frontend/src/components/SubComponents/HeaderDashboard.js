import React from 'react';
import { FaBell, FaUserCircle } from 'react-icons/fa';

function HeaderDashboard() {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b shadow">
      <div>
        <h2 className="text-2xl font-semibold">Welcome Aimable</h2>
        <p>All systems are running smoothly! You have 3 unread alerts!</p>
      </div>
      <div className="flex items-center space-x-4">
        <FaBell size={24} className="text-gray-500" />
        <FaUserCircle size={40} className="text-gray-500" />
      </div>
    </div>
  );
}

export default HeaderDashboard;
