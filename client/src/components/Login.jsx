

import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
     
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <form 
        onSubmit={(e) => { 
          e.preventDefault(); 
          console.log(form); 
          setForm({ email: "", password: "" }); 
        }} 
        className="relative bg-white/5 backdrop-blur-2xl p-10 rounded-3xl shadow-2xl w-96 border border-white/10 hover:border-white/20 transition-all duration-500"
      >
       
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-gray-400 mt-2">Sign in to your account</p>
        </div>

       
        {["email", "password"].map(field => (
          <div key={field} className="mb-5 group">
            <input 
              type={field} 
              value={form[field]} 
              placeholder={`Enter your ${field}`}
              onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })} 
              name={field}
              className="w-full p-4 rounded-2xl bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:bg-white/10 focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 transition-all duration-300 outline-none group-hover:border-white/20"
            />
          </div>
        ))}

        
        <div className="flex items-center justify-between mb-6">
          <label className="flex items-center text-gray-400 text-sm cursor-pointer">
            <input type="checkbox" className="rounded bg-white/5 border-white/10 text-purple-500 focus:ring-purple-500" />
            <span className="ml-2">Remember me</span>
          </label>
          <a href="#" className="text-sm text-purple-400 hover:text-purple-300 transition-colors">
            Forgot password?
          </a>
        </div>

        
        <button 
          type="submit" 
          className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-bold py-4 rounded-2xl hover:from-purple-700 hover:to-pink-600 active:scale-95 transition-all duration-300 shadow-lg hover:shadow-purple-500/25"
        >
          Sign In
        </button>

       
        <div className="relative flex items-center my-6">
          <div className="flex-grow border-t border-white/10"></div>
          <span className="flex-shrink mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-grow border-t border-white/10"></div>
        </div>

       
        <button 
          type="button"
          className="w-full bg-white/5 border border-white/10 text-white py-3 rounded-2xl hover:bg-white/10 active:scale-95 transition-all duration-300 flex items-center justify-center gap-3"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Continue with Google
        </button>

       
        <p className="text-center text-gray-400 mt-8 text-sm">
          Don't have an account?{" "}
          <a href="#" className="text-purple-400 font-semibold hover:text-purple-300 transition-colors">
            Sign up now
          </a>
        </p>
      </form>
    </div>
  );
};

export default Login;