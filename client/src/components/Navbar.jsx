import React from "react";

const Navbar = () => {
  return (
<nav className="w-full max-w-[1100px] mx-auto mt-4 bg-white shadow-md py-2 px-4 flex items-center justify-between rounded-full">



      
      <h1 className="text-3xl font-bold text-black">
        Resume
      </h1>

     
      <button className="bg-indigo-600 text-white px-4 py-2  hover:bg-indigo-700 transition rounded-full">
        Upload Resume
      </button>

    </nav>
  );
};

export default Navbar;
