import React from "react";
import ResumeCard from "./Card";
import Sample1 from "../../assets/resume photo.jpg";
import Sample2 from "../../assets/resume photo.jpg";
import Sample3 from "../../assets/resume photo.jpg";
import { useNavigate } from "react-router-dom";
import { Sparkles, BarChart3, AlertCircle, FileText, CheckCircle2, TrendingUp } from "lucide-react";

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
    <div className="w-full py-16 px-4 md:px-8 relative overflow-hidden bg-transparent z-10">
      {/* Soft Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-72 h-72 bg-indigo-500/5 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse-slow [animation-delay:2s]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 backdrop-blur-md px-3 py-1 rounded-full border border-indigo-500/20 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
            <span className="text-indigo-300 text-xs font-semibold uppercase tracking-wider">
              AI Resume Tracking
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Dashboard Overview
          </h2>

          <p className="text-sm md:text-base text-gray-400 max-w-lg mx-auto leading-relaxed">
            Upload your resume for instant AI analysis, feedback scoring, and progress tracking.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center shadow-lg hover:border-indigo-500/30 hover:scale-[1.02] hover:bg-white/10 transition-all duration-300 group">
            <div className="text-3xl font-black text-indigo-400 group-hover:text-indigo-300 transition-colors">6</div>
            <div className="text-xs font-semibold text-gray-400 mt-1.5 uppercase tracking-wider">Analyzed</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center shadow-lg hover:border-green-500/30 hover:scale-[1.02] hover:bg-white/10 transition-all duration-300 group">
            <div className="text-3xl font-black text-green-400 group-hover:text-green-300 transition-colors">83%</div>
            <div className="text-xs font-semibold text-gray-400 mt-1.5 uppercase tracking-wider">Avg Score</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center shadow-lg hover:border-purple-500/30 hover:scale-[1.02] hover:bg-white/10 transition-all duration-300 group">
            <div className="text-3xl font-black text-purple-400 group-hover:text-purple-300 transition-colors">24</div>
            <div className="text-xs font-semibold text-gray-400 mt-1.5 uppercase tracking-wider">Suggestions</div>
          </div>
          <div className="bg-white/5 backdrop-blur-md p-5 rounded-2xl border border-white/10 text-center shadow-lg hover:border-blue-500/30 hover:scale-[1.02] hover:bg-white/10 transition-all duration-300 group">
            <div className="text-3xl font-black text-blue-400 group-hover:text-blue-300 transition-colors">4</div>
            <div className="text-xs font-semibold text-gray-400 mt-1.5 uppercase tracking-wider">Strong Matches</div>
          </div>
        </div>

        {/* Analyze Call-To-Action Box */}
        <div className="bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl max-w-3xl mx-auto mb-14 hover:border-indigo-500/20 transition-all duration-500 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/5 to-cyan-500/5 opacity-50 group-hover:scale-105 transition-transform duration-700"></div>
          <div className="text-center relative z-10">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center justify-center gap-2">
              <FileText className="w-5 h-5 text-indigo-400 animate-pulse" />
              Analyze Your Resume
            </h3>
            <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
              Get instant AI-powered feedback and detailed score optimization suggestions in seconds.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={openForm}
                className="bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.04] transition-all duration-300 flex items-center gap-2 cursor-pointer"
              >
                <span>📤</span>
                Upload Resume
              </button>

              <button className="bg-white/5 text-gray-200 px-8 py-3 rounded-xl font-bold text-sm border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-[1.04] transition-all duration-300 flex items-center gap-2 cursor-pointer">
                <span>🎯</span>
                Analyze Job
              </button>
            </div>
          </div>
        </div>

        {/* Filter / Recent Analysis Header */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-8 max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-extrabold text-white tracking-tight flex items-center gap-2">
            <span className="w-2 h-5 bg-gradient-to-b from-cyan-400 to-indigo-500 rounded-full"></span>
            Recent Analyses
          </h3>
          <div className="flex gap-2.5">
            <button className="bg-white/5 hover:bg-indigo-600 hover:text-white backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/10 font-bold text-gray-300 text-xs transition-all duration-300 cursor-pointer shadow-md">
              All
            </button>
            <button className="bg-white/5 hover:bg-indigo-600 hover:text-white backdrop-blur-md px-4 py-1.5 rounded-xl border border-white/10 font-bold text-gray-300 text-xs transition-all duration-300 cursor-pointer shadow-md">
              Strong
            </button>
          </div>
        </div>

        {/* Recent Analysis Cards Grid */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto justify-items-center">
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

        {/* Core Analysis Features Grid */}
        <div className="mt-16 bg-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/10 shadow-2xl max-w-4xl mx-auto hover:border-indigo-500/20 transition-all duration-500">
          <h3 className="text-lg font-bold text-center text-indigo-400 mb-8 tracking-wider uppercase flex items-center justify-center gap-2">
            <TrendingUp className="w-5 h-5 text-indigo-400" />
            AI Analysis Features
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">🎯</div>
              <h4 className="font-bold text-white text-sm mb-1.5">
                ATS Check
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Ensure your document successfully passes standard automated tracking filters.
              </p>
            </div>
            <div className="text-center p-5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">📊</div>
              <h4 className="font-bold text-white text-sm mb-1.5">
                Skills Match
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Compare your hard and soft skills directly with actual job descriptions.
              </p>
            </div>
            <div className="text-center p-5 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/10 rounded-2xl transition-all duration-300 group">
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">💡</div>
              <h4 className="font-bold text-white text-sm mb-1.5">
                Smart Tips
              </h4>
              <p className="text-gray-400 text-xs leading-relaxed">
                Receive context-aware, bullet-point revisions to highlight achievements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeCard;