import About from "@/components/About";
import Contact from "@/components/Contact";
import Home from "@/components/Home";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Index() {
  return (
    <main className=" text-center">
      <section id="home" className="pt-24 pb-14 min-h-screen max-h-fit w-screen bg-gray-100">
        <Home />
      </section>

      <section id="about" className="pt-24 pb-14 min-h-screen max-h-fit w-screen">
        <About />
      </section>

      <section id="skills" className="pt-24 pb-14 min-h-screen max-h-fit w-screen bg-gray-100">
        <Skill />
      </section>

      <section id="projects" className="pt-24 pb-14 min-h-screen max-h-fit w-screen">
        <Project />
      </section>

      <section id="contact" className=" min-h-screen max-h-fit w-screen bg-gray-100">
        <Contact />
      </section>
    </main>
  );
}
