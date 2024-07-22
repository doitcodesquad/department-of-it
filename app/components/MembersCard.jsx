import React from "react";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const MembersCard = ({ name, role, email, bio, image }) => {
  return (
    <div className="w-80 max-w-full bg-orange-50 rounded-lg shadow-lg overflow-hidden mb-6 border-2 border-slate-950">
      <div className="p-6 flex flex-col items-center text-center">
        <img
          src={image}
          alt="Avatar"
          className="w-24 h-24 rounded-full mb-4"
        />
        <h2 className="text-xl font-bold mb-1">{name}</h2>
        <span className="text-gray-600 text-sm mb-1">{role}</span>
        <a href={`mailto:${email}`} className="text-blue-600 text-sm mb-4">
          {email}
        </a>
        <p className="text-gray-600 text-sm mb-4">{bio}</p>
        <div className="flex space-x-2 mb-4">
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <FaFacebook size={24} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <FaTwitter size={24} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <FaLinkedin size={24} />
          </button>
          <button className="p-2 text-gray-600 hover:text-gray-800">
            <FaGithub size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
