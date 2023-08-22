import Link from "next/link";
import React from "react";

const About = () => {
  return <div className="flex justify-between h-screen pt-20">
    <img src="#" alt="img" />
    <div className=" bg-pink-100 ps-3 pe-5 pb-3 pt-5 h-max rounded-lg text-left md:w-4/6">
      <h2 className="text-2xl font-bold">About Me</h2>
      <p className="mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt deserunt repellat in, porro qui fugiat eligendi odio esse omnis beatae nobis voluptates neque dignissimos iure deleniti rem tenetur eius voluptate! Impedit et nam cupiditate laudantium expedita? Eaque, ut quisquam, facere explicabo quia in hic corporis repellat perferendis quibusdam error ipsum?</p>
      <div className="flex gap-4 mt-5">
        <Link href={"#"}>github</Link>
        <Link href={"#"}>linkedin</Link>
        <Link href={"#"}>dpallavi854@gmail.com</Link>
        <Link href={"#"}>+91-9306098158</Link>
      </div>
    </div>
  </div>;
};

export default About;
