import React from "react";

const WorkCard = ({ number, title, description, Icon }) => {
  return (
    <div className="flex flex-col items-center text-center max-w-sm mx-auto group">
      {/* Icon Container with Overlapping Number Badge */}
      <div className="relative w-20 h-20 bg-[#0d1226]/60 border border-white/10 rounded-2xl flex items-center justify-center mb-6 group-hover:border-indigo-500/40 transition-colors duration-300">
        <Icon className="w-8 h-8 text-indigo-400 group-hover:text-indigo-300 transition-colors duration-300" />
        
        {/* Step Number Circle Badge */}
        <div className="absolute -top-2.5 -right-2.5 w-7 h-7 bg-indigo-600 border-2 border-[#030712] text-white rounded-full flex items-center justify-center text-xs font-bold shadow-md">
          {number}
        </div>
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-white mb-2">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-400 text-xs md:text-sm leading-relaxed max-w-[280px]">
        {description}
      </p>
    </div>
  );
};

export default WorkCard;
