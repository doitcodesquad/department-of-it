
import Image from 'next/image';

const Gallery = () => {
  const events = [
    {
      id: 1,
      image: "https://img.freepik.com/free-vector/elegant-event-party-banner-with-black-splash_1361-2171.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721692800&semt=sph",
      title: "Competitive Coding",
      date: "12/03/2024",
      description: "Event details are on the way!kdfb iudf bnj bdsfvh jsbvids bv dbs fvbdfvb dsv nd si ndkvbnEvent details!"
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/90/cd/50/90cd505852aa3ec035899d140565dac4.jpg",
      title: "Gaming Tournament",
      date: "12/03/2024",
      description: "Event details are on the way!kdfb iudf bnj bdsfvh jsbvids bv dbs fvbdfvb dsv nd si ndkvbnEvent details"
    },
    {
      id: 3,
      image: "https://thumbs.dreamstime.com/b/abstract-poster-event-template-fluid-shapes-composition-modern-event-poster-template-futuristic-design-posters-liquid-color-152203412.jpg",
      title: "Debugging",
      date: "12/03/2024",
      description: "Event details are on the way!kdfb iudf bnj bdsfvh jsbvids bv dbs fvbdfvb dsv nd si ndkvbnEvent details"
    },

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
            <div className="flex justify-between items-center w-full mt-auto py-2 px-1 border-t   border-b border-black">
              <div className="bg-primary py-1 px-1">
                {event.date}
              </div>
              <button className="px-11 py-1 bg-primary border-2 border-black">
                Register
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default Gallery;
