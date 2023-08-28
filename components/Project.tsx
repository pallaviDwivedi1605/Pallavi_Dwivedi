import React from "react";
import Card from "./utils/Card";

const Project = () => {
  const projectData = [
    {id:1, name:"Migrators", tech:"HTML | CSS | JS", url:"/images/migrator.png", link:"https://pallavidwivedi1605.github.io/MIGRATERS/", desc:"Collaborated on a tourism website's front-end using HTML, CSS, and JavaScript. Designed engaging interfaces, optimized for performance and accessibility, ensuring seamless user experience across browsers."},
    {id:2, name:"Simon", tech:"HTML | CSS | Jquery", url:"/images/simon.png", link:"https://pallavidwivedi1605.github.io/Simon/", desc:"Simon Memory Game: An interactive web version of the classic memory challenge. Repeat sequences of lights and sounds to enhance memory and concentration. Showcasing HTML, CSS, and jQuery for an engaging experience."},
    {id:3, name:"Drum Set", tech:"HTML | CSS | JS", url:"/images/drumset.png", link:"https://pallavidwivedi1605.github.io/Drum_Set/", desc:"Created an interactive drum set using HTML, CSS, and JavaScript. Enjoy responsive buttons, lifelike sound effects, and seamless cross-device functionality. Tap the keys, feel the beat, and experience the joy of drumming firsthand."},
  ]
  return <div className=" h-max w-full px-6 flex items-center justify-center">
    <div className="flex flex-col items-start gap-6">
      <h2 className="main_heading text-primary">My Work</h2>
      <p className=" text-lg text-left">Here is some of my project work that showcase my skills. Click to visit the project.</p>
      <div className=" w-full flex flex-col items-center gap-6 md:flex-row md:flex-wrap">
        {
          projectData.map((obj)=><Card key={obj.id} label={obj.name} tech={obj.tech} desc={obj.desc} image={obj.url} link={obj.link}  />)
        }
      </div>
    </div>
    
  </div>;
};

export default Project;
