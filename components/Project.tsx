import React from "react";
import Card from "./utils/Card";

const Project = () => {
  const projectData = [
    {id:1, name:"Dashboard", tech:"React | Highcharts", url:"/images/girl-php.jpg", desc:"nerhkfch xgjhkcrjnhkjeriucioirodfoijckcjwekjs,cnkv"},
    {id:2, name:"Migrators", tech:"HTML | CSS | JS", url:"/images/girl-php.jpg", desc:"nerhkfch xgjhkcrjnhkjeriucioirodfoijckcjwekjs,cnkv"},
    {id:3, name:"Simon", tech:"HTML | CSS | Jquery", url:"/images/girl-php.jpg", desc:"nerhkfch xgjhkcrjnhkjeriucioirodfoijckcjwekjs,cnkv"},
  ]
  return <div className=" pt-24 gap-4 flex flex-col items-start h-full w-full ps-6 pe-6 md:ps-16 md:pe-16">
    <h2 className="text-3xl font-bold text-primary tracking-wide">My Work</h2>
    <p className=" text-lg text-left">Here is some of my project work that showcase my skills. Click to visit the project.</p>
    <div className="flex flex-col gap-3 md:flex-row">
      {
        projectData.map((obj)=><Card key={obj.id} label={obj.name} tech={obj.tech} desc={obj.desc} image={obj.url}  />)
      }
    </div>
  </div>;
};

export default Project;
