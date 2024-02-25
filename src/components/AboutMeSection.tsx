import React from "react";

const skills = [
  "C/C++",
  "HTML",
  "CSS",
  "React Js",
  "Javascript",
  "Java",
  "Typescript",
  "Next Js",
  "Python",
  "Express Js",
  "Node Js",
  "Fast API",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "GraphQL",
  "Spring Boot",
  "Git & GitHub",
  "Firebase",
  "Redis",
  "AWS",
  "Docker",
  "Tailwind CSS",
  "Generative AI",
  "Supabase",
];

const emailLink = "mailto:sakkurthisashank@gmail.com";
const linkedinLink = "https://www.linkedin.com/in/sakkurthi-sashank/";

export function AboutMeSection() {
  return (
    <div className="mx-auto mt-20 flex h-full w-full max-w-5xl flex-col items-center justify-center space-y-5 px-4 pt-10">
      <div className="z-10 flex flex-col justify-center space-y-4 text-center">
        <h2 className="font-scroll-m-20 text-3xl font-bold">About Me</h2>

        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          Hello 👋🏻 there! I&apos;m Sashank Sakkurthi, a Full Stack Developer and
          an Undergraduate Student at{" "}
          <a
            href="https://srmap.edu.in/"
            className="text-blue-600 underline hover:text-blue-700"
          >
            SRM University AP
          </a>
          . Currently, I work as a Software Developer Intern at{" "}
          <a
            href="https://www.predli.com/"
            className="text-blue-600 underline hover:text-blue-700"
          >
            Predli
          </a>
          . I have a profound interest in crafting personal projects and SaaS
          products, solving problems, actively contributing to open-source, and
          exploring Generative AI. I&apos;ve participated in various hackathons
          and secured victories in some of them.
        </p>

        <p className="mb-8 text-xl leading-relaxed text-gray-700">
          I&apos;m open to new opportunities and challenges, available for
          projects, open-source collaborations, hackathons, mentorship, and
          internships. Reach me at{" "}
          <a
            href={emailLink}
            className="text-blue-600 underline hover:text-blue-700"
          >
            Mail
          </a>{" "}
          or{" "}
          <a
            href={linkedinLink}
            className="text-blue-600 underline hover:text-blue-600"
          >
            LinkedIn
          </a>
        </p>
      </div>

      <div className="z-10 flex w-full flex-col justify-center space-y-4 pt-6">
        <h2 className="font-scroll-m-20 text-center text-3xl font-bold">
          Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="font-rounded-sm border border-gray-900 bg-white px-4 py-1.5 text-gray-800 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
