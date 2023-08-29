import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoMdCall } from "react-icons/io";

const Skill = () => {
  const SkillSection = () => {
    return (
      <div className=" flex justify-center items-center pb-6">
        <div className=" w-52 h-52 relative rounded-full flex justify-center items-center bg-primary">
          <Image
            src={"/images/s5.svg"}
            alt="image"
            width={200}
            height={200}
            className="hover:scale-90"
          />
          <div className=" w-20 h-20 bg-white rounded-full absolute -top-24 left-0 flex justify-center items-center group shadow-lg hover:shadow-xl">
            <Image
              src={"/images/java-icon.svg"}
              alt="java"
              width={50}
              height={50}
              className=" group-hover:scale-125"
            />
          </div>
          <div className=" w-20 h-20 bg-white rounded-full absolute -top-0  -left-24 flex justify-center items-center group shadow-lg hover:shadow-xl">
            <Image
              src={"/images/react.svg"}
              alt="react js"
              width={50}
              height={50}
              className=" group-hover:scale-125"
            />
          </div>
          <div className=" w-20 h-20 bg-white rounded-full absolute bottom-0 -left-24 flex justify-center items-center group shadow-lg hover:shadow-xl">
            <Image
              src={"/images/nextjs-icon.svg"}
              alt="next js"
              width={50}
              height={50}
              className=" group-hover:scale-125"
            />
          </div>
          <div className=" w-20 h-20 bg-white rounded-full absolute -bottom-24 left-0 flex justify-center items-center group shadow-lg hover:shadow-xl">
            <Image
              src={"/images/mysql-icon.svg"}
              alt="mysql"
              width={50}
              height={50}
              className=" group-hover:scale-125"
            />
          </div>
          <div className=" w-20 h-20 bg-white rounded-full absolute -bottom-24 right-0 flex justify-center items-center group shadow-lg hover:shadow-xl">
            <Image
              src={"/images/nodejs-icon.svg"}
              alt="java"
              width={50}
              height={50}
              className=" group-hover:scale-125"
            />
          </div>
          <div className=" w-20 h-20 bg-white rounded-full absolute -bottom-0 -right-24 flex justify-center items-center group shadow-lg hover:shadow-xl">
            <Image
              src={"/images/expressjs-icon.svg"}
              alt="java"
              width={50}
              height={50}
              className=" group-hover:scale-125"
            />
          </div>
          <div className=" w-20 h-20 bg-white rounded-full absolute -top-0 -right-24 flex justify-center items-center group shadow-lg hover:shadow-xl">
            <Image
              src={"/images/tailwindcss.svg"}
              alt="java"
              width={50}
              height={50}
              className=" group-hover:scale-125"
            />
          </div>
          <div className=" w-20 h-20 bg-white rounded-full absolute -top-24 right-0 flex justify-center items-center group shadow-lg hover:shadow-xl">
            <Image
              src={"/images/mongodb-icon.svg"}
              alt="java"
              width={50}
              height={50}
              className=" group-hover:scale-125"
            />
          </div>
        </div>
      </div>
    );
  };

  const Experince = () => {
    return (
      <div className="flex flex-col gap-16 h-fit">
        <div className="max-w-[500px] min-w-max h-32 md:h-24 px-4 bg-white shadow-xl shadow-rose-400/50 flex gap-5 justify-center flex-col md:flex-row md:justify-between items-center rounded-xl">
          <p className="text-primary font-semibold text-xl">Feb’23 - May’23</p>
          <div className=" flex flex-col items-center justify-center">
            <h4 className=" text-2xl font-medium">React Developer Intern</h4>
            <p className=" text-base font-normal">
              Mercados Energy Market India
            </p>
          </div>
        </div>
        <div className=" px-10 py-2 gap-5 flex flex-col rounded-xl justify-center items-center">
          <h3 className="text-2xl font-semibold text-primary border-b-4 border-primary/70 rounded-md w-fit">
            Open To Work
          </h3>
          <div className="flex gap-6 md:justify-between items-center flex-col md:flex-row">
            <div className=" flex flex-col items-start">
              <p>1. React Developer</p>
              <p>2. Front-end Developer</p>
              <p>3. Full stack Developer</p>
            </div>
            <Link
              href={"mailto:dpallavi854@gmail.com"}
              className=" group flex items-center w-fit h-fit bg-white shadow-md shadow-red-200 text-primary hover:text-white md:rounded-full rounded-xl px-4 py-1 tracking-wide font-medium text-lg hover:bg-primary hover:shadow-xl duration-500"
            >
              <IoMdCall className="bg-primary text-[20px] h-8 w-8 rounded-full p-2 mr-1 text-white group-hover:text-primary group-hover:bg-white duration-300 " />
              Hire Me
            </Link>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className=" px-6 md:px-32 flex flex-col gap-32 md:gap-20 items-start">
      <h1 className="main_heading text-primary">
        Competencies <span className="text-black">&</span> Experience
      </h1>
      <div className="w-full flex flex-col-reverse gap-40 md:flex-row md:justify-between md:pe-20 ">
        <Experince />
        <SkillSection />
      </div>
    </div>
  );
};

export default Skill;
