import type { Metadata } from "next";
import "./globals.css";
import { GeistSans } from "geist/font/sans";

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
      <body className={GeistSans.variable}>{children}</body>
    </html>
  );
}
