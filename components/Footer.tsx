import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" overflow-hidden py-10 ">
      <div className="ribbon-container">
        <h2 className="ribbon">
          <Link href={"#home"}  className="ribbon-content">© 2023 Pallavi Dwivedi.</Link>
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
