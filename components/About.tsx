import Link from "next/link";
import React from "react";
import Button from "./utils/Button";
import Image from "next/image";
import FlipCard from "./utils/FlipCard";

const About = () => {
  const cardData = [
    {
      id: 1,
      skill: "React | Tailwind | Next",
      url: "/images/girl-ui.jpg",
      name: "Front-end",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis maxime error doloremque molestiae sapiente incidunt, porro perferendis possimus! Sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic dicta assumenda s",
    },
    {
      id: 2,
      skill: "NodeJS | ExpressJS | MongoDB",
      url: "/images/girl-backend.jpg",
      name: "Back-end",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque officiis maxime error doloremque molestiae sapiente incidunt, porro perferendis possimus! Sequi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae hic dicta assumenda s",
    },
  ];
  return (
    <div className=" h-full w-full px-6 flex flex-col items-center gap-10">
      {/* text div */}
      <div className=" md:w-2/3 flex flex-col justify-start gap-8">
        <div className=" bg-primary/80 text-white rounded-lg px-10 py-4">
          <div className="flex justify-between items-center">
            <h2 className=" text-2xl tracking-widest font-semibold">
              About Me
            </h2>
            <Image
              src={"/images/s5.svg"}
              alt="image"
              width={100}
              height={100}
              className="rounded-full border"
            />
          </div>
          <p className="text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem
            labore nobis incidunt hic veritatis voluptate iusto illo corrupti
            quos!
          </p>
        </div>
        <div className=" flex justify-between px-10">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi,
            accusantium!
          </p>
        </div>
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
    </div>
  );
};

export default About;
