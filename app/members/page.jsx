"use client";
import React, { useMemo, useCallback } from 'react';
import {
  GithubIcon, Linkedin, ExternalLink, Twitter, User, Users, Mail
} from 'lucide-react';

// --- DATA ---
// Data can be moved to a separate JSON file for easier management.

const currentMembers = [
  {
    name: "Mohammad Akeeb",
    role: "President",
    email: "mohammadakeeb786@gmail.com",
    bio: "President of Code Squad",
    socials: [
      { platform: "github", link: "https://github.com/mohmmad-akeeb" },
      { platform: "linkedin", link: "https://www.linkedin.com/in/mohmmad-akeeb" }
    ]
  },
  // Club Leads
  {
    name: "Aneek",
    role: "Cyber Security Club Lead",
    email: "NA",
    bio: "Cyber Security Lead",
    socials: []
  },
  {
    name: "Mujeeb",
    role: "Cyber Security Club Lead",
    email: "NA",
    bio: "Cyber Security Lead",
    socials: []
  },
  {
    name: "Khalid",
    role: "App Development Club Lead",
    email: "NA",
    bio: "App Development Lead",
    socials: []
  },
  {
    name: "Khalil",
    role: "App Development Club Lead",
    email: "NA",
    bio: "App Development Lead",
    socials: []
  },
  {
    name: "Duha Shah",
    role: "Web Development Club Lead",
    email: "NA",
    bio: "Web Development Lead",
    socials: []
  },
  {
    name: "Tayamun Zargar",
    role: "Web Development Club Lead",
    email: "NA",
    bio: "Web Development Lead",
    socials: []
  },
  {
    name: "Amaan Parvez",
    role: "IoT Club Lead",
    email: "NA",
    bio: "IoT Lead",
    socials: []
  },
  {
    name: "Mujtaba",
    role: "IoT Club Lead",
    email: "NA",
    bio: "IoT Lead",
    socials: []
  },

  {
    name: "Fahad",
    role: "Competitive Coding Club Lead",
    email: "NA",
    bio: "Competitive Coding Lead",
    socials: []
  },
  {
    name: "Wani Wajid",
    role: "Competitive Coding Club Lead",
    email: "NA",
    bio: "Competitive Coding Lead",
    socials: []
  },
  {
    name: "Amaan",
    role: "Networking Club Lead",
    email: "NA",
    bio: "Networking Lead",
    socials: []
  },
  {
    name: "Shoyfat",
    role: "Networking Club Lead",
    email: "NA",
    bio: "Networking Lead",
    socials: []
  },
  {
    name: "Bashee Bilal",
    role: "AI/ML Club Lead",
    email: "NA",
    bio: "AI/ML Club Lead",
    socials: []
  },
  {
    name: "Mohammad Akeeb",
    role: "AI/ML Club Lead",
    email: "NA",
    bio: "AI/ML Club Lead",
    socials: []
  },
  {
    name: "Ahmad Mustafa",
    role: "Robotics Club Lead",
    email: "NA",
    bio: "Robotics Lead",
    socials: []
  },
  {
    name: "Saliq",
    role: "Robotics Club Lead",
    email: "NA",
    bio: "Robotics Lead",
    socials: []
  },
  {
    name: "Arbeena",
    role: "Gate Club Lead",
    email: "NA",
    bio: "Gate Startups Lead",
    socials: []
  },
  {
    name: "Hamid Farooq",
    role: "Gate Club Lead",
    email: "NA",
    bio: "Gate Lead",
    socials: []
  },

  {
    name: "Wikas Khursheed",
    role: "Research Club Lead",
    email: "NA",
    bio: "Research Lead",
    socials: []
  },
  {
    name: "Yawar",
    role: "Research Club Lead",
    email: "NA",
    bio: "Research Lead",
    socials: []
  }, {
    name: "Ashmiya",
    role: "Innovative Startups Club Lead",
    email: "NA",
    bio: "Innovative Startups Lead",
    socials: []
  },
  {
    name: "Muqeet",
    role: "Innovative Startups Club Lead",
    email: "NA",
    bio: "Innovative Startups Lead",
    socials: []
  }

];

