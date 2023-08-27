import React from "react";
import SocialLinks from "./utils/SocialLinks";

const Footer = () => {
  // return <footer className=" w-screen bg-primary/90 flex flex-col justify-center gap-4 items-center px-20 py-10 shadow-top-shadow md:flex-row md:justify-between">
  //   <p>© 2023 Pallavi Dwivedi.</p>
  //   <SocialLinks />
  // </footer>;
  return (
  <footer className="ribbon-container py-10">
    <h2 className="ribbon">
      <a className="ribbon-content">© 2023 Pallavi Dwivedi.</a>
    </h2>
  </footer>
  )
};

export default Footer;
