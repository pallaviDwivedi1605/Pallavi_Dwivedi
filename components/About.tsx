import Link from "next/link";
import React from "react";
import Button from "./utils/Button"
import Image from "next/image";
import FlipCard from "./utils/FlipCard";

const About = () => {
  const cardData = [
    {id:1, skill:"React | Tailwind | Next", url:"/images/girl-ui.jpg", name:"Front-end", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis maxime error doloremque molestiae sapiente incidunt, porro perferendis possimus! Sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic dicta assumenda s"},
    {id:2, skill:"NodeJS | ExpressJS | MongoDB", url:"/images/girl-backend.jpg", name:"Back-end", desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis maxime error doloremque molestiae sapiente incidunt, porro perferendis possimus! Sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic dicta assumenda s"},
  ]
  return <div className=" h-full w-full ps-6 pe-6 pt-24 pb-6 flex flex-col gap-10 md:flex-row-reverse md:ps-16 md:pe-14">
    {/* text div */}
    <div className="flex flex-col justify-start gap-4">
      <h3 className="text-left text-3xl font-bold text-primary tracking-wide">Who I Am?</h3>
      <p className="text-left md:mb-6">I'm a Computer Science and Engineering graduate, specializing in web development and programming. Proficient in HTML, CSS, JavaScript, React.js, and Next.js, I bring skills in creating user-friendly web applications. GATE Exam 2023 qualifier with internship experience in web development. Excited about innovative projects and open to new opportunities. Let's connect and collaborate!</p>
      <div className="flex flex-col gap-10 justify-center items-center md:flex-row">
        {
          cardData.map((obj)=><FlipCard key={obj.id} name={obj.name} desc={obj.desc} skill={obj.skill} image={obj.url} />)
        }
      </div>
    </div>
    </div>
};

export default About;
