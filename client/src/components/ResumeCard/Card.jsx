import React from "react";

const Card = ({ image, title, score, date, status, analysis }) => {
  const statusColors = {
    "Excellent": "from-green-500 to-emerald-500",
    "Strong Match": "from-blue-500 to-cyan-500",
    "Good Match": "from-indigo-500 to-purple-500",
    "Needs Work": "from-orange-500 to-red-500",
  };

  return (
    <div className="
      group 
      w-full
      sm:w-[280px] 
      md:w-[320px]
      lg:w-[350px]
      bg-white/5 
      backdrop-blur-xl 
      rounded-2xl 
      shadow-2xl 
      border 
      border-white/10 
      p-3.5
      hover:scale-[1.03] 
      hover:border-indigo-500/40
      hover:shadow-indigo-500/10
      transition-all 
      duration-300 
      cursor-pointer 
      overflow-hidden 
      relative
    ">

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 via-indigo-500/0 to-indigo-500/5 pointer-events-none"></div>

      {/* Status Badge */}
      <div
        className={`absolute top-2.5 left-2.5 bg-gradient-to-r ${statusColors[status]} text-white px-2.5 py-0.5 rounded-full text-[10px] font-black z-10 shadow-md shadow-black/20 tracking-wider uppercase`}
      >
        {status}
      </div>

      {/* Card Image */}
      <div className="relative overflow-hidden rounded-lg mb-3 h-[130px] z-10 border border-white/5">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-1.5 right-1.5 bg-black/75 backdrop-blur-md text-white px-2 py-0.5 rounded-md text-[10px] font-black tracking-wider border border-white/10">
          {score}%
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2 z-10 relative">
        <h3 className="text-sm font-bold text-white group-hover:text-indigo-400 transition-colors duration-300 line-clamp-2 leading-snug">
          {title}
        </h3>

        <div className="flex justify-between items-center text-[11px]">
          <span className="text-gray-400">Skills:</span>
          <span className="text-gray-200 font-semibold line-clamp-1 max-w-[135px] text-right">
            {analysis}
          </span>
        </div>

        <div className="flex justify-between items-center text-[11px]">
          <span className="text-gray-400">Date:</span>
          <span className="text-gray-200 font-semibold">{date}</span>
        </div>

        {/* Score Bar */}
        <div className="pt-1.5">
          <div className="flex justify-between text-[11px] text-gray-400 mb-1">
            <span>Score</span>
            <span className="font-semibold text-gray-200">{score}%</span>
          </div>
          <div className="w-full bg-white/10 rounded-full h-1.5">
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                score >= 90
                  ? "bg-gradient-to-r from-green-400 to-emerald-500"
                  : score >= 80
                  ? "bg-gradient-to-r from-blue-400 to-cyan-500"
                  : score >= 70
                  ? "bg-gradient-to-r from-indigo-400 to-purple-400"
                  : "bg-gradient-to-r from-orange-400 to-red-400"
              }`}
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 pt-2.5">
          <button className="flex-1 bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-white py-1.5 px-2 rounded-lg font-bold text-[11px] transition-all duration-300 shadow-md shadow-indigo-600/10 hover:shadow-indigo-600/25 hover:scale-[1.02] cursor-pointer">
            View
          </button>
          <button className="flex-1 bg-white/5 hover:bg-white/10 text-gray-200 py-1.5 px-2 rounded-lg font-bold text-[11px] transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-[1.02] cursor-pointer">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
