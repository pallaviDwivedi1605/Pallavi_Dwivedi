import Image from "next/image";
import React from "react";

const Skill = () => {
  return <div className=" h-full w-full flex flex-col gap-10 justify-center items-center px-6">
    <h2 className="main_heading text-primary">Skills and Experience</h2>
    <div className="w-full h-[400px] rounded-lg border-primary border-4 bg-white/60 shadow-xl shelf-shadow">
      <div className=" border-b-4 w-full h-[100px] border-primary flex justify-evenly items-end">
        <Image src={"/images/java-icon.svg"} alt="react" width={50} height={50} />        
        <Image src={"/images/mysql-icon.svg"} alt="react" width={50} height={50} />        
        <Image src={"/images/nextjs-icon.svg"} alt="react" width={50} height={50} />        
      </div>
      <div className=" border-b-4 w-full h-[100px] border-primary flex justify-evenly items-end">
        <Image src={"/images/java-icon.svg"} alt="react" width={50} height={50} />        
        <Image src={"/images/mysql-icon.svg"} alt="react" width={50} height={50} />        
        <Image src={"/images/nextjs-icon.svg"} alt="react" width={50} height={50} />        
      </div>
      <div className=" border-b-4 w-full h-[100px] border-primary flex justify-evenly items-end">
        <Image src={"/images/java-icon.svg"} alt="react" width={50} height={50} />        
        <Image src={"/images/mysql-icon.svg"} alt="react" width={50} height={50} />        
        <Image src={"/images/nextjs-icon.svg"} alt="react" width={50} height={50} />        
      </div>
      <div className=" w-full h-[100px] flex justify-evenly items-end">
        <Image src={"/images/java-icon.svg"} alt="react" width={50} height={50} />        
        <Image src={"/images/mysql-icon.svg"} alt="react" width={50} height={50} />        
        <Image src={"/images/nextjs-icon.svg"} alt="react" width={50} height={50} />        
      </div>
     
    </div>

  </div>;
};

export default Skill
