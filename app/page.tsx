import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skill from "@/components/Skill";

export default function Home() {
  return (
    <main className="">
      <section>
        <Hero />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Skill />
      </section>

      <section>
        <Project />
      </section>

      <section>
        <Contact />
      </section>
    </main>
  );
}
