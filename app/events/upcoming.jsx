'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';

const Gallery = () => {
  // Featured upcoming event - Open Source Connect Global 2026
  const featuredEvent = {
    id: 0,
    image: "/images/events/OSCG26.avif",
    title: "Open Source Connect Global 2026",
    date: "05/02/2026",
    startDate: new Date('2026-02-05T10:00:00+05:30'),
    endDate: new Date('2026-02-25T22:00:00+05:30'),
    dateRange: "Feb 5 - Feb 25, 2026",
    time: "10:00 AM - 10:00 PM GMT+5:30",
    location: "Virtual",
    hostedBy: "Open Source Connect",
    description: "Open Source Connect Global 2026 is a premier international gathering dedicated to advancing the world of open source through innovation, collaboration, and community. Bringing together developers, maintainers, contributors, and open-source advocates from across the globe, this flagship event serves as a dynamic platform to explore the future of open collaboration. Be part of the global movement driving the next wave of open-source innovation.",
    link: "#",
    isVirtual: true,
    registered: true,
    socials: {
      instagram: "https://www.instagram.com/osconnect.official/",
      linkedin: "https://www.linkedin.com/company/open-source-connect/",
      twitter: "https://x.com/osconnect1/",
      community: "https://www.nexfellow.com/explore/osconnect"
    }
  };

  const [countdown, setCountdown] = useState({ days: 0, hours: 0 });

  useEffect(() => {
    const calculateCountdown = () => {
      const now = new Date();
      const diff = featuredEvent.startDate - now;
      
      if (diff <= 0) {
        setCountdown({ days: 0, hours: 0 });
        return;
      }
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      setCountdown({ days, hours });
    };
    
    calculateCountdown();
    const interval = setInterval(calculateCountdown, 1000 * 60); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const generateCalendarUrl = () => {
    const title = encodeURIComponent(featuredEvent.title);
    const details = encodeURIComponent(featuredEvent.description);
    const location = encodeURIComponent(featuredEvent.location);
    const startDate = featuredEvent.startDate.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15) + 'Z';
    const endDate = featuredEvent.endDate.toISOString().replace(/-|:|\.\d+/g, '').slice(0, 15) + 'Z';
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
  };

  // Past events (all marked as ended/grayed out)
  const events = [
    {
      id: 1,
      image: "/Coding.svg",
      title: "Debugging Competition",
      date: "25/03/2025",
      description: "A challenge to identify and fix vulnerabilities in code, enhancing secure coding skills.",
      link: "#",
      ended: true,
    },
    {
      id: 2,
      image: "/images/events/th.jpg",
      title: "Treasure Hunt",
      date: "25/03/2025",
      description: "An engaging activity where participants will follow clues, solve challenges, and decode hidden messages to reach the final prize.",
      link: "#",
      ended: true,
    },
    {
      id: 3,
      image: "/images/events/interview.png",
      title: "Mock Interview",
      date: "25/03/2025",
      description: "A simulated job interview experience covering technical and HR rounds to prepare students for real-world hiring processes.",
      link: "#",
      ended: true,
    },
    {
      id: 4,
      image: "/Gaming.jpg",
      title: "Gaming (BGMI)",
      date: "26/03/2025",
      description: "A BGMI tournament where teams compete, showcasing strategy, teamwork, and quick decision-making.",
      link: "#",
      ended: true,
    },
    {
      id: 5,
      image: "/images/events/image.png",
      title: "Quiz",
      date: "26/03/2025",
      description: "A knowledge-based competition testing participants on cybersecurity concepts, IT fundamentals, and general awareness.",
      link: "#",
      ended: true,
    },
    {
      id: 6,
      image: "/images/events/logo.png",
      title: "Logo Designing",
      date: "26/03/2025",
      description: "A creative contest to design tech-related logos based on a given theme reflecting awareness and innovation.",
      link: "#",
      ended: true,
    },
  ];

  // Function to handle click on ended events
  const handleEndedEventClick = (e) => {
    e.preventDefault();
    alert("This event has ended.");
  };

  return (
    <section id="upcoming" className="mt-11 md:px-11 px-3 w-full h-full">
      <div className="pt-11 pb-24 md:py-32 bg-emerald-50 border-t-2 border-black">
        <div className="text-4xl font-bold text-center mb-12 text-black">
          Events
        </div>

        {/* Featured Upcoming Event - Open Source Connect Global 2026 */}
        <div className="flex justify-center mb-12 p-2">
          <div className="w-full max-w-5xl bg-orange-50 border-2 border-black relative overflow-hidden">
            {/* Badge */}
            <div className="absolute top-0 right-0 z-10">
              <div className="bg-emerald-500 text-white px-4 py-1 text-sm font-medium border-l-2 border-b-2 border-black">
                UPCOMING
              </div>
            </div>
            
            {/* Main Layout: Image Left (1/3) + Content Right (2/3) */}
            <div className="flex flex-col md:flex-row">
              {/* Left Section - Image at top + Event Details below */}
              <div className="w-full md:w-1/3 border-b-2 md:border-b-0 md:border-r-2 border-black flex flex-col">
                {/* Image at top */}
                <div className="w-full border-b border-black">
                  <Image
                    className="w-full h-auto object-cover"
                    src={featuredEvent.image}
                    alt={featuredEvent.title}
                    width={400}
                    height={400}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                
                {/* Event Details below image */}
                <div className="p-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3 border-b border-black/20 pb-3">
                    <Icon icon="mdi:calendar" className="text-xl" />
                    <div>
                      <p className="text-xs text-black/50 uppercase">Date</p>
                      <p className="text-sm font-semibold">{featuredEvent.dateRange}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 border-b border-black/20 pb-3">
                    <Icon icon="mdi:clock-outline" className="text-xl" />
                    <div>
                      <p className="text-xs text-black/50 uppercase">Time</p>
                      <p className="text-sm font-semibold">{featuredEvent.time}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon icon="mdi:video" className="text-xl" />
                    <div>
                      <p className="text-xs text-black/50 uppercase">Venue</p>
                      <p className="text-sm font-semibold">{featuredEvent.location}</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content Section - 2/3 width on desktop */}
              <div className="w-full md:w-2/3 p-6">
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">{featuredEvent.title}</h3>
                
                {/* Description */}
                <p className="text-black/80 text-sm md:text-base leading-relaxed mb-6">{featuredEvent.description}</p>
                
                {/* Countdown Timer */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 bg-primary border-2 border-black px-4 py-2">
                    <Icon icon="mdi:timer-sand" className="text-xl" />
                    <div>
                      <p className="text-xs uppercase tracking-wider">Starts In</p>
                      <p className="text-lg font-bold">{countdown.days} days {countdown.hours} hours</p>
                    </div>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3 mb-6">
                  <a href="https://lu.ma/vyb4bntj?tk=ELeSMQ" target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 bg-primary border-2 border-black font-medium hover:bg-black hover:text-white duration-300 flex items-center gap-2">
                      <Icon icon="mdi:ticket" className="text-lg" />
                      Register Now
                    </button>
                  </a>
                  <a href={generateCalendarUrl()} target="_blank" rel="noopener noreferrer">
                    <button className="px-6 py-2 bg-white border-2 border-black font-medium hover:bg-black hover:text-white duration-300 flex items-center gap-2">
                      <Icon icon="mdi:calendar-plus" className="text-lg" />
                      Add to Calendar
                    </button>
                  </a>
                </div>
                
                {/* Host Section */}
                <div className="border-t border-black pt-4">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <p className="text-sm text-black/50">Hosted by</p>
                      <a 
                        href="https://lu.ma/user/osconnect" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity bg-white px-3 py-1.5 border border-black"
                      >
                        <div className="w-6 h-6 overflow-hidden border border-black">
                          <img 
                            src="https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=40,height=40/avatars/ys/c8b5c960-92dc-444b-822b-226fab54eeef.jpg"
                            alt="Open Source Connect"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-sm">{featuredEvent.hostedBy}</span>
                      </a>
                    </div>
                    
                    {/* Social Links */}
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-black/50 hidden md:block">Follow:</span>
                      <div className="flex gap-1">
                        <a href={featuredEvent.socials.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black text-white border border-black flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" className="w-4 h-4">
                            <path fill="currentColor" d="m108.783 107.652-38.24-55.748.066.053L105.087 12H93.565L65.478 44.522 43.174 12H12.957l35.7 52.048-.005-.005L11 107.653h11.522L53.748 71.47l24.817 36.182zM38.609 20.696l53.652 78.26h-9.13l-53.696-78.26z"></path>
                          </svg>
                        </a>
                        <a href={featuredEvent.socials.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black text-white border border-black flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                          <Icon icon="mdi:instagram" className="text-lg" />
                        </a>
                        <a href={featuredEvent.socials.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black text-white border border-black flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                          <Icon icon="mdi:linkedin" className="text-lg" />
                        </a>
                        <a href={featuredEvent.socials.community} target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-black text-white border border-black flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                          <Icon icon="mdi:web" className="text-lg" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Past Events Header */}
        <div className="text-2xl font-semibold text-center mb-6 text-black/60">
          Past Events
        </div>

        {/* Past Events Grid (grayed out) */}
        <div className="flex flex-wrap justify-center items-stretch gap-4 md:max-w-full p-2">
          {events.map((event) => (
            <div
              key={event.id}
              className="w-96 flex flex-col p-3 bg-orange-50 border-2 border-black opacity-50 grayscale"
            >
              <div className="w-full">
                <Image
                  className="h-56 object-cover w-full"
                  src={event.image}
                  alt={event.title}
                  width={542}
                  height={542}
                />
              </div>
              <div className="text-2xl font-medium py-2 border-b border-black">{event.title}</div>
              <div className="flex-grow py-2">{event.description}</div>
              <div className="flex justify-between items-center w-full mt-auto py-2 px-1 border-t border-black">
                <div className="bg-primary py-1 px-1">
                  {event.date}
                </div>
                <a href={event.link} onClick={handleEndedEventClick}>
                  <button
                    className="px-11 py-1 bg-primary border-2 border-black cursor-not-allowed"
                    disabled
                  >
                    Ended
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
