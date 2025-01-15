import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import { Link } from 'react-router-dom'; 

import AboutFooter from './AboutFooter';
import AboutSection from './AboutSection';

const About = () => {
  useEffect(() => {
    document.title = "About";
}, []);
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration in milliseconds
      easing: 'ease-in-out', // Easing function
      once: true, // Run the animation only once when scrolling
    });
  }, []);

  return (
    <div className="pt-16 font-poppins"> {/* Added padding-top to give space at the top */}
      <div className="text-center mb-16">
        <h1
          className="text-[65px] text-emerald-900 text-center mb-8"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          About Us
        </h1>
      </div>
      <AboutSection />
      <AboutFooter />
    </div>
  );
}

export default About;
