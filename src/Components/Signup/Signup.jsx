import React, { useState } from 'react';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import { IoLogoWhatsapp } from 'react-icons/io';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with:', name, email, password);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F1F5F8]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[400px]">
        <h2 className="text-3xl font-semibold text-center text-[#064e3b] mb-6">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-[#064e3b] mb-2">Full Name</label>
            <div className="flex items-center border border-gray-300 p-2 rounded-md">
              <FaUserAlt className="text-[#064e3b] text-xl" />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full p-2 outline-none border-none"
                placeholder="Enter your full name"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#064e3b] mb-2">Email</label>
            <div className="flex items-center border border-gray-300 p-2 rounded-md">
              <FaEnvelope className="text-[#064e3b] text-xl" />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 outline-none border-none"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password" className="text-[#064e3b] mb-2">Password</label>
            <div className="flex items-center border border-gray-300 p-2 rounded-md">
              <FaLock className="text-[#064e3b] text-xl" />
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 outline-none border-none"
                placeholder="Create a password"
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#064e3b] text-white py-2 rounded-md hover:bg-[#052e23] transition duration-300"
          >
            Sign Up
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <button className="text-[#064e3b] text-sm">Already have an account?</button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
