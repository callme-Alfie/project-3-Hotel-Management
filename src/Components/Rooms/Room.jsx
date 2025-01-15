import React, { useState, useEffect } from 'react';
import { FaDollarSign, FaUserAlt } from 'react-icons/fa';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import FooterHome from '../Contents/FooterHome/FooterHome';
import ContactUs from '../Contents/ContactUs/ContactUs';
import RoomFooter from './RoomFooter';
import { Link } from 'react-router-dom'; 
// import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Room = () => {
  useEffect(() => {
    document.title = "Rooms";
}, []);
  const [selectedBranch, setSelectedBranch] = useState('All Branches');
  const [checkInDate, setCheckInDate] = useState(null);
  const [checkOutDate, setCheckOutDate] = useState(null);
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Run the animation only once when scrolling
    });
  }, []);
  return (
    
  
    <div className="room-page-container bg-gray-100 min-h-screen  py-10 font-poppins">
        <main className="flex-grow">
      {/* Header */}
      <h1 className="text-[65px] text-emerald-900 text-center mb-8" data-aos="fade-down" 
          data-aos-delay="200">Rooms</h1>

      {/* Filters Section */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 px-4 lg:px-6 mx-10">
        <div className="bg-emerald-900 shadow-md rounded-lg p-4 w-full lg:w-[450px] h-96 flex flex-col gap-4" data-aos="fade-up" 
          data-aos-delay="200">
          <label className="text-white font-semibold mb-1">Select Branch</label>
          <select
            value={selectedBranch}
            onChange={(e) => setSelectedBranch(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option>All Branches</option>
            <option>Rome</option>
            <option>Paris</option>
            <option>London</option>
          </select>

          {/* Filters */}
          <div className="grid grid-cols-2 gap-3 flex-grow">
            {/* Check-In */}
            <div className="bg-emerald-800 rounded-md p-3">
              <span className="text-white font-medium mb-1 block">CHECK-IN</span>
              <DatePicker
                selected={checkInDate}
                onChange={(date) => setCheckInDate(date)}
                className="w-full mt-2 border p-2 rounded"
                placeholderText="Select check-in date"
              />
            </div>

            {/* Check-Out */}
            <div className="bg-emerald-800 rounded-md p-3">
              <span className="text-white font-medium mb-1 block">CHECK-OUT</span>
              <DatePicker
                selected={checkOutDate}
                onChange={(date) => setCheckOutDate(date)}
                className="w-full mt-2 border p-2 rounded"
                placeholderText="Select check-out date"
                minDate={checkInDate}
              />
            </div>

            {/* Guests */}
            <div className="bg-emerald-800 rounded-md p-3">
              <span className="text-white font-medium mb-1 block">GUESTS</span>
              <select className="w-full mt-2 border p-2 rounded">
                {[1, 2, 3, 4].map(guest => <option key={guest} value={guest}>{guest}</option>)}
              </select>
            </div>

            {/* Nights */}
            <div className="bg-emerald-800 rounded-md p-3">
              <span className="text-white font-medium mb-1 block">NIGHTS</span>
              <select className="w-full mt-2 border p-2 rounded">
                {[...Array(30)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Room Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 w-full px-4 lg:px-0" data-aos="fade-up" 
          data-aos-delay="200">
          {/* Room 1 */}
          <div className="bg-white shadow-lg rounded-lg w-full h-[510px] flex flex-col">
            <div className="bg-gray-300 rounded-t-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Small Room" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-1">
              <h2 className="text-3xl text-emerald-900 mb-2">Small Room</h2>
              <div className="flex items-center gap-4">
                <p className="text-gray-600 flex items-center"><FaUserAlt className="mr-2" /> 1 Guest</p>
                <p className="text-lg text-gray-700 flex items-center"><FaDollarSign className="mr-2" /> 56 $</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Link to="/booking">
            <button  className="border-[0.5px] border-emerald-900 text-emerald-900 py-2 mt-auto mb-8 hover:bg-emerald-900 hover:text-white w-[300px] mx-auto">
              BOOK NOW
            </button>
            </Link>
          </div>

          {/* Room 2 */}
          <div className="bg-white shadow-lg rounded-lg w-full h-[510px] flex flex-col">
            <div className="bg-gray-300 rounded-t-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/7722164/pexels-photo-7722164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Room with View" 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-1">
              <h2 className="text-3xl text-emerald-900 mb-2">Room with View</h2>
              <div className="flex items-center gap-4">
                <p className="text-gray-600 flex items-center"><FaUserAlt className="mr-2" /> 4 Guests</p>
                <p className="text-lg text-gray-700 flex items-center"><FaDollarSign className="mr-2" /> 120 $</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Link to="/booking">
            <button className="border-[0.5px] border-emerald-900 text-emerald-900 py-2 mt-auto mb-8 hover:bg-emerald-900 hover:text-white w-[300px] mx-auto">
              BOOK NOW
            </button>
            </Link>
          </div>
          
          {/* Room 3 */}
          <div className="bg-white shadow-lg rounded-lg w-full h-[510px] flex flex-col">
            <div className="bg-gray-300 rounded-t-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Luxury Room" 
                className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-1">
              <h2 className="text-3xl text-emerald-900 mb-2">Luxury Room</h2>
              <div className="flex items-center gap-4">
                <p className="text-gray-600 flex items-center"><FaUserAlt className="mr-2" /> 2 Guests</p>
                <p className="text-lg text-gray-700 flex items-center"><FaDollarSign className="mr-2" /> 200 $</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Link to="/booking">
            <button className="border-[0.5px] border-emerald-900 text-emerald-900 py-2 mt-auto mb-8 hover:bg-emerald-900 hover:text-white w-[300px] mx-auto">
              BOOK NOW
            </button>
            </Link>
          </div>

          {/* Room 4 */}
          <div className="bg-white shadow-lg rounded-lg w-full h-[510px] flex flex-col">
            <div className="bg-gray-300 rounded-t-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/28347473/pexels-photo-28347473/free-photo-of-a-hotel-room-with-a-large-bed-and-tv.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Classic Room" 
                className="w-full h-[230px] object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="p-4 flex-1">
              <h2 className="text-3xl text-emerald-900 mb-2">Classic Room</h2>
              <div className="flex items-center gap-4">
                <p className="text-gray-600 flex items-center"><FaUserAlt className="mr-2" /> 2 Guests</p>
                <p className="text-lg text-gray-700 flex items-center"><FaDollarSign className="mr-2" /> 150 $</p>
              </div>
              <p className="text-sm text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
            <Link to="/booking">
            <button className="border-[0.5px] border-emerald-900 text-emerald-900 py-2 mt-auto mb-8 hover:bg-emerald-900 hover:text-white w-[300px] mx-auto">
              BOOK NOW
            </button>
            </Link>
          </div>

        </div>
      </div>
      
      <RoomFooter />
      </main>

    </div>
  );
};

export default Room;
