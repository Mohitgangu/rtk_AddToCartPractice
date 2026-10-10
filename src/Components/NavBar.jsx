
import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="bg-[#141414] text-white flex justify-between items-center px-8 py-4 shadow-lg border-b border-gray-800">

      <h1 className="text-3xl font-extrabold text-[#E50914] tracking-wide cursor-pointer hover:opacity-80 transition duration-300">
        Logo
      </h1>

      <div className="flex items-center gap-8 text-lg font-medium">
        <Link
          to="/home"
          className="text-gray-200 hover:text-[#E50914] transition duration-300"
        >
          Home
        </Link>

        <div className="relative">
          <Link
            to="/cart"
            className="text-gray-200 hover:text-[#E50914] transition duration-300"
          >
            🛒 Cart
          </Link>
          <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center">2</span>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
