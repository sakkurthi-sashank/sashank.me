import { SocialLink } from "./components/SocialLink";

export const App = () => {
  return (
    <div className="flex min-h-screen w-full flex-col items-center px-4 pt-10 sm:pt-28">
      <div className="w-fit">
        <div className="py-5 font-inter text-3xl font-bold text-gray-200 antialiased sm:text-5xl md:text-6xl lg:text-7xl">
          Sakkurthi Sashank
        </div>
        <div className="max-w-xl pt-3 font-inter text-lg text-gray-400 antialiased">
          <p>
            Hey, I am Sakkurthi Sashank, studying Computer Science and
            Engineering at SRM University, Andhra Pradesh.
          </p>
          <br />
          <p>
            As a Full Stack Developer, I enjoy the thrill of building things
            that come to life on the internet. From crafting interactive
            websites to developing robust web applications.
          </p>
          <br />
          <p>
            So, here's to all the developers out there! Keep coding, keep
            laughing, and remember that humor is an essential tool in the world
            of programming. Happy coding!
          </p>
          <br />
        </div>
        <SocialLink />
      </div>
    </div>
  );
};
