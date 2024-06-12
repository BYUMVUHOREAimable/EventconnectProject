import React from 'react';
import { FaBell, FaPlus, FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function HeaderDashboard() {
  return (
    <div className="flex justify-between items-center p-4 bg-white border-b shadow">
      <div>
        <h2 className="text-2xl font-semibold">Welcome Aimable</h2>
        <p>All systems are running smoothly! You have 3 unread alerts!</p>
      </div>
      <div className="flex items-center space-x-4">
       <Link to="/create">  <FaPlus size={20} className="text-gray-500" /></Link>
       <Link to="/notification"> <FaBell size={20} className="text-gray-500" /></Link>
      <Link to="/profile">  <FaUserCircle size={40} className="text-gray-500" /></Link>
      </div>
    </div>
  );
}

export default HeaderDashboard;
