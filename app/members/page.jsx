import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";
import MembersCard from "../components/MembersCard";

const MembersPage = () => {
  // Sample data for demonstration
  const coreTeam = [
    { name: "Josephine Blanton", role: "Senior Developer", email: "josephine.blanton@example.com", bio: "Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code." },
    { name: "Josephine Blanton", role: "Senior Developer", email: "josephine.blanton@example.com", bio: "Hello, this is my bio and I am a PRO member of MUI. I am a developer and I love to code." },

    // Add more core team members as needed
  ];

  const contributors = [
    { name: "John Doe", role: "Contributor", email: "john.doe@example.com", bio: "I contribute to the project and assist in various tasks." },
    // Add more contributors as needed
  ];

  const socialMediaOutreach = [
    { name: "Jane Smith", role: "Social Media Coordinator", email: "jane.smith@example.com", bio: "I manage social media outreach and communications." },
    // Add more social media outreach members as needed
  ];

  return (
    <>
      <div className="scale-95 p-2 lg:p-5 border-2 border-black  items-center  rounded-lg">
        <h2 className="text-2xl/[0] font-semibold mb-10 text-center">Core Team</h2>
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-7">
          {coreTeam.map((member, index) => (
            <MembersCard key={index} {...member} />
          ))}
        </div>
      </div>

      <div className="scale-95 p-2 lg:p-5 border-2 border-black  items-center  rounded-lg">
        <h2 className="text-2xl/[0] font-semibold mb-10 text-center">Contributors</h2>
        <div className="flex flex-col items-center sm:flex-row sm:flex-wrap sm:justify-center gap-7">
            {contributors.map((member, index) => (
              <MembersCard key={index} {...member} />
            ))}
          </div>
        </div>


        <div className="scale-95 p-2 lg:p-5 border-2 border-black  items-center  rounded-lg">
        <h2 className="text-2xl/[0] font-semibold mb-10 text-center">Social Media Outreach</h2>
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
