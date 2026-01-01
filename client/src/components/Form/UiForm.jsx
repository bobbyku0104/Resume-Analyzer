
import React, { useState, useContext } from "react";
import PdfUpload from "./PdfUpload";
import ResumeScan from "../ResumeScan/ResumeScan";
import ResumeReviewPage from "../ReviewPage/ResumeReviewPage";
import { ResumeContext } from "../Context/ResumeContext";
const base_url = import.meta.env.VITE_BACKEND_URL;

export default function UiForm() {
  console.log(base_url)
  // ✅ CONTEXT (logic add)
  const { file, setFile, setAnalysis,  } = useContext(ResumeContext);

  // ✅ Local Form Data (same as before)
  const [formData, setFormData] = useState({
    name: "",
    job: "",
    description: "",
    experience: "",
  });

  const [isScanning, setIsScanning] = useState(false);
  const [isReview, setIsReview] = useState(false);

  // ✅ Input Change Handler 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // ✅ Form Validation (same)
  const isFormValid =
    formData.name &&
    formData.job &&
    // formData.description &&
    formData.experience &&
    file;

  // 🔥 MAIN LOGIC ADD: BACKEND CALL
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid || isScanning) return;

    setIsScanning(true);

    const formDataObj = new FormData();
    formDataObj.append("resume", file);

    try {
      const res = await fetch(
       base_url +"/api/resume/analyze",
        {
          method: "POST",
          body: formDataObj,
        }
      );

      const data = await res.json();
      console.log(data)

      // ✅ SAFETY CHECK
      if (!res.ok || !data.analysis) {
        alert(data?.error || "Resume analysis failed");
        setIsScanning(false);
        return;
      }

      // ✅ SAVE AI RESULT IN CONTEXT
      setAnalysis(data.analysis);

      // ✅ MOVE TO REVIEW PAGE
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

  // ✅ SHOW REVIEW PAGE
  if (isReview) {
    return  <ResumeReviewPage  onBack={() =>  setIsReview(false)} />;
  }

  // ⚠️ UI BELOW = EXACT SAME (NO CHANGE)
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-6 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

      <div className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-8 w-full max-w-lg border border-white/60 relative z-10">
        {!isScanning && (
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
              AI Resume Analyzer
            </h1>
            <p className="text-gray-600 text-lg">
              Get instant feedback on your resume match
            </p>
          </div>
        )}

        {!isScanning ? (
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            {/* Name */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Candidate Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-4 border-2 border-gray-200 rounded-2xl bg-white/50"
              />
            </div>

            {/* Job */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Select Job Role
              </label>
              <select
                name="job"
                value={formData.job}
                onChange={handleChange}
                className="p-4 border-2 border-gray-200 rounded-2xl bg-white/50"
              >
                <option value="">Choose a job role</option>
                <option>Frontend Developer</option>
                <option>Backend Developer</option>
                <option>Full Stack Developer</option>
                <option>UI/UX Designer</option>
                <option>Software Engineer</option>
                <option>Data Scientist</option>
                <option>DevOps Engineer</option>
              </select>
            </div>

            {/* Description */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Job Description
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="p-4 border-2 border-gray-200 rounded-2xl bg-white/50 h-32 resize-none"
              />
            </div>

            {/* Experience */}
            <div className="flex flex-col gap-2">
              <label className="font-semibold text-gray-700">
                Years of Experience
              </label>
              <input
                type="text"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                className="p-4 border-2 border-gray-200 rounded-2xl bg-white/50"
              />
            </div>

            {/* PDF Upload */}
            <PdfUpload />

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid || isScanning}
              className={`w-full py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg
                ${
                  !isFormValid
                    ? "bg-gradient-to-r from-gray-300 to-gray-400 text-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:scale-[1.02]"
                }
              `}
            >
              {isScanning ? "Analyzing..." : "Analyze Resume"}
            </button>
          </form>
        ) : (
          <ResumeScan />
        )}
      </div>
    </div>
  );
}


