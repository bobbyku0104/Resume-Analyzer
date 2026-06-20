import React from "react";
import WorkCard from "./WorkCard";
import { Upload, FileText, LineChart } from "lucide-react";

const UiCard = () => {
  const steps = [
    {
      number: "01",
      title: "Upload Resume",
      description: "Drag and drop your PDF or DOCX resume file into our secure portal.",
      icon: Upload,
    },
    {
      number: "02",
      title: "Paste Job Description",
      description: "Add job posting for targeted analysis (optional) to check for keyword matching.",
      icon: FileText,
    },
    {
      number: "03",
      title: "Get AI Report",
      description: "Instant feedback and improvement suggestions delivered to your dashboard.",
      icon: LineChart,
    },
  ];

  return (
    <div className="w-full py-24 px-6 bg-transparent relative z-10">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
        How Our <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">AI Analysis</span> Works
      </h2>

      <p className="text-center text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
        Get professional resume analysis in three simple steps with cutting-edge AI technology.
      </p>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
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
