export const App = () => {
  return (
    <div className="hero-pattern relative flex h-screen flex-col items-center justify-center">
      <div className="absolute inset-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>

      <div className="absolute left-0 right-0 top-0 flex h-16 items-center">
        <div className="w-full"></div>
        <div className="flex w-full items-center justify-around font-mono text-sm font-medium text-gray-800 antialiased">
          <div className="rounded-full bg-gray-800 px-6 py-2 text-white">
            Home
          </div>
          <div>About Me</div>
          <div>Tech Stack</div>
          <div>Projects</div>
          <div>Resume</div>
          <div>Contact</div>
        </div>
      </div>

      <div className="z-10 flex flex-col">
        <div className="font-inter text-9xl font-bold text-gray-800">
          Sashank Sakkurthi
        </div>

        <div className="ml-3 font-mono text-4xl font-medium text-gray-800">
          Full Stack Developer & Devops Engineer
        </div>
      </div>

      <div className="absolute bottom-0 mb-16">
        <button className="flex items-center space-x-1 rounded-full border bg-white px-4 py-2 font-mono text-sm text-gray-800 antialiased shadow">
          <span>About Me</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M7 7l5 5l5 -5"></path>
            <path d="M7 13l5 5l5 -5"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};
