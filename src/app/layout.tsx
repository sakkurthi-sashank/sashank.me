import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

export const metadata: Metadata = {
  title: "Sakkurthi Sashank - Full Stack Developer Portfolio",
  description:
    "I'm Sashank Sakkurthi, a Full Stack Developer based in Amaravati, India. As a CSE student at SRM University AP and developer at Predli AB, I specialize in full-stack, blockchain, and generative AI applications. Highlights include winning Unfold23 by CoinDCX and organizing HackSRM. Let's connect to explore innovative projects.",
  keywords: [
    "Sakkurthi Sashank",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Java",
    "Software Engineering",
    "SRM University AP",
    "Portfolio",
    "Frontend Development",
    "Backend Development",
    "Blockchain",
    "Generative AI",
    "HackSRM",
    "Predli AB",
    "Unfold23",
    "CoinDCX",
    "Next Tech Lab",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "Sakkurthi Sashank",
    },
  ],
};

const spaceGrotesk = Space_Grotesk({
  style: "normal",
  display: "swap",
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={spaceGrotesk.variable}>{children}</body>
    </html>
  );
}
