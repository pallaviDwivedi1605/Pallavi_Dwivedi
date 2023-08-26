import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Index() {
  return (
    <main className=" text-center">
      <section id="home" className="pt-24 pb-6 min-h-screen max-h-max">
        <Home />
      </section>

      <section id="about" className=" pt-24 pb-6 w-screen min-h-screen max-h-max">
        <About />
      </section>

      <section id="skills" className="pt-24 pb-6 w-screen min-h-screen max-h-max">
        <Skill />
      </section>

      <section id="projects" className="pt-24 pb-6 w-screen min-h-screen max-h-max">
        <Project />
      </section>

      <section id="contact" className="pt-24 pb-6 w-screen min-h-screen max-h-max">
        <Contact />
      </section>
    </main>
  );
}
