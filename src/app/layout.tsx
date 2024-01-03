import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Sakkurthi Sashank",
  description:
    "Sakkurthi Sashank: A skilled professional in Full Stack Development with a portfolio showcasing innovative projects and a passion for Software Engineering. Explore impactful creations and get in touch for collaborations.",
  keywords: [
    "React",
    "Sakkurthi Sashank",
    "Next Js",
    "SRM University AP",
    "SRM Ap",
    "Amaravati",
    "Personal Portfolio",
    "Software engineering Developer intern",
    "Full Stack Developer",
    "Frontend Development",
    "Backend Development",
    "Java",
  ],
  robots: "index, follow",
  authors: [
    {
      name: "Sakkurthi Sashank",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={plusJakartaSans.variable}>{children}</body>
    </html>
  );
}
