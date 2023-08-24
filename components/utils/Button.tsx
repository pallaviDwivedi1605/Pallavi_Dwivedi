import React from "react";
import Link from "next/link";

interface ButtonProps {
  name: string;
  href: string;
  target?: string;
}
const Button = ({ name, href, target }: ButtonProps) => {
  return (
    <div className="flex justify-start">
      <Link
        href={href}
        target={target}
        className=" transition-all cursor-pointer duration-300 p-2 ps-4 pe-4 border-2 bg-primary text-white rounded-lg shadow-lg shadow-[#ff004063] hover:shadow-none hover:font-semibold hover:bg-white hover:text-primary hover: border-primary"
      >
        {name}
      </Link>
    </div>
  );
};

export default Button;
