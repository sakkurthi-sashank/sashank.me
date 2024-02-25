import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Image from "next/image";

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

export function HomeSection() {
  return (
    <div className="mt-20 flex h-full w-full flex-col items-center justify-center space-y-5 px-4 pt-10">
      <div className="flex w-full items-center justify-center">
        <Image
          src="/img/sakkurthi-sashank.jpg"
          width={200}
          height={200}
          className="rounded-full border-4 border-gray-700 object-cover shadow-sm"
          alt="Sashank Sakkurthi"
        />
      </div>

      <div className="z-10 space-y-2">
        <h3 className="scroll-m-20 text-center text-4xl font-bold tracking-tight">
          Hello, I&apos;m Sashank Sakkurthi
        </h3>
        <h4 className="scroll-m-20 text-center text-base font-normal text-gray-600">
          Undergraduate Student @SRM University AP & Full Stack Developer
        </h4>
      </div>

      <div className="z-10 flex flex-wrap justify-center gap-x-10 gap-y-3 pt-2">
        {SocialMediaLinks.map((link) => (
          <a
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
            key={link.id}
            className="flex min-w-32 items-center justify-center space-x-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm transition-shadow duration-300 ease-in-out hover:border-gray-900"
          >
            {link.icon}
            <span className="text-sm font-medium text-gray-700">
              {link.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
