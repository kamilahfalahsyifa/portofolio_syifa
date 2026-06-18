import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Organization from "@/components/Organization";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-white text-[#1D1D1F]">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Organization />
      <Skills />
      <Education />
      <Contact />
    </main>
  );
}
