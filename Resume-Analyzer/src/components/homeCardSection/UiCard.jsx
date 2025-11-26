import React from "react";
import WorkCard from "./WorkCard";

import { Upload, FileText, BarChart3 } from "lucide-react";

const UiCard = () => {
 
  const steps = [
    {
      number: "01",
      title: "Upload Resume",
      description: "Drag and drop your PDF or DOCX resume file",
      icon: Upload,
    },
    {
      number: "02",
      title: "Paste Job Description",
      description: "Add job posting for targeted analysis (optional)",
      icon: FileText,
    },
    {
      number: "03",
      title: "Get AI Report",
      description: "Instant feedback and improvement suggestions",
      icon: BarChart3,
    },
  ];

  return (
    <div className="w-full py-24 px-6 bg-gradient-to-b from-[#0A0F1F] to-[#111827]">

      
      <h1 className="text-center text-4xl md:text-5xl font-bold text-white mb-4">
        How Our <span className="text-blue-400">AI Analysis</span> Works
      </h1>

      <p className="text-center text-gray-300 text-lg max-w-2xl mx-auto mb-14">
        Get professional resume analysis in three simple steps with cutting-edge AI technology
      </p>

     
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step) => (
          <WorkCard
            key={step.number}
            number={step.number}
            title={step.title}
            description={step.description}
            Icon={step.icon}
          />
        ))}
      </div>

    </div>
  );
};

export default UiCard;
