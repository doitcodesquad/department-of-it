'use client'
import React, { useEffect, useState} from 'react';



const sampleEvent = {
  id: '1', // Unique event ID
  name: 'Tech Fest II',
  description: `Innovate, Compete, and Celebrate, A New Beginning Awaits`,
  date: '2024-08-01',
  startTime: '2024-08-01T10:00:00',
};
const Countdown = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const target = new Date(targetDate).getTime();
      const difference = target - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <>
      {timeLeft.days}d {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
    </>

  );
  
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

  const handleClick = (e) => {
    e.preventDefault();
    const upcomingSection = document.getElementById('upcoming');
    if (upcomingSection) {
      upcomingSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="h-screen w-full overflow-x-hidden ">

      <div className="relative flex justify-start items-center bg-[url('/room.jpg')]  opacity-[1] bg-cover bg-[left_bottom_11rem]  md:bg-cover md:bg-[center_left_21rem] w-full h-full">
        <div className="w-full h-full bg-gradient-to-b from-[11%] from-black via-transparent to-black to-[72.11%] md:bg-gradient-to-r md:from-10% md:to-100%  md:to-transparent md:via-black md:via-[11%]">
          <div className="md:w-[62.3%] h-full md:content-center p-3 md:p-11 mt-[11rem] md:mt-0 md:ms-3">
            <div className="text-5xl md:text-8xl text-orange-50 font-black ">{sampleEvent.name}</div>
            <div className="text-orange-50/80 text-lg md:text-xl md:w-max my-2">
              {sampleEvent.description}
            </div>
 
              <button onClick={handleClick} className="mt-4  md:mt-8 w-full  md:w-1/2 px-11 py-1 bg-primary text-lg font-light border-2 border-black">
                Register
              </button>
     
              <div className=" flex justify-center items-center md:justify-start px-3 w-full md:w-max mt-[3.8rem] md:mt-32 text-orange-50 text-3xl md:text-[3rem] border border-primary/30 py-3 md:py-4 md:px-11">
                <Countdown targetDate={event.startTime} />
              </div>
          </div>
        </div>
      </div>

    </div>
  );
}
