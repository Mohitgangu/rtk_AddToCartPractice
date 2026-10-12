
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const val=useSelector((store)=>{
    let ans=0;
    for(let item of store.Cartz){
      ans +=item.quantity;
    }
    return ans
  })
  return (
    <nav className="bg-gradient-to-r from-[#0a0a0a] via-[#1f0a0a] to-[#141414] text-white flex justify-between items-center px-8 py-4 shadow-xl border-b-2 border-[#E50914]">

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

       {
        val > 0 && (
             <span className="absolute -top-2 -right-4 bg-gradient-to-r from-[#E50914] to-red-700 text-white text-xs font-bold h-5 w-5 rounded-full flex items-center justify-center shadow-md shadow-red-900/40">
            {val}
          </span>
        )
       }
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
