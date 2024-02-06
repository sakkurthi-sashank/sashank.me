import { AboutMeSection } from "@/components/AboutMeSection";
import { BlogsSection } from "@/components/BlogsSection";
import { ContactSection } from "@/components/ContactSection";
import { HomeSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed left-0 right-0 top-0 z-50">
        <Navbar />
      </div>
      <HomeSection />
      <AboutMeSection />
      <BlogsSection />
      <ContactSection />
    </div>
  );
}
