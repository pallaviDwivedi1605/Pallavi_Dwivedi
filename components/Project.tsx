import React from "react";
import Card from "./utils/Card";

const Project = () => {
  const projectData = [
    {id:1, name:"Dashboard", tech:"React | Highcharts", url:"/images/girl-php.jpg", link:"", desc:"I crafted the dashboard's frontend with React.js, and MUI, achieving a modern, user-friendly interface. Integrated Highcharts for clear data visualization. Collaborated seamlessly with developers and designers for timely, top-quality product delivery."},
    {id:2, name:"Migrators", tech:"HTML | CSS | JS", url:"/images/migrator.png", link:"https://pallavidwivedi1605.github.io/MIGRATERS/", desc:"Collaborated with designers and developers to build a tourism website's front-end using HTML, CSS, and JavaScript. Created engaging user interfaces and optimized the site for a smooth user experience. Followed web design best practices for high performance, cross-browser compatibility, and accessibility."},
    {id:3, name:"Simon", tech:"HTML | CSS | Jquery", url:"/images/simon.png", link:"https://pallavidwivedi1605.github.io/Simon/", desc:""},
  ]
  return <div className=" h-full w-full px-6 flex justify-center">
    <div className=" h-max md:w-2/3 flex flex-col gap-4 justify-center">
      <h2 className="text-left text-3xl font-bold text-primary tracking-wide">My Work</h2>
      <p className=" text-lg text-left">Here is some of my project work that showcase my skills. Click to visit the project.</p>
      <div className="flex flex-col items-center gap-6 md:flex-row md:flex-wrap">
        {
          projectData.map((obj)=><Card key={obj.id} label={obj.name} tech={obj.tech} desc={obj.desc} image={obj.url} link={obj.link}  />)
        }
      </div>
    </div>
  </div>;
};

export default Project;
