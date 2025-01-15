import React, { useState } from 'react';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('guest'); // Default role is guest
  const navigate = useNavigate(); // Initialize the navigate function

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in as:', role, 'with', email, password);

    // Redirect based on role after login
    if (role === 'admin') {
      navigate('/dashboard'); // Redirect to the admin dashboard
    } else {
      navigate('/guest-dashboard'); // Redirect to guest dashboard (or any other path you prefer)
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#F1F5F8]">
      <div className="bg-white p-8 rounded-lg shadow-xl w-[400px]">
        <h2 className="text-3xl font-semibold text-center text-[#064e3b] mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[#064e3b] mb-2">Email</label>
            <div className="flex items-center border border-gray-300 p-2 rounded-md">
              <FaUserAlt className="text-[#064e3b] text-xl" />
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
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          {/* Role Selection */}
          <div className="flex items-center space-x-4 mt-4">
            <div>
              <input
                type="radio"
                id="guest"
                name="role"
                value="guest"
                checked={role === 'guest'}
                onChange={() => setRole('guest')}
                className="text-[#064e3b]"
              />
              <label htmlFor="guest" className="ml-2 text-[#064e3b]">Guest</label>
            </div>
            <div>
              <input
                type="radio"
                id="admin"
                name="role"
                value="admin"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
                className="text-[#064e3b]"
              />
              <label htmlFor="admin" className="ml-2 text-[#064e3b]">Admin</label>
            </div>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#064e3b] text-white py-2 rounded-md hover:bg-[#052e23] transition duration-300"
          >
            Login as {role.charAt(0).toUpperCase() + role.slice(1)}
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <button className="text-[#064e3b] text-sm">Forgot Password?</button>
          <button className="text-[#064e3b] text-sm">Sign Up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
