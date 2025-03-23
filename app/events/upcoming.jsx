
import Image from 'next/image';

const Gallery = () => {
  const events = [
    {
      id: 1,
      image: "/images/events/th.jpg",
      title: "Treasure Hunt",
      date: "12/03/2024",
      description: "Solve cybersecurity challenges and uncover clues!"
    },
    {
      id: 2,
      image: "/Coding.svg",
      title: "Debugging Battle",
      date: "12/03/2024",
      description: " Sharpen your coding skills with precision."
    },
    {
      id: 3,
      image: "/images/events/quiz.svg",
      title: "Tech Quiz",
      date: "12/03/2024",
      description: "Test your knowledge and compete with the best!"
    },
    {
      id: 4,
      image: "/Lab.png",
      title: "Logo Design Contest",
      date: "12/03/2024",
      description: "Showcase your creativity in cybersecurity branding."
    },
    {
      id: 5,
      image: "/Gaming.jpg",
      date: "12/03/2024",
      description: "Strategize and battle it out!"
    },
    {
      id: 6,
      image: "/Sun.jpg",
      date: "12/03/2024",
      description: "Gain hands-on industry experience."
    }


  ]



  return (
    <section id="upcoming" className="mt-11 md:px-11 px-3 w-full h-full ">
      <div className="pt-11 pb-24 md:py-32 bg-emerald-50 border-t-2 border-black">
        <div className="text-4xl font-bold text-center mb-12 text-black">
          Upcoming Events
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
                <a href="https://forms.gle/gkGfCpbDCzCUX1yb6">
                  <button className="px-11 py-1 bg-primary border-2 border-black  hover:bg-black duration-300 hover:text-white">
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
