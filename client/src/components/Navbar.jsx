
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-[95%] max-w-[1150px] mx-auto mt-4 bg-indigo-500 shadow-md py-2 px-5 flex items-center justify-between rounded-full">

      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
        Resume
      </h1>

      <button className="bg-indigo-300 text-black text-sm sm:text-base px-4 py-2 rounded-full hover:bg-indigo-700 transition">
        Upload Resume
      </button>

    </nav>
  );
};

export default Navbar;
