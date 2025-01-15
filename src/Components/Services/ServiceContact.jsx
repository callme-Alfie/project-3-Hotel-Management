import React from 'react';

const ServiceContact = () => {
  return (
    <div className="relative mt-20">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10 ">
        <img
          src="https://images.pexels.com/photos/2869215/pexels-photo-2869215.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="background"
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div className="flex flex-wrap lg:flex-nowrap gap-8 px-10 py-20 relative z-10">
        {/* Our Timing */}
        <div className="lg:w-1/3 bg-emerald-900 text-white bg-opacity-90 p-8 shadow-md">
          <h2 className="text-2xl mb-4 uppercase font-poppins">Our Timing</h2>
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
        <div className="lg:w-2/3 bg-white bg-opacity-90 p-8 rounded shadow-md font-poppins">
          <h2 className="text-2xl font-semibold text-emerald-900 mb-2 uppercase font-poppins">Stay in Contact</h2>
          <p className="text-lg text-gray-600 mb-6 font-poppins">Get in Touch</p>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              className="md:col-span-2 border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring focus:ring-emerald-300"
            />
            <textarea
              placeholder="Insert your Message"
              className="md:col-span-2 border border-gray-300 p-3 rounded text-gray-700 focus:outline-none focus:ring focus:ring-emerald-300 h-28 resize-none"
            ></textarea>
            <button
              type="submit"
              className="md:col-span-2 bg-emerald-900 text-white py-3 px-6 rounded shadow-md hover:bg-emerald-600 transition font-semibold font-poppins"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ServiceContact;
