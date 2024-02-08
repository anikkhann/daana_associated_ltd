import React from "react";
// import kingston_logo from "../assets/kingston_logo.png";
// import kingston_global_studies from "../assets/kignston_global_studies.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
// import email from "../assets/email.png";
// import linkedin from "../assets/linkedin.png";
import daana from "../assets/daana.png";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <section
      className=" md:flex-row top-0 md:flex md:justify-between md:items-center
    z-20 py-3 lg:py-5 lg:px-20 xl:px-20 px-2 hidden md:visible"
    >
      <div className="hidden md:block">
        <NavLink to={"/"} className="logo ">
          <img
            className="w-[12rem]"
            src={daana}
            alt=""
          />
        </NavLink>
      </div>

      <div className="hidden md:block">
        {/* <a href="http://" className='logo'><img className='pt-3' src={kingston_global_studies } alt="" /></a> */}
        <h1 className="lg:text-4xl xl:text-5xl md:text-3xl font-medium flex items-center text-center text-secondary uppercase">
          Daana Associates Limited
        </h1>
      </div>

      <div className="md:flex md:flex-row hidden sm: pt-3 ">
        <a
          href="https://www.facebook.com/profile.php?id=100084777859472"
          target="_blank"
        >
          <img
            src={facebook}
            className="text-xl h-9 w-9 my-3 mx-1 md:mx-1 lg:mx-2"
            alt="facebook"
          />
        </a>
        <a
          href="https://www.instagram.com/kingston_gsl/?igshid=YmMyMTA2M2Y%3D"
          target="_blank"
        >
          <img
            src={instagram}
            className="text-xl h-9 w-9 my-3 mx-1 md:mx-1 lg:mx-2"
            alt="instagram"
          />
        </a>
        {/* <NavLink to={"*"}>
          <img
            src={email}
            className="text-xl h-9 w-9 my-3 mx-1 md:mx-1 lg:mx-2"
            alt="email"
          />
        </NavLink> */}
        {/* <NavLink to={"*"}>
          <img
            src={linkedin}
            className="text-xl h-9 w-9 my-3 mx-1 md:mx-1 lg:mx-2"
            alt="linkedin"
          />
        </NavLink> */}
      </div>
    </section>
  );
};

export default Header;
