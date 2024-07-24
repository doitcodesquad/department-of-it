import React from "react";
import Image from "next/image";
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaGlobe } from "react-icons/fa";
import DefaultIcon from "@/public/images/default-avatar.png";

const MembersCard = ({ name, role, email, bio, image, socials }) => {
  const socialIcons = {
    github: FaGithub,
    facebook: FaFacebook,
    twitter: FaTwitter,
    linkedin: FaLinkedin,
    portfolio: FaGlobe,
  };

  return (
    <div className="max-w-full mb-6 overflow-hidden border-2 rounded-lg shadow-lg w-80 bg-orange-50 border-slate-950">
      <div className="flex flex-col items-center p-6 text-center">
        <Image
          src={image || DefaultIcon}
          alt="Avatar"
          className="w-24 h-24 mb-4 rounded-full"
          width={96}
          height={96}
        />
        <h2 className="mb-1 text-xl font-bold">{name}</h2>
        <span className="mb-1 text-sm text-gray-600">{role}</span>
        <a href={`mailto:${email}`} className="mb-4 text-sm text-blue-600">
          {email}
        </a>
        <p className="mb-4 text-sm text-gray-600">{bio}</p>
        <div className="flex mb-4 space-x-2">
          {socials &&
            socials.map((social, index) => {
              const SocialIcon = socialIcons[social.platform];
              return SocialIcon ? (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 text-gray-600 hover:text-gray-800"
                >
                  <SocialIcon size={24} />
                </a>
              ) : null;
            })}
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
