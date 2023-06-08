import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className=" flex justify-center sticky ">
      <nav className="w-3/6 bg-black text-white text-xs py-1 px-5 rounded-b-xl opacity-90 border-b-4 border-t-0 border-gray-500">
        <button className="bg-gray-700 m-2 rounded-md py-1 px-2 hover:text-slate-400">
          <Link to="/">Home</Link>
        </button>

        <button className="bg-gray-700 m-2 rounded-md py-1 px-2 hover:text-slate-300">
          <Link to="/favorites">Favorites</Link>
        </button>

        <button className="bg-gray-700 m-2 rounded-md py-1 px-2 hover:text-slate-300">
          <Link to="/about">About</Link>
        </button>
      </nav>
    </div>
  );
}

export default NavBar;
