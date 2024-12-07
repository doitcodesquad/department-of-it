'use client'
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Gallery = () => {
  const [templates, setTemplates] = useState([]);

  useEffect(() => {
    const fetchTemplates = () => {
      const dummyData = Array(12).fill().map((_, i) => ({
        id: i + 1,
        title: `Item ${i + 1}`,
        imageSrc: `/Map.svg`
      }));
      setTemplates(dummyData);
    };
    fetchTemplates();
  }, []);

  return (
    <div className="w-full h-full md:px-11">
      <div className="border-t-2 border-b-2 border-black py-11">
        <div className="text-4xl font-bold text-center mb-12 text-black">
          Event Gallery
        </div>
        <div className="flex flex-wrap justify-center items-center gap-1 p-2 md:max-w-full">
          {templates.map((template) => (
            <div key={template.id} className="border w-96 border-black">
              <Image
                className="h-auto max-w-full "
                src={template.imageSrc}
                alt={template.title}
                width={500}
                height={500}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
