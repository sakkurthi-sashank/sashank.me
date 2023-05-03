import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { EmailLink } from "./components/EmailLink";
import { Home } from "./components/Home";
import { SocialLink } from "./components/SocialLink";

export const App = () => {
  return (
    <div>
      <Home />
      <div className="hidden lg:block">
        <SocialLink />
        <EmailLink />
      </div>
      <About />
      <Contact />
    </div>
  );
};
