"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoLogoLinkedin, IoMdCall, IoMdMail } from "react-icons/io";
import SocialLinks from "./utils/SocialLinks";

const Contact = () => {
  const handleSubmit = async (e: any) => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxB-B550o49tTI7dCZwGmT5P2SDT_2VJ4SLe8mBS3tZR9UmRB8PxYphHJ3ok-P9FG0P0A/exec";

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

  return (
    <div className=" w-full h-screen pt-14 flex flex-col justify-center gap-24 md:ps-20 items-center relative md:flex-row">
      {/* form box */}
      <div className="w-4/5 h-3/5 md:w-2/5 md:shadow-white-shadow rounded-2xl shadow-gray-600 shadow-lg bg-white/10 border-white/40 backdrop-blur-xl md:px-10 relative">
        <div className=" h-full flex items-center justify-center gap-8 flex-col md:absolute px-5 md:items-start">
          <h2 className=" text-black text-2xl font-bold tracking-wide">
            Let’s <span className=" text-primary">Connect !</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col space-y-8 w-full md:w-fit"
          >
            <div className="relative w-72">
              <input
                name="Name"
                type="text"
                placeholder="Name"
                required
                className=" w-full py-0.5 bg-transparent border-b border-gray-700 placeholder-gray-700 focus:outline-none focus:border-b-2 focus:border-primary invalid:border-red-800 invalid:border-b-2 focus:placeholder-transparent peer"
              />
              <label
                htmlFor="name"
                className=" absolute left-1 hidden peer-focus:block transition-all ease-in-out peer-focus:text-primary peer-focus:text-xs  peer-focus:-top-4"
              >
                Name
              </label>
            </div>

            <div className="relative w-72">
              <input
                name="Email"
                type="Email"
                placeholder="Email"
                required
                className=" w-full py-0.5 bg-transparent border-b border-gray-700 placeholder-gray-700 focus:outline-none focus:border-b-2 focus:border-primary invalid:border-red-800 invalid:border-b-2 focus:placeholder-transparent peer"
              />
              <label
                htmlFor="name"
                className=" absolute left-1 hidden peer-focus:block transition-all ease-in-out peer-focus:text-primary peer-focus:text-xs  peer-focus:-top-4"
              >
                Email
              </label>
            </div>

            <div className="relative w-72">
              <textarea
                name="Message"
                placeholder="Message"
                required
                className=" w-full py-0.5 bg-transparent border-b border-gray-700 placeholder-gray-700 focus:outline-none focus:border-b-2 focus:border-primary invalid:border-red-800 invalid:border-b-2 focus:placeholder-transparent peer"
              ></textarea>
              <label
                htmlFor="name"
                className=" absolute left-0 hidden peer-focus:block transition-all ease-in-out peer-focus:text-primary peer-focus:text-xs  peer-focus:-top-4"
              >
                Message
              </label>
            </div>
            <button
              type="submit"
              onClick={handleSubmit}
              className=" w-max text-primary bg-white px-6 py-2 rounded-lg text-lg font-medium shadow-lg shadow-rose-300 hover:shadow-lg  hover:shadow-rose-300 hover:text-white hover:bg-primary duration-300  "
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
      {/* contact links */}
      <div className=" hidden md:flex flex-col items-start justify-center gap-5 w-max right-5">
        <Link
          href={"tel:9306098158"}
          className="flex items-center text-primary rounded-full px-4 py-2 font-medium text-lg hover:shadow-lg duration-500"
        >
          <IoMdCall className=" text-[20px] h-10 w-10 rounded-full p-2 mr-2 text-white bg-primary duration-300" />
          +91-9306098158
        </Link>
        <Link
          href={"mailto:dpallavi854@gmail.com"}
          className="flex items-center text-primary rounded-full px-4 py-2 font-medium text-lg hover:shadow-lg duration-500"
        >
          <IoMdMail className=" text-[20px] h-10 w-10 rounded-full p-2 mr-2 text-white bg-primary duration-300" />
          dpallavi854@gmail.com
        </Link>
        <Link
          href={"https://www.linkedin.com/in/pallavidwivedi/"}
          className="flex items-center text-primary rounded-full px-4 py-2 font-medium text-lg hover:shadow-lg duration-500"
        >
          <IoLogoLinkedin className=" text-[20px] h-10 w-10 rounded-full p-2 mr-2 text-white bg-primary duration-300" />
          www.linkedin.com/in/pallavidwivedi/
        </Link>
      </div>
      <div className="md:hidden">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Contact;
