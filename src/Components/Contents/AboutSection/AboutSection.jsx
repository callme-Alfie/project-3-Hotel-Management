import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const AboutSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Run the animation only once when scrolling
    });
  }, []);

  return (
    <div className="bg-[#fff] w-full min-h-[900px] pt-[50px] px-5 sm:px-[80px]">
      {/* Main Content */}
      <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between">
        {/* Image Section - Fade up from the bottom */}
        <div 
          className="about-div-image w-full sm:w-[700px] h-[450px] overflow-hidden bg-black rounded-[15px] sm:relative sm:left-0 sm:top-0 mb-6 sm:mb-0 sm:mr-6"
          data-aos="fade-up" 
          data-aos-delay="200"
        >
          <img 
            src="https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="About Us" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Outline Box */}
        <div className="outline-div w-full sm:w-[550px] h-[320px] bg-[#fff] rounded-[15px] shadow-[0px_8px_30px_rgba(0,0,0,0.25)] sm:absolute sm:left-[30%] sm:top-[180px] transform sm:translate-x-1/2 p-5">
          {/* Heading - Slide down from the top */}
          <span 
            className="text-[28px] sm:text-[35px] font-poppins text-[#222e2b] font-semibold"
            data-aos="fade"
          >
            About Us
          </span>

          {/* Description - Fade up from the bottom */}
          <p 
            className="text-left leading-relaxed text-[12px] sm:text-[14px] mt-4 sm:mt-6"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Dennis Luxury Resort, located in the scenic heart of Gisenyi, offers a perfect blend of comfort and elegance. 
            Our resort is designed to provide an unforgettable experience, with modern amenities such as free private parking, 
            seamless Wi-Fi, and thoughtfully crafted rooms featuring TVs and secure safes. At Dennis Luxury Resort, 
            we redefine hospitality to ensure your stay is nothing short of exceptional.
          </p>

          {/* Button - Fade up from the bottom */}
          <button 
            className='bg-emerald-900 text-white px-4 py-2 rounded hover:bg-emerald-600 text-[12px] sm:text-[14px] font-semibold mt-4 sm:mt-6'
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
