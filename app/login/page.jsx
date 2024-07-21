'use client';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Details = ({ onNext, onPrevious, data, isFirstStep }) => {
  const [formData, setFormData] = useState(data || { usernameOrEmail: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (data) {
      setFormData(data);
    }
  }, [data]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Prepare data for backend
    const backendData = {
      usernameOrEmail: formData.usernameOrEmail,
      password: formData.password
    };
    console.log(backendData);
    onNext(backendData);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className='min-h-screen bg-emerald-50 p-4 md:p-8'>
        
        <h2 className=" text-center mb-2">Sign In</h2>
        <h6 className="text-center pb-10 text-xs  text-gray-500">Welcome back! Enter your credentials below to access your account.</h6>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto  border-4 border-black bg-orange-50 p-4 md:p-6">
          <div className="w-full mb-10 mt-[3rem]">
            <div className="relative">
              <input
                type="text"
                name="usernameOrEmail"
                id="usernameOrEmail"
                placeholder="Username or Email"
                value={formData.usernameOrEmail}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 h-12 rounded-sm placeholder-transparent text-secondary-100 bg-emerald-50 text-sm border border-black focus:outline-none focus:border-2 peer transition-border"
              />
              <label htmlFor="usernameOrEmail" className="floating-placeholder">
                Username or Email
              </label>
              <Icon 
                icon="material-symbols:person" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="relative">
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute top-[-20px] right-0 text-xs text-gray-500 hover:text-gray-700"
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 h-12 rounded-sm placeholder-transparent text-secondary-100 bg-emerald-50 text-sm border border-black focus:outline-none focus:border-2 peer transition-border"
                placeholder=" "
              />
              <label
                htmlFor="password"
                className="floating-placeholder"
              >
                Password
              </label>
              <Icon 
                icon="mdi:password"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="flex items-center justify-center w-full bg-primary mb-3 cursor-pointer py-3 px-3 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group ml-auto"
            >
              <span className="text-[10px] sm:text-sm pr-1 sm:pr-3">Login</span>
              <Icon 
                icon="mdi:arrow-right"
                className="transition-colors duration-300 text-black group-hover:text-white text-lg"
              />
            </button>
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default Details;