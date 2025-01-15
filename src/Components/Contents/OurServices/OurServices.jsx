import React from 'react';
import { FaConciergeBell, FaSwimmer, FaBroom, FaSuitcase } from 'react-icons/fa';
import Reception from './Reception';

const OurServices = () => {
  return (
    <div className="bg-white py-16 px-6 sm:px-10 lg:px-20 relative z-[1] top-[-110px]">
      {/* Section Title */}
      <div className="text-center mb-12 sm:mb-16">
        <span className="block text-xs sm:text-sm font-poppins text-gray-500 uppercase tracking-widest">
          Services & More
        </span>
        <span className="block text-2xl sm:text-4xl font-poppins text-gray-800 font-semibold mt-2">
          Hotel Facilities
        </span>
      </div>

      {/* Services */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {/* Room Service */}
        <div className="service-item flex flex-col items-center text-center">
          <FaConciergeBell className="text-5xl sm:text-6xl lg:text-7xl text-emerald-900 mb-4 sm:mb-6 opacity-70" />
          <span className="block text-base sm:text-xl font-poppins text-gray-700 opacity-70">
            Room Service
          </span>
        </div>

        {/* Swimming Pool */}
        <div className="service-item flex flex-col items-center text-center">
          <FaSwimmer className="text-5xl sm:text-6xl lg:text-7xl text-emerald-900 mb-4 sm:mb-6 opacity-70" />
          <span className="block text-base sm:text-xl font-poppins text-gray-700 opacity-70">
            Swimming Pool
          </span>
        </div>

        {/* Daily Sanitation */}
        <div className="service-item flex flex-col items-center text-center">
          <FaBroom className="text-5xl sm:text-6xl lg:text-7xl text-emerald-900 mb-4 sm:mb-6 opacity-70" />
          <span className="block text-base sm:text-xl font-poppins text-gray-700 opacity-70">
            Daily Sanitation
          </span>
        </div>

        {/* Luggage Store */}
        <div className="service-item flex flex-col items-center text-center">
          <FaSuitcase className="text-5xl sm:text-6xl lg:text-7xl text-emerald-900 mb-4 sm:mb-6 opacity-70" />
          <span className="block text-base sm:text-xl font-poppins text-gray-700 opacity-70">
            Luggage Store
          </span>
        </div>
      </div>

      <Reception />
    </div>
  );
};

export default OurServices;
