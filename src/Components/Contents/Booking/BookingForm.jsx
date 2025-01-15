import React, { useState, useEffect } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { TiUserAdd } from 'react-icons/ti';
import { CiSearch } from 'react-icons/ci';
import { MdArrowDropDown } from 'react-icons/md'; 
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import BookingFooter from './BookingFooter';
import { Link } from 'react-router-dom'; 
import { useLocation } from 'react-router-dom';

const Booking = () => {
    useEffect(() => {
        document.title = "Booking";
    }, []);
  const [formData, setFormData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    fullName: '',
    email: '',
    phone: ''
  });

  const [errors, setErrors] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    fullName: '',
    email: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.location) newErrors.location = 'Location is required';
    if (!formData.checkIn) newErrors.checkIn = 'Check-In date is required';
    if (!formData.checkOut) newErrors.checkOut = 'Check-Out date is required';
    if (!formData.roomType) newErrors.roomType = 'Room type is required';
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    console.log('Form submitted successfully:', formData);
    setFormData({
      location: '',
      checkIn: '',
      checkOut: '',
      roomType: '',
      fullName: '',
      email: '',
      phone: ''
    });
    setErrors({});
  };
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Run the animation only once when scrolling
    });
  }, []);

  return (
    <div className="booking-container">
      {/* Header */}
      <h1 className="text-[65px] text-emerald-900 text-center mb-10 pt-8" data-aos="fade-down" data-aos-delay="200">
        Booking
      </h1>

      <form onSubmit={handleSubmit} className="booking-form-container w-full max-w-[1000px] p-6 mx-auto bg-white rounded-lg shadow-2xl">
        <div className="flex flex-wrap gap-4">

          {/* Location Section */}
          <div className="booking-field flex flex-col w-full sm:w-[48%]">
            <label className="text-sm font-medium text-[#222e2b]">Location</label>
            <div className="flex items-center space-x-2">
              <IoLocationSharp className="text-[#064e3b] text-xl" />
              <select
                name="location"
                value={formData.location}
                onChange={handleChange}
                className="border border-black border-opacity-30 rounded-md px-3 py-2 mt-2 text-sm font-poppins"
              >
                <option value="">Select Location</option>
                <option value="gisenyi">Gisenyi</option>
                <option value="kigali">Kigali</option>
                <option value="musanze">Musanze</option>
              </select>
            </div>
            {errors.location && <span className="text-red-500 text-xs">{errors.location}</span>}
          </div>

          {/* Check-In Section */}
          <div className="booking-field flex flex-col w-full sm:w-[48%]">
            <label className="text-sm font-medium text-[#222e2b]">Check-In</label>
            <div className="flex items-center space-x-2">
              <FaRegCalendarAlt className="text-[#064e3b] text-xl" />
              <input
                type="date"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="border border-black border-opacity-30 rounded-md px-3 py-2 mt-2 text-sm font-poppins"
              />
            </div>
            {errors.checkIn && <span className="text-red-500 text-xs">{errors.checkIn}</span>}
          </div>

          {/* Check-Out Section */}
          <div className="booking-field flex flex-col w-full sm:w-[48%]">
            <label className="text-sm font-medium text-[#222e2b]">Check-Out</label>
            <div className="flex items-center space-x-2">
              <FaRegCalendarAlt className="text-[#064e3b] text-xl" />
              <input
                type="date"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="border border-black border-opacity-30 rounded-md px-3 py-2 mt-2 text-sm font-poppins"
              />
            </div>
            {errors.checkOut && <span className="text-red-500 text-xs">{errors.checkOut}</span>}
          </div>

          {/* Room Type Section */}
          <div className="booking-field flex flex-col w-full sm:w-[48%]">
            <label className="text-sm font-medium text-[#222e2b]">Room Type</label>
            <div className="flex items-center space-x-2">
              <TiUserAdd className="text-[#064e3b] text-xl" />
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="border border-black border-opacity-30 rounded-md px-3 py-2 mt-2 text-sm font-poppins"
              >
                <option value="">Select Room Type</option>
                <option value="single">Single</option>
                <option value="double">Double</option>
                <option value="suite">Suite</option>
              </select>
            </div>
            {errors.roomType && <span className="text-red-500 text-xs">{errors.roomType}</span>}
          </div>

          {/* Full Name Section */}
          <div className="booking-field flex flex-col w-full sm:w-[48%]">
            <label className="text-sm font-medium text-[#222e2b]">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="border border-black border-opacity-30 rounded-md px-3 py-2 mt-2 text-sm font-poppins"
              placeholder="Enter your full name"
            />
            {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
          </div>

          {/* Email Section */}
          <div className="booking-field flex flex-col w-full sm:w-[48%]">
            <label className="text-sm font-medium text-[#222e2b]">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="border border-black border-opacity-30 rounded-md px-3 py-2 mt-2 text-sm font-poppins"
              placeholder="Enter your email"
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email}</span>}
          </div>

          {/* Phone Number Section */}
          <div className="booking-field flex flex-col w-full sm:w-[48%]">
            <label className="text-sm font-medium text-[#222e2b]">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="border border-black border-opacity-30 rounded-md px-3 py-2 mt-2 text-sm font-poppins"
              placeholder="Enter your phone number"
            />
            {errors.phone && <span className="text-red-500 text-xs">{errors.phone}</span>}
          </div>

          {/* Submit Button */}
          <div className="flex justify-center w-full mt-6">
          <Link to={{ pathname: "/checkout", state: { formData } }}>
  <button
    type="submit"
    className="search-button flex items-center justify-center w-[150px] h-[40px] 
    bg-[#064e3b] text-white rounded-md hover:bg-[#052e23] transition duration-300"
  >
    <CiSearch className="text-2xl mr-2" />
    <span className="text-[15px] font-medium font-poppins">Book Now</span>
  </button>
</Link>
          </div>
        </div>

        {/* Error Message */}
        {Object.values(errors).some((error) => error) && (
          <p className="text-red-500 mt-4 text-center">{`Please correct the errors above.`}</p>
        )}
      </form>
      <BookingFooter />
    </div>
  );
};

export default Booking;
