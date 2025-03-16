"use client";
import React, { useState, useMemo, useCallback } from 'react';
import {
  ChevronDown, ChevronRight, GithubIcon, Linkedin,
  ExternalLink, Twitter, User, Users, Code,
  Shield, Palette, Briefcase, Mail
} from 'lucide-react';

const ModernTeamHierarchy = () => {
  const allMembers = [
    {
      name: "Peerzada Mohammad Sameem Makhdoomi",
      role: "President",
      email: "ft10101@gmail.com",
      bio: "President of Code Squad",
      socials: [
        { platform: "github", link: "https://github.com/ft10101" },
        { platform: "portfolio", link: "https://devdaim.vercel.app" },
        { platform: "linkedin", link: "https://www.linkedin.com/in/daimzahoorit/" },
        { platform: "twitter", link: "https://x.com/DevDaim" }
      ]
    },

    // Club Leads

    {
      name: "Ayaan Khursheed",
      role: "Cyber Security Club Lead",
      email: "ccyssn@gmail.com",
      bio: "Master security skills, tackle real-world challenges, and collaborate on innovative solutions",
      socials: [
        { platform: "github", link: "https://github.com/ccyssn" },
        { platform: "portfolio", link: "https://devdaim.vercel.app" },
        { platform: "linkedin", link: "https://www.linkedin.com/in/daimzahoorit/" },
        { platform: "twitter", link: "https://x.com/DevDaim" }
      ]
    },
    {
      name: "Faiqa Hilal",
      role: "Research Club Lead",
      email: "NA",
      bio: "Innovate and collaborate on cutting-edge research initiatives",
      socials: []
    },
    {
      name: "Huzaifa Javid",
      role: "Gate Club Lead",
      email: "NA",
      bio: "Prepare for the Graduate Aptitude Test in Engineering through workshops and mock tests",
      socials: []
    },
    {
      name: "Tariq Hameed",
      role: "Ignite Startup Club Lead",
      email: "NA",
      bio: "A hub where visionary ideas meet creative minds to ignite growth and transformation",
      socials: []
    },
    // B-Tech Members
    ...[
      {
        name: "Daim Zahoor",
        email: "daimdev6@gmail.com",
        bio: "Software Developer",
        image: "https://avatars.githubusercontent.com/u/123406647?v=4&size=64",
        socials: [
          { platform: "github", link: "https://github.com/devdaim6" },
          { platform: "portfolio", link: "https://devdaim.vercel.app" },
          { platform: "linkedin", link: "https://www.linkedin.com/in/daimzahoorit/" },
          { platform: "twitter", link: "https://x.com/DevDaim" }
        ]
      },
      {
        name: "Sheikh Naveed",
        email: "sheikhnaveed3660@gmail.com",
        bio: "Software Developer",
        socials: [
          { platform: "github", link: "https://github.com/naveedsnr" },
          { platform: "portfolio", link: "https://naveedsnr.vercel.app" },
          { platform: "linkedin", link: "https://www.linkedin.com/in/naveedsnr/" },
        ]
      },
      {
        name: "Mohd Ikhlas",
        email: "mohammadikhlas99@gmail.com",
        bio: "Software Developer",
        socials: [
          { platform: "github", link: "https://github.com/mikhlas9" },
          { platform: "portfolio", link: "https://ikhlas-portfolio.vercel.app" },
          { platform: "linkedin", link: "https://www.linkedin.com/in/mohammad-ikhlas-a339b12a2/" },
          { platform: "twitter", link: "https://x.com/m_ikhlas9" }
        ]
      },
      "Sabit Aslam", "Muskaan Parvaiz", "Shireen Iqeel", "Zaibindah",
      "Insha Javaid", "Taweheda Bashir", "Mohd Aneek", "Hamid Farooq",
      "Mohd Akeeb", "Tayamun Tariq", "Bashee Bilal", "Duha Shah", {
        name: "Amaan Parvaiz",
        socials: [
          { platform: "github", link: "https://github.com/amaanparvaiz" },
          { platform: "linkedin", link: "https://www.linkedin.com/in/amaanparvaiz" }
        ]
      },
    ].map(member => typeof member === 'string' ? {
      name: member,
      role: "B-Tech Member",
      email: "NA",
      bio: "NA",
      socials: []
    } : {
      ...member,
      role: "B-Tech Member",
      bio: member.bio || "NA",
      socials: member.socials || []
    }),
    // M-Tech Members
    ...[
      "Madeeha",
      "Ishtiyaq Ahmad", "Naveed Bhat", "Umer Zahoor", "Adfar Shah",
      "Anamul Showkat", "Beenish Bashir"
    ].map(member => typeof member === 'string' ? {
      name: member,
      role: "M-Tech Member",
      email: "NA",
      bio: "NA",
      socials: []
    } : {
      ...member,
      role: "M-Tech Member",
      email: "NA",
      bio: "NA"
    })
  ];

  const getPriority = useCallback((role) => {
    const priorities = {
      'President': 1,
      'Research Club Lead': 2,
      'Cyber Security Club Lead': 2,
      'Ignite Startup Club Lead': 2,
      'Gate Club Lead': 2,
      'Software Developer': 3,
      'B-Tech Member': 3,
      'M-Tech Member': 4
    };
    return priorities[role] || 5;
  }, []);

  const roleThemes = useMemo(() => ({
    'President':                { bg: 'bg-orange-600/80', border: 'border-orange-400' },
    'Ignite Startup Club Lead': { bg: 'bg-yellow-600/80', border: 'border-yellow-400' },
    'Cyber Security Club Lead': { bg: 'bg-red-600/80',    border: 'border-red-400' },
    'Research Club Lead':       { bg: 'bg-green-600/80',  border: 'border-green-400' },
    'Gate Club Lead':           { bg: 'bg-teal-600/80',   border: 'border-teal-400' },
    'B-Tech Member':            { bg: 'bg-sky-600/80',    border: 'border-sky-400' },
    'M-Tech Member':            { bg: 'bg-purple-600/80', border: 'border-purple-400' },
  }), []);
  
  

/*************  ✨ Codeium Command ⭐  *************/
  /**
   * Returns the appropriate icon for the given social media platform.
   * @param {string} platform - The platform name
   * @returns {ReactElement} The icon
   */
/******  5a536367-9528-4eaa-9bf7-84da170b64a6  *******/  const getSocialIcon = (platform) => {
    switch (platform) {
      case 'github': return <GithubIcon className="w-5 h-5" />;
      case 'linkedin': return <Linkedin className="w-5 h-5" />;
      case 'twitter': return <Twitter className="w-5 h-5" />;
      case 'portfolio': return <ExternalLink className="w-5 h-5" />;
      default: return <ExternalLink className="w-5 h-5" />;
    }
  };

  const MemberNode = ({ member, depth = 0 }) => {
    const theme = roleThemes[member.role] || { bg: 'from-gray-600 to-gray-500', border: 'border-gray-400' };

    return (
      <div className="relative ml-8 ">
    

        <div className={`relative group p-4 border-2 border-black rounded-none backdrop-blur-lg bg-orange-50/80 shadow-sm hover:shadow-lg 
          transition-all duration-300 border-l-8 ${theme.border} hover:bg-orange-50`}>

          <div className="flex items-start gap-4">
            <div className={`p-3 ${theme.bg} 
              shadow-lg mt-1 flex-shrink-0 border-2 border-black`}>
              <User className="w-12 h-12 text-white" />
            </div>

            <div className="flex-1 min-w-0">
              <h3 className="text-xl font-bold text-gray-800 mb-1 font-mono">{member.name}</h3>
              <div className="flex items-center gap-2 mb-3">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold 
                   ${theme.bg} text-white border-2 border-black/30`}>
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
                    <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer"
                      className="p-2 rounded-full bg-orange-50 border-2 border-black shadow-sm hover:shadow-md 
                        hover:-translate-y-0.5 transition-all duration-200">
                      {getSocialIcon(social.platform)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {member.bio !== 'NA' && (
            <p className="mt-2 pl-1 text-gray-600 text-sm font-mono">
              {member.bio}
            </p>
          )}
        </div>
      </div>
    );
  };

  const HierarchyTree = ({ members, depth = 0 }) => {
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
        {sortedRoles.map(([role, members]) => (
          <div key={role} className="relative">
            <div className="flex items-center mb-4 ml-8">
  
              <h3 className="text-2xl font-bold text-gray-800 bg-primary px-4 py-2 
                rounded-none inline-block border-2 border-black/30 font-mono">
                {role}
              </h3>
            </div>

            <div className="space-y-8">
              {members.map((member, idx) => (
                <MemberNode key={idx} member={member} depth={depth + 1} />
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
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-accent/30
            rounded-none shadow-sm border-2 border-black">
            <Users className="w-5 h-5 text-black" />
            <p className="text-gray-700 font-medium font-mono">
              <span className='animate-pulse font-bold'>
                {allMembers.length}</span> {" "}
              Passionate Individuals Building the Future
            </p>
          </div>
        </div>

        <div className="relative  backdrop-blur-lg rounded-none  py-8 
          ">
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
