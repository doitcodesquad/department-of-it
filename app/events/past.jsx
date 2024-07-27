
import React from 'react';
import Image from 'next/image';

const TemplateCard = ({ title, imageSrc }) => (
  <>
    <div className="relative w-full h-full border-b border-l border-black">
      <Image
        src={imageSrc}
        className='w-full h-full'
        alt={title}
        layout='fill'
        objectFit="cover"

      />
      <div className="bg-emerald-50 absolute w-full h-1/3 bottom-0 p-3 border-t border-black">
        <h3 className="text-lg">{title}</h3>
      </div>
    </div>
  </>

);

const Past = () => {
  
  const templates = [
    { id: 1, title: "Next.js Templates", imageSrc: "/Map.svg" },
    { id: 2, title: "Svelte Templates", imageSrc: "/Map.svg" },
    { id: 3, title: "React Templates", imageSrc: "/Map.svg" },
    { id: 4, title: "Nuxt Templates", imageSrc: "/Map.svg" },
    { id: 5, title: "Astro Templates", imageSrc: "/Map.svg" },
    { id: 6, title: "Python Templates", imageSrc: "/Map.svg" },
  ];

  // ... rest of the component remains the same
  const years = [2024, 2023, 2022];

  return (

    <div className="w-full min-h-96 mb-3 flex flex-col justify-center items-center px-48">
      <h1 className="mb-24 text-4xl font-bold">
        Event Gallery
      </h1>
      <div className="w-full border-r border-l border-t border-black grid grid-cols-1 lg:grid-cols-5 lg:grid-rows-3 h-full ">
        
        <div className="flex h-full flex-col col-span-2 place-self-center self-center ">
          <div className="">
            {/* <h1 className="  py-3 text-4xl font-bold">
              Event Gallery
            </h1> */}
            <div className="  py-3 text-2xl ">
              A list of our past events
            </div>
          </div>
          <div>
            <ul className="flex gap-3 flex-wrap">
              {years.map((year) => (
                <div key={year} className="w-full flex flex-col  justify-center  border border-black">
                  <li key={year} className="w-full text-center my-2">
                    <span className="text-lg">{year}</span>
                  </li>
                </div>
              ))}
            </ul>
          </div>

        </div>

        <div className="grid grid-cols-2 col-span-3  row-span-11">
          {templates.map(template => (
            <TemplateCard
              key={template.id}
              title={template.title}
              imageSrc={template.imageSrc}
            />
          ))}
        </div>
      </div>
    </div>

  );
};

export default Past;