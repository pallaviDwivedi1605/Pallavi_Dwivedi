"use client"
import Link from "next/link";
import React from "react";

const Contact = () => {

  const handleSubmit = async ({e}:any) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxipujinuI_6WE0SjOEHYUA-os1AI_RDMVUHGf2Jn3SvPxQfWApQr5nzhmuwa7itfILfw/exec";

    try {
      const response = await fetch(scriptURL, {
        method: "POST",
        body: new FormData(e.target),
      });

      if (response.ok) {
        console.log("Success!", response);
      } else {
        console.error("Error!", response.statusText);
      }
    } catch (error) {
      console.error("Error!", error);
    }
  };


  return <div>
    <div className=" w-full h-screen flex bg-blue-500 items-center relative ps-20">
      <div className=" w-3/5 h-3/5 rounded-2xl absolute px-10 py-10 flex gap-4 items-start flex-col shadow-white-shadow bg-white/20 border-white/40 backdrop-blur-xl">
        <div>
        <h2 className=" text-black text-2xl font-bold tracking-wide">Lets's <span className=" text-primary">Connect!</span></h2>
        <form action="">
        <label className="custom-field two">
          <input type="text" placeholder="Name" className="bg-transparent border-b-2 placeholder:text-gray-700"/>
        </label>
        </form>
        </div>
      </div>
      </div>
  </div>;
};

export default Contact;
