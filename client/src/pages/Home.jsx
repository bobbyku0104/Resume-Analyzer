import React from "react";
import Navbar from "../components/Navbar";
import UiCard from "../components/homeCardSection/UiCard";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { Sparkles, Zap, ShieldCheck, TrendingUp, Upload, LayoutDashboard, Target, Lightbulb, Check, Users, Globe, Award } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const openForm = () => {
    navigate("/form");
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden relative bg-[#030712] text-white selection:bg-indigo-500 selection:text-white">
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-500/10 blur-[120px] animate-pulse-slow"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[45vw] h-[45vw] rounded-full bg-purple-500/10 blur-[120px] animate-pulse-slow [animation-delay:3s]"></div>
        <div className="absolute top-[40%] left-[20%] w-[35vw] h-[35vw] rounded-full bg-cyan-500/5 blur-[100px] animate-pulse-slow [animation-delay:6s]"></div>
      </div>

      {/* Fixed Nav */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <div className="pt-32 pb-16 flex items-center justify-center px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 max-w-6xl w-full">
          {/* Left Hero Content */}
          <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* AI Resume Analysis Badge */}
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full mb-6">
              <Sparkles className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span className="bg-gradient-to-r from-indigo-300 to-purple-300 bg-clip-text text-transparent text-xs font-semibold uppercase tracking-wider">
                AI Resume Analysis
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-extrabold leading-tight tracking-tight">
              Land Your <span className="bg-gradient-to-r from-[#c084fc] to-[#818cf8] bg-clip-text text-transparent">Dream Job</span> <br className="hidden md:inline" /> Faster
            </h1>

            {/* Sub-description */}
            <p className="mt-6 text-gray-400 text-sm md:text-base max-w-lg leading-relaxed">
              Get AI-powered resume feedback and track applications in one place. Pass ATS screenings and stand out to top recruiters.
            </p>

            {/* Smart Tags Row */}
            <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-5 text-xs text-gray-300 font-medium">
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-amber-500 fill-amber-500/20" />
                <span>Instant Analysis</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-indigo-400 fill-indigo-500/20" />
                <span>ATS Optimized</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-500" />
                <span>Smart Tracking</span>
              </div>
            </div>

            {/* Upload Dashed Container */}
            <div 
              onClick={openForm}
              className="mt-10 w-full max-w-[420px] border-2 border-dashed border-indigo-500/20 hover:border-indigo-500/40 bg-[#0d1226]/40 hover:bg-[#0d1226]/75 rounded-3xl p-8 flex flex-col items-center justify-center transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] cursor-pointer group/upload"
            >
              <div className="w-12 h-12 rounded-full border border-indigo-500/20 bg-indigo-500/10 flex items-center justify-center mb-4 text-indigo-400 group-hover/upload:scale-105 transition-all">
                <Upload className="w-5 h-5" />
              </div>
              <h3 className="text-sm font-bold text-white mb-1">Upload Resume</h3>
              <p className="text-xs text-gray-500 mb-5">Drag and drop your PDF or DOCX file here</p>
              
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  openForm();
                }}
                className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold px-5 py-2.5 rounded-full transition-all shadow-md cursor-pointer"
              >
                Browse Files
              </button>
            </div>

            {/* Social Proof */}
            <div className="mt-8 flex items-center gap-3 text-gray-400 text-xs">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 rounded-full border border-[#030712] bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-[8px] font-bold text-white shadow-md">JD</div>
                  <div className="w-6 h-6 rounded-full border border-[#030712] bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center text-[8px] font-bold text-white shadow-md">SM</div>
                  <div className="w-6 h-6 rounded-full border border-[#030712] bg-gradient-to-br from-pink-500 to-amber-500 flex items-center justify-center text-[8px] font-bold text-white shadow-md">TH</div>
                  <div className="w-6 h-6 rounded-full border border-[#030712] bg-[#1e293b] flex items-center justify-center text-[8px] font-bold text-gray-300 shadow-md">+5k</div>
                </div>
                <span className="font-semibold text-gray-400">Join 5000+ Job Seekers today</span>
              </div>
            </div>
          </div>

          {/* Right Hero Preview Mockup Container */}
          <div className="w-full lg:w-[46%] flex justify-center relative">
            <div className="relative w-full max-w-[380px] md:max-w-[400px] aspect-[4/5] bg-[#0c1020]/90 rounded-2xl border border-white/10 shadow-2xl p-6 overflow-hidden group">
              {/* Laser scanning line */}
              <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_#22d3ee,0_0_30px_#22d3ee] animate-scan z-20"></div>
              
              {/* Ambient Glow */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-purple-500/20 opacity-30 blur-2xl group-hover:opacity-50 transition duration-1000"></div>

              {/* Mockup Top Header */}
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                </div>
                {/* 92% Score Badge */}
                <div className="bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span>92% Score</span>
                </div>
              </div>

              {/* Resume document mockup details */}
              <div className="space-y-5 opacity-75">
                <div className="space-y-2">
                  <div className="h-4 bg-white/20 rounded-md w-1/3"></div>
                  <div className="h-2 bg-white/10 rounded-md w-1/2"></div>
                </div>
                <hr className="border-white/5" />
                <div className="space-y-2">
                  <div className="h-3 bg-white/15 rounded-md w-1/4"></div>
                  <div className="h-2 bg-white/10 rounded-md w-full"></div>
                  <div className="h-2 bg-white/10 rounded-md w-5/6"></div>
                </div>
                <div className="space-y-3">
                  <div className="h-3 bg-white/15 rounded-md w-1/3"></div>
                  <div className="space-y-1.5">
                    <div className="h-2.5 bg-white/10 rounded-md w-full"></div>
                    <div className="h-2 bg-white/5 rounded-md w-11/12"></div>
                    <div className="h-2 bg-white/5 rounded-md w-4/5"></div>
                  </div>
                  <div className="space-y-1.5">
                    <div className="h-2.5 bg-white/10 rounded-md w-5/6"></div>
                    <div className="h-2 bg-white/5 rounded-md w-full"></div>
                  </div>
                </div>
              </div>

              {/* Bottom ATS Check Status */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#030712]/90 border border-white/5 rounded-xl p-4 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs font-semibold text-gray-300">ATS Friendly</span>
                  <span className="text-xs font-bold text-emerald-400">Passed</span>
                </div>
                {/* Progress Bar */}
                <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Floating AI Insights Badge */}
            <div className="absolute bottom-16 -left-4 bg-[#0c1020] border border-white/10 px-4 py-2 rounded-full flex items-center gap-2 shadow-2xl z-30 animate-bounce" style={{ animationDuration: '4s' }}>
              <Sparkles className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-xs font-semibold text-white">AI Insights</span>
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid Section */}
      <div id="features" className="py-20 px-6 max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-[#0d1226]/50 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] group">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-6 text-indigo-400 group-hover:bg-indigo-500/20 transition-all">
              <LayoutDashboard className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Smart Tracking</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Track all your job applications in one unified dashboard with automated status updates.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-[#0d1226]/50 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] group">
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400 group-hover:bg-purple-500/20 transition-all">
              <Target className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">AI Matching</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Get matched with perfect job opportunities based on your skills and professional experience.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-[#0d1226]/50 backdrop-blur-xl border border-white/10 hover:border-indigo-500/40 p-8 rounded-2xl transition-all duration-300 hover:scale-[1.02] group">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center mb-6 text-cyan-400 group-hover:bg-cyan-500/20 transition-all">
              <Lightbulb className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Career Insights</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Receive personalized career recommendations and skill gap analysis to stay ahead.
            </p>
          </div>
        </div>
      </div>

      {/* How it works steps Section */}
      <div>
        <UiCard />
      </div>

      {/* Pricing Section */}
      <div id="pricing" className="py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-white/5">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
          Simple, Transparent <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">Pricing</span>
        </h2>
        <p className="text-center text-gray-400 text-sm md:text-base max-w-2xl mx-auto mb-16 leading-relaxed">
          Choose the plan that fits your career goals. Cancel or upgrade at any time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Plan 1 */}
          <div className="bg-[#0d1226]/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Basic</h3>
              <p className="text-xs text-gray-400 mb-6">For individuals getting started on their job search.</p>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-extrabold text-white">$0</span>
                <span className="text-xs text-gray-500">/ month</span>
              </div>
              <ul className="space-y-3.5 mb-8 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>3 Resume scans per month</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Standard ATS layout checker</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Basic keyword suggestions</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={openForm}
              className="w-full py-2.5 rounded-full border border-white/15 hover:bg-white/5 text-white text-xs font-semibold hover:border-white/30 transition-all cursor-pointer"
            >
              Get Started
            </button>
          </div>

          {/* Plan 2 - Pro (Highlighted) */}
          <div className="relative bg-[#0d1226]/60 backdrop-blur-md border border-indigo-500/40 rounded-2xl p-8 flex flex-col justify-between hover:scale-[1.02] shadow-xl shadow-indigo-600/5 transition-all duration-300">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-lg">
              Most Popular
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-2 mt-2">Pro</h3>
              <p className="text-xs text-gray-400 mb-6">For active job seekers looking to land interviews fast.</p>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-extrabold text-white">$19</span>
                <span className="text-xs text-gray-500">/ month</span>
              </div>
              <ul className="space-y-3.5 mb-8 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Unlimited Resume scans</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Advanced ATS scoring matrix</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Targeted job matching</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Interactive AI revision tips</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Priority feedback support</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={openForm}
              className="w-full py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/35 transition-all cursor-pointer"
            >
              Upgrade to Pro
            </button>
          </div>

          {/* Plan 3 */}
          <div className="bg-[#0d1226]/40 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Premium</h3>
              <p className="text-xs text-gray-400 mb-6">For professionals seeking maximum career assistance.</p>
              <div className="flex items-baseline gap-1.5 mb-6">
                <span className="text-3xl font-extrabold text-white">$39</span>
                <span className="text-xs text-gray-500">/ month</span>
              </div>
              <ul className="space-y-3.5 mb-8 text-sm">
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Everything in Pro plan</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Interview prep questions</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Cover letter builder tools</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <Check className="w-4 h-4 text-indigo-400" />
                  <span>Dedicated career gaps report</span>
                </li>
              </ul>
            </div>
            <button 
              onClick={openForm}
              className="w-full py-2.5 rounded-full border border-white/15 hover:bg-white/5 text-white text-xs font-semibold hover:border-white/30 transition-all cursor-pointer"
            >
              Go Premium
            </button>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="py-24 px-6 max-w-6xl mx-auto relative z-10 border-t border-white/5">
        <div className="flex flex-col lg:flex-row justify-between gap-12 items-center">
          {/* Left Block */}
          <div className="w-full lg:w-[50%] flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full mb-6">
              <Award className="w-3.5 h-3.5 text-indigo-400" />
              <span className="text-indigo-300 text-xs font-semibold uppercase tracking-wider">
                About ResumeAI
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-tight mb-6">
              Empowering Careers with Intelligent AI
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
              At ResumeAI, we believe that formatting errors or word-choice gaps shouldn't stand between you and your dream job. Our mission is to democratize the recruitment process by giving every job seeker access to advanced AI screening insights.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed">
              We continuously refine our models based on real-world hiring manager preferences and ATS parsing rules, ensuring you get the most accurate feedback possible.
            </p>
          </div>

          {/* Right Stats Block */}
          <div className="w-full lg:w-[45%] grid grid-cols-2 gap-6">
            <div className="bg-[#0d1226]/40 border border-white/5 hover:border-indigo-500/20 rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 text-center">
              <div className="text-3xl font-black text-indigo-400 mb-1">98%</div>
              <div className="text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">ATS Success</div>
              <p className="text-[10px] text-gray-500">Passed automated screening rounds.</p>
            </div>
            <div className="bg-[#0d1226]/40 border border-white/5 hover:border-purple-500/20 rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 text-center">
              <div className="text-3xl font-black text-purple-400 mb-1">500k+</div>
              <div className="text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Resumes Scanned</div>
              <p className="text-[10px] text-gray-500">Helping candidates optimize worldwide.</p>
            </div>
            <div className="bg-[#0d1226]/40 border border-white/5 hover:border-cyan-500/20 rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 text-center">
              <div className="text-3xl font-black text-cyan-400 mb-1">150+</div>
              <div className="text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Countries</div>
              <p className="text-[10px] text-gray-500">Global compatibility formats.</p>
            </div>
            <div className="bg-[#0d1226]/40 border border-white/5 hover:border-emerald-500/20 rounded-2xl p-6 hover:scale-[1.03] transition-all duration-300 text-center">
              <div className="text-3xl font-black text-emerald-400 mb-1">4.9/5</div>
              <div className="text-xs font-bold text-gray-300 mb-1 uppercase tracking-wider">Rating</div>
              <p className="text-[10px] text-gray-500">Highly rated by industry seekers.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Banner Section */}
      <div className="py-16 px-6 max-w-6xl mx-auto relative z-10">
        <div className="relative bg-gradient-to-r from-[#0d1226]/80 to-[#1e1540]/80 backdrop-blur-xl border border-indigo-500/20 rounded-3xl p-10 md:p-14 text-center overflow-hidden group shadow-2xl">
          {/* Ambient Glows */}
          <div className="absolute -right-32 -bottom-32 w-96 h-96 bg-purple-600/10 rounded-full blur-[100px] pointer-events-none"></div>
          <div className="absolute -left-32 -top-32 w-96 h-96 bg-indigo-600/10 rounded-full blur-[100px] pointer-events-none"></div>

          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to Optimize Your Career?
          </h2>
          <p className="text-gray-300 text-sm md:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Join thousands of professionals who have used ResumeAI to land their dream jobs at top companies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openForm}
              className="px-8 py-3.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-full shadow-lg shadow-indigo-600/20 hover:shadow-indigo-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              Get Started Free
            </button>
            <button
              onClick={openForm}
              className="px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-full border border-white/10 hover:border-white/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 cursor-pointer"
            >
              View Pricing
            </button>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
