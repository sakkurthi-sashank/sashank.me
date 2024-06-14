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
    <div className="mx-auto mt-8 flex w-full max-w-4xl flex-col items-center space-y-5 px-4">
      <div className="z-10 flex flex-col items-center justify-center space-y-6 text-center">
        <PageTitle title="Skills" />

        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-full border bg-white px-4 py-1.5 text-sm text-gray-800"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
