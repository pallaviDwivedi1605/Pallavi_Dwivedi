import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Index() {
  return (
    <main className=" text-center">
      <section id="home" className="w-screen h-screen">
        <Home />
      </section>

      <section id="about" className="w-screen h-screen">
        <About />
      </section>

      <section id="skills" className="w-screen h-screen">
        <Skill />
      </section>

      <section id="projects" className="w-screen h-screen">
        <Project />
      </section>

      <section id="contact" className="w-screen h-screen">
        <Contact />
      </section>
    </main>
  );
}
