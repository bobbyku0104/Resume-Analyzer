

import React from "react";

const Card = ({ image, title, score, date, status, analysis }) => {
  
  const statusColors = {
    "Excellent": "bg-gradient-to-r from-green-500 to-emerald-500",
    "Strong Match": "bg-gradient-to-r from-blue-500 to-cyan-500", 
    "Good Match": "bg-gradient-to-r from-indigo-500 to-purple-500",
    "Needs Work": "bg-gradient-to-r from-orange-500 to-red-500"
  };

  return (
    <div className="group bg-white/95 backdrop-blur-sm shadow-md rounded-2xl p-4 hover:scale-102 transition-all duration-300 cursor-pointer border border-gray-100 hover:border-indigo-200 hover:shadow-lg relative overflow-hidden">
      
      
      <div className={`absolute top-3 left-3 ${statusColors[status]} text-white px-2 py-1 rounded-full text-xs font-bold z-10 shadow-md`}>
        {status}
      </div>

      
      <div className="relative overflow-hidden rounded-xl mb-3">
        <img
          src={image}
          alt={title}
          className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-500"
        />
        
       
        <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-lg text-xs font-bold">
          {score}%
        </div>
      </div>

      
      <div className="space-y-2">
        <h2 className="text-sm font-semibold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300 line-clamp-2 leading-tight">
          {title}
        </h2>
        
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500">Skills:</span>
          <span className="text-gray-700 font-medium">{analysis}</span>
        </div>
        
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-500">Date:</span>
          <span className="text-gray-700 font-medium">{date}</span>
        </div>

       
        <div className="pt-1">
          <div className="flex justify-between text-xs text-gray-600 mb-1">
            <span>Score</span>
            <span>{score}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div 
              className={`h-1.5 rounded-full transition-all duration-500 ${
                score >= 90 ? "bg-gradient-to-r from-green-400 to-emerald-500" :
                score >= 80 ? "bg-gradient-to-r from-blue-400 to-cyan-500" :
                score >= 70 ? "bg-gradient-to-r from-indigo-400 to-purple-400" :
                "bg-gradient-to-r from-orange-400 to-red-400"
              }`}
              style={{ width: `${score}%` }}
            ></div>
          </div>
        </div>

        
        <div className="flex gap-2 pt-2">
          <button className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-1.5 px-3 rounded-lg font-semibold text-xs transition-all duration-300 hover:shadow-md">
            View Report
          </button>
          <button className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 py-1.5 px-3 rounded-lg font-semibold text-xs transition-all duration-300 border border-gray-200">
            Edit
          </button>
        </div>
      </div>

     
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
    </div>
  );
};

export default Card;