const organisers = [
  {
    name: "Amaan Parvez",
    role: "Organiser",
    email: "NA",
    bio: "Event Organiser",
    socials: []
  },
  {
    name: "Aneek",
    role: "Organiser",
    email: "NA",
    bio: "Event Organiser",
    socials: []
  }, {
    name: "Bashee Bilal",
    role: "Organiser",
    email: "NA",
    bio: "Event Organiser",
    socials: []
  },
  {
    name: "Fahad",
    role: "Organiser",
    email: "NA",
    bio: "Event Organiser",
    socials: []
  }


];

const exMembers = [
  {
    name: "Peerzada Mohammad Sameem Makhdoomi",
    role: "Ex-President",
    email: "ft10101@gmail.com",
    bio: "Former President of Code Squad",
    socials: [
      { platform: "github", link: "https://github.com/ft10101" },
      { platform: "portfolio", link: "https://devdaim.vercel.app" },
      { platform: "linkedin", link: "https://www.linkedin.com/in/daimzahoorit/" },
      { platform: "twitter", link: "https://x.com/DevDaim" }
    ]
  },
  {
    name: "Ayaan Khursheed",
    role: "Ex-Cyber Security Club Lead",
    email: "ccyssn@gmail.com",
    bio: "Former Cyber Security Lead",
    socials: [
      { platform: "github", link: "https://github.com/ccyssn" },
      { platform: "portfolio", link: "https://devdaim.vercel.app" },
      { platform: "linkedin", link: "https://www.linkedin.com/in/daimzahoorit/" },
      { platform: "twitter", link: "https://x.com/DevDaim" }
    ]
  },
  {
    name: "Faiqa Hilal",
    role: "Ex-Research Club Lead",
    email: "NA",
    bio: "Former Research Lead",
    socials: []
  },
  {
    name: "Huzaifa Javid",
    role: "Ex-Gate Club Lead",
    email: "NA",
    bio: "Former Gate Lead",
    socials: []
  },
  {
    name: "Tariq Hameed",
    role: "Ex-Ignite Startup Club Lead",
    email: "NA",
    bio: "Former Ignite Startup Lead",
    socials: []
  },
];

const allMembers = [...currentMembers, ...organisers, ...exMembers];

// --- COMPONENTS ---

const SocialIcon = ({ platform }) => {
  switch (platform) {
    case 'github': return <GithubIcon className="w-5 h-5" />;
    case 'linkedin': return <Linkedin className="w-5 h-5" />;
    case 'twitter': return <Twitter className="w-5 h-5" />;
    case 'portfolio': return <ExternalLink className="w-5 h-5" />;
    default: return <ExternalLink className="w-5 h-5" />;
  }
};

