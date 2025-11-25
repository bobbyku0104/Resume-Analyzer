import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);

    
    setEmail("");
    setPassword("");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-purple-600 from-indigo-500 via-purple-500 to-pink-500">
      <form
        onSubmit={handleSubmit}
        className="bg-white/20 backdrop-blur-xl p-8 rounded-2xl shadow-2xl w-80 flex flex-col gap-4 border border-white/30"
      >
        <h2 className="text-3xl font-extrabold text-center text-white drop-shadow-lg">
          Login
        </h2>

       
        <div>
          <label className="text-white/90 font-medium">Email</label>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full mt-1 p-3 rounded-lg bg-white/40 text-black placeholder-gray-700 outline-none focus:ring-2 focus:ring-white focus:bg-white"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        
        <div>
          <label className="text-white/90 font-medium">Password</label>
          <input
            type="password"
            placeholder="Enter password"
            className="w-full mt-1 p-3 rounded-lg bg-white/40 text-black placeholder-gray-700 outline-none focus:ring-2 focus:ring-white focus:bg-white"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

       
        <button
          type="submit"
          className="w-full bg-white text-indigo-600 font-bold py-3 rounded-lg shadow-md hover:bg-gray-100 transition active:scale-95"
        >
          Login
        </button>

        <p className="text-center text-sm text-white/80 mt-2">
          Don't have an account?{" "}
          <span className="text-white font-semibold cursor-pointer">
            Sign up
          </span>
        </p>
      </form>
    </div>
  );
};

export default Login;
