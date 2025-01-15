import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import Link and useLocation for routing
import HomeLogo from './HomeLogo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Manage the menu state
  const location = useLocation(); // Get the current route

  // Hook to listen to scroll events
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Scroll to top whenever the route changes
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top of the page
  }, [location]); // Run this effect on location change

  // Determine if the navbar should be transparent (only on the home page)
  const isHomePage = location.pathname === "/";

  return (
    <div
      className={`p-5 flex items-center sticky top-0 z-50 transition-all duration-300 
        ${isScrolled ? 'bg-white shadow-lg' : isHomePage ? 'bg-transparent' : 'bg-white shadow-lg'} 
        ${isHomePage ? 'transition-colors duration-300' : 'transition-all duration-300'}`}
    >
      {/* Logo */}
      <div className="w-20 ml-20 overflow-hidden">
        <Link to="/">
          <img src={HomeLogo} alt="logo" />
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <div className="ml-auto lg:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-black focus:outline-none"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>
      </div>

      {/* Navigation Links for Larger Screens */}
      <div className="hidden lg:flex items-center space-x-6 ml-auto text-sm mr-10">
        <Link
          to="/"
          className={`hover:text-emerald-600 ${isScrolled ? 'text-gray-700' : isHomePage ? 'text-[#ffffff80]' : 'text-gray-700'}`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`hover:text-emerald-600 ${isScrolled ? 'text-gray-700' : isHomePage ? 'text-[#ffffff80]' : 'text-gray-700'}`}
        >
          About Us
        </Link>
        <Link
          to="/room"
          className={`hover:text-emerald-600 ${isScrolled ? 'text-gray-700' : isHomePage ? 'text-[#ffffff80]' : 'text-gray-700'}`}
        >
          Rooms
        </Link>
        <Link
          to="/services"
          className={`hover:text-emerald-600 ${isScrolled ? 'text-gray-700' : isHomePage ? 'text-[#ffffff80]' : 'text-gray-700'}`}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={`hover:text-emerald-600 ${isScrolled ? 'text-gray-700' : isHomePage ? 'text-[#ffffff80]' : 'text-gray-700'}`}
        >
          Contact
        </Link>
      </div>

      {/* Login and Signup */}
      <div className="hidden lg:flex items-center space-x-5 pl-6 pr-20">
        <Link to="/login" className={`text-sm ${isScrolled ? 'text-gray-700' : isHomePage ? 'text-white' : 'text-gray-700'} hover:text-emerald-600`}>
          Login
        </Link>
        <Link to="/signup">
          <button className="bg-emerald-900 text-white px-4 py-2 rounded hover:bg-emerald-600 text-sm font-semibold">
            Signup
          </button>
        </Link>
      </div>

      {/* Mobile Menu - Overlay when isMenuOpen is true */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-white flex flex-col items-center justify-center space-y-6 text-lg transition-transform transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 text-black text-2xl focus:outline-none"
        >
          &times; {/* Close icon */}
        </button>
        <Link
          to="/"
          className="hover:text-emerald-600"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="hover:text-emerald-600"
          onClick={() => setIsMenuOpen(false)}
        >
          About Us
        </Link>
        <Link
          to="/room"
          className="hover:text-emerald-600"
          onClick={() => setIsMenuOpen(false)}
        >
          Rooms
        </Link>
        <Link
          to="/services"
          className="hover:text-emerald-600"
          onClick={() => setIsMenuOpen(false)}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className="hover:text-emerald-600"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>

        {/* Login and Signup Buttons in the mobile menu */}
        <Link
          to="/login"
          className="text-sm hover:text-emerald-600"
          onClick={() => setIsMenuOpen(false)}
        >
          Login
        </Link>
        <Link to="/signup" onClick={() => setIsMenuOpen(false)}>
          <button className="bg-emerald-900 text-white px-4 py-2 rounded hover:bg-emerald-600 text-sm font-semibold">
            Signup
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
