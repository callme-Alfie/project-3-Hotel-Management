import React from 'react';
import { FaCrown } from 'react-icons/fa';
import { IoBedOutline } from 'react-icons/io5';
import { MdWifi } from 'react-icons/md';
import { GiCoffeeCup } from 'react-icons/gi';

const ReserveSection = () => {
  return (
    <div className="relative flex flex-col sm:flex-row justify-between items-center h-auto sm:h-[700px] bg-[#f7f7f7] pt-10 sm:pt-0">
      {/* Left Side Image */}
      <div className="relative w-full sm:w-1/2 h-[400px] sm:h-full mb-6 sm:mb-0">
        <img
          src="https://images.pexels.com/photos/279746/pexels-photo-279746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with actual image URL
          alt="Luxury Room"
          className="w-full h-full object-cover"
        />
        {/* Overlapping Information */}
        <div className="absolute top-[20%] left-[10%] bg-white p-6 rounded-lg shadow-lg max-w-[300px] sm:max-w-[350px]">
          <h3 className="text-lg font-semibold text-[#064e3b] flex items-center">
            <FaCrown className="text-gold mr-2" />
            Single Room Details
          </h3>
          <ul className="mt-4 space-y-2 text-sm text-gray-600">
            <li className="flex items-center">
              <IoBedOutline className="text-[#064e3b] mr-2" />
              King-size bed for ultimate comfort.
            </li>
            <li className="flex items-center">
              <MdWifi className="text-[#064e3b] mr-2" />
              Free high-speed Wi-Fi.
            </li>
            <li className="flex items-center">
              <GiCoffeeCup className="text-[#064e3b] mr-2" />
              Complimentary coffee and tea.
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side Text */}
      <div className="w-full sm:w-1/2 p-6 sm:p-8">
        <span className="text-[10px] font-poppins text-[#222e2b] tracking-[5px] uppercase">
          Best Stay in the Town
        </span>
        <h2 className="text-[40px] sm:text-[60px] font-poppins text-[#222e2b] mt-4 leading-tight">
          Reserve a <br />
          Single Room
        </h2>
        <p className="text-[#555] text-sm sm:text-base mt-6 leading-relaxed">
          Experience the pinnacle of comfort and style in our single rooms, designed for relaxation and productivity. 
          Enjoy premium amenities, impeccable service, and an ambiance that feels like home. Perfect for solo travelers or 
          business guests seeking the finest hospitality in the heart of the city.
        </p>
        <button className="mt-8 px-6 py-3 bg-[#064e3b] text-white font-medium rounded-md hover:bg-[#046d4d] transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

export default ReserveSection;
