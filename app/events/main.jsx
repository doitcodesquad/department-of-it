import React from 'react';
import Link from 'next/link';

export default function Main() {
  return (
    <>
      <div className="bg-[url('/Pic.png')] object-cover text-black min-h-screen flex flex-col justify-center items-center p-4 relative overflow-hidden">
      <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 relative z-20">
        Code Squad Inauguration
      </h1>
      <p className="text-lg md:text-xl text-center text-gray-600 mb-8 max-w-3xl relative z-10">
      formal ceremony to mark the beginning of a major public leader's term of office, or official opening or beginning of an institution or structure.  
        <span className="text-black font-semibold"> high-quality web applications </span>
        for example, a bridge.
      </p>
      <div className='register-button-container md:justify-center justify-center z-20'>
        <Link href="#" className="register-button">
          Register
        </Link>
      </div>
      </div>
    
    
 </>
  );
}