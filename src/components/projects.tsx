import Image from "next/image";
import Link from "next/link";
import { PageTitle } from "./page-title";

const projects = [
  {
    title: "Web3Verse",
    description: "A platform for user to explore the world of Web3.",
    imageSrc: "/img/projects/web3verse.jpg",
    projectLink: "https://devfolio.co/projects/webverse-86e9",
    githubLink: "https://github.com/sakkurthi-sashank/Web3Verse",
  },
  {
    title: "GeoBlocks",
    description: "A blockchain-based platform for geospatial games.",
    imageSrc: "/img/projects/geo-blocks.jpeg",
    projectLink:
      "https://devfolio.co/projects/geoblocks-unleashing-web-adventures-f0ae",
    githubLink: "https://github.com/sakkurthi-sashank/geo-blocks",
  },
  {
    title: "HackSRM",
    description: "India's premier hackathon with over 1,000 registrations.",
    imageSrc: "/img/projects/hacksrm.png",
    projectLink: "https://hacksrm-gamma.vercel.app",
    githubLink: "https://github.com/sakkurthi-sashank/hacksrm",
  },
  {
    title: "Pay AS You Go Drive",
    description: "A Cloud-based pay-as-you-go storage solution.",
    imageSrc: "/img/projects/pay-as-you-go-drive.png",
    projectLink: "https://github.com/sakkurthi-sashank/pay-as-you-go-drive",
    githubLink: "https://github.com/sakkurthi-sashank/pay-as-you-go-drive",
  },
  {
    title: "Code Editor",
    description: "A code editor built with React and TypeScript.",
    imageSrc: "/img/projects/code-editor.png",
    projectLink: "https://code-editor-gray.vercel.app",
    githubLink: "https://github.com/sakkurthi-sashank/code-editor",
  },
  {
    title: "School Website",
    description: "A Responsive School Website Inspired By Figma Design.",
    imageSrc: "/img/projects/school-website.png",
    projectLink: "https://github.com/sakkurthi-sashank/school-website",
    githubLink: "https://school-website-ivory.vercel.app",
  },
];

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function Projects() {
  return (
    <section
      className="mx-auto flex w-full max-w-6xl flex-col px-6 py-12 md:py-16 lg:py-20"
      id="projects"
    >
      <div className="z-10 my-auto">
        <PageTitle title="Projects" />
        <div className="mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg border bg-white shadow"
            >
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={600}
                height={300}
                className="h-48 w-full"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-gray-600">{project.description}</p>
                <div className="flex items-center justify-between">
                  <Link
                    href={project.projectLink}
                    target="_blank"
                    className="text-sm font-semibold text-blue-600 underline underline-offset-4 hover:text-blue-800"
                    prefetch={false}
                  >
                    View Project
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800"
                    target="_blank"
                    href={project.githubLink}
                  >
                    <GithubIcon className="h-5 w-5" />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
