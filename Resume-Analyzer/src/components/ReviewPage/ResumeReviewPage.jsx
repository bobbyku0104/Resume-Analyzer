

import React, { useState } from "react";

export default function ResumeReviewPage() {
    const [previewUrl, setPreviewUrl] = useState(null);

    const handleFileUpload = (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const url = URL.createObjectURL(file);
        setPreviewUrl(url);
    };

    return (
        <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 p-4 lg:p-6 flex flex-col lg:flex-row gap-4 lg:gap-6">
            
           
            <div className="w-full lg:w-1/2 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 lg:p-8 overflow-y-auto border border-white/60">

               
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
                    <div>
                        <h1 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                            AI Resume Analyzer
                        </h1>
                        <p className="text-gray-600 text-sm mt-2">Get professional insights about your resume</p>
                    </div>

                  
                    <button
                        className="px-8 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 transform hover:from-blue-600 hover:to-purple-600"
                    >
                        🚀 Analyze Resume
                    </button>
                </div>

              
                <div className="mb-8 p-6 bg-gradient-to-br from-blue-50/80 to-indigo-50/80 rounded-2xl border border-blue-200/60 shadow-sm">
                    <label className="block text-lg font-semibold text-gray-800 mb-3">
                        📁 Upload Your Resume
                    </label>

                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileUpload}
                        className="block w-full text-sm text-gray-700 file:mr-4 file:py-3 file:px-4 file:rounded-2xl file:border-0 file:bg-gradient-to-r file:from-blue-500 file:to-purple-500 file:text-white hover:file:from-blue-600 hover:file:to-purple-600 transition-all duration-300"
                    />

                    <p className="text-xs text-gray-500 mt-3">Supports JPG, PNG • Max 5MB</p>
                </div>

               
                <div className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl p-6 border border-blue-200 shadow-lg mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-gray-800">Overall Score</h3>
                        <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                            Excellent
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative">
                            <div className="w-24 h-24 rounded-full ring-4 ring-blue-200 flex items-center justify-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-2xl font-bold text-white">85</span>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <p className="text-4xl font-bold text-gray-800">85/100</p>
                            <p className="text-gray-600 text-lg mt-2">4 improvement areas identified</p>
                            <div className="flex items-center gap-2 mt-3">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="text-sm text-gray-600">Ready for analysis</span>
                            </div>
                        </div>
                    </div>
                </div>

               
                <div className="bg-gradient-to-br from-white to-green-50/50 rounded-2xl p-6 border border-green-200 shadow-sm mb-6">
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="text-xl font-semibold text-gray-800">ATS Compatibility</h3>
                        <div className="flex items-center gap-2">
                            <span className="text-3xl font-bold text-green-600">88/100</span>
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                    </div>

                    <div className="space-y-3">
                        {[
                            "Formatting is ATS-friendly",
                            "Good keyword optimization",
                            "Clear section structure"
                        ].map((note, i) => (
                            <div key={i} className="flex items-start gap-3 p-3 bg-white/50 rounded-xl border border-green-100">
                                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-700">{note}</span>
                            </div>
                        ))}
                    </div>
                </div>

                
                <div className="space-y-4">
                    {[
                        { title: "Tone & Style", score: 78, color: "blue", points: 3 },
                        { title: "Content Quality", score: 82, color: "purple", points: 2 },
                        { title: "Structure", score: 75, color: "green", points: 4 },
                        { title: "Skills Presentation", score: 80, color: "orange", points: 3 }
                    ].map((item, i) => (
                        <div
                            key={i}
                            className="bg-white rounded-2xl border border-gray-200 p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:border-gray-300"
                        >
                            <div className="flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                    <div className={`w-12 h-12 rounded-2xl bg-${item.color}-100 flex items-center justify-center`}>
                                        <span className={`text-lg font-bold text-${item.color}-600`}>{item.score}</span>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-800 text-lg">{item.title}</h4>
                                        <p className="text-sm text-gray-500 mt-1">{item.points} recommendations</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-2">
                                    <div className={`w-3 h-3 rounded-full ${
                                        item.score >= 80 ? "bg-green-500" : 
                                        item.score >= 70 ? "bg-yellow-500" : "bg-red-500"
                                    }`}></div>
                                    <span className="text-xl text-gray-400">▼</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

           
            <div className="w-full lg:w-1/2 bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 border border-white/60 flex flex-col">
                
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                        Resume Preview
                    </h2>
                    <p className="text-gray-600 text-sm mt-2">Live preview of your uploaded resume</p>
                </div>

                <div className="flex-1 flex flex-col items-center justify-center">
                    <div className="relative group w-full max-w-sm">
                        <div className="aspect-[3/4] w-full rounded-3xl bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden border-4 border-white shadow-2xl flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-3xl">
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    alt="resume preview"
                                />
                            ) : (
                                <div className="text-center p-8 text-gray-500">
                                    <div className="w-20 h-20 bg-gradient-to-br from-blue-200 to-purple-200 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                                        <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-lg font-medium mb-2">No Resume Uploaded</p>
                                    <p className="text-sm">Upload a resume image to see preview</p>
                                </div>
                            )}
                        </div>
                        
                        <div className="absolute inset-0 rounded-3xl bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 backdrop-blur-sm -z-10"></div>
                    </div>
                </div>

               
                <div className="mt-6 p-4 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-2xl border border-yellow-200 shadow-sm">
                    <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-amber-400 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                            <span className="text-white text-sm">💡</span>
                        </div>
                        <div>
                            <p className="font-semibold text-yellow-800">Pro Tip</p>
                            <p className="text-yellow-700 text-sm mt-1">
                                Upload a clear, well-formatted resume with good contrast for the best visual preview and analysis results.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}