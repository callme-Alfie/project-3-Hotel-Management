import React, { useState, useEffect } from 'react';
import { FaRegCreditCard, FaUserAlt } from 'react-icons/fa';
import { IoLocationSharp } from 'react-icons/io5';
import { MdOutlinePayment } from 'react-icons/md';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import BookingFooter from './BookingFooter';

const Checkout = () => {
  useEffect(() => {
    document.title = "Checkout";
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    paymentMethod: '',
    cardNumber: '',
    expiryDate: '',
    cvv: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = 'Full name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    if (!formData.paymentMethod) newErrors.paymentMethod = 'Select a payment method';
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    console.log('Checkout Successful:', formData);
    // Reset the form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      paymentMethod: '',
      cardNumber: '',
      expiryDate: '',
      cvv: ''
    });
    setErrors({});
  };

  return (
    <div className="checkout-container">
      <h1 className="text-[65px] text-emerald-900 text-center mb-10 pt-8" data-aos="fade-down">
        Checkout
      </h1>

      <form onSubmit={handleSubmit} className="w-full max-w-[800px] p-8 mx-auto bg-white rounded-lg shadow-2xl" data-aos="fade-up">
        

        {/* Payment Method */}
        <div className="flex flex-col mb-4" >
          <label className="text-sm font-medium text-[#222e2b]">Payment Method</label>
          <select
            name="paymentMethod"
            value={formData.paymentMethod}
            onChange={handleChange}
            className="border border-gray-300 rounded-md px-4 py-2"
          >
            <option value="">Select Payment Method</option>
            <option value="card">Credit/Debit Card</option>
            <option value="paypal">PayPal</option>
          </select>
          {errors.paymentMethod && <span className="text-red-500 text-xs">{errors.paymentMethod}</span>}
        </div>

        {/* Card Information (Conditional) */}
        {formData.paymentMethod === 'card' && (
          <>
            <div className="flex flex-col mb-4">
              <label className="text-sm font-medium text-[#222e2b]">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                className="border border-gray-300 rounded-md px-4 py-2"
                placeholder="Enter card number"
              />
              {errors.cardNumber && <span className="text-red-500 text-xs">{errors.cardNumber}</span>}
            </div>

            <div className="flex gap-4">
              <div className="flex flex-col mb-4 w-1/2">
                <label className="text-sm font-medium text-[#222e2b]">Expiry Date</label>
                <input
                  type="month"
                  name="expiryDate"
                  value={formData.expiryDate}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-2"
                />
                {errors.expiryDate && <span className="text-red-500 text-xs">{errors.expiryDate}</span>}
              </div>

              <div className="flex flex-col mb-4 w-1/2">
                <label className="text-sm font-medium text-[#222e2b]">CVV</label>
                <input
                  type="text"
                  name="cvv"
                  value={formData.cvv}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md px-4 py-2"
                  placeholder="CVV"
                />
                {errors.cvv && <span className="text-red-500 text-xs">{errors.cvv}</span>}
              </div>
            </div>
          </>
        )}

        {/* Submit Button */}
        
        <button
          type="submit"
          className="w-full bg-[#064e3b] text-white py-3 rounded-md hover:bg-[#052e23] transition duration-300"
        >
          Complete Checkout
        </button>
      </form>

      <BookingFooter />
    </div>
  );
};

export default Checkout;
