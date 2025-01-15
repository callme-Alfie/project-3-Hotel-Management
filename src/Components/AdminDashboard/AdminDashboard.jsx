import React, { useState, useEffect } from 'react'; 
import { FaSignOutAlt, FaHome, FaCalendarAlt, FaBed, FaDollarSign, FaUsers, FaChartBar } from 'react-icons/fa';
import "react-datepicker/dist/react-datepicker.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const logout = () => {
    // logic to handle logout
    window.location.href = '/login'; // Redirect to login page
  };

  useEffect(() => {
    document.title = "Admin Dashboard";
  }, []);

  return (
    <div className="admin-dashboard min-h-screen bg-gray-50 font-poppins">
      {/* Sidebar */}
      <div className="sidebar bg-gradient-to-b from-emerald-600 to-emerald-800 text-white w-72 h-full p-8 fixed top-0 left-0 shadow-lg">
        <div className="mb-8 text-center">
          <h3 className="text-xl font-semibold">Dennis A.</h3>
        </div>
        <ul className="space-y-6">
          <li>
            <button
              onClick={() => setActiveTab("overview")}
              className="w-full text-left text-xl flex items-center gap-4 hover:text-emerald-300 transition duration-300"
            >
              <FaHome /> Dashboard Overview
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("reservations")}
              className="w-full text-left text-xl flex items-center gap-4 hover:text-emerald-300 transition duration-300"
            >
              <FaCalendarAlt /> Reservations Management
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("rooms")}
              className="w-full text-left text-xl flex items-center gap-4 hover:text-emerald-300 transition duration-300"
            >
              <FaBed /> Room & Availability
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("pricing")}
              className="w-full text-left text-xl flex items-center gap-4 hover:text-emerald-300 transition duration-300"
            >
              <FaDollarSign /> Pricing & Promotions
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("guests")}
              className="w-full text-left text-xl flex items-center gap-4 hover:text-emerald-300 transition duration-300"
            >
              <FaUsers /> Guest Management
            </button>
          </li>
          <li>
            <button
              onClick={() => setActiveTab("reports")}
              className="w-full text-left text-xl flex items-center gap-4 hover:text-emerald-300 transition duration-300"
            >
              <FaChartBar /> Reports & Analytics
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content ml-72 p-8">
        {/* Logout Button at the top-right corner */}
        <button
          onClick={logout}
          className="absolute top-8 right-8 bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          <FaSignOutAlt /> Logout
        </button>

        <h1 className="text-4xl font-semibold mb-6">Admin Dashboard</h1>

        {/* Dashboard Overview Tab */}
        {activeTab === "overview" && (
          <div className="dashboard-overview grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="quick-stats bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Quick Stats</h3>
              <ul>
                <li className="text-4xl font-bold text-emerald-600">150</li>
                <li className="text-sm text-gray-600">Total Bookings</li>
                <li className="text-4xl font-bold text-emerald-600 mt-4">80%</li>
                <li className="text-sm text-gray-600">Occupancy Rate</li>
                <li className="text-4xl font-bold text-emerald-600 mt-4">20</li>
                <li className="text-sm text-gray-600">Available Rooms</li>
                <li className="text-4xl font-bold text-emerald-600 mt-4">$15,000</li>
                <li className="text-sm text-gray-600">Revenue</li>
              </ul>
            </div>
            <div className="daily-snapshot bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Daily Snapshot</h3>
              <ul>
                <li className="text-4xl font-bold text-emerald-600">20</li>
                <li className="text-sm text-gray-600">Today's Reservations</li>
                <li className="text-4xl font-bold text-emerald-600 mt-4">15</li>
                <li className="text-sm text-gray-600">Today's Check-Ins</li>
                <li className="text-4xl font-bold text-emerald-600 mt-4">12</li>
                <li className="text-sm text-gray-600">Today's Check-Outs</li>
                <li className="text-4xl font-bold text-emerald-600 mt-4">2</li>
                <li className="text-sm text-gray-600">Today's Cancellations</li>
              </ul>
            </div>
          </div>
        )}

        {/* Reservations Management Tab */}
        {activeTab === "reservations" && (
          <div className="reservations-management bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Reservations Management</h3>
            <table className="w-full table-auto border-collapse bg-white shadow-lg rounded-lg">
              <thead>
                <tr className="bg-emerald-600 text-white">
                  <th className="py-2 px-4 text-left">Guest Name</th>
                  <th className="py-2 px-4 text-left">Room Type</th>
                  <th className="py-2 px-4 text-left">Check-In</th>
                  <th className="py-2 px-4 text-left">Check-Out</th>
                  <th className="py-2 px-4 text-left">Status</th>
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-gray-100">
                  <td className="py-2 px-4">John Doe</td>
                  <td className="py-2 px-4">Small Room</td>
                  <td className="py-2 px-4">2024-11-25</td>
                  <td className="py-2 px-4">2024-11-26</td>
                  <td className="py-2 px-4">Confirmed</td>
                  <td className="py-2 px-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Modify</button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300 ml-2">Cancel</button>
                  </td>
                </tr>
                {/* Add more reservation rows as needed */}
              </tbody>
            </table>
          </div>
        )}

        {/* Room & Availability Tab */}
        {activeTab === "rooms" && (
          <div className="rooms-management bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Rooms & Availability</h3>
            {/* Room Availability Data */}
            <div className="room-list">
              <div className="room-item flex justify-between items-center mb-4">
                <span>Room Type: Small Room</span>
                <span className="text-green-500">Available</span>
              </div>
              <div className="room-item flex justify-between items-center mb-4">
                <span>Room Type: Medium Room</span>
                <span className="text-red-500">Booked</span>
              </div>
              {/* Add more rooms here */}
            </div>
          </div>
        )}

        {/* Pricing & Promotions Tab */}
        {activeTab === "pricing" && (
          <div className="pricing-management bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Pricing & Promotions</h3>
            <div className="pricing-card bg-gray-100 p-4 rounded-lg mb-4">
              <h4 className="text-lg font-semibold">Room Pricing</h4>
              <ul>
                <li>Small Room: $50 per night</li>
                <li>Medium Room: $75 per night</li>
                <li>Large Room: $100 per night</li>
              </ul>
            </div>
            <div className="promotion-card bg-gray-100 p-4 rounded-lg">
              <h4 className="text-lg font-semibold">Current Promotions</h4>
              <p>Get 10% off on stays of 3+ nights! Use code STAY10 at checkout.</p>
            </div>
          </div>
        )}

        {/* Guest Management Tab */}
        {activeTab === "guests" && (
          <div className="guest-management bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Guest Management</h3>
            {/* List of Guests */}
            <div className="guest-list">
              <div className="guest-item flex justify-between items-center mb-4">
                <span>John Doe</span>
                <span>Frequent Guest</span>
              </div>
              {/* Add more guests */}
            </div>
          </div>
        )}

        {/* Reports & Analytics Tab */}
        {activeTab === "reports" && (
          <div className="reports-analytics bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300">
            <h3 className="text-xl font-semibold mb-4">Reports & Analytics</h3>
            {/* Display Reports & Analytics here */}
            <div className="chart">
              <p>Revenue Growth Chart</p>
              {/* Add chart component or image */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
