import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Sparkles } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full border-b border-white/5 bg-[#030712]/75 backdrop-blur-xl py-4 px-6 fixed top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-xl font-bold text-white tracking-tight flex items-center gap-1.5">
          <span>ResumeAI</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-semibold text-white relative py-1 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-indigo-500 after:rounded-full">
            Home
          </Link>
          <a href="#features" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-300">
            Features
          </a>
          <a href="#pricing" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-300">
            Pricing
          </a>
          <a href="#about" className="text-sm font-semibold text-gray-400 hover:text-white transition-colors duration-300">
            About
          </a>
        </div>

        {/* Right Actions */}
        <div>
          <button
            onClick={() => navigate("/form")}
            className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-indigo-500/20 hover:shadow-indigo-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer flex items-center gap-1.5"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Analyze Resume</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

