import React from "react";
import { PageTitle } from "./page-title";

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

export default function SkillsSession() {
  return (
    <section
      className="mx-auto flex w-full max-w-5xl flex-col px-6"
      id="skills"
    >
      <div className="z-10 my-auto">
        <PageTitle title="Skills" />

        <div className="mt-6 flex flex-wrap justify-start gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-full border bg-white px-4 py-1.5 text-gray-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
