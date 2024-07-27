"use client";
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const EventCard = ({ image, date, title, description, onCardEnter, onCardLeave }) => (
  <motion.div className="scale-103 relative flex-shrink-0 w-80 p-2 border border-black shadow-lg m-4  flex flex-col ">
    <div 
      className="relative"
      onMouseEnter={onCardEnter}
      onMouseLeave={onCardLeave}
    >
     <div>
      <img className="w-full h-48 object-cover" src={image} alt={title} />   
      <ul className='flex flex-col'>
        <li className=' mt-4 bg-primary w-max text-md px-3 py-1 font-thin'>{date}</li>
        <li className='my-2 ms-1 text-xl font-medium '>{title}</li>
        <li className='ms-1 text-sm pb-8 mb-3 text-gray-500'>{description}</li>
      </ul>

    
    
   
     
      </div>
    </div>
      <div>
        <button className="absolute bottom-0 right-0 bg-primary border-t border-l border-black py-2 px-4">Register</button>
      </div>
     
  </motion.div>
);

const Upcoming = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      image: "https://img.freepik.com/free-vector/elegant-event-party-banner-with-black-splash_1361-2171.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721692800&semt=sph",
      title: "Competitive Coding",
      date: "12/03/2024",
      description: "Event details are on the way!"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/90/cd/50/90cd505852aa3ec035899d140565dac4.jpg",
      title: "Gaming Tournament",
      date: "12/03/2024",
      description: "Event detail fdjh dfhfh hdfjh sdf ihjfiss are on the way!"
    },
    {
      id: 3,
      image: "https://thumbs.dreamstime.com/b/abstract-poster-event-template-fluid-shapes-composition-modern-event-poster-template-futuristic-design-posters-liquid-color-152203412.jpg",
      title: "Debugging",
      date: "12/03/2024",
      description: "Event details are on the way!kdfb iudf bnj bdsfvh jsbvids bv dbs fvbdfvb dsv nd si ndkvbn"
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmqLQvhKLvK58cnBf5SzXnFF-obyQRLYCtgw&s",
      title: "Design",
      description: "Event details are on the way!",
      date: "12/03/2024"
    }
  ]);

  const [repeatedEvents, setRepeatedEvents] = useState([]);
  const containerRef = useRef(null);
  const [isHoveringCard, setIsHoveringCard] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/events');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  useEffect(() => {
    setRepeatedEvents([...events, ...events, ...events]);
  }, [events]);

  const handleWheel = (e) => {
    if (containerRef.current && isHoveringCard) {
      e.preventDefault();
      containerRef.current.scrollLeft += e.deltaY;
    }
  };

  const onCardEnter = () => {
    setIsHoveringCard(true);
    document.body.style.overflow = 'hidden';
  };

  const onCardLeave = () => {
    setIsHoveringCard(false);
    document.body.style.overflow = 'auto';
  };

  return (
    <div className='bg-emerald-50 mb-[20vh]  '>
      <div className="lg:px-20">
      
        <h1 className="text-3xl  font-bold text-center border-t-2 border-black my-8"> <p className='mt-10'> Upcoming Events </p></h1>
        <motion.div
          ref={containerRef}
          className="flex overflow-x-auto hide-scroll border-b-2 border-black pb-11"
          onWheel={handleWheel}
        >
          <div className="flex">
            {repeatedEvents.map((event, index) => (
              <EventCard
                key={`${event.id}-${index}`}
                image={event.image}
                title={event.title}
                date={event.date}
                description={event.description}
                onCardEnter={onCardEnter}
                onCardLeave={onCardLeave}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Upcoming;