import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Run the animation only once when scrolling
    });
  }, []);

  return (
    <div
      className="h-screen flex items-center justify-center text-center bg-cover bg-center px-4 sm:px-10"
      style={{ backgroundImage: "url('your-image-url-here.jpg')" }}
    >
      {/* Main content wrapper */}
      <div>
        {/* Main heading - Slide down from the top */}
        <h1
          className="text-3xl sm:text-5xl lg:text-[55px] font-semibold text-white font-poppins"
          data-aos="slide-down"
        >
          Find Your Oasis of Comfort <br /> and Luxury.
        </h1>

        {/* Description - Fade up from the bottom */}
        <p
          className="text-xs sm:text-sm lg:text-[15px] mt-2 leading-relaxed text-white font-poppins"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Experience unmatched hospitality at Dennis Luxury Resort in Gisenyi.
          <br />
          Enjoy free parking, Wi-Fi, and rooms with a TV and safety deposit box.
        </p>

        {/* Button - Fade up from the bottom */}
        <button
          className="bg-emerald-900 text-white px-4 py-2 rounded hover:bg-emerald-600 text-xs sm:text-sm font-semibold mt-6"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Explore Now
        </button>

        {/* Room types section */}
        <div className="flex flex-wrap justify-center mt-8 text-white gap-6">
          {/* Duplex Room */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <span className="text-2xl sm:text-4xl font-bold">12+</span>
            <span className="text-xs sm:text-sm opacity-50">Duplex Room</span>
          </div>

          {/* Classic Room */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            <span className="text-2xl sm:text-4xl font-bold">08+</span>
            <span className="text-xs sm:text-sm opacity-50">Classic Room</span>
          </div>

          {/* Double Room */}
          <div
            className="flex flex-col items-center"
            data-aos="fade-up"
            data-aos-delay="1000"
          >
            <span className="text-2xl sm:text-4xl font-bold">10+</span>
            <span className="text-xs sm:text-sm opacity-50">Double Room</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
