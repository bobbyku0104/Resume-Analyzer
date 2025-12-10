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
      sm:w-[260px] 
      md:w-[300px]
      lg:w-[330px]
      bg-white/30 
      backdrop-blur-xl 
      rounded-2xl 
      shadow-xl 
      border 
      border-white/40 
      p-3 
      hover:scale-[1.03] 
      transition-all 
      duration-300 
      cursor-pointer 
      overflow-hidden 
      relative
    ">

      {/* Soft gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-100/40 via-purple-100/30 to-pink-100/40 pointer-events-none"></div>

      {/* Status Badge */}
      <div
        className={`absolute top-2 left-2 bg-gradient-to-r ${statusColors[status]} text-white px-2 py-0.5 rounded-full text-[10px] font-bold z-10 shadow-md`}
      >
        {status}
      </div>

      {/* Card Image */}
      <div className="relative overflow-hidden rounded-lg mb-2 h-[120px] z-10">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-1 right-1 bg-black/80 text-white px-1.5 py-0.5 rounded-md text-[10px] font-bold">
          {score}%
        </div>
      </div>

      {/* Content */}
      <div className="space-y-1 z-10 relative">
        <h2 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h2>

        <div className="flex justify-between items-center text-[11px]">
          <span className="text-gray-500">Skills:</span>
          <span className="text-gray-700 font-medium line-clamp-1 max-w-[120px] text-right">
            {analysis}
          </span>
        </div>

        <div className="flex justify-between items-center text-[11px]">
          <span className="text-gray-500">Date:</span>
          <span className="text-gray-700 font-medium">{date}</span>
        </div>

        {/* Score Bar */}
        <div className="pt-1">
          <div className="flex justify-between text-[11px] text-gray-600 mb-0.5">
            <span>Score</span>
            <span>{score}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
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
        <div className="flex gap-1.5 pt-2">
          <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-1 px-2 rounded-md font-semibold text-[11px] transition-all duration-300 shadow-sm">
            View
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-1 px-2 rounded-md font-semibold text-[11px] transition-all duration-300 border border-gray-200">
            Edit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
