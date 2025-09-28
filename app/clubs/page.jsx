'use client';

import { useState, useEffect } from 'react';

export default function ClubsPage() {
  const [activeTab, setActiveTab] = useState('cybersecurity');
  const [ActiveClub, setActiveClub] = useState(null);

  const clubs = [
    { id: 'coding', name: 'Competitive Coding' },
    { id: 'cyber-security', name: 'Cyber Security' },
    { id: 'app-development', name: 'App Development' },
    { id: 'web-development', name: 'Web Development' },
    { id: 'iot', name: 'IoT' },
    { id: 'networking', name: 'Networking' },
    { id: 'ai-ml', name: 'AI/ML' },
    { id: 'robotics', name: 'Robotics' },
    { id: 'gate', name: 'Gate' },
    { id: 'research', name: 'Research' },
    { id: 'innovative-startups', name: 'Innovative Startups' },
  ];

  useEffect(() => {
    const loadComponent = async () => {
      try {
        const Component = (await import(`./${activeTab}`)).default;
        setActiveClub(() => Component);
      } catch (error) {
        console.error(`Failed to load club component for: ${activeTab}`, error);
        const FallbackComponent = (await import('./cyber-security')).default;
        setActiveClub(() => FallbackComponent);
      }
    };
    loadComponent();
  }, [activeTab]);

  const ClubNavigation = () => (
    <div className="hide-scroll h-full flex items-center space-x-2 overflow-x-auto px-2">
      {clubs.map((club) => (
        <button
          key={club.id}
          className={`flex-shrink-0 px-4 py-2 text-sm border font-semibold border-black whitespace-nowrap transition-colors duration-200 bg-primary hover:bg-accent/70 ${
            activeTab === club.id
              ? 'underline decoration-accent underline-offset-4 decoration-2'
              : ''
          }`}
          onClick={() => setActiveTab(club.id)}
        >
          {club.name}
        </button>
      ))}
    </div>
  );

  return (
    <div className="md:px-11 md:ms-3">
        {ActiveClub && <ActiveClub navigation={<ClubNavigation />} />}
    </div>
  );
}