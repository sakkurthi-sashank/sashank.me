import React from "react";
import Image from "next/image";
import { PageTitle } from "./page-title";

const ExperienceItem = ({
  logo,
  company,
  designation,
  date,
  location,
}: {
  logo: string;
  company: string;
  designation: string;
  date: string;
  location: string;
}) => {
  return (
    <div className="mb-6 flex rounded-xl border bg-white px-6 py-4 shadow-md">
      <Image
        src={logo}
        alt={company}
        className="mr-4 object-contain"
        width={40}
        height={40}
      />
      <div className="w-full text-start">
        <h3 className="text-lg font-semibold">{company}</h3>
        <p className="text-gray-600">{designation}</p>
        <p className="text-gray-500">
          {date} &#183; {location}
        </p>
      </div>
    </div>
  );
};

export const ExperienceSection = () => {
  return (
    <div
      className="mx-auto flex h-screen w-full max-w-4xl flex-col items-center justify-center space-y-5 px-4"
      id="experience"
    >
      <div className="z-10 flex flex-col items-center justify-center space-y-6 text-center">
        <PageTitle title="Experience" />
        <div className="mx-auto max-w-4xl pt-6">
          <ExperienceItem
            logo="/img/predli-logo.svg"
            company="Predli AB"
            designation="Full Stack Developer"
            date="February 2024 - Present"
            location="Stockholm, Stockholm County, Sweden"
          />
          <ExperienceItem
            logo="/img/next-tech-lab-logo.png"
            company="Next Tech Lab"
            designation="Member"
            date="May 2022 - Present"
            location="Amaravathi, Andhra Pradesh, India"
          />
          {/* Add more experience items as needed */}
        </div>
      </div>
    </div>
  );
};
