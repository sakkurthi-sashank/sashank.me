import Image from "next/image";
import { SocialLinks } from "./social-links";

export function HomeSection() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center space-y-5 px-4">
      <div className="mb-10 flex w-full items-center justify-center">
        <Image
          src="/img/sakkurthi-sashank.jpg"
          width={180}
          height={180}
          className="rounded-full border-4 border-gray-700 object-cover shadow-sm"
          alt="Sashank Sakkurthi"
        />
      </div>

      <div className="z-10 space-y-2">
        <h3 className="max-w-3xl text-center text-3xl font-bold leading-snug tracking-tight md:text-4xl">
          Hello 👋🏻, I&apos;m <span className="border-b">Sashank Sakkurthi</span>
          <br /> an undergraduate student at Srm University AP and a full stack
          developer at Predli AB.
        </h3>
      </div>

      <SocialLinks />
    </div>
  );
}
