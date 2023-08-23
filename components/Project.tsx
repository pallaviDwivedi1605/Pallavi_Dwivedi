import React from "react";
import Card from "./utils/Card";

const Project = () => {
  const projectData = [
    {id:1, name:"project 1", link:"#"},
  ]
  return <div className="bg-white pt-24 gap-4 flex flex-col items-start h-full w-full ps-6 pe-6 md:ps-16 md:pe-16">
    <h2 className="text-3xl font-bold text-primary tracking-wide">My Work</h2>
    <p className=" text-lg">Here is some of my project work that showcase my skills. Click to visit the project.</p>
    <div>
      {
        projectData.map((obj)=><Card  />)
      }
    </div>
  </div>;
};

export default Project;
