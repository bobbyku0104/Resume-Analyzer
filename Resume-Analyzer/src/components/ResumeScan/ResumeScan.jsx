import React, { useState, useEffect } from "react";

export default function ResumeScan({ onComplete }) {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState("Starting scan...");

  const steps = [
    "Uploading file...", "Extracting text...", "Analyzing structure...", 
    "Checking ATS...", "Evaluating content...", "Scanning keywords...",
    "Assessing skills...", "Generating tips...", "Finalizing..."
  ];

  useEffect(() => {
    const totalTime = 4000; 
    const intervalTime = totalTime / 100; 
    let currentStep = 0;

    const timer = setInterval(() => {
      setCount(prev => {
        const newCount = prev + 1;
        
        
        const stepIndex = Math.floor(newCount / (100 / steps.length));
        if (stepIndex > currentStep && stepIndex < steps.length) {
          currentStep = stepIndex;
          setStep(steps[currentStep]);
        }
        
        if (newCount >= 100) {
          clearInterval(timer);
          setStep("Complete!");
          setTimeout(() => onComplete?.(), 500);
          return 100;
        }
        
        return newCount;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center space-y-8 p-8 bg-slate-900 rounded-3xl border border-blue-500/20">
      
      <div className="text-center">
        <h3 className="text-2xl font-bold text-white mb-2">Resume Scan</h3>
        <p className="text-blue-300 text-sm">AI-powered analysis</p>
      </div>

      <div className="relative w-32 h-32">
        <div className="absolute inset-0 rounded-full border-4 border-blue-500/30"></div>
        <div className="absolute inset-2 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-bold text-white transition-all duration-200">
            {count}
          </span>
        </div>
        
        <div 
          className="absolute inset-0 rounded-full transition-all duration-300 ease-out"
          style={{
            background: `conic-gradient(from 0deg, #3b82f6 ${count * 3.6}deg, transparent ${count * 3.6}deg)`,
            opacity: 0.2
          }}
        ></div>
      </div>
      
      <div className="text-center space-y-3">
        <p className="text-blue-300 font-medium transition-all duration-300">
          {step}
        </p>
        <div className="w-48 bg-gray-700 rounded-full h-2">
          <div 
            className="h-2 bg-blue-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${count}%` }}
          ></div>
        </div>
        <div className="text-white/70 text-sm">
          {count}% complete
        </div>
      </div>
    </div>
  );
}