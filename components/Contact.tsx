"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoLinkedin, IoMdCall, IoMdMail } from "react-icons/io";

const Contact = () => {
  const handleSubmit = async ({ e }: any) => {
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

  const TextField = ({ type, label }: any) => {
    return (
      <div className="relative w-72">
        <input
          type={type}
          placeholder={label}
          className=" w-full py-0.5 bg-transparent border-b border-gray-700 placeholder-gray-700 focus:outline-none focus:border-b-2 focus:border-primary invalid:border-red-600 required:border-red-600 focus:placeholder-transparent peer"
        />
        <label
          htmlFor="name"
          className=" absolute left-1 hidden peer-focus:block transition-all ease-in-out peer-focus:text-primary peer-focus:text-xs  peer-focus:-top-4"
        >
          {label}
        </label>
      </div>
    );
  };

  const MessageBox = () => {
    return (
      <div className="relative w-72">
        <textarea
          name="message"
          cols={24}
          rows={1}
          placeholder={"Message"}
          className=" w-full py-0.5 bg-transparent border-b border-gray-700 placeholder-gray-700 focus:outline-none focus:border-b-2 focus:border-primary invalid:border-red-700 required:border-red-700 focus:placeholder-transparent peer"
        ></textarea>
        <label
          htmlFor="name"
          className=" absolute left-0 hidden peer-focus:block transition-all ease-in-out peer-focus:text-primary peer-focus:text-xs  peer-focus:-top-4"
        >
          Message
        </label>
      </div>
    );
  };

  return (
    <div className=" w-full h-screen flex  justify-center gap-24 md:ps-20 items-center relative">
      <div className="w-4/5 h-3/5 md:w-2/5 md:shadow-white-shadow rounded-2xl shadow-gray-600 shadow-lg bg-white/10 border-white/40 backdrop-blur-xl md:px-10 relative">
        <div className=" h-full flex items-center justify-center gap-8 flex-col md:absolute md:left-10 md:items-start">
          <h2 className=" text-black text-2xl font-bold tracking-wide">
            Let’s <span className=" text-primary">Connect !</span>
          </h2>
          <form
            action=""
            className=" pt-6 flex flex-col gap-10 overflow-hidden"
          >
            <TextField type="text" label="Name" />
            <TextField type="email" label="Email" />
            <MessageBox />
            <button
              type="submit"
              className=" w-max border border-primary text-primary bg-white px-6 py-2 rounded-lg text-lg font-medium shadow-md shadow-rose-500 hover:shadow-lg hover:text-white hover:bg-primary hover:border-white hover:shadow-rose-500 "
            >
              Send
            </button>
          </form>
        </div>
        <Image
          className=" z-10 absolute bottom-0 right-0"
          src={"/images/panda.svg"}
          alt="panda"
          width={200}
          height={200}
        />
      </div>
      <div className="hidden md:flex flex-col items-start justify-center gap-5 w-max right-5">
        <Link
          href={"#"}
          className="flex items-center text-primary rounded-full px-4 py-2 font-medium text-lg hover:shadow-lg duration-500"
        >
          <IoMdCall className=" text-[20px] h-10 w-10 rounded-full p-2 mr-2 text-white bg-primary duration-300" />
          +91-9306098158
        </Link>
        <Link
          href={"#"}
          className="flex items-center text-primary rounded-full px-4 py-2 font-medium text-lg hover:shadow-lg duration-500"
        >
          <IoMdMail className=" text-[20px] h-10 w-10 rounded-full p-2 mr-2 text-white bg-primary duration-300" />
          dpallavi854@gmail.com
        </Link>
        <Link
          href={"#"}
          className="flex items-center text-primary rounded-full px-4 py-2 font-medium text-lg hover:shadow-lg duration-500"
        >
          <IoLogoLinkedin className=" text-[20px] h-10 w-10 rounded-full p-2 mr-2 text-white bg-primary duration-300" />
          www.linkedin.com/in/pallavidwivedi/
        </Link>
      </div>
    </div>
  );
};

export default Contact;
