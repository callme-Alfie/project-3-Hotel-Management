import React from 'react';
import { FaUtensils, FaSpa, FaMapMarkerAlt } from 'react-icons/fa'; // Icons for lunch, spa, and location

const Reception = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-10 px-4 md:px-10 absolute top-[850px] left-[1px] w-full">
      {/* First Section */}
      <div className="bg-emerald-900 text-white text-center flex flex-col justify-center items-center p-6 md:p-10 rounded-lg opacity-70 h-full">
        <span className="text-3xl md:text-4xl font-poppins font-semibold mb-4">RECEPTION</span>
        <div className="font-poppins text-base md:text-lg leading-relaxed mb-6">
          <p>MON ...... 11:00 - 03:00 pm</p>
          <p>FRY ...... 11:00 - 03:00 pm</p>
          <p>SAT ...... 11:00 - 03:00 pm</p>
          <p>SUN ...... 11:00 - 03:00 pm</p>
        </div>
        <div className="font-poppins text-xs md:text-sm">
          <p className="uppercase">Our Location</p>
          <p>123 Scenic Road, Gisenyi</p>
          <p>Rwanda</p>
        </div>
      </div>

      {/* Second Section (Lunch) */}
      <div className="relative group w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg">
        <img
          src="https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg"
          alt="Lunch"
          className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-300"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <FaUtensils className="text-4xl md:text-6xl mb-4" />
          <span className="text-2xl md:text-3xl font-poppins font-semibold">Lunch</span>
        </div>
      </div>

      {/* Third Section (Spa) */}
      <div className="relative group w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg">
        <img
          src="https://images.pexels.com/photos/3101547/pexels-photo-3101547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Spa"
          className="w-full h-full object-cover brightness-50 group-hover:brightness-75 transition-all duration-300"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <FaSpa className="text-4xl md:text-6xl mb-4" />
          <span className="text-2xl md:text-3xl font-poppins font-semibold">Spa</span>
        </div>
      </div>
    </div>
  );
};

export default Reception;
