import React from "react";

const Navbar = () => {
  return (
    <nav
      className="w-[87%] max-w-6xl
      mx-auto mt-4
    backdrop-blur-xl bg-white/10 border border-white/20
    shadow-[0_10px_40px_rgba(0,0,0,0.35)]
    py-2 px-5 flex items-center justify-between rounded-full "
    >
      <h1
        className="text-xl sm:text-2xl md:text-3xl font-bold
      bg-gradient-to-r from-cyan-300 via-indigo-300 to-purple-400
      bg-clip-text text-transparent"
      >
        Resume
      </h1>

      <button
        className="bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-600
      text-white text-sm sm:text-base px-5 py-2 rounded-full
      shadow-lg hover:scale-105 hover:shadow-xl
      transition-all duration-300"
      >
        Resume Analyzer
      </button>
    </nav>
  );
};

export default Navbar;

