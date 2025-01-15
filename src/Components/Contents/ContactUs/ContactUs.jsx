import React from 'react';

const ContactUs = () => {
  return (
    <div className="relative">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <img
          src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="flex flex-wrap lg:flex-nowrap gap-8 px-4 md:px-10 py-10 lg:py-20 relative z-10">
        {/* Our Timing */}
        <div className="w-full lg:w-1/3 bg-emerald-900 text-white bg-opacity-90 p-6 md:p-8 shadow-md rounded-lg">
          <h2 className="text-xl md:text-2xl mb-4 uppercase font-poppins">Our Timing</h2>
          <div className="font-poppins">
            <p className="mb-4">
              <strong>MONDAY - THURSDAY</strong>
              <br />
              07:00 - 15:00
              <br />
              16:00 - 15:00
            </p>
            <p className="mb-4">
              <strong>FRIDAY - SUNDAY</strong>
              <br />
              07:00 - 15:00
              <br />
              16:00 - 15:00
            </p>
            <p className="text-emerald-900 font-semibold text-lg">+250781955745</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/3 bg-white bg-opacity-90 p-6 md:p-8 rounded shadow-md font-poppins">
          <h2 className="text-xl md:text-2xl font-semibold text-emerald-900 mb-2 uppercase">Stay in Contact</h2>
          <p className="text-lg text-gray-600 mb-6">Get in Touch</p>

          <form className="grid grid-cols-1 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring focus:ring-emerald-300"
            />
            <input
              type="text"
              placeholder="Surname"
              className="border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring focus:ring-emerald-300"
            />
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring focus:ring-emerald-300"
            />
            <textarea
              placeholder="Insert your Message"
              className="border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring focus:ring-emerald-300 h-28 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-900 text-white py-3 px-6 rounded shadow-md hover:bg-emerald-600 transition font-semibold"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
