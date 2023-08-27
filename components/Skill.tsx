import Image from "next/image";
import React from "react";

const Skill = () => {
  return <div className=" h-full w-full px-6 flex justify-center items-center"> 
      
      <div className=" w-52 h-52 relative rounded-full bg-red-600">
      <div className=" w-20 h-20 bg-pink-100 rounded-full absolute -top-24">I1</div>
      <div className=" w-20 h-20 bg-pink-200 rounded-full absolute -top-0  -left-24">I2</div>
      <div className=" w-20 h-20 bg-pink-300 rounded-full absolute bottom-0 -left-24">I3</div>
      <div className=" w-20 h-20 bg-pink-400 rounded-full absolute -bottom-24 left-0">I4</div>
      <div className=" w-20 h-20 bg-pink-500 rounded-full absolute -bottom-24 right-0">I5</div>
      <div className=" w-20 h-20 bg-pink-600 rounded-full absolute -bottom-0 -right-24">I6</div>
      <div className=" w-20 h-20 bg-pink-700 rounded-full absolute -top-0 -right-24">I7</div>
      <div className=" w-20 h-20 bg-pink-800 rounded-full absolute -top-24 right-0">I8</div>
      
      
      
      </div>
  </div>;
};

export default Skill
