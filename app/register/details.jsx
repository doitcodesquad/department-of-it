'use client';

import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

const Details = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
    // After submission, you can navigate to the next page
    router.push('/clubs'); // Replace '/next-page' with your actual next page route
  };

  return (
    <>
      <h2 className='flex justify-center'>Join with us!</h2>
      <div className='flex justify-center pt-5'>
        <form onSubmit={handleSubmit} className="flex flex-col border-4 border-black px-12 max-w-md">
          <div className="w-full mb-10 mt-[3rem]">
            <div className="relative">
              <input
                type="text"
                name="username"
                id="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="peer w-full px-5 py-2 pr-10 border bg-emerald-50 border-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder=" "
              />
              <label
                htmlFor="username"
                className="absolute left-3 -top-2.5 bg-emerald-50 px-1 text-md text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-black"
              >
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
                className="peer  w-full px-3 py-2 pr-10 border bg-emerald-50 border-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="absolute left-3 -top-2.5 bg-emerald-50 px-1 text-sm text-gray-600 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-black"
              >
                Email
              </label>
              <Icon 
                icon="material-symbols:mail-outline"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              />
            </div>
          </div>
          {/* <div 
            onClick={handleNextClick}
            className="flex items-center justify-center cursor-pointer py-1 sm:py-2 px-2 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group order-2 sm:order-none">
         
            <span className="text-[10px] sm:text-sm pr-1 sm:pr-3">Next</span>
            <Icon 
              icon="mdi:arrow-right"
              className="transition-colors duration-300 text-black group-hover:text-white"
              width="10"
              height="10"
              style={{ fontSize: '0.625rem' }}
            />
            </div> */}
          <button
            type="submit"
            className="flex items-center justify-center self-center mb-10 cursor-pointer w-30 max-[500px]:w-full py-2 sm:py-2 px-2 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group order-2 sm:order-none"
          >
          <span className="text-[10px] sm:text-sm pl-2 pr-1 sm:pr-3">Next</span>
            <Icon 
              icon="mdi:arrow-right"
              className="transition-colors duration-300 text-black group-hover:text-white"
              width="10"
              height="10"
              style={{ fontSize: '0.625rem' }}
            />
            
          </button>
        </form>
      </div>
    </>
  );
};

export default Details;