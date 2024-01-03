import { AboutMeSection } from "@/components/AboutMeSection";
import { ContactSection } from "@/components/ContactSection";
import { HomeSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";
import { ProjectsSection } from "@/components/ProjectsSection";

export default function Home() {
  return (
    <div className="relative">
      <div className="fixed left-0 right-0 top-0 z-50 bg-white">
        <Navbar />
      </div>
      <HomeSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
