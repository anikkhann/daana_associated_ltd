// Header.js
import React, { useState, useEffect } from 'react';
// import { Transition } from '@headlessui/react';
import {

  faBars,
  faXmark,
 
} from "@fortawesome/free-solid-svg-icons";
// import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
// import email from "../assets/email.png";
// import linkedin from "../assets/linkedin.png";
// import uk_logo from "../assets/uk_logo.png";
// import usa_logo from "../assets/usa_logo.png";
// import canada_logo from "../assets/canada_logo.png";
// import aussie_logo from "../assets/aussie_logo.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
// import kingston_logo from "../assets/kingston_logo.png";
const Navbar = () => {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState(null);

  const handleActiveItem = (itemName) => {
    setActiveItem(itemName);
  };


  const [dropdown, setDropdown] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  //custom color for active link
  let activeStyle = {
    color: "#ffff",
    backgrounColor: "#EE5921",
  };
  let activeStyleTwo = {
    color: "#000",
  };
  //load all Country data

  // const {slug} = countryData;
  const navigate = useNavigate();
  //function for going to university list
  // const navigateToUniversityList = (slug) => {
  //   navigate(`/university/${slug}`);
  // };
  // const [isScrolled, setIsScrolled] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const scrollTop = window.scrollY;
  //     if (scrollTop > 50) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  return (
    // <header className={`fixed top-0 left-0 right-0 z-50 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
    //   <nav className="container mx-auto flex items-center justify-between py-4 px-6">
    //     <div>
    //       <a href="/" className="text-lg font-bold text-gray-800">Your Logo</a>
    //     </div>
    //     <div className="hidden md:block">
    //       <ul className="flex space-x-4">
    //         <li><a href="#" className="text-gray-800 hover:text-gray-600">Home</a></li>
    //         <li><a href="#" className="text-gray-800 hover:text-gray-600">About</a></li>
    //         <li><a href="#" className="text-gray-800 hover:text-gray-600">Services</a></li>
    //         <li><a href="#" className="text-gray-800 hover:text-gray-600">Contact</a></li>
    //       </ul>
    //     </div>
    //     <div className="md:hidden">
    //       <button>
    //         <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    //           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
    //         </svg>
    //       </button>
    //     </div>
    //   </nav>
    // </header>

<section >
{/* nav for medium & mobile devices */}

<div className="w-full shadow sm:block block md:block lg:hidden ">
  <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center lg:flex md:px-8">
    <div>
      <div className="flex items-center justify-between py-3 md:py-5 md:block ">
        
        <div>
          <FontAwesomeIcon
            icon={faBars}
            className="text-xl p-3 text-white mt-4 rounded-lg bg-primary"
            onClick={() => showSidebar()}
          />
          {/* <h1  className="text-xl p-3 text-white mt-4 rounded-lg bg-primary" onClick={() => showSidebar()}></h1> */}
        </div>

        <aside
          // " bg-gray-50 w-64 h-screen flex justify-center top-0 left-0 transition duration-75 absolute z-50 shadow-lg"
          className={
            sidebar
              ? "fixed h-screen  z-30 inset-y-0 left-0 w-64 transition overflow-y-auto duration-700 transform  bg-gray-50  translate-x-0 ease-out shadow-lg"
              : "flex justify-center top-0 -left-full fixed h-screen  z-30 inset-y-0 w-64 transition overflow-y-auto duration-700 transform  bg-gray-50 translate-x-0 ease-out shadow-lg"
          }
        >
          <ul className="w-full">
            <li className=" bg-gray-50 w-full h-20 flex justify-start items-center">
              <NavLink
                to="#"
                className="text-primary menu-bars ml-8 text-3xl bg-none text-black"
                onClick={() => showSidebar()}
              >
                <FontAwesomeIcon icon={faXmark} />
               
              </NavLink>
            </li>
            <div class="px-3 py-4 overflow-y-auto rounded bg-gray-50 ">
              <ul class="space-y-2">
                <li>
                  <NavLink
                    to={"/home"}
                    className="flex items-center p-2 text-base font-medium rounded-lg  ml-3"
                  >
                    {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center p-2 text-white bg-primary w-full font-medium rounded-lg"
                            : "text-base "
                        }
                      >
                        Home
                      </span>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to={"/about"}
                    className="flex items-center p-2 text-base font-medium rounded-lg  ml-3"
                  >
                    {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center p-2 text-white bg-primary w-full font-medium rounded-lg"
                            : "text-base"
                        }
                      >
                        About Us
                      </span>
                    )}
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    to="/service"
                    className="flex items-center p-2 text-base font-medium rounded-lg  ml-3"
                  >
                    {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center p-2 text-white bg-primary w-full font-medium rounded-lg"
                            : "text-base"
                        }
                      >
                        Our Services
                      </span>
                    )}
                  </NavLink>
                </li>

                <li>
                  <button
                    type="button"
                    className="active:text-blue-500 flex items-center p-2 font-medium rounded-lg w-full"
                    data-collapse-toggle="dropdown-example"
                    onClick={() => setDropdown(!dropdown)}
                  >
                    <span
                      className="flex-1  ml-3 text-left whitespace-nowrap active:text-blue-500"
                      sidebar-toggle-item
                    >
                      Industries
                    </span>
                    <svg
                      sidebar-toggle-item
                      class="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </button>

                  {dropdown ? (
                    <ul className="p-4 sm:border-solid">
                      {/* {countryData.map((countryData) => {
                        return (
                          <li className="m-3">
                            <a
                              onClick={() =>
                                navigateToUniversityList(countryData.slug)
                              }
                              className="flex lg:px-6 lg:flex lg:items-center lg:py-3 lg:hover:bg-primary transition lg:transition"
                            >
                              <img
                                src={countryData.flag_image}
                                alt="uk_logo"
                                className="w-5 h-5 object-contain"
                              />
                              <span className="ml-3 lg:ml-3 lg:text-sm lg:font-extrabold">
                                {countryData.name}
                              </span>
                            </a>
                          </li>
                        );
                      })} */}
                    </ul>
                  ) : null}
                </li>
              
                <li>
                  <NavLink
                    to={"/contact"}
                    className="flex items-center p-2 text-base font-medium rounded-lg  ml-3"
                  >
                    {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center p-2 text-white bg-primary w-full font-medium rounded-lg"
                            : "text-base"
                        }
                      >
                        Contact Us
                      </span>
                    )}
                  </NavLink>
                </li>
              </ul>
            </div>
          </ul>
        </aside>

        <div className="hidden sm:visible md:hidden">
          <NavLink to={"/home"} className="logo ">
            <img
              className="w-[96px] h-[96px] md:w-32 md:h-32 lg:w-32 lg:h-32"
              // src={kingston_logo}
              alt=""
            />
          </NavLink>
        </div>

        <div className="flex flex-row pt-3 md:hidden lg:hidden xl:hidden 2xl:hidden">
          <a
            href="https://www.facebook.com/profile.php?id=100084777859472"
            target="_blank"
          >
            <img
              src={facebook}
              className="text-xl h-30 w-30 my-3 mx-2"
              alt=""
            />
          </a>
          <a
            href="https://www.instagram.com/kingston_gsl/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
          >
            <img
              src={instagram}
              className="text-xl h-30 w-30 my-3 mx-2"
              alt=""
            />
          </a>
         
        
        </div>
      </div>
    </div>
   
  </div>
