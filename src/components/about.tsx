import React from "react";
import { PageTitle } from "./page-title";

export function AboutMeSection() {
  return (
    <section
      className="mx-auto mt-12 flex min-h-screen w-full max-w-5xl flex-col px-6"
      id="about"
    >
      <div className="z-10 my-auto flex flex-col space-y-6 text-start text-lg md:text-xl">
        <div className="">
          <PageTitle title="About Me" />

          <p className="mb-8 text-justify  leading-relaxed text-gray-700">
            Hello! I&apos;m Sashank Sakkurthi based in Amaravati, India 🇮🇳.
            I&apos;m an undergraduate student studying CSE at SRM University AP
            🎓 and a Full Stack Developer at Predli AB 🧑🏻‍💻. With over 1 year of
            experience in the software industry, I have extensive expertise in
            developing full-stack, blockchain, and generative AI applications.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            My strong foundation in computer science has enabled me to excel in
            various projects and hackathons. Notably, I won the national level
            hackathon Unfold23, conducted by CoinDCX, securing a prize of
            $1,000. I serve as a board member of Next Tech Lab, a student-run
            community with QS recognition.
          </p>
          <p className="text-justify leading-relaxed text-gray-700">
            As the organizer of one of India&apos;s premier hackathons, HackSRM,
            boasting over 1,000 registrations and 500+ participants, my passion
            for technology continues to drive me towards continuous learning and
            innovation in the field of software development.
          </p>
        </div>
      </div>
    </section>
  );
}
