"use client";
import React, { useState, useEffect } from 'react';

const EventCard = ({ title, description, color }) => (
  <div className={`p-6 rounded-lg`} style={{ backgroundColor: color }}>
    <h3 className="text-black font-bold text-lg mb-2">{title}</h3>
    <p className="text-gray-700 text-sm">{description}</p>
  </div>
);

const Past = () => {
  const [events, setEvents] = useState([
    { id: 1, title: "Sample Event 1", description: "Description baf kabfdk hkahfjd hakfjhdsf for  event 1", year: 2024, color: "#CAB8FF" },
    { id: 2, title: "Sample Event 2", description: "Description for event 2", year: 2023, color: "#eadef4" },
    { id: 3, title: "Sample Event 3", description: "Description for event 3", year: 2023, color: "#CAB8FF" },
    { id: 4, title: "Sample Event 4", description: "Description for event 4", year: 2022, color: "#eadef4" },
    { id: 5, title: "Sample Event 5", description: "Description for event 5", year: 2022, color: "#CAB8FF" },
    { id: 6, title: "Sample Event 6", description: "Description for event 6", year: 2022, color: "#eadef4" },
  ]);

  useEffect(() => {
    // Fetch events from your backend API
    // Example:
    // fetch('YOUR_API_ENDPOINT')
    //   .then(response => response.json())
    //   .then(data => setEvents(data))
    //   .catch(error => console.error('Error fetching events:', error));
  }, []);

  const years = [2024, 2023, 2022]; // Add or remove years as needed

  return (
    <div className=" my-16 text-black p-2 flex flex-col justify-center items-center ">
        <h1 className="text-lg font-bold w-25 "> Past Events
        </h1>
      <div className="w-1/4 pr-8">
        
         
        <ul className=" flex justify-center items-center space-x-4 ">
          {years.map(year => (
            <li key={year} className="cursor-pointer p-2 rounded-full  my-8  text-center bg-primary w-16 hover:text-white hover:bg-black">
              {year}
            </li>
          ))}
        </ul>
      </div>
      <div className="w-3/4 grid md:grid-cols-3 lg:grid-col-4  grid-cols-1 gap-4">
        {events.map(event => (
          <EventCard 
            key={event.id}
            title={event.title}
            description={event.description}
            color={event.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Past;