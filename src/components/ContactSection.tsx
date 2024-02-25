export function ContactSection() {
  return (
    <div className="mx-auto my-20 flex h-full w-full max-w-5xl flex-col items-center justify-center space-y-5 px-4 pt-10">
      <div className="w-full px-4">
        <h2 className="font-scroll-m-20 text-center text-3xl font-bold">
          Get in touch
        </h2>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center space-y-3">
        <p className="font-scroll-m-20 max-w-xl text-center text-xl font-normal text-gray-600">
          My inbox is always open. Whether for a potential project or just to
          say Hello, I&apos;ll try my best to answer your email!
        </p>
        <p className="text-xl font-medium text-gray-900">
          sakkurthisashank@gmail.com
        </p>
      </div>
    </div>
  );
}
