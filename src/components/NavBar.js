// src/components/Navbar.js
import React from 'react';
import { FaBars, FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="bg-white shadow-md">
      <div className="container mx-auto p-4 flex justify-between items-center relative">
        <div className="flex items-center">
          <button className="text-gray-700 text-2xl mr-4">
            <FaBars />
          </button>
          <span className="text-gray-700 text-xl">รายการโปรด</span>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <img src="./Logo.png" alt="Logo" width={'40px'} height={'40px'}/>
        </div>
        <div className="flex items-center">
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg mr-2 hover:bg-yellow-600">
            เข้าสู่ระบบ
          </button>
          <button className="border border-yellow-500 text-yellow-500 px-4 py-2 rounded-lg hover:bg-yellow-100">
            สมัคร
          </button>
          <FaUserCircle className="text-gray-700 text-3xl ml-4" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
