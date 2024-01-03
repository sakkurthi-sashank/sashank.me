const skills = [
  "C/C++",
  "HTML",
  "CSS",
  "React Js",
  "Javascript",
  "Typescript",
  "Next Js",
  "Python",
  "Express Js",
  "Node Js",
  "Fast API",
  "SQL",
  "MySQL",
  "PostgreSQL",
  "Git & GitHub",
  "Firebase",
  "Redis",
  "AWS",
  "Docker",
  "Tailwind CSS",
];

export function AboutMeSection() {
  return (
    <div className="flex min-h-screen w-full items-start justify-center bg-white px-4 py-10 sm:px-6">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center space-y-5">
        <div className="flex h-full w-full flex-col justify-center space-y-4">
          <h2 className="scroll-m-20 font-plus-jakarta-sans text-4xl font-bold sm:text-5xl">
            About Me
          </h2>

          <p className="mb-8 font-plus-jakarta-sans text-lg text-gray-600">
            I'm a Computer Science undergraduate at SRM University AP Studying
            Computer Science and Engineering. I'm a Full Stack Developer and
            Passionate about DevOps. I love solving problems and learning new
            things. I'm currently working on a few projects and learning new
            technologies.
          </p>
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
        <img
          src="/img/sakkurthi-sashank-1.jpg"
          alt="About Me"
          className="h-96 w-96 object-cover shadow-sm"
        />
      </div>
    </div>
  );
}
