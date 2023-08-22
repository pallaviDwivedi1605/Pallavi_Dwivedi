import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Index() {
  return (
    <main className=" text-center">
      <section id="home">
        <Home />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skill />
      </section>

      <section id="projects">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  );
}
