'use client';

import { useState, useEffect } from 'react';

export default function ClubsPage() {
  const [activeTab, setActiveTab] = useState('coding');
  const [ActiveClub, setActiveClub] = useState(null);

  const clubs = [
    { id: 'coding', name: 'Coding' },
    { id: 'research', name: 'Research' },
    { id: 'cybersecurity', name: 'Cyber Security' },
    { id: 'gate', name: 'Gate' },
  ];

  useEffect(() => {
    const loadComponent = async () => {
      const Component = (await import(`./${activeTab}`)).default;
      setActiveClub(() => Component);
    };
    loadComponent();
  }, [activeTab]);

  return (
    <div className="relative md:mt-3 md:px-3">


      {/* Club content */}
      <div className=" md:mx-8">
        {/* Club navigation */}
        <div className="hide-scroll md:absolute z-30 flex justify-start md:justify-end w-full  overflow-x-scroll px-3 md:px-[5.4rem]  py-2 ">
          <div className="flex max-w-content gap-2 xl:me-2">
            {clubs.map((club) => (
              <button
                key={club.id}
                className={`w-32 py-2 mt-1 md:text-md text-sm border font-semibold border-black ${activeTab === club.id
                    ? 'bg-accent rounded-sm   '
                    : 'bg-primary'
                  }`}
                onClick={() => setActiveTab(club.id)}
              >
                {club.name}
              </button>
            ))}
          </div>
        </div>
        {ActiveClub && <ActiveClub />}
      </div>
    </div>
  );
}