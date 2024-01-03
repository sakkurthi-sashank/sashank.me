import Image from "next/image";

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
];

export function AboutMeSection() {
  return (
    <section
      className="flex min-h-screen w-full items-start justify-center bg-white px-4 py-10 sm:px-6"
      id="about"
    >
      <div className="m-auto flex h-full w-full flex-col items-center justify-center space-y-5">
        <div className="flex h-full w-full flex-col justify-center space-y-4">
          <h2 className="scroll-m-20 font-plus-jakarta-sans text-4xl font-bold sm:text-5xl">
            About Me
          </h2>

          <p className="mb-8 font-plus-jakarta-sans text-lg text-gray-600">
            I&apos;m a Computer Science undergraduate at SRM University AP
            Studying Computer Science and Engineering. I&apos;m a Full Stack
            Developer and Passionate about DevOps. I love solving problems and
            learning new things. I&apos;m currently working on a few personal
            projects and learning new tech.
          </p>

          <p className="mb-8 font-plus-jakarta-sans text-lg text-gray-600">
            I&apos;m currently looking for an internship opportunity to work as
            a Software Engineer. If you have any opportunities, please reach out
            to me via{" "}
            <a
              href="mailto:sakkurthisashank@gmail.com"
              className="text-blue-600 underline hover:text-blue-700"
            >
              Mail
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/sakkurthi-sashank/"
              className="text-blue-600 underline hover:text-blue-600"
            >
              LinkedIn
            </a>
            .
          </p>

          <p></p>
        </div>

        <div className="flex w-full flex-col justify-center space-y-4 pt-6">
          <h2 className="scroll-m-20 font-plus-jakarta-sans text-4xl font-bold sm:text-5xl">
            Skills
          </h2>

          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="cursor-pointer rounded-sm border border-gray-900 bg-white px-4 py-1.5 font-plus-jakarta-sans text-gray-800 transition duration-300 ease-in-out hover:bg-gray-900 hover:text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="m-auto hidden h-full w-full items-center justify-center xl:flex">
        <Image
          src="/img/sakkurthi-sashank-1.jpg"
          alt="About Me"
          width={384}
          height={384}
          className="rounded-sm object-cover shadow-[20px_20px_0px_0px_rgba(0,0,0)] transition duration-300 ease-in-out hover:shadow-none"
        />
      </div>
    </section>
  );
}
