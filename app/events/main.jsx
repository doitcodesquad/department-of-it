'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const sampleEvent = {
  id: '1', // Unique event ID
  name: 'Code Squad Inauguration',
  description: `Formal ceremony to mark the beginning of a major public leader's term of office, or official opening or beginning of an institution or structure. High-quality web applications, for example, a bridge.`,
  date: '2024-08-01',
  poster: '/Pic.png',
};

export default function Main() {
  const [event, setEvent] = useState(null);

  useEffect(() => {
    // Simulate fetching event data from an API
    setEvent(sampleEvent);
  }, []);

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
      <div className="h-screen w-full flex justify-center">
        <div className="h-[83%] mt-8 w-11/12 bg-[url('/Pic.png')] object-cover text-black border border-black flex flex-col justify-center items-center  relative">
          <h1 className="text-5xl md:text-7xl font-bold text-center mb-8 relative z-20">
            {event.name}
          </h1>
          <p className="text-lg md:text-xl text-center text-gray-600 mb-8 max-w-3xl relative z-10">
            {event.description}
          </p>
          <div className="register-button-container md:justify-center justify-center z-20">
            <Link href={`/events/register/${event.id}`} className="register-button">
              Register
            </Link>
          </div>
        </div>
      </div>
  );
}
