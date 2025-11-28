

import React from "react";
import Navbar from "../components/Navbar";
import resume from "../assets/resume photo.jpg";
import UiCard from "../components/homeCardSection/UiCard";
import HomeCard from "../components/ResumeCard/HomeCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const Home = () => {
    const navigate = useNavigate();

    const openForm = () => {
        navigate("/form");
    };

    return (
        <div className="min-h-screen w-full overflow-x-hidden bg-gradient-to-br from-[#4F46E5] via-[#6366F1] to-[#A855F7] relative">


            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-5 w-56 h-56 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
                <div className="absolute bottom-10 right-5 w-72 h-72 bg-purple-300/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
            </div>


            <div className="fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>


            <div className="pt-24 flex items-center justify-center px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 max-w-6xl w-full">


                    <div className="w-full lg:w-1/2 backdrop-blur-xl p-6 lg:p-8 rounded-2xl shadow-xl text-center lg:text-left border border-white/20 bg-white/5">


                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full border border-white/20 mb-4">
                            <span className="text-white/90 text-xs font-medium">🤖 AI Resume Analysis</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl text-white font-bold leading-snug">
                            Land Your Dream Job{" "}
                            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                                Faster
                            </span>
                        </h1>

                        <p className="mt-4 text-white/80 text-base md:text-lg">
                            Get AI-powered resume feedback and track applications in one place.
                        </p>


                        <div className="mt-6 grid grid-cols-2 gap-3">
                            <div className="flex items-center gap-2 text-white/80">
                                <span className="text-green-400 text-sm">⚡</span>
                                <span className="text-xs">Instant Analysis</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80">
                                <span className="text-blue-400 text-sm">🛡️</span>
                                <span className="text-xs">ATS Optimized</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80">
                                <span className="text-yellow-400 text-sm">⭐</span>
                                <span className="text-xs">Score Rating</span>
                            </div>
                            <div className="flex items-center gap-2 text-white/80">
                                <span className="text-purple-400 text-sm">📊</span>
                                <span className="text-xs">Smart Tracking</span>
                            </div>
                        </div>


                        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                            <button button onClick={openForm} className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-xl shadow-lg hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 text-sm">
                                <span>📤</span>
                                Upload Resume
                            </button>


                            <button className="px-6 py-3 bg-transparent text-white font-semibold rounded-xl border border-white/30 shadow-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 text-sm">
                                <Link to="/login">Login</Link>
                            </button>
                        </div>


                        <div className="mt-6 flex items-center justify-center lg:justify-start gap-2 text-white/60 text-xs">
                            <div className="flex items-center gap-2">
                                <div className="flex -space-x-1">
                                    {[1, 2, 3].map((i) => (
                                        <div key={i} className="w-4 h-4 bg-green-400 rounded-full border border-white"></div>
                                    ))}
                                </div>
                                <span>5000+ Job Seekers</span>
                            </div>
                        </div>

                    </div>


                    <div className="w-full lg:w-1/2 flex justify-center relative">

                        <div className="relative group">

                            <div className="relative overflow-hidden rounded-2xl shadow-xl transform transition-all duration-500 group-hover:scale-105">
                                <img
                                    src={resume}
                                    alt="AI Resume Analysis"
                                    className="w-64 md:w-80 rounded-2xl relative z-10 animate-[float_3s_ease-in-out_infinite]"
                                />


                                <div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                                               translate-x-[-100%] group-hover:translate-x-[150%]
                                               transition-transform duration-700 ease-out z-20"
                                ></div>
                            </div>


                            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-3 py-1 rounded-xl shadow-lg font-bold flex items-center gap-1 z-30 text-xs">
                                <span>⭐</span>
                                <span>92% Score</span>
                            </div>


                            <div className="absolute -bottom-4 -left-4 bg-white/90 rounded-xl p-3 shadow-lg border border-white/30 transform transition-all duration-300 group-hover:scale-105 max-w-[140px] z-30">
                                <div className="flex items-center gap-1 mb-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                                    <span className="text-xs font-semibold text-gray-800">AI Ready</span>
                                </div>
                                <p className="text-[10px] text-gray-600">
                                    ✓ ATS Ready<br />
                                    ✓ Format Perfect
                                </p>
                            </div>

                        </div>

                    </div>

                </div>
            </div>


            <div className="py-12 px-4 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">


                        <div className="backdrop-blur-xl p-4 rounded-xl border border-white/20 bg-white/5 text-center hover:scale-105 transition-all duration-300">
                            <div className="text-2xl mb-2">📈</div>
                            <h3 className="text-white font-semibold text-sm mb-1">Smart Tracking</h3>
                            <p className="text-white/70 text-xs">Track all your job applications in one dashboard</p>
                        </div>


                        <div className="backdrop-blur-xl p-4 rounded-xl border border-white/20 bg-white/5 text-center hover:scale-105 transition-all duration-300">
                            <div className="text-2xl mb-2">🎯</div>
                            <h3 className="text-white font-semibold text-sm mb-1">AI Matching</h3>
                            <p className="text-white/70 text-xs">Get matched with perfect job opportunities</p>
                        </div>


                        <div className="backdrop-blur-xl p-4 rounded-xl border border-white/20 bg-white/5 text-center hover:scale-105 transition-all duration-300">
                            <div className="text-2xl mb-2">💼</div>
                            <h3 className="text-white font-semibold text-sm mb-1">Career Insights</h3>
                            <p className="text-white/70 text-xs">Receive personalized career recommendations</p>
                        </div>

                    </div>
                </div>
            </div>



            <div>
                <UiCard />
            </div>



            <div>


                <HomeCard />
            </div>
            <div>
                <Footer />
            </div>
        </div>






    );
};

export default Home;







