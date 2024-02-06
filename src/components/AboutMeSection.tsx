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
    <article
      className="flex min-h-screen w-full items-start justify-center bg-white px-4 py-10 pt-20 sm:px-6 md:pt-0"
      id="about"
    >
      <div className="m-auto flex h-full max-w-3xl flex-col items-center justify-center space-y-5">
        <div className="flex h-full w-full flex-col justify-center space-y-4">
          <h2 className="scroll-m-20 font-plus-jakarta-sans text-3xl font-bold">
            About Me
          </h2>

          <p className="mb-8 font-plus-jakarta-sans text-lg text-gray-600">
            I am a Computer Science student at SRM University AP and a Software
            Developer Intern at Predli AB. As a Full Stack Developer & DevOps
            Engineer, I have extensive experience in building scalable and
            robust applications. Additionally, I maintain a strong commitment to
            delivering high-quality solutions and am passionate about staying at
            the forefront of technological advancements.
          </p>

          <p className="font-plus-jakarta-sans text-lg text-gray-600">
            Open to new opportunities and challenges, available for projects,
            open-source collaborations, hackathons, mentorship, and internships.
            Reach me at{" "}
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

        <div className="flex w-full flex-col justify-center space-y-4 pt-6">
          <h2 className="scroll-m-20 font-plus-jakarta-sans text-3xl font-bold">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="rounded-sm border border-gray-900 bg-white px-4 py-1.5 font-plus-jakarta-sans text-gray-800 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
