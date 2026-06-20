import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import PdfUpload from "./PdfUpload";
import ResumeScan from "../ResumeScan/ResumeScan";
import ResumeReviewPage from "../ReviewPage/ResumeReviewPage";
import { ResumeContext } from "../Context/ResumeContext";
import { ArrowLeft, Sparkles } from "lucide-react";

const base_url = import.meta.env.VITE_BACKEND_URL;

export default function UiForm() {
  const navigate = useNavigate();
  const { file, setFile, setAnalysis } = useContext(ResumeContext);

  const [formData, setFormData] = useState({
    name: "",
    job: "",
    description: "",
    experience: "",
  });

  const [isScanning, setIsScanning] = useState(false);
  const [isReview, setIsReview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const isFormValid =
    formData.name &&
    formData.job &&
    formData.experience &&
    file;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isScanning) return;

    setIsScanning(true);

    const formDataObj = new FormData();
    formDataObj.append("resume", file);

    try {
      const res = await fetch(
        base_url + "api/resume/analyze",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      const data = await res.json();

      if (!res.ok || !data.analysis) {
        alert(data?.error || "Resume analysis failed");
        setIsScanning(false);
        return;
      }

      setAnalysis(data.analysis);

      setTimeout(() => {
        setIsScanning(false);
        setIsReview(true);
      }, 1000);
    } catch (err) {
      console.error(err);
      alert("Server error. Try again.");
      setIsScanning(false);
    }
  };

  if (isReview) {
    return <ResumeReviewPage onBack={() => setIsReview(false)} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030712] p-6 relative overflow-hidden text-white">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[10%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow [animation-delay:3s]"></div>
      </div>

      {/* Back Button */}
      {!isScanning && (
        <button 
          onClick={() => navigate("/")}
          className="absolute top-6 left-6 flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full text-xs font-semibold text-gray-300 hover:text-white hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer z-20"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </button>
      )}

      {/* Form Card Container */}
      <div className="bg-[#0c1020]/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 w-full max-w-lg border border-white/10 relative z-10">
        {!isScanning && (
          <div className="text-center mb-8">
            <div className="w-14 h-14 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 text-indigo-400">
              <Sparkles className="w-6 h-6 animate-pulse" />
            </div>
            <h1 className="text-3xl font-extrabold text-white mb-1.5 tracking-tight">
              AI Resume Analyzer
            </h1>
            <p className="text-gray-400 text-sm">
              Optimize your resume for target job descriptions
            </p>
          </div>
        )}

        {!isScanning ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {/* Candidate Name */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Candidate Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="p-4 bg-[#080b16]/60 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-sm w-full"
              />
            </div>

            {/* Select Job Role */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Select Job Role
              </label>
              <div className="relative">
                <select
                  name="job"
                  value={formData.job}
                  onChange={handleChange}
                  className="p-4 bg-[#080b16]/60 border border-white/10 rounded-2xl text-white focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-sm w-full cursor-pointer appearance-none"
                >
                  <option className="bg-[#080b16] text-white" value="">Choose a job role</option>
                  <option className="bg-[#080b16] text-white">Frontend Developer</option>
                  <option className="bg-[#080b16] text-white">Backend Developer</option>
                  <option className="bg-[#080b16] text-white">Full Stack Developer</option>
                  <option className="bg-[#080b16] text-white">UI/UX Designer</option>
                  <option className="bg-[#080b16] text-white">Software Engineer</option>
                  <option className="bg-[#080b16] text-white">Data Scientist</option>
                  <option className="bg-[#080b16] text-white">DevOps Engineer</option>
                </select>
                <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Job Description */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Job Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Paste the job requirements to perform tailored analysis (optional)"
                className="p-4 bg-[#080b16]/60 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-sm w-full h-28 resize-none"
              />
            </div>

            {/* Years of Experience */}
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-300 uppercase tracking-wider">
                Years of Experience
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                placeholder="e.g. 3 years"
                className="p-4 bg-[#080b16]/60 border border-white/10 rounded-2xl text-white placeholder-gray-500 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all text-sm w-full"
              />
            </div>

            {/* PDF Upload */}
            <PdfUpload />

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!isFormValid || isScanning}
              className={`w-full py-4 rounded-2xl text-sm font-semibold transition-all duration-300 shadow-md flex items-center justify-center gap-2
                ${
                  !isFormValid
                    ? "bg-white/5 border border-white/10 text-gray-500 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-indigo-600/10 hover:shadow-indigo-600/25 text-white cursor-pointer"
                }
              `}
            >
              {isScanning ? (
                <>
                  <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin"></span>
                  <span>Analyzing Resume...</span>
                </>
              ) : (
                <span>Analyze Resume</span>
              )}
            </button>
          </form>
        ) : (
          <div className="py-12 flex flex-col items-center justify-center">
            <ResumeScan />
          </div>
        )}
      </div>
    </div>
  );
}
