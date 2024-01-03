import { LuExternalLink } from "react-icons/lu";
import Image from "next/image";

function ProjectCard({
  title,
  imageSrc,
  description,
  githubLink,
}: {
  title: string;
  imageSrc: string;
  description: string;
  githubLink: string;
}) {
  return (
    <div className="flex max-w-sm flex-col space-y-4 rounded-lg border border-gray-300 p-4 shadow-md transition duration-300 ease-in-out hover:border hover:border-gray-800">
      <h2 className="scroll-m-20 border-b pb-2 font-plus-jakarta-sans text-2xl font-semibold tracking-tight first:mt-0">
        {title}
      </h2>

      <Image
        src={imageSrc}
        alt={title}
        loading="lazy"
        width={370}
        height={192}
        className="mt-4 h-48 w-full rounded-md object-cover"
      />

      <p className="mt-2 font-plus-jakarta-sans leading-6 text-gray-700">
        {description}
      </p>

      <div className="mt-2 flex justify-start space-x-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 rounded-full border border-gray-900 bg-gray-900 px-4 py-1.5 font-plus-jakarta-sans text-sm text-white transition duration-300 ease-in-out hover:bg-white hover:text-gray-900"
        >
          <span>Github</span>
          <LuExternalLink className="h-3 w-3" />
        </a>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="flex min-h-screen w-full flex-col pt-16" id="projects">
      <div className="h-full w-full px-4">
        <h2 className="scroll-m-20 font-plus-jakarta-sans text-4xl font-bold sm:text-5xl">
          Projects
        </h2>
      </div>

      {/* ceneter items */}
      <div className="mt-10 flex flex-wrap items-center justify-around gap-5 px-4 py-6">
        <ProjectCard
          title="Web3Verse"
          imageSrc="https://github.com/Omkar-Ghongade/Web3Verse/assets/88375748/66f493c0-4b82-4c1c-866b-5bb9b0d69fc6"
          description="A dynamic platform for trading virtual lands, NFTs, and digital assets, fostering global connections through gaming and immersive VR exploration of the metaverse."
          githubLink="https://github.com/sakkurthi-sashank/Web3Verse"
        />

        <ProjectCard
          title="HackSRM 4.0"
          imageSrc="https://github.com/sakkurthi-sashank/hacksrm/assets/126908332/0cf8166c-f044-4c1c-bc2a-7e3dd7f7939a"
          description="A national level hackathon conducted by SRM University AP, Amaravati to provide a platform for students to showcase their skills and knowledge in the field of technology."
          githubLink="https://github.com/sakkurthi-sashank/hacksrm"
        />

        <ProjectCard
          title="Car Crash Detection"
          imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcHR7uPXE5xNJzXi15ZAVAROR_jZMvm7mgyfa1XEsimw&s"
          description=" this project introduces an advanced car crash detection system leveraging both video and audio data from dashboard cameras and microphones installed in cars."
          githubLink="https://github.com/sakkurthi-sashank/car-crash-detection"
        />

        <ProjectCard
          title="Code Space"
          imageSrc="https://github.com/sakkurthi-sashank/code-space/assets/126908332/d0dff243-916e-4629-8da2-d9bc80027b9e"
          description="An Online Coding Assignments Platform, specifically designed to enhance students' coding skills. Include secure sandboxed coding environment."
          githubLink="https://github.com/sakkurthi-sashank/code-space"
        />

        <ProjectCard
          title="Hello Byte Chat"
          imageSrc="https://github.com/sakkurthi-sashank/stream-chat/assets/126908332/3b42f20b-809f-4a4f-9ba8-c1bf5e5a05c5"
          description="A Realtime Chat Application using Firebase and React Js. It is a simple chat application where users can chat with their friends. It is a responsive web application."
          githubLink="https://github.com/sakkurthi-sashank/hello-byte-chat"
        />

        <ProjectCard
          title="School Website"
          imageSrc="https://github.com/sakkurthi-sashank/school-website/assets/126908332/e47b7d23-5f36-49f9-8c52-3bd60fd15f39"
          description="A School website using React Js and Tailwind CSS. It is a responsive web application. It is a simple website where users can get information about the school."
          githubLink="https://github.com/sakkurthi-sashank/school-website"
        />
      </div>
    </section>
  );
}
