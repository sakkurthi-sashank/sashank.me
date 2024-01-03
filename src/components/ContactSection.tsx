import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const SocialMediaLinks = [
  {
    id: 1,
    name: "Twitter",
    icon: <FaTwitter className="h-8 w-8 text-[#1DA1F2]" />,
    link: "https://twitter.com/sashank_sakku",
  },
  {
    id: 2,
    name: "Github",
    icon: <FaGithub className="h-8 w-8 text-[#333]" />,
    link: "https://github.com/sakkurthi-sashank",
  },
  {
    id: 3,
    name: "Instagram",
    icon: <FaInstagram className="h-8 w-8 text-[#C13584]" />,
    link: "https://www.instagram.com/sashank_sakkurthi/",
  },
  {
    id: 4,
    name: "Linkedin",
    icon: <FaLinkedin className="h-8 w-8 text-[#0077B5]" />,
    link: "https://www.linkedin.com/in/sakkurthi-sashank/",
  },
  {
    id: 5,
    name: "Mail",
    icon: <MdMailOutline className="h-8 w-8 text-[#EA4335]" />,
    link: "mailto:sakkurthisashank@gmail.com",
  },
];

export function ContactSection() {
  return (
    <section className="flex min-h-screen w-full flex-col pt-10" id="contact">
      <div className="h-full w-full px-4 py-10">
        <h2 className="scroll-m-20 text-center font-plus-jakarta-sans text-4xl font-bold sm:text-5xl">
          Get in touch
        </h2>
      </div>

      <div className="flex flex-col-reverse items-center justify-center gap-x-10 gap-y-10 pt-2 sm:flex-row">
        <div className="m-auto hidden h-full w-full items-center justify-center xl:flex">
          <Image
            src="/img/sakkurthi-sashank-2.jpg"
            alt="About Me"
            width={384}
            height={384}
            className="rounded-sm object-cover shadow-[20px_20px_0px_0px_rgba(0,0,0)] transition duration-300 ease-in-out hover:shadow-none"
          />
        </div>

        <div className="h-full w-full px-4 py-10">
          <div className="flex flex-col flex-wrap items-center justify-center gap-x-10 gap-y-10 pt-2">
            {SocialMediaLinks.map((link) => (
              <a
                href={link.link}
                target="_blank"
                rel="noopener noreferrer"
                key={link.id}
                className="flex w-fit min-w-52 items-center justify-center space-x-4 rounded-full border border-gray-300 bg-white py-2 pl-10 shadow-sm transition-shadow duration-300 ease-in-out hover:border-gray-900"
              >
                {link.icon}
                <span className="w-full font-plus-jakarta-sans text-base font-medium text-gray-700 antialiased">
                  {link.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
