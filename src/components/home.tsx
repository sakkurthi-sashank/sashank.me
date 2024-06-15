import Image from "next/image";
import { SocialLinks } from "./social-links";

export function HomeSection() {
  return (
    <div className="mx-auto flex min-h-screen w-full max-w-5xl flex-col-reverse items-center justify-center px-6 pt-28 md:flex-row-reverse md:pb-0 md:pt-0">
      <div className="mt-14 flex w-full items-center justify-center md:mt-0 md:justify-end">
        <Image
          src="/img/sakkurthi-sashank.jpg"
          width={300}
          height={300}
          className="rounded-xl object-cover"
          alt="Sashank Sakkurthi"
        />
      </div>
      <div className="flex w-full justify-center">
        <div className="flex w-full flex-col justify-center space-y-3">
          <h2 className="text-4xl font-bold leading-snug tracking-tight md:text-5xl">
            Hello,
          </h2>
          <h2 className="text-4xl font-bold leading-snug tracking-tight md:text-5xl">
            Sashank here! 👋🏻
          </h2>

          <h4 className="text-lg text-gray-700">
            I&apos;m an undergraduate student studying CSE at SRM University AP
            🎓 and a Full Stack Developer at Predli AB 🧑🏻‍💻. With over 1 year of
            experience in the software industry, I have extensive expertise in
            developing full-stack, blockchain, and generative AI applications.
          </h4>
          <SocialLinks />
        </div>
      </div>
    </div>
  );
}
