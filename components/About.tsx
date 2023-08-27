import Link from "next/link";
import React from "react";
import Button from "./utils/Button";
import Image from "next/image";
import FlipCard from "./utils/FlipCard";
import {GiAchievement} from "react-icons/gi"
import {FaGraduationCap} from "react-icons/fa"

const About = () => {
  const cardData = [
    {
      id: 1,
      skill: "React | Tailwind | Next",
      url: "/images/girl-ui.jpg",
      name: "Front-end",
      desc: "I command HTML, CSS, and JavaScript proficiently, and my expertise extends to React, Tailwind CSS, and Next.js. This comprehensive skill set enables me to excel in frontend development, crafting dynamic and responsive user interfaces.",
    },
    {
      id: 2,
      skill: "NodeJS | ExpressJS | MongoDB",
      url: "/images/girl-backend.jpg",
      name: "Back-end",
      desc: "I excel in backend development, leveraging Node.js, Express, and MongoDB to build powerful server-side solutions. This expertise enables me to create scalable APIs and handle data efficiently, complementing my frontend skills for comprehensive web development.",
    },
  ];
  return (
    <div className=" h-full w-full px-6 flex flex-col items-center gap-10 md:px-32">
      {/* image heading block */}
      <div className=" group transition-all ease-in-out duration-300 bg-primary/70 text-white flex justify-between items-center gap-10 rounded-lg px-6 py-4 hover:flex-row-reverse container shadow-lg md:px-10">
        <div className=" flex flex-col items-start gap-4 md:flex-col">
          <h2 className=" main_heading">
            What Can I Do Best?
          </h2>
          <p className="text-left">
          I'm a Computer Science and Engineering graduate with strong web development and programming skills. Open to exciting opportunities and collaborations.<br/> Let's connect !
          </p>
        </div>
        <Image
          src={"/images/s6.svg"}
          alt="image"
          width={130}
          height={130}
          className=" mirror_flip"
        />
       
      </div>
      {/* achievement block */}
      <div className=" w-full flex flex-col md:flex-row md:justify-between">
        <p className=" group flex items-center rounded-full px-4 py-2 hover:shadow duration-500 text-left"><GiAchievement className="bg-primary text-[20px] h-8 w-8 rounded-full p-2 mr-1 text-white group-hover:text-primary group-hover:bg-white duration-300 "/> Conquered 2023 GATE Exam, exemplifying robust CS knowledge.</p>
        <p className=" group flex items-center rounded-full px-4 py-2 hover:shadow duration-500 text-left"><FaGraduationCap className="bg-primary text-[20px] h-8 w-8 rounded-full p-2 mr-1 text-white group-hover:text-primary group-hover:bg-white duration-300 "/>B.Tech<span className="w-2 h-2 rounded-full bg-primary mx-2"></span>DCRUST<span className="w-2 h-2 rounded-full bg-primary mx-2"></span>CGPA: 8.41</p>
        
      </div>
      {/* card block */}
      <div className="flex flex-col gap-10 justify-center items-center md:flex-row">
        {cardData.map((obj) => (
          <FlipCard
            key={obj.id}
            name={obj.name}
            desc={obj.desc}
            skill={obj.skill}
            image={obj.url}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