</div>

{/* nav for large devices */}

<div className="lg:px-20 relative inset-y-5 z-10">
      <nav className="bg-secondary rounded-full hidden md:hidden lg:block lg:px-5 xl:block 2xl:block">
        <ul className="list-none p-1 m-0 cursor-default flex justify-between items-center text-center">
          <li className="inline-block cursor-pointer">
            <NavLink
              to={"/"}
              onClick={() => handleActiveItem("Home")}
              className="block lg:px-4 lg:text-lg text-white lg:hover:border-b-1 hover:border-b-1 lg:hover:border-b-accent lg:rounded-xl lg:px-10 py-2 lg:font-medium lg:mx-1 lg:my-0"
            >
               {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center p-2 text-base text-white bg-primary w-full font-medium rounded-lg"
                            : "text-base "
                        }
                      >
                        Home
                      </span>
                    )}
            </NavLink>
          </li>
          {/* block lg:px-4 lg:text-lg text-white lg:hover:border-b-1 hover:border-b-1 lg:hover:border-b-accent lg:rounded-xl lg:px-10 py-2 lg:font-medium lg:mx-1 lg:my-0 */}
          <li className="inline-block cursor-pointer">
            <NavLink
              to={"/about"}
              onClick={() =>  handleActiveItem("About Us")}
              className="block lg:px-4 lg:text-lg text-white lg:hover:border-b-1 hover:border-b-1 lg:hover:border-b-accent lg:rounded-xl lg:px-10 py-2 lg:font-medium lg:mx-1 lg:my-0 "
            >
               {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center p-2 text-base text-white bg-primary w-full font-medium rounded-lg"
                            : "text-base "
                        }
                      >
                        About Us
                      </span>
                    )}
              
            </NavLink>
          </li>
          <li className="inline-block cursor-pointer">
            <NavLink
              to={"/service"}
              onClick={() =>  handleActiveItem("Our Services")}
              className="block lg:px-4 lg:text-lg text-white lg:hover:border-b-1 hover:border-b-1 lg:hover:border-b-accent lg:rounded-xl lg:px-10 py-2 lg:font-medium lg:mx-1 lg:my-0"
            >
               {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center p-2 text-base text-white bg-primary w-full font-medium rounded-lg"
                            : "text-base "
                        }
                      >
                         Our Services
                      </span>
                    )}
              
             
            </NavLink>
          </li>
          {/* <li>
                        <button
                          type="button"
                          className="active:text-blue-500 flex items-center p-2 font-medium rounded-lg w-full"
                          data-collapse-toggle="dropdown-example"
                          onClick={() => setDropdown(!dropdown)}
                        >
                          <span
                            className="flex-1  ml-3 text-left whitespace-nowrap active:text-blue-500"
                            sidebar-toggle-item
                          >
                            Universities
                          </span>
                          <svg
                            sidebar-toggle-item
                            class="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </button>

                        {dropdown ? (
                          <ul className="p-4 sm:border-solid">
                           
                            {countryData.map((countryData) => {
                              return (
                                <li className="m-3">
                                  <a
                                    onClick={() =>
                                      navigateToUniversityList(countryData.slug)
                                    }
                                    className="flex lg:px-6 lg:flex lg:items-center lg:py-3 lg:hover:bg-primary transition lg:transition"
                                  >
                                    <img
                                      src={countryData.flag_image}
                                      alt="uk_logo"
                                      className="w-5 h-5 object-contain"
                                    />
                                    <span className="ml-3 lg:ml-3 lg:text-sm lg:font-extrabold">
                                      {countryData.name}
                                    </span>
                                  </a>
                                </li>
                              );
                             })}
                          </ul>
                        ) : null}
                      </li> */}
                        <li className="inline-block cursor-pointer">
            <NavLink
              to={"/*"}
              onClick={() =>  handleActiveItem("Our Services")}
              className="block lg:px-4 lg:text-lg text-white lg:hover:border-b-1 hover:border-b-1 lg:hover:border-b-accent lg:rounded-xl lg:px-10 py-2 lg:font-medium lg:mx-1 lg:my-0"
            >
               {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center p-2 text-base text-white bg-primary w-full font-medium rounded-lg"
                            : "text-base "
                        }
                      >
                         Industries
                      </span>
                    )}
              
             
            </NavLink>
          </li>

          <li className="inline-block cursor-pointer">
            <NavLink
              to={"/contact"}
              onClick={() =>  handleActiveItem("Contact Us")}
              className="inline-block cursor-pointer lg:px-4 lg:text-lg text-white lg:hover:border-b-1 hover:border-b-1 lg:hover:border-b-accent lg:rounded-xl lg:px-10 py-2 lg:font-medium lg:mx-1 lg:my-0"
            >
               {({ isActive }) => (
                      <span
                        className={
                          isActive
                            ? "flex items-center text-base p-2 text-white bg-primary w-full font-medium rounded-lg"
                            : "text-base "
                        }
                      >
                         Contact Us
                      </span>
                    )}
              
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
</section>
  );
};

export default Navbar;
