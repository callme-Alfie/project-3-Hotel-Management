import React, { useState, useEffect } from 'react';
import ContactFooter from './ContactFooter';

const ContactPage = () => {
    useEffect(() => {
        document.title = "Contact";
    }, []);
  return (
    <div className="relative min-h-screen font-poppins bg-gray-100">
      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col items-center justify-center py-20 px-4 lg:px-20">
        <h1
          className="text-[65px] text-emerald-900 text-center mb-8"
          data-aos="fade-down"
          data-aos-delay="200"
        >
          Contact Us
        </h1>

        {/* Main Container */}
        <div
          className="flex flex-wrap lg:flex-nowrap gap-8 bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden w-full max-w-6xl"
          data-aos="fade-up"
        >
          {/* Contact Info & Our Timing */}
          <div className="lg:w-1/3 bg-emerald-900 text-white p-8 bg-opacity-90 shadow-md">
            <h2 className="text-2xl mb-4 uppercase">Our Timing</h2>
            <div className="mb-8">
              <p className="mb-4">
                <strong>MONDAY - THURSDAY</strong>
                <br />
                07:00 - 15:00
                <br />
                16:00 - 21:00
              </p>
              <p className="mb-4">
                <strong>FRIDAY - SUNDAY</strong>
                <br />
                07:00 - 15:00
                <br />
                16:00 - 21:00
              </p>
              <p className="text-lg">+250 781 955 745</p>
            </div>

            <h2 className="text-2xl mb-4 uppercase">Contact Info</h2>
            <p className="mb-4">
              <strong>Address:</strong>
              <br />
              123 Kigali Ave,
              <br />
              Kigali, Rwanda
            </p>
            <p className="mb-4">
              <strong>Email:</strong>
              <br />
              dennisresort@gmail.com
            </p>
          </div>

          {/* Contact Form */}
          <div className="lg:w-2/3 p-8">
            <h2 className="text-2xl font-semibold text-emerald-900 mb-2 uppercase">
              Stay in Contact
            </h2>
            <p className="text-lg text-gray-600 mb-6">Get in Touch</p>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="text"
                placeholder="Last Name"
                className="border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="md:col-span-2 border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <textarea
                placeholder="Your Message"
                className="md:col-span-2 border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 h-32 resize-none"
              ></textarea>
              <button
                type="submit"
                className="md:col-span-2 bg-emerald-900 text-white py-3 rounded shadow-md hover:bg-emerald-600 transition font-semibold"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Location Section */}
        <div className="bg-white rounded-lg shadow-md mt-10 p-6 w-full max-w-6xl">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-4 uppercase text-center">
            Our Location
          </h2>
          <p className="text-gray-600 text-center mb-4">
            Visit us at our office located in the heart of Kigali.
          </p>
        </div>

        {/* Google Map */}
        <div className="w-full max-w-6xl rounded-lg overflow-hidden shadow-md mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d510407.34215827717!2d29.536237805171105!3d-1.9289811997855737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1732524672201!5m2!1sen!2srw" 

            width="100%"
            height="350"
            allowFullScreen=""
            loading="lazy"
            className="border-0"
          ></iframe>
        </div>
      </div>
      <ContactFooter />
    </div>
  );
};

export default ContactPage;
