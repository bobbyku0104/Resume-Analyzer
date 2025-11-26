import React from "react";

const WorkCard = ({ number, title, description, Icon }) => {
  return (
    <div className="relative bg-[#1A1F2E]/60 backdrop-blur-xl p-10 rounded-3xl 
                    border border-white/10 shadow-2xl hover:scale-105 
                    transition-all duration-300">

     
      <div className="absolute top-4 right-4 bg-white text-black font-semibold
                      w-10 h-10 rounded-full flex items-center justify-center">
        {number}
      </div>

      <div className="flex flex-col items-center">
        
      
        <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-[#1F2937] 
                        to-[#111827] flex items-center justify-center shadow-inner">
          <Icon size={45} className="text-blue-400" />
        </div>

        
        <h2 className="text-xl font-semibold text-white mt-5">{title}</h2>

        
        <p className="text-gray-400 text-center mt-2">{description}</p>
      </div>

    </div>
  );
};

export default WorkCard;
