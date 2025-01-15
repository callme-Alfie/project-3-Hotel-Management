import React from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { TiUserAdd } from 'react-icons/ti';
import { CiSearch } from 'react-icons/ci';
import { MdArrowDropDown } from 'react-icons/md';  // Arrow icon for dropdown

const Booking = () => {
  return (
    <div
      className="booking-form w-full sm:w-[900px] h-auto sm:h-[140px] bg-white absolute left-0 sm:left-[198px] top-[670px] 
      px-4 py-3 rounded-lg shadow-lg flex flex-col sm:flex-row sm:justify-between items-center z-10 space-y-4 sm:space-y-0 sm:space-x-4"
    >
      {/* Location Section */}
      <div className="booking-field flex flex-col items-start justify-between w-full sm:w-[150px] h-[80px] bg-white border border-black border-opacity-30 rounded-md px-3 py-2">
        <div className="flex items-center space-x-2">
          <IoLocationSharp className="text-[#064e3b] text-xl" />
          <span className="text-[#222e2b] text-sm font-medium">Location</span>
        </div>
        <select className="bg-transparent text-[#222e2b] focus:outline-none text-xs mt-2 font-poppins">
          <option value="gisenyi">Gisenyi</option>
          <option value="kigali">Kigali</option>
          <option value="musanze">Musanze</option>
        </select>
        <MdArrowDropDown className="text-[#064e3b] text-lg mt-1" />
      </div>

      {/* Check-In Section */}
      <div className="booking-field flex flex-col items-start justify-between w-full sm:w-[150px] h-[80px] bg-white border border-black border-opacity-30 rounded-md px-3 py-2 font-poppins">
        <div className="flex items-center space-x-2">
          <FaRegCalendarAlt className="text-[#064e3b] text-xl" />
          <span className="text-[#222e2b] text-sm font-medium">Check-In</span>
        </div>
        <input 
          type="date" 
          className="bg-transparent text-[#222e2b] focus:outline-none text-xs mt-2 p-1 border border-opacity-30 rounded-md"
        />
      </div>

      {/* Check-Out Section */}
      <div className="booking-field flex flex-col items-start justify-between w-full sm:w-[150px] h-[80px] bg-white border border-black border-opacity-30 rounded-md px-3 py-2 font-poppins">
        <div className="flex items-center space-x-2">
          <FaRegCalendarAlt className="text-[#064e3b] text-xl" />
          <span className="text-[#222e2b] text-sm font-medium">Check-Out</span>
        </div>
        <input 
          type="date" 
          className="bg-transparent text-[#222e2b] focus:outline-none text-xs mt-2 p-1 border border-opacity-30 rounded-md"
        />
      </div>

      {/* Rooms Section */}
      <div className="booking-field flex flex-col items-start justify-between w-full sm:w-[150px] h-[80px] bg-white border border-black border-opacity-30 rounded-md px-3 py-2">
        <div className="flex items-center space-x-2">
          <TiUserAdd className="text-[#064e3b] text-xl" />
          <span className="text-[#222e2b] text-sm font-medium font-poppins">Rooms</span>
        </div>
        <select className="bg-transparent text-[#222e2b] focus:outline-none text-xs mt-2 font-poppins">
          <option value="single">Single</option>
          <option value="double">Double</option>
          <option value="suite">Suite</option>
        </select>
        <MdArrowDropDown className="text-[#064e3b] text-lg mt-1" />
      </div>

      {/* Search Button */}
      <button
        className="search-button flex items-center justify-center w-full sm:w-[150px] h-[80px] 
        bg-[#064e3b] text-white rounded-md hover:bg-[#052e23] transition duration-300"
      >
        <CiSearch className="text-2xl mr-2" />
        <span className="text-[15px] font-medium font-poppins">Search</span>
      </button>
    </div>
  );
}

export default Booking;
