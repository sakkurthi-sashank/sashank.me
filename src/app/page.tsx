import { AboutMeSection } from "@/components/about";
import { BlogsSection } from "@/components/blogs";
import { ContactSection } from "@/components/contact";
import { ExperienceSection } from "@/components/experience";
import { HomeSection } from "@/components/home";
import { FloatingNavbar } from "@/components/navbar";
import SkillsSession from "@/components/skills";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      {/* <div className="fixed left-0 right-0 top-0 z-50"><Navbar /></div> */}
      <FloatingNavbar />
      <HomeSection />
      <AboutMeSection />
      <SkillsSession />
      <ExperienceSection />
      <BlogsSection />
      <ContactSection />
    </div>
  );
}
