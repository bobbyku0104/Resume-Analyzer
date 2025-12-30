import React, { useContext } from "react";
import { ResumeContext } from "../Context/ResumeContext";

export default function ResumeReviewPage({ onBack }) {
  const { file, analysis } = useContext(ResumeContext);

  // safety check
  if (!analysis) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl">
        Loading analysis...
      </div>
    );
  }

  // ATS status logic
  const getScoreStatus = (score) => {
    if (score >= 80) return { text: "Excellent", color: "text-green-600" };
    if (score >= 60) return { text: "Average", color: "text-yellow-600" };
    return { text: "Needs Improvement", color: "text-red-600" };
  };

  const scoreStatus = getScoreStatus(analysis.atsScore);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/*  LEFT SECTION */}
        <div className="w-full lg:w-2/3 bg-white rounded-3xl shadow-2xl p-8 overflow-y-auto max-h-[90vh]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI Resume Analyzer
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                ATS-based resume evaluation
              </p>
            </div>

            <button
              onClick={onBack}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold shadow-lg hover:scale-105 transition"
            >
              🔄 Analyze Again
            </button>
          </div>

          {/* Overall Score */}
          <div className="bg-gradient-to-br from-white to-blue-50 border rounded-2xl p-6 shadow mb-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">ATS Score Overview</h3>
              <span className={`font-semibold ${scoreStatus.color}`}>
                {scoreStatus.text}
              </span>
            </div>

            <div className="flex items-center gap-6">
              <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center">
                <span className="text-3xl font-bold text-blue-700">
                  {analysis.atsScore}
                </span>
              </div>

              <div>
                <p className="text-lg font-semibold">{analysis.atsScore}/100</p>
                <p className="text-sm text-gray-500">
                  Based on skills, projects & keywords
                </p>
              </div>
            </div>
          </div>

          {/* Strengths */}
          <div className="bg-white border rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-green-700 mb-4">
              ✅ Strengths
            </h3>

            <div className="grid gap-3">
              {analysis.strengths.map((item, i) => (
                <div
                  key={i}
                  className="flex gap-3 p-4 bg-green-50 border border-green-200 rounded-xl"
                >
                  <span className="text-green-600 font-bold">+</span>
                  <p className="text-sm text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Weaknesses */}
          <div className="bg-white border rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              ⚠️ Weak Areas
            </h3>

            <div className="space-y-3">
              {analysis.weaknesses.map((item, i) => (
                <div
                  key={i}
                  className="p-4 bg-red-50 border border-red-200 rounded-xl text-sm text-gray-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Missing Skills */}
          <div className="bg-white border rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-semibold mb-4">🧠 Missing Skills</h3>

            <div className="flex flex-wrap gap-2">
              {analysis.missingSkills.map((skill, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Suggestions */}
          <div className="bg-gradient-to-br from-white to-purple-50 border rounded-2xl p-6">
            <h3 className="text-xl font-semibold mb-4">
              🚀 Improvement Action Plan
            </h3>

            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              {analysis.suggestions.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ol>
          </div>
        </div>

        {/*  RIGHT SECTION*/}
       

        <div className="hidden lg:flex lg:w-1/3 justify-center">
          {file ? (
            <div className="w-full max-w-[450px] aspect-[3/4] bg-white rounded-2xl border shadow-2xl overflow-hidden">
              <iframe
                title="Resume Preview"
                className="w-full h-full border-0"
                src={
                  URL.createObjectURL(file) +
                  "#toolbar=0&navpanes=0&scrollbar=0"
                }
              />
            </div>
          ) : (
            <div className="text-gray-500">No resume preview</div>
          )}
        </div>
      </div>
    </div>
  );
}




