export const Contact = () => {
  return (
    <section
      id="Contact"
      className="flex min-h-screen justify-center px-5 py-20 sm:px-10"
    >
      <div className="w-full sm:max-w-2xl lg:max-w-4xl">
        <div className="font-raleway text-4xl font-bold text-gray-700">
          Contact Me
        </div>
        <div className="py-20 text-center font-raleway text-xl font-medium text-gray-500 md:text-2xl">
          Always Welcome To Say Hello, Let's Talk About Tech and Career
        </div>
        <div className="flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-500 sm:h-20 sm:w-20"
            viewBox="0 0 24 24"
            strokeWidth="1.25"
            stroke="currentColor"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"></path>
            <path d="M16 12v1.5a2.5 2.5 0 0 0 5 0v-1.5a9 9 0 1 0 -5.5 8.28"></path>
          </svg>
        </div>
        <div className="py-10 text-center font-mono text-lg font-medium text-gray-500 sm:text-xl md:text-2xl lg:text-3xl">
          sakkurthisashank@gmail.com
        </div>
        <div className="flex w-full justify-center">
          <button className="mt-8 w-60 border border-gray-400 px-6 py-2 font-raleway font-medium text-gray-700 antialiased shadow transition duration-200 hover:shadow-[5px_5px_0px_0px_rgba(0,0,0)] sm:w-fit">
            <a href="mailto:sakkurthisashank@gmail.com">Send A Mail To Me</a>
          </button>
        </div>
      </div>
    </section>
  );
};
