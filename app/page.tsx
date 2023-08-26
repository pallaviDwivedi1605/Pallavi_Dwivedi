import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Index() {
  return (
    <main className=" text-center">
      <section id="home" className="pt-24 pb-14 bg-slate-50 ">
        <Home />
      </section>

      <section id="about" className="pt-24 pb-14">
        <About />
      </section>

      <section id="skills" className="pt-24 pb-14">
        <Skill />
      </section>

      <section id="projects" className="pt-24 pb-14">
        <Project />
      </section>

      <section id="contact" className="pt-24 pb-14">
        <Contact />
      </section>
    </main>
  );
}
