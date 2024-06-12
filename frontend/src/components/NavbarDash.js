import React from 'react';
import { FaBars } from 'react-icons/fa';

function NavbarDash() {
  return (
    <div className="p-2 bg-gray-400 text-white flex justify-between items-center md:hidden">
      <div className="text-2xl font-bold">Event connect</div>
      <button className="text-white">
        <FaBars size={24} />
      </button>
    </div>
  );
}

export default NavbarDash;
