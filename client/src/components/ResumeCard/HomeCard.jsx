
import React from "react";
import ResumeCard from "./Card";
import Sample1 from "../../assets/resume photo.jpg";
import Sample2 from "../../assets/resume photo.jpg";
import Sample3 from "../../assets/resume photo.jpg";
import { useNavigate } from "react-router-dom";

const resumeData = [
  {
    id: 1,
    title: "John - Software Engineer",
    image: Sample1,
    score: 92,
    date: "2 days ago",
    status: "Strong Match",
    analysis: "8/10 Skills"
  },
  {
    id: 2,
    title: "Sarah - Product Manager",
    image: Sample2,
    score: 78,
    date: "1 hour ago",
    status: "Needs Work",
    analysis: "6/10 Skills"
  },
  {
    id: 3,
    title: "Mike - Data Scientist",
    image: Sample3,
    score: 95,
    date: "Just now",
    status: "Excellent",
    analysis: "9/10 Skills"
  },
  {
    id: 4,
    title: "Lisa - UX Designer",
    image: Sample1,
    score: 85,
    date: "5 days ago",
    status: "Good Match",
    analysis: "7/10 Skills"
  },
  {
    id: 5,
    title: "David - Marketing",
    image: Sample2,
    score: 65,
    date: "3 days ago",
    status: "Needs Work",
    analysis: "5/10 Skills"
  },
  {
    id: 6,
    title: "Emma - Frontend Dev",
    image: Sample3,
    score: 88,
    date: "Yesterday",
    status: "Strong Match",
    analysis: "8/10 Skills"
  },
  
];

const HomeCard = () => {
  const navigate = useNavigate();

  const openForm = () => {
    navigate("/form");
  };
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 p-4 relative overflow-hidden">


      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-5 left-5 w-48 h-48 bg-blue-200/20 rounded-full blur-2xl"></div>
        <div className="absolute bottom-5 right-5 w-64 h-64 bg-purple-200/20 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">


        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200 shadow-sm mb-3">
            <span className="text-indigo-600 text-xs font-medium">🤖 AI Resume Analysis</span>
          </div>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Resume
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"> Analyzer</span>
          </h1>

          <p className="text-sm text-gray-600 max-w-lg mx-auto">
            Upload your resume for instant AI analysis and improvement suggestions
          </p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">



          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200 text-center shadow-sm">
            <div className="text-lg font-bold text-indigo-600">6</div>
            <div className="text-xs text-gray-600">Analyzed</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200 text-center shadow-sm">
            <div className="text-lg font-bold text-green-600">83%</div>
            <div className="text-xs text-gray-600">Avg Score</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200 text-center shadow-sm">
            <div className="text-lg font-bold text-purple-600">24</div>
            <div className="text-xs text-gray-600">Suggestions</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-xl border border-gray-200 text-center shadow-sm">
            <div className="text-lg font-bold text-blue-600">4</div>
            <div className="text-xs text-gray-600">Strong</div>
          </div>
        </div>


        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-md mb-8">
          <div className="text-center">
            <h2 className="text-lg font-bold text-gray-900 mb-1">Analyze Your Resume</h2>
            <p className="text-gray-600 text-sm mb-4">Get instant AI-powered feedback</p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
              <button onClick={openForm} className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-2 rounded-lg font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <span>📤</span>
                Upload Resume
              </button>

              <button className="bg-white text-gray-700 px-6 py-2 rounded-lg font-semibold text-sm border border-gray-300 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center gap-2">
                <span>🎯</span>
                Analyze Job
              </button>
            </div>
          </div>
        </div>


        <div className="flex justify-between items-center mb-4 pl-8 pr-5">
          <h2 className="text-lg font-bold text-gray-900">Recent Analysis</h2>
          <div className="flex gap-2">
            <button className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-gray-200 font-medium text-gray-700 text-sm hover:bg-indigo-600 hover:text-white transition-all duration-300">
              All
            </button>
            <button className="bg-white/80 backdrop-blur-sm px-3 py-1 rounded-lg border border-gray-200 font-medium text-gray-700 text-sm hover:bg-indigo-600 hover:text-white transition-all duration-300">
              Strong
            </button>
          </div>
        </div>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 px-4 sm:px-6 lg:px-0">
          {resumeData.map((item) => (
            <ResumeCard
              key={item.id}
              image={item.image}
              title={item.title}
              score={item.score}
              date={item.date}
              status={item.status}
              analysis={item.analysis}
            />
          ))}
        </div> 

     


        <div className="mt-12 bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-md">
          <h2 className="text-lg font-bold text-center text-gray-900 mb-6">AI Analysis Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center p-3">
              <div className="text-2xl mb-2">🎯</div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">ATS Check</h3>
              <p className="text-gray-600 text-xs">Pass through tracking systems</p>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl mb-2">📊</div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">Skills Match</h3>
              <p className="text-gray-600 text-xs">Compare with job requirements</p>
            </div>
            <div className="text-center p-3">
              <div className="text-2xl mb-2">💡</div>
              <h3 className="font-semibold text-gray-800 text-sm mb-1">Smart Tips</h3>
              <p className="text-gray-600 text-xs">Personalized improvements</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default HomeCard;