const MemberCard = ({ member, theme }) => (
  <div className={`relative group p-4 border-2 border-black rounded-none backdrop-blur-lg bg-orange-50/80 shadow-sm hover:shadow-lg transition-all duration-300 border-l-8 ${theme.border} hover:bg-orange-50`}>
    <div className="flex items-start gap-4">
      <div className={`p-3 ${theme.bg} shadow-lg mt-1 flex-shrink-0 border-2 border-black`}>
        <User className="w-12 h-12 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-xl font-bold text-gray-800 mb-1 font-mono">{member.name}</h3>
        <div className="flex items-center gap-2 mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${theme.bg} text-white border-2 border-black/30`}>
            {member.role}
          </span>
          {member.email !== 'NA' && (
            <a href={`mailto:${member.email}`} className="text-gray-500 hover:text-blue-600">
              <Mail className="w-5 h-5" />
            </a>
          )}
        </div>
        {member.socials?.length > 0 && (
          <div className="flex gap-3">
            {member.socials.map((social, idx) => (
              <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-orange-50 border-2 border-black shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200">
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
    {member.bio !== 'NA' && (
      <p className="mt-2 pl-1 text-gray-600 text-sm font-mono">{member.bio}</p>
    )}
  </div>
);


const ModernTeamHierarchy = () => {

  const getPriority = useCallback((role) => {
    const priorities = {
      'President': 1,
      'Cyber Security Club Lead': 2,
      'App Development Club Lead': 2,
      'Web Development Club Lead': 2,
      'IoT Club Lead': 2,
      'Competitive Coding Club Lead': 2,
      'Networking Club Lead': 2,
      'AI/ML Club Lead': 2,
      'Robotics Club Lead': 2,
      'Gate Club Lead': 2,
      'Research Club Lead': 2,
      'Innovative Startups Club Lead': 2,
      'Organiser': 3,
      'Ex-President': 4,
      'Ex-Cyber Security Club Lead': 5,
      'Ex-Research Club Lead': 5,
      'Ex-Gate Club Lead': 5,
      'Ex-Ignite Startup Club Lead': 5,
    };
    return priorities[role] || 6;
  }, []);

  const roleThemes = useMemo(() => ({
    'President': { bg: 'bg-orange-600/80', border: 'border-orange-400' },
    'Cyber Security Club Lead': { bg: 'bg-red-600/80', border: 'border-red-400' },
    'App Development Club Lead': { bg: 'bg-blue-600/80', border: 'border-blue-400' },
    'Web Development Club Lead': { bg: 'bg-indigo-600/80', border: 'border-indigo-400' },
    'IoT Club Lead': { bg: 'bg-purple-600/80', border: 'border-purple-400' },
    'Competitive Coding Club Lead': { bg: 'bg-pink-600/80', border: 'border-pink-400' },
    'Networking Club Lead': { bg: 'bg-rose-600/80', border: 'border-rose-400' },
    'AI/ML Club Lead': { bg: 'bg-amber-600/80', border: 'border-amber-400' },
    'Robotics Club Lead': { bg: 'bg-lime-600/80', border: 'border-lime-400' },
    'Gate Club Lead': { bg: 'bg-teal-600/80', border: 'border-teal-400' },
    'Research Club Lead': { bg: 'bg-green-600/80', border: 'border-green-400' },
    'Innovative Startups Club Lead': { bg: 'bg-yellow-600/80', border: 'border-yellow-400' },
    'Organiser': { bg: 'bg-cyan-600/80', border: 'border-cyan-400' },
    'Ex-President': { bg: 'bg-gray-600/80', border: 'border-gray-400' },
    'Ex-Cyber Security Club Lead': { bg: 'bg-gray-500/80', border: 'border-gray-300' },
    'Ex-Research Club Lead': { bg: 'bg-gray-500/80', border: 'border-gray-300' },
    'Ex-Gate Club Lead': { bg: 'bg-gray-500/80', border: 'border-gray-300' },
    'Ex-Ignite Startup Club Lead': { bg: 'bg-gray-500/80', border: 'border-gray-300' },
  }), []);


  const HierarchyTree = ({ members }) => {
    const grouped = useMemo(() => members.reduce((acc, member) => {
      const role = member.role;
      if (!acc[role]) acc[role] = [];
      acc[role].push(member);
      return acc;
    }, {}), [members]);

    const sortedRoles = useMemo(() =>
      Object.entries(grouped).sort((a, b) =>
        getPriority(a[0]) - getPriority(b[0])
      ), [grouped, getPriority]
    );

    return (
      <div className="space-y-6">
        {sortedRoles.map(([role, roleMembers]) => (
          <div key={role} className="relative">
            <div className="flex items-center mb-4 ml-8">
              <h3 className="text-2xl font-bold text-gray-800 bg-primary px-4 py-2 rounded-none inline-block border-2 border-black/30 font-mono">
                {role}
              </h3>
            </div>
            <div className="space-y-8">
              {roleMembers.map((member, idx) => (
                <MemberCard key={idx} member={member} theme={roleThemes[member.role] || { bg: 'from-gray-600 to-gray-500', border: 'border-gray-400' }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8 ">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 border-2 border-black p-8 bg-orange-50">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 font-mono">
            Welcome to our Members Page
          </h1>
          <p className="text-xl text-gray-600 mb-6 font-mono">
            Here, you’ll find everyone who keeps our community thriving—led by the President, guided by Club Leads, and supported by passionate members.
          </p>
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent/30 rounded-none shadow-sm border-2 border-black">
            <Users className="w-5 h-5 text-black" />
            <p className="text-gray-700 font-medium font-mono">
              <span className='animate-pulse font-bold'>
                {currentMembers.length}</span> {" "}
              Passionate Individuals Building the Future
            </p>
          </div>
        </div>
        <div className="relative backdrop-blur-lg rounded-none py-8">
          <HierarchyTree members={allMembers} />
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-orange-100/40 rounded-full blur-2xl" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 bg-emerald-100/40 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernTeamHierarchy;
