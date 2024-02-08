import React, { useEffect, useState } from "react";
import axios from "axios";
// import { useForm } from "react-hook-form";
import ft_facebook from "../assets/facebook.png";
import ft_instagram from "../assets/instagram.png";
import { NavLink, useNavigate } from "react-router-dom";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCoffee,
//   faEnvelope,
//   faLocationDot,
//   faPhoneVolume,
// } from "@fortawesome/free-solid-svg-icons";
// import footer_background from '../assets/footer_background.jpg'
// import ft_facebook from "../assets/ft_facebook.png";
// import ft_instagram from "../assets/ft_instagram.png";
// import ft_mail from "../assets/ft_mail.png";
// import ft_linkedin from "../assets/ft_linkedin.png";
// import QueryForm from "./QueryForm";
import daana from "../assets/daana.png";
const Footer = () => {

  //load all Country data

  const getCountry = async () => {
   


  // const {slug} = countryData;
  // const navigate = useNavigate();
  //function for going to university list
  // const navigateToUniversityList = (slug) => {
  //   navigate(`/university/${slug}`);
  };
  return (
    <footer class="relative bg-[#f8f6f6]" id="footer">
    <div class="px-10 mt-16 bg-primary text-gray-200">
      <div
        class="max-w-7xl md:max-w-7xl lg:max-w-full xl:max-w-full 2xl:max-w-full mx-auto"
      >
        <div
          class="grid grid-cols-1 px-10 md:grid-cols-4 lg:grid-cols-5 gap-2 md:justify-items-center bg-white"
        >
          <div class="mb-5 hidden lg:block" >
            <h4
              class="pb-4 text-xl font-medium underline underline-offset-8 text-primary"
            >
              <img src={daana} alt=""  />
            </h4>
          </div>

          <div class="mb-5">
            <h4
              class="pb-4 text-xl font-medium underline underline-offset-8 text-secondary"
            >
              <a>About Us</a>
            </h4>
            <p class="text-gray-600">
              NSL Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Obcaecati quasi veniam magni nulla atque sed ducimus harum
              quisquam laudantium, repudiandae quaerat officia molestias at,
              doloribus reiciendis. Saepe facilis magni at veniam sequi
              eveniet maiores, expedita qui laudantium deserunt nihil ut?
            </p>
          </div>

          <div class="mb-5">
            <h4
              class="pb-4 text-xl font-medium underline underline-offset-8 text-secondary"
            >
              <a>Services</a>
            </h4>
            <ul class="text-gray-200">
              <li class="pb-4">
                <a href="" class="hover:text-secondary-500 text-gray-600">
                  it's a simply dummy data
                </a>
              </li>
              <li class="pb-4">
                <a href="" class="hover:text-secondary-500 text-gray-600">
                  it's a simply dummy data
                </a>
              </li>
              <li class="pb-4">
                <a href="" class="hover:text-secondary-500 text-gray-600">
                  it's a simply dummy data
                </a>
              </li>
              <li class="pb-4">
                <a href="" class="hover:text-secondary-500 text-gray-600">
                  it's a simply dummy data
                </a>
              </li>
              <li class="pb-4">
                <a href="" class="hover:text-secondary-500 text-gray-600">
                  it's a simply dummy data
                </a>
              </li>
            </ul>
          </div>

          <div class="mb-5">
            <h4
              class="pb-4 text-xl font-medium underline underline-offset-8 text-secondary"
            >
              <a>More Information</a>
            </h4>
            <ul class="text-gray-200">
              <li class="pb-4">
                <a href="" class="hover:text-secondary-500 text-gray-600">
                  it's a simply dummy data
                </a>
              </li>
              <li class="pb-4">
                <a href="" class="hover:text-secondary-500 text-gray-600">
                  it's a simply dummy data
                </a>
              </li>
              <li class="pb-4">
                <a href="" class="hover:text-secondary-500 text-gray-600">
                  it's a simply dummy data
                </a>
              </li>
              <li class="pb-4">
                <a href="" class="hover:text-secondary-500 text-gray-600">
                  it's a simply dummy data
                </a>
              </li>
              <li class="pb-4">
                <a href="" class="hover:text-secondary-500 text-gray-600">
                  it's a simply dummy data
                </a>
              </li>
            </ul>
          </div>

          <div class="mb-5">
            <ul class="text-gray-200">
              <li class="">
                <img
                  class="hover:text-secondary-500 pl-2"
                  src="./assests/navista_logo.png"
                  alt=""
                />
              </li>
              <li class="pb-4 pt-4 md:pb-0 md:pt-0">
                <p
                  href=""
                  class="hover:text-primary  text-secondary pl-2 text-xl font-semibold"
                >
                  Daana Associates Limited
                </p>
              </li>
              <li class="py-4">
                <div
                  class="flex flex-row bg-secondary rounded-md pl-2 w-[135px]"
                >
                  {/* <a href="">
                    <img
                      src="./assests/ft_facebook.png"
                      class="text-sm font-semibold h-5 w-5 my-3 mx-2"
                      alt=""
                    />
                  </a> */}
                  <a href="">
                    <img
                      src={ft_facebook}
                      class="md:text-sm h-6 w-6 my-3 mx-1 md:mx-1 lg:mx-2"
                      alt=""
                    />
                  </a>
                  <a href="">
                    <img
                      src={ft_instagram}
                      // class="text-sm font-semibold h-5 w-5 my-3 mx-2"
                      class="md:text-sm h-6 w-6 my-3 mx-1 md:mx-1 lg:mx-2"
                      alt=""
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="bg-white grid place-content-center justify-items-center"
        >
          <h2 class="text-white text-base bg-secondary font-medium p-2 px-7">
          Copyright @ {new Date().getFullYear()} Daana Associates Limited
          </h2>
        </div>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
