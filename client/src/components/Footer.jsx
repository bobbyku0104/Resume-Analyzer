import React from "react";
import { Share2, Globe } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-[#030712] text-gray-400 py-16 px-6 relative z-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Column 1 - Brand & Socials */}
        <div>
          <h3 className="text-xl font-bold text-white mb-4">ResumeAI</h3>
          <p className="text-xs md:text-sm leading-relaxed mb-6 max-w-xs text-gray-400">
            Empowering careers through intelligent AI analysis and strategic job tracking.
          </p>
          <div className="flex gap-3">
            <button className="w-9 h-9 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer">
              <Share2 className="w-4 h-4 text-gray-300" />
            </button>
            <button className="w-9 h-9 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 flex items-center justify-center text-white transition-all cursor-pointer">
              <Globe className="w-4 h-4 text-gray-300" />
            </button>
          </div>
        </div>

        {/* Column 2 - Product */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Product</h4>
          <ul className="space-y-2.5 text-xs md:text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">Resume Builder</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">AI Analyzer</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">ATS Optimizer</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">Skill Gap Analysis</a>
            </li>
          </ul>
        </div>

        {/* Column 3 - Resources */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Resources</h4>
          <ul className="space-y-2.5 text-xs md:text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">Career Blog</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">ATS Guide</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">Interview Tips</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">Templates</a>
            </li>
          </ul>
        </div>

        {/* Column 4 - Company */}
        <div>
          <h4 className="text-white font-bold text-xs uppercase tracking-wider mb-4">Company</h4>
          <ul className="space-y-2.5 text-xs md:text-sm">
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">About Us</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
            </li>
            <li>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
        <span>© {currentYear} ResumeAI. All rights reserved.</span>
        <button className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer">
          <Globe className="w-3.5 h-3.5" />
          <span>English (US)</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
