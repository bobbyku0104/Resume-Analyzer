import React from "react";

const Footer = ({ 
  companyName = "ResumeAI", 
  tagline = "AI-Powered Resume Analysis",
  currentYear = new Date().getFullYear(),
  showSocialLinks = true,
  showNewsletter = true,
  showQuickLinks = true 
}) => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          
          
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <h3 className="text-xl font-bold">{companyName}</h3>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              {tagline}. Get instant AI-powered feedback on your resume and boost your job search success rate.
            </p>
            {showSocialLinks && (
              <div className="flex gap-3">
                <SocialIcon href="#" icon="📘" label="Facebook" />
                <SocialIcon href="#" icon="🐦" label="Twitter" />
                <SocialIcon href="#" icon="📷" label="Instagram" />
                <SocialIcon href="#" icon="💼" label="LinkedIn" />
              </div>
            )}
          </div>

          
          {showQuickLinks && (
            <div>
              <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
              <div className="space-y-2">
                <FooterLink href="#" label="Home" />
                <FooterLink href="#" label="Analyze Resume" />
                <FooterLink href="#" label="Templates" />
                <FooterLink href="#" label="Pricing" />
                <FooterLink href="#" label="About Us" />
              </div>
            </div>
          )}

         
          <div>
            <h4 className="font-semibold text-lg mb-4">Features</h4>
            <div className="space-y-2">
              <FooterLink href="#" label="ATS Optimization" />
              <FooterLink href="#" label="Skills Analysis" />
              <FooterLink href="#" label="Job Matching" />
              <FooterLink href="#" label="Career Insights" />
              <FooterLink href="#" label="Resume Scoring" />
            </div>
          </div>

         
          {showNewsletter && (
            <div>
              <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
              <p className="text-gray-400 text-sm mb-3">
                Get the latest career tips and AI insights delivered to your inbox.
              </p>
              <NewsletterForm />
            </div>
          )}
        </div>

        
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-gray-400 text-sm">
              © {currentYear} {companyName}. All rights reserved.
            </div>
            <div className="flex gap-6 text-sm">
              <FooterLink href="#" label="Privacy Policy" />
              <FooterLink href="#" label="Terms of Service" />
              <FooterLink href="#" label="Cookie Policy" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};


const SocialIcon = ({ href, icon, label }) => (
  <a 
    href={href} 
    className="w-10 h-10 bg-gray-800 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-110"
    aria-label={label}
  >
    <span className="text-lg">{icon}</span>
  </a>
);


const FooterLink = ({ href, label }) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-white transition-colors duration-300 text-sm block hover:translate-x-1 transform"
  >
    {label}
  </a>
);

const NewsletterForm = () => (
  <div className="space-y-3">
    <div className="flex gap-2">
      <input 
        type="email" 
        placeholder="Enter your email"
        className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-indigo-500"
      />
      <button className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold text-sm transition-all duration-300 hover:scale-105">
        Subscribe
      </button>
    </div>
    <p className="text-gray-500 text-xs">
      No spam. Unsubscribe at any time.
    </p>
  </div>
);

export default Footer;
