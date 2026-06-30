import About from "@/components/About";
import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <Banner></Banner>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
    </div>
  );
}
