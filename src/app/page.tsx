import { AboutMeSection } from "@/components/AboutMeSection";
import { ContactSection } from "@/components/ContactSection";
import { HomeSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-0 bg-[url(/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      {/* <div className="fixed left-0 right-0 top-0 z-50"><Navbar /></div> */}
      <HomeSection />
      <AboutMeSection />
      <ContactSection />
    </div>
  );
}
