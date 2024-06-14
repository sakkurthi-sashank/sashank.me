import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const SocialMediaLinks = [
  {
    id: 1,
    name: "Twitter",
    icon: <FaTwitter className="h-6 w-6 text-[#1DA1F2]" />,
    link: "https://twitter.com/sashank_sakku",
  },
  {
    id: 2,
    name: "Github",
    icon: <FaGithub className="h-6 w-6 text-[#333]" />,
    link: "https://github.com/sakkurthi-sashank",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <FaLinkedin className="h-6 w-6 text-[#0077B5]" />,
    link: "https://www.linkedin.com/in/sakkurthi-sashank/",
  },
  {
    id: 5,
    name: "Mail",
    icon: <MdMailOutline className="h-6 w-6 text-[#EA4335]" />,
    link: "mailto:sakkurthisashank@gmail.com",
  },
];

import React from "react";

export const SocialLinks = () => {
  return (
    <div className="z-10 flex flex-wrap justify-center gap-6 pt-2">
      {SocialMediaLinks.map((link) => (
        <a
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          key={link.id}
          className="flex items-center justify-center space-x-2 rounded-full border border-gray-200 bg-white p-3 shadow-sm transition-shadow duration-300 ease-in-out hover:border-gray-900"
        >
          {link.icon}
        </a>
      ))}
    </div>
  );
};
