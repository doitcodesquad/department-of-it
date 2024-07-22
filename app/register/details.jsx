'use client';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Details = ({ onNext, onPrevious, data, isFirstStep }) => {
  const [formData, setFormData] = useState(data || { username: '', email: '' });

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
    console.log(formData);
    onNext(formData);
  };

  return (
    <>
    
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className='min-h-[90vh] bg-emerald-50 p-4 md:p-8'>
        <h2 className="text-center my-[4.89rem] md:mb-14 sm:max-mb-11">Join with us!</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto border-4 border-black bg-orange-50 p-4 md:p-6">
          <div className="w-full mb-10 mt-[3rem]">
            <div className="relative">
              <input
                type="text"
                name="username"
                id="username"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className="w-full px-3 py-2 h-12 rounded-sm placeholder-transparent text-secondary-100 bg-emerald-50 text-sm border border-black focus:outline-none focus:border-2 peer transition-border"
              />
              <label htmlFor="name" className="floating-placeholder">
                Username
              </label>
              <Icon 
                icon="material-symbols:person" 
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>
          <div className="w-full mb-10">
            <div className="relative">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 h-12 rounded-sm placeholder-transparent text-secondary-100 bg-emerald-50 text-sm border border-black focus:outline-none focus:border-2 peer transition-border"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="floating-placeholder"
              >
                Email
              </label>
              <Icon 
                icon="material-symbols:mail-outline"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>
          <div className="flex justify-end">
            {!isFirstStep && (
              <button
                type="button"
                onClick={onPrevious}
                className="flex items-center justify-center bg-primary mb-10 cursor-pointer py-3 px-2 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group"
              >
                <Icon 
                  icon="mdi:arrow-left"
                  className="transition-colors duration-300 text-black group-hover:text-white text-lg"
                  width="14"
                  height="14"
                />
                <span className="text-[10px] sm:text-sm pl-1 sm:pl-3">Previous</span>
              </button>
            )}
            <button
              type="submit"
              className="flex items-center justify-center w-full bg-primary mb-3 cursor-pointer py-3 px-3 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group ml-auto"
            >
              <span className="text-[10px] sm:text-sm pr-1 sm:pr-3">Next</span>
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