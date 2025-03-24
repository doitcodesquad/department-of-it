import Image from 'next/image';

const Gallery = () => {
  const events = [
    {
      id: 1,
      image: "/Coding.svg",
      title: "Debugging Competition",
      date: "25/03/2025",
      description: "A challenge to identify and fix vulnerabilities in code, enhancing secure coding skills.",
      link: "https://forms.gle/gkGfCpbDCzCUX1yb6"
    },
    {
      id: 2,
      image: "/images/events/th.jpg",
      title: "Treasure Hunt",
      date: "25/03/2025",
      description: "An engaging activity where participants will follow clues, solve challenges, and decode hidden messages to reach the final prize.",
      link: "https://forms.gle/gkGfCpbDCzCUX1yb6"
    },
    {
      id: 3,
      image: "/images/events/interview.png",
      title: "Mock Interview",
      date: "25/03/2025",
      description: "A simulated job interview experience covering technical and HR rounds to prepare students for real-world hiring processes.",
      link: "https://forms.gle/gkGfCpbDCzCUX1yb6"
    },
    {
      id: 4,
      image: "/Gaming.jpg",
      title: "Gaming (BGMI)",
      date: "26/03/2025",
      description: "A BGMI tournament where teams compete, showcasing strategy, teamwork, and quick decision-making.",
      link: "https://forms.gle/gkGfCpbDCzCUX1yb6"
    },
    {
      id: 5,
      image: "/images/events/image.png",
      title: "Quiz",
      date: "26/03/2025",
      description: "A knowledge-based competition testing participants on cybersecurity concepts, IT fundamentals, and general awareness.",
      link: "https://forms.gle/gkGfCpbDCzCUX1yb6"
    },
    {
      id: 6,
      image: "/images/events/logo.png",
      title: "Logo Designing",
      date: "26/03/2025",
      description: "A creative contest to design tech-related logos based on a given theme reflecting awareness and innovation.",
      link: "https://forms.gle/gkGfCpbDCzCUX1yb6"
    }
  ];

  return (
    <section id="upcoming" className="mt-11 md:px-11 px-3 w-full h-full">
      <div className="pt-11 pb-24 md:py-32 bg-emerald-50 border-t-2 border-black">
        <div className="text-4xl font-bold text-center mb-12 text-black">
           Events
        </div>
        <div className="flex flex-wrap justify-center items-stretch gap-4 md:max-w-full p-2">
          {events.map((event) => (
            <div key={event.id} className="w-96 flex flex-col p-3 bg-orange-50 border-2 border-black">
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
                <a href={event.link}>
                  <button className="px-11 py-1 bg-primary border-2 border-black hover:bg-black duration-300 hover:text-white">
                    Register
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