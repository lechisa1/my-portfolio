import Hero from "./components/Hero";
import About from "./components/About";
import ApiExpertise from "./components/ApiExpertise";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <ApiExpertise />
      <Skills />
      <Services />
      <Experience />
      {/* <Testimonials /> */}
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
