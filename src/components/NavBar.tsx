export const NavBar = () => {
  return (
    <div className="flex h-16 items-center justify-between px-6">
      <div className="w-full">
        <img src="./main_logo.svg" />
      </div>
      <div className="hidden md:block">
        <div className="flex w-full items-center justify-end gap-16 px-6 font-ibm_plex_mono text-gray-600 hover:text-gray-800">
          <a className="cursor-pointer" href="#Home">
            1.Home
          </a>
          <a className="cursor-pointer" href="#About">
            2.About
          </a>
          <a className="cursor-pointer" href="#Contact">
            3.Contact
          </a>
          {/* <button className="border border-gray-400 px-6 py-1.5 shadow transition duration-200 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)]">
            Resume
          </button> */}
        </div>
      </div>
    </div>
  );
};
