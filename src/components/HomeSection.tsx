import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import { Navbar } from "./Navbar";

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
    id: 3,
    name: "Instagram",
    icon: <FaInstagram className="h-6 w-6 text-[#C13584]" />,
    link: "https://www.instagram.com/sashank_sakkurthi/",
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
    <div className="relative flex h-screen min-h-screen w-full flex-col items-center justify-center bg-white px-4">
      <div className="z-10 w-full">
        <Navbar />
      </div>
      <div className="absolute inset-0 z-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="z-10 flex h-full w-full flex-col items-center justify-center space-y-8">
        <div className="flex w-full items-center justify-center">
          <img
            src="/img/sakkurthi-sashank.jpg"
            className="h-52 w-52 rounded-full border-4 border-gray-800 object-cover shadow-sm"
            alt="Sashank Sakkurthi"
          />
        </div>

        <div className="space-y-2">
          <h3 className="scroll-m-20 text-center font-plus-jakarta-sans text-4xl font-bold sm:text-5xl">
            Hello, I'm Sashank Sakkurthi
          </h3>
          <h5 className="scroll-m-20 text-center font-plus-jakarta-sans text-base font-normal text-gray-600">
            Undergraduate Student @ SRM University AP & Full Stack Developer
          </h5>
        </div>

        <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 pt-2">
          {SocialMediaLinks.map((link) => (
            <a
              href={link.link}
              target="_blank"
              rel="noopener noreferrer"
              key={link.id}
              className="flex min-w-32 items-center justify-center space-x-2 rounded-full border border-gray-200 bg-white px-3 py-2 shadow-sm transition-shadow duration-300 ease-in-out hover:border-gray-900"
            >
              {link.icon}
              <span className="font-plus-jakarta-sans text-sm text-gray-800">
                {link.name}
              </span>
            </a>
          ))}
        </div>

        <div className="flex gap-x-4 pt-6">
          <button className="rounded-full border border-gray-900 bg-gray-900 px-6 py-2 font-plus-jakarta-sans text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900">
            Resume
          </button>
          <button className="rounded-full border border-gray-900 bg-white px-6 py-2 font-plus-jakarta-sans text-gray-800 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white">
            About Me
          </button>
        </div>
      </div>
    </div>
  );
}