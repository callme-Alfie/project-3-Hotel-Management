import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ContactFooter = () => {
  return (
    <footer className="w-full bg-[#313736] text-white px-10 py-8 absolute top-[1350px] font-poppins">
      {/* Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Newsletter Section */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#fff]">Newsletter</h3>
          <p className="text-sm leading-relaxed">
            Sign up for speacial offers
          </p>
          {/* <div className="newsletter-div w-[250px] h-[50px] bg-white absolute top-[120px]"></div> */}
          <input type="text" placeholder='Insert your email' className="newsletter-div w-[200px] h-[50px] bg-white absolute top-[120px] placeholder:text-xs px-2" />
          <button className='bg-[#064e3b] w-[100px] h-[51px] absolute left-[230px] top-[120px] text-[15px]'>Suscribe</button>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#fff]">Navigation Links</h3>
          <ul className="text-sm space-y-3">
          <li><Link to="/" className="hover:text-[#064e3b]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[#064e3b]">About Us</Link></li>
            <li><Link to="/rooms" className="hover:text-[#064e3b]">Rooms</Link></li>
            <li><Link to="/services" className="hover:text-[#064e3b]">Services</Link></li>
            <li><Link to="/contact" className="hover:text-[#064e3b]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-[#fff]">Contact Us</h3>
          <ul className="text-sm space-y-3">
            <li className="flex items-center">
              <FaMapMarkerAlt className="text-[#064e3b] mr-3" /> Gisenyi, Rwanda
            </li>
            <li className="flex items-center">
              <FaPhoneAlt className="text-[#064e3b] mr-3" /> +250 123 456 789
            </li>
            <li className="flex items-center">
              <FaEnvelope className="text-[#064e3b] mr-3" /> info@dennisresort.com
            </li>
          </ul>
          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-5">
            <a href="#facebook" className="text-gray-400 hover:text-[#064e3b]">
              <FaFacebookF />
            </a>
            <a href="#twitter" className="text-gray-400 hover:text-[#064e3b]">
              <FaTwitter />
            </a>
            <a href="#instagram" className="text-gray-400 hover:text-[#064e3b]">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="mt-8 border-t border-gray-400 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Dennis Luxury Resort. All rights reserved.
      </div>
    </footer>
  );
};

export default ContactFooter;
