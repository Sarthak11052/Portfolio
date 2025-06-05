import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import { SkillsSection } from "./components/SkillsSection";

const App = () => (
  <>
 
    <Navbar />
    <Hero />
    <AboutMe/>
    <ShowcaseSection />
    <Experience /> 
    <TechStack />
    <SkillsSection/>
    <Contact />
    <Footer />
  </>
);

export default App;