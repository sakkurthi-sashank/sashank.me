export function ContactSection() {
  return (
    <section
      className="flex min-h-screen w-full flex-col px-2 pt-10"
      id="contact"
    >
      <div className="h-full w-full px-4 py-16">
        <h2 className="scroll-m-20 text-center font-plus-jakarta-sans text-3xl font-bold">
          Get in touch
        </h2>
      </div>

      <div className="mt-10 flex h-full flex-col items-center justify-center space-y-3">
        <span className="max-w-xl scroll-m-20 text-center font-plus-jakarta-sans text-xl font-normal text-gray-600">
          My inbox is always open. Whether for a potential project or just to
          say Hello, I&apos;ll try my best to answer your email!
        </span>
        <span className="font-plus-jakarta-sans text-xl font-medium text-gray-900">
          sakkurthisashank@gmail.com
        </span>
      </div>
    </section>
  );
}
