import { AboutMeSection } from "./components/AboutMeSection";
import { ContactSection } from "./components/ContactSection";
import { HomeSection } from "./components/HomeSection";
import { ProjectsSection } from "./components/ProjectsSection";

export function App() {
  return (
    <>
      <HomeSection />
      <AboutMeSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
