export const NavBar = () => {
  return (
    <div className="flex h-16 items-center justify-between px-6">
      <div className="w-full">
        <img src="./main_logo.svg" />
      </div>
      <div className="hidden md:block">
        <div className="flex w-full items-center justify-end gap-16 px-6 font-ibm_plex_mono text-gray-600 hover:text-gray-800">
          <div className="cursor-pointer">1.Home</div>
          <div className="cursor-pointer">2.About</div>
          <div className="cursor-pointer">3.Contact</div>
          <button className="border border-gray-400 px-6 py-1.5 shadow transition duration-200 hover:bg-gray-100 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
            Resume
          </button>
        </div>
      </div>
      <div className="block md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon icon-tabler icon-tabler-menu"
          width={30}
          height={30}
          viewBox="0 0 24 24"
          strokeWidth="1.25"
          stroke="currentColor"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M4 8l16 0"></path>
          <path d="M4 16l16 0"></path>
        </svg>
      </div>
    </div>
  );
};
