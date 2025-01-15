import React from 'react'
import './Hero/Hero'
import Hero from './Hero/Hero'
import HImage from './Hero-Image/HImage'
import Booking from './Booking/Booking'
import AboutSection from './AboutSection/AboutSection'
import ReserveSection from './ReserveSection/ReserveSection'
import OurServices from './OurServices/OurServices'
import ContactUs from './ContactUs/ContactUs'
import FooterHome from './FooterHome/FooterHome'

const Contents = () => {
  return (
    <div>
      
      <Hero />
      <Booking />
      <AboutSection />
      <ReserveSection />
      <OurServices />
      <ContactUs />
      <HImage />
      <FooterHome />
      
    </div>
  )
}

export default Contents
