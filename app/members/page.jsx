import React from "react";
import MembersCard from "../components/MembersCard";

const MembersPage = () => {
  const coreTeam = [
    {
      name: "Daim Zahoor",
      role: "core",
      email: "daimdev6@gmail.com",
      bio: "Web Developer Lead",
      socials: [
        { platform: "github", link: "https://github.com/devdaim6" },
        { platform: "portfolio", link: "https://devdaim.vercel.app" },
        {
          platform: "linkedin",
          link: "https://www.linkedin.com/in/daimzahoorit/",
        },
        { platform: "twitter", link: "https://x.com/DevDaim" },
      ],
    },
    {
      name: "Naveed SNR",
      role: "core",
      email: "sheikhnaveed3660@gmail.com",
      bio: "Coding Lead",
      socials: [
        { platform: "github", link: "https://github.com/naveedsnr" },
        { platform: "portfolio", link: "https://devdaim.vercel.app" },
        {
          platform: "linkedin",
          link: "https://www.linkedin.com/in/daimzahoorit/",
        },
        { platform: "twitter", link: "https://x.com/DevDaim" },
      ],
    },
    {
      name: " Sameem Makdoomi",
      role: "core",
      email: "ft10101@gmail.com",
      bio: "President",
      socials: [
        { platform: "github", link: "https://github.com/ft10101" },
        { platform: "portfolio", link: "https://devdaim.vercel.app" },
        {
          platform: "linkedin",
          link: "https://www.linkedin.com/in/daimzahoorit/",
        },
        { platform: "twitter", link: "https://x.com/DevDaim" },
      ],
    },
    {
      name: "Tawseef Shamim",
      role: "core",
      email: "tawseefshamim@gmail.com",
      bio: "UI/UX Designer",
      socials: [
        { platform: "github", link: "https://github.com/TAWSEEFSHAMIM" },
        { platform: "portfolio", link: "https://devdaim.vercel.app" },
        {
          platform: "linkedin",
          link: "https://www.linkedin.com/in/daimzahoorit/",
        },
        { platform: "twitter", link: "https://x.com/DevDaim" },
      ],
    },
    {
      name: "Muhammad Ikhlas",
      role: "core",
      email: "muhammadikhlas99@gmail.com",
      bio: "Frontend Developer",
      socials: [
        { platform: "github", link: "https://github.com/muhammad.ikhlas" },
        { platform: "portfolio", link: "https://devdaim.vercel.app" },
        {
          platform: "linkedin",
          link: "https://www.linkedin.com/in/daimzahoorit/",
        },
        { platform: "twitter", link: "https://x.com/DevDaim" },
      ],
    },
    {
      name: "Ayaan",
      role: "core",
      email: "ccyssn@gmail.com",
      bio: "Cyber Security Lead",
      socials: [
        { platform: "github", link: "https://github.com/ccyssn" },
        { platform: "portfolio", link: "https://devdaim.vercel.app" },
        {
          platform: "linkedin",
          link: "https://www.linkedin.com/in/daimzahoorit/",
        },
        { platform: "twitter", link: "https://x.com/DevDaim" },
      ],
    },
  ];

  const contributors = [
    {
      name: "Basee Bashir",
      role: "Contributor",
      email: "baseebashir@gmail.com",
      bio: "I contribute to the project and assist in various tasks.",
    },
    {
      name: "Amaan Parvaiz",
      role: "Contributor",
      email: "amaanparvaiz@gmail.com",
      bio: "I contribute to the project and assist in various tasks.",
    },
  ];

  const socialMediaOutreach = [
    {
      name: "Meer Aiman",
      role: "Social Media Coordinator",
      email: "meeraiman@gmail.com",
      bio: "I manage social media outreach and communications.",
    },
    {
      name: "Falak Naaz",
      role: "Social Media Coordinator",
      email: "falaknaaz@gmail.com",
      bio: "I manage social media outreach and communications.",
    },
  ];

  return (
    <>
      <div className="items-center p-2 scale-95 lg:p-5">
        <h2 className="text-2xl/[0] font-semibold mb-10 text-center">
          Core Team
        </h2>
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-7">
          {coreTeam.map((member, index) => (
            <MembersCard key={index} {...member} />
          ))}
        </div>
      </div>

      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="items-center p-2 scale-95 lg:p-5">
        <h2 className="text-2xl/[0] font-semibold mb-10 text-center border-b-1 border-b-black">
          Contributors
        </h2>
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-7">
          {contributors.map((member, index) => (
            <MembersCard key={index} {...member} />
          ))}
        </div>
      </div>
      <hr class="w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700" />

      <div className="items-center p-2 scale-95 lg:p-5">
        <h2 className="text-2xl/[0] font-semibold mb-10 text-center">
          Social Media Outreach
        </h2>
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-7">
          {socialMediaOutreach.map((member, index) => (
            <MembersCard key={index} {...member} />
          ))}
        </div>
      </div>
    </>
  );
};

export default MembersPage;
