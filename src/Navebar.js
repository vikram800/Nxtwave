import React from 'react';
import { FaSearch, FaBell, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="flex items-center justify-between bg-gray-800 text-white px-6 py-3 shadow-md fixed top-0 left-0 w-full z-10">
      {/* Left: Logo and Navigation */}
      <div className="flex items-center gap-6">
        <div className="text-2xl font-bold">RISK HAWK</div>
        <div className="flex items-center gap-3 bg-gray-700 px-4 py-2 rounded-md">
          <FaSearch />
          <input
            type="text"
            placeholder="Chat / Feed chat"
            className="bg-transparent focus:outline-none text-sm"
          />
        </div>
      </div>

      {/* Center: Tabs */}
      <div className="flex gap-6">
        <button className="px-4 py-2 bg-gray-700 rounded-md">Cheyenne Bergson</button>
        <button className="px-4 py-2 bg-gray-700 rounded-md">Jonathan Higgins</button>
        <button className="px-4 py-2 bg-gray-700 rounded-md">Capt. Trunk</button>
        <button className="px-4 py-2 bg-gray-700 rounded-md">Hannibal Smith</button>
      </div>

      {/* Right: Notifications and Profile */}
      <div className="flex items-center gap-4">
        <FaBell className="text-xl cursor-pointer" />
        <div className="flex items-center gap-2">
          <FaUserCircle className="text-2xl" />
          <span className="hidden md:block">Palak Sharma</span>
        </div>
        <button className="bg-yellow-500 text-gray-900 px-4 py-2 rounded-md">Process Corner HOD</button>
        <button className="text-sm underline">Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
