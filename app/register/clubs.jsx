'use client';
import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { useRouter } from 'next/navigation';

const Clubs = () => {
  const router = useRouter();
  const [selectedOptions, setSelectedOptions] = useState([]);
  const options = [
    {
      name: "Web Development",
      description: "Create and maintain websites and web applications",
      icon: "mdi:web"
    },
    {
      name: "Research Club",
      description: "Explore and conduct research in various tech fields. ",
      icon: "uil:microscope"
    },
    {
      name: "Design",
      description: "Create visually appealing and functional designs",
      icon: "mdi:palette"
    },
    {
      name: "Cyber Security",
      description: "Protect systems, networks, and programs from digital attacks",
      icon: "mdi:shield-lock"
    },
    {
      name: "Innovative Startups",
      description: "Develop and grow new business ideas in the tech industry",
      icon: "mdi:rocket-launch"
    },
    {
      name: "Gate Club",
      description: "Prepare for GATE exams and discuss advanced topics",
      icon: "mdi:gate"
    }
  ];

  const handleOptionChange = (optionName) => {
    setSelectedOptions(prevOptions => 
      prevOptions.includes(optionName)
        ? prevOptions.filter(item => item !== optionName)
        : [...prevOptions, optionName]
    );
  };

  const handleNextClick = () => {
    router.push('/department');
  };

  return (
    <div className="px-6 sm:px-0">
      <h2 className=' text-center my-20 sm:mb-4  sm:mt-[20%]   '>Select your interests</h2>
      <div className="max-w-full sm:max-w-3xl mx-auto py-3 sm:py-9 px-2 sm:px-6 bg-emerald-50 border-4 border-black relative">     
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pb-12 sm:pb-16">
          {options.map(option => (
            <div 
              key={option.name} 
              onClick={() => handleOptionChange(option.name)}
              className={`flex items-start cursor-pointer py-1 sm:py-3 px-2 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group h-[70px] sm:h-[100px] overflow-hidden ${
                selectedOptions.includes(option.name) ? 'bg-black text-white' : ''
              }`}
            >
              <Icon 
                icon={option.icon} 
                className={`mr-1  sm:mr-3  self-center transition-colors duration-300 mt-1 ${
                  selectedOptions.includes(option.name) 
                    ? 'text-white' 
                    : 'text-black group-hover:text-white'
                }`} 
                width="20"
                height="20"
                style={{ fontSize: '8rem' }}
              />
              <div>
                <span className="text-[11px] sm:text-sm font-semibold">{option.name}</span>
                <p className="text-[8px] sm:text-xs opacity-80 line-clamp-3">{option.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-2 sm:bottom-4 left-2 right-2 sm:left-4 sm:right-4 flex flex-col sm:flex-row justify-between items-center space-y-1 sm:space-y-0">
          <span className="text-[10px] sm:text-sm  text-gray-600 order-1 sm:order-none">Choose all that apply</span>
          <div 
            onClick={handleNextClick}
            className="flex items-center justify-center cursor-pointer max-[500px]:w-full py-1 sm:py-2 px-2 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group order-2 sm:order-none"
          >
            <span className="text-[10px] sm:text-sm  pl-2 pr-1 sm:pr-3">Next</span>
            <Icon 
              icon="mdi:arrow-right"
              className="transition-colors duration-300 text-black group-hover:text-white"
              width="10"
              height="10"
              style={{ fontSize: '0.625rem' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clubs;