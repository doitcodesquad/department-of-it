'use client';
import React, { useState, useEffect } from 'react';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const Clubs = ({ onNext, onPrevious, data }) => {
  const [selectedOptions, setSelectedOptions] = useState(data?.selectedOptions || []);

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

  useEffect(() => {
    if (data?.selectedOptions) {
      setSelectedOptions(data.selectedOptions);
    }
  }, [data]);

  const handleOptionChange = (optionName) => {
    setSelectedOptions(prevOptions => 
      prevOptions.includes(optionName)
        ? prevOptions.filter(item => item !== optionName)
        : [...prevOptions, optionName]
    );
  };

  const handleNextClick = () => {
    onNext({ selectedOptions });
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-[90vh] bg-emerald-50 p-4 md:p-2">
      <div className="md:px-8 px-0">
        <h2 className='text-center my-6'>Select your interests</h2>
        <div className="max-w-full sm:max-w-3xl mx-auto py-3 sm:py-9 px-2 sm:px-6 bg-orange-50 border-4 border-black relative ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-4 pb-4 sm:pb-8 ">
            {options.map(option => (
              <div  key={option.name}
              onClick={() => handleOptionChange(option.name)} className="border-2 border-black ">
                <div className={`h-24 flex flex-row gap-3 items-center  md:py-1 bg-emerald-50 border transition-all duration-300 cursor-pointer hover:bg-sky-50
                  ${
                    selectedOptions.includes(option.name) ? 'text-black border-l-8 border-l-accent' : ''
                  }`}>

                    <div className={` ms-1 text-3xl md:text-4xl transition-colors duration-300 `}>
                      <Icon
                        icon={option.icon}
                        
                      />
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg md:text-xl">{option.name}</div>
                        <div className="">
                          <p className="text-sm md:text-md opacity-80 line-clamp-3">{option.description}</p>
                        </div>
                    </div>
    
         
                </div>
              </div>
            ))}
          </div>
          <div className=" flex md:flex-nowrap flex-wrap w-full justify-between items-center ">
            <div className="my-2 me-2 text-[10px] sm:text-sm text-gray-600 order-1 sm:order-none">Choose all that apply</div>
            <div className="flex justify-end gap-2 items-center w-full md:w-[21.8rem]">
              <button
                onClick={onPrevious}
                className="w-full flex items-center justify-center bg-primary cursor-pointer py-2 px-2 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group"
              >
                <Icon 
                  icon="mdi:arrow-left"
                  className="transition-colors duration-300 text-black group-hover:text-white text-lg"
                  width="14"
                  height="14"
                />
                <span className="text-[10px] sm:text-sm pl-1 sm:pl-3">Previous</span>
              </button>
              <button
                onClick={handleNextClick}
                 className="w-full flex items-center justify-center bg-primary cursor-pointer py-2 px-2 sm:px-3 transition-all hover:bg-black hover:text-white duration-300 border-2 border-black group"
              >
                <span className="text-[10px] sm:text-sm pl-2 pr-1 sm:pr-3">Next</span>
                <Icon 
                  icon="mdi:arrow-left"
                  className="rotate-180 transition-colors duration-300 text-black group-hover:text-white text-lg"
                  width="14"
                  height="14"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Clubs;