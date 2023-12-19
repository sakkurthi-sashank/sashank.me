import { FaTwitter, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
];

export function App() {
  return (
    <div className="flex h-screen min-h-screen w-full flex-col items-center bg-white">
      <div className="absolute inset-0 z-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      <div className="z-10 flex h-full w-full flex-col items-center">
        <div className="flex w-full items-center justify-center pt-32">
          <img
            src="/img/sakkurthi-sashank.jpg"
            className="h-52 w-52 rounded-full border-4 border-white object-cover"
            alt="Sashank Sakkurthi"
          />
        </div>
        <h3 className="pt-5 text-center font-josefin-sans text-4xl font-bold antialiased">
          Sashank Sakkurthi
        </h3>
        <h5 className="pl-3 text-center font-josefin-sans text-base font-normal text-gray-500 antialiased">
          Full Stack Developer & Devops Engineer
        </h5>

        <div className="flex flex-row gap-x-10 pt-6">
          {SocialMediaLinks.map((link) => (
            <a
              href={link.link}
              target="_blank"
              key={link.id}
              className="rounded-full border border-gray-200 bg-white p-2 shadow-sm transition-shadow duration-300 ease-in-out hover:shadow-lg"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="z-10 mt-14 max-w-3xl px-4 text-center font-josefin-sans text-sm font-normal text-gray-600 antialiased sm:text-base">
          <p>
            Hello! I'm Sakkurthi Sashank, a Computer Science Undergrad student
            at SRM University AP. I'm captivated by coding and problem solving.
            I'm a Full Stack Development and DevOps enthusiast with
            Specialization in Cloud Computing
          </p>
        </div>
      </div>
    </div>
  );
}
