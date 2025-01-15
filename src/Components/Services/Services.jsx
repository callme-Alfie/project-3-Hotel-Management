import React, { useState, useEffect } from 'react';
import { FaConciergeBell, FaSwimmer, FaBroom, FaSuitcase } from 'react-icons/fa';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css'; // For carousel styling
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import ServiceContact from './ServiceContact';
import ServicesFooter from './ServicesFooter';
import { Link } from 'react-router-dom'; 

const Services = () => {
  useEffect(() => {
    document.title = "Services";
}, []);
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Run the animation only once when scrolling
    });
  }, []);

  return (
    <div className="bg-[#fff] py-16 px-6 md:px-12 lg:px-20 relative z-[1] top-[-50px] font-poppins">
      {/* Big Header */}
      <div className="text-center mb-16">
        <h1
          className="text-[65px] text-emerald-900 text-center mb-8"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Services
        </h1>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center" data-aos="fade-up">
        {/* Room Service */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-colors duration-50 hover:bg-emerald-900 hover:text-white">
          <FaConciergeBell className="text-7xl mb-6 mx-auto opacity-70 transition-colors duration-50" />
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-50">Room Service</h3>
          <p className="text-[12px] leading-relaxed transition-colors duration-50">
            Enjoy 24/7 room service with a wide selection of delicious meals and beverages delivered right to your door.
          </p>
        </div>

        {/* Swimming Pool */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-colors duration-50 hover:bg-emerald-900 hover:text-white">
          <FaSwimmer className="text-7xl mb-6 mx-auto opacity-70 transition-colors duration-50" />
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-50">Swimming Pool</h3>
          <p className="text-[12px] leading-relaxed transition-colors duration-50">
            Relax and unwind in our luxurious swimming pool, perfect for leisure or fitness enthusiasts.
          </p>
        </div>

        {/* Daily Sanitation */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-colors duration-50 hover:bg-emerald-900 hover:text-white">
          <FaBroom className="text-7xl mb-6 mx-auto opacity-70 transition-colors duration-50" />
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-50">Daily Sanitation</h3>
          <p className="text-[12px] leading-relaxed transition-colors duration-50">
            Our team ensures your room is clean and comfortable with daily sanitation services for your peace of mind.
          </p>
        </div>

        {/* Luggage Storage */}
        <div className="bg-white shadow-lg rounded-lg p-6 transition-colors duration-50 hover:bg-emerald-900 hover:text-white">
          <FaSuitcase className="text-7xl mb-6 mx-auto opacity-70 transition-colors duration-50" />
          <h3 className="text-xl font-semibold mb-2 transition-colors duration-50">Luggage Storage</h3>
          <p className="text-[12px] leading-relaxed transition-colors duration-50">
            Secure luggage storage facilities are available to make your stay hassle-free and convenient.
          </p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="mt-36">
        <h3 className="text-4xl font-semibold text-center mb-12 text-[#222e2b]">
          What Our Guests Say
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/45.jpg"
                alt="Jane Doe"
                className="w-16 h-16 rounded-full mr-4 shadow-md"
              />
              <div>
                <h4 className="font-bold text-lg text-[#222e2b]">Jane Doe</h4>
                <p className="text-sm text-gray-500">Business Traveler</p>
              </div>
            </div>
            <p className="italic text-gray-700">
              "Amazing service! The room was spotless, and the staff were so friendly!"
            </p>
          </div>

          {/* Testimonial 2 */}
          <div className="p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/men/42.jpg"
                alt="John Smith"
                className="w-16 h-16 rounded-full mr-4 shadow-md"
              />
              <div>
                <h4 className="font-bold text-lg text-[#222e2b]">John Smith</h4>
                <p className="text-sm text-gray-500">Family Vacationer</p>
              </div>
            </div>
            <p className="italic text-gray-700">
              "The swimming pool was clean and relaxing. A perfect getaway!"
            </p>
          </div>

          {/* Testimonial 3 */}
          <div className="p-8 bg-white rounded-lg shadow-lg transform transition duration-500 hover:scale-105">
            <div className="flex items-center mb-6">
              <img
                src="https://randomuser.me/api/portraits/women/68.jpg"
                alt="Emily Clark"
                className="w-16 h-16 rounded-full mr-4 shadow-md"
              />
              <div>
                <h4 className="font-bold text-lg text-[#222e2b]">Emily Clark</h4>
                <p className="text-sm text-gray-500">Solo Adventurer</p>
              </div>
            </div>
            <p className="italic text-gray-700">
              "A fantastic stay! The luggage service made my trip stress-free."
            </p>
          </div>
        </div>
      </div>

      {/* Image Carousel */}
      <div className="mt-20">
        <Carousel
          responsive={{
            desktop: { breakpoint: { max: 500, min: 1024 }, items: 3 },
            tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
            mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
          }}
          autoPlay={true}
          infinite={true}
          showDots={true}
        >
          <img
            src="https://images.pexels.com/photos/6466301/pexels-photo-6466301.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Facility 1"
            className="rounded-lg"
          />
          <img
            src="https://images.pexels.com/photos/60217/pexels-photo-60217.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Facility 2"
            className="rounded-lg"
          />
          <img
            src="https://images.pexels.com/photos/870170/pexels-photo-870170.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Facility 3"
            className="rounded-lg"
          />
        </Carousel>
      </div>

      {/* Call-to-Action */}
      <div className="mt-4 text-center">
      <Link to="/room">
        <button className="bg-emerald-900 text-white py-3 px-8 rounded-[5px] text-lg hover:bg-emerald-700 transition-colors">
          Book Your Stay
        </button>
        </Link>
      </div>

      {/* Ensure ServiceContact is placed with margin adjustment */}
      <div className="mr-[-80px] ml-[-80px]">
        <ServiceContact />
        <ServicesFooter />

      </div>
      
    
    </div>
  );
};

export default Services;
