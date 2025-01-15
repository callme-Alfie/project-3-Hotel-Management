import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom'; 

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
      <div className="relative">
        {/* Image Section - Fade up from the bottom */}
        <div 
          className="about-div-image w-full sm:w-[1200px] h-[500px] overflow-hidden bg-black rounded-[15px] absolute left-0 sm:left-[-50px] top-[20px]"
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
        <div className="outline-div w-full sm:w-[750px] h-[420px] bg-[#fff] rounded-[15px] shadow-[0px_8px_30px_rgba(0,0,0,0.25)] absolute left-0 sm:left-[50%] top-[-70px] transform -translate-x-1/2">
          {/* Description - Fade up from the bottom */}
          <p 
            className="text-left leading-relaxed p-4 font-poppins text-[12px] mt-[60px] absolute left-[25px] bottom-[40px]"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <strong>Dennis Luxury Resort</strong>, located in the scenic heart of Gisenyi, offers an unparalleled blend of comfort, elegance, and natural beauty. <br /><br />
            
            Nestled near the shimmering shores of Lake Kivu, our resort invites you to unwind in a tranquil setting while enjoying world-class amenities. <br /><br />

            Our thoughtfully designed rooms boast modern comforts, including flat-screen TVs, secure in-room safes, and plush furnishings to make your stay relaxing and luxurious. <br />
            Enjoy seamless connectivity with complimentary high-speed Wi-Fi, and take advantage of our spacious free private parking for your convenience. <br /><br />

            Savor exquisite culinary delights at our on-site restaurant, where skilled chefs prepare a fusion of local and international cuisine to tantalize your taste buds. <br />
            Cool off in our pristine outdoor pool, or rejuvenate your senses at our wellness spa, offering a range of therapeutic treatments. <br /><br />

            
          </p>

          {/* Button - Fade up from the bottom */}
          <Link to="/room">
          <button 
            className='bg-emerald-900 text-white px-4 py-2 rounded hover:bg-emerald-600 text-[12px] font-semibold mt-4 absolute bottom-[20px] left-[330px]'
            data-aos="fade-up"
            data-aos-delay="600"
          >
            Book Now
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
