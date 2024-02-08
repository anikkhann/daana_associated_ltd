import React from 'react'
import service from "../assets/service.png"
import star from "../assets/star.png";
import { NavLink } from 'react-router-dom';
const OurServices = () => {
  return (
    <div className="w-full px-3 md:py-7 mb-10 py-5 bg-secondary bg-opacity-[.10]">
        <div className="px-4 mb-10 md:text-center md:mb-20 ">
            <p className="mb-2 text-lg font-semibold text-teal-500">
                Services
            </p>
            <h2 className="pb-2 text-2xl font-bold text-gray-800 md:text-4xl">
            What Services Do We Provide?
            </h2>
            <div className="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14">
                <div className="flex-1 h-2 bg-teal-200">
                </div>
                <div className="flex-1 h-2 bg-teal-400">
                </div>
                <div className="flex-1 h-2 bg-teal-300">
                </div>
            </div>
        </div>
    <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6  w-full lg:px-15 px-6 md:py-7 flex md:flex-col lg:flex-row xl:flex-row flex-col">
  
      {/* <div className="md:w-full lg:w-6/12 xl:w-6/12 w-full">
        <img
          className="h-60 sm:h-80 w-full md:h-80 lg:h-full md:w-full lg:block md:rounded-md"
          src={service}
          alt=""
        />
      </div> */}

      <div className="md:w-full w-full ">
        <h2 className="text-secondary text-xl md:text-2xl font-semibold">
          Services
        </h2>
        <div className="relative py-4 items-center text-justify">
          <span className="flex-shrink md:text-2xl text-xl font-medium">
            Lorem ipsum dolor sit amet.
          </span>
          <div className="bg-secondary h-0.5 border-t w-auto border-gray-400"></div>
        </div>

        <p className="py-2 md:text-base text-bse font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam,
          modi Aut optio beatae sunt error nostrum minima dolorum iusto quis!
        </p>

        <div className="py-3 w-full my-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:justify-items-center text-base font-medium">
          <div className="max-w-md py-4 px-8 bg-[#EEEEF1] shadow-lg rounded-lg ">
            <div className="flex md:justify-start -mt-8">
              <img className="w-12 h-12" src={star} />
            </div>
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Neque, quis!
              </h2>
              <p className="mt-2 text-gray-500 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
          </div>
          <div className="max-w-md py-4 px-8 bg-[#EEEEF1] shadow-lg rounded-lg ">
            <div className="flex md:justify-start -mt-8">
              <img className="w-12 h-12" src={star} />
            </div>
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Neque, quis!
              </h2>
              <p className="mt-2 text-gray-500 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
          </div>
          <div className="max-w-md py-4 px-8 bg-[#EEEEF1] shadow-lg rounded-lg ">
            <div className="flex md:justify-start -mt-8">
              <img className="w-12 h-12" src={star} />
            </div>
            <div>
              <h2 className="text-primary text-lg font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Neque, quis!
              </h2>
              <p className="mt-2 text-gray-500 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                dolores deserunt ea doloremque natus error, rerum quas odio
                quaerat nam ex commodi hic, suscipit in a veritatis pariatur
                minus consequuntur!
              </p>
            </div>
          </div>
       
        </div>
        {/* <a style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
  <button className="text-sm md:text-base px-5 py-1 border-primary border-solid border-2 font-semibold rounded-lg text-teal-500 text-center hover:bg-teal-500 hover:text-white">
    Learn More
  </button>
</a> */}
<NavLink to={"/service"}>
<a style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
  <button 
    className="text-sm md:text-base px-5 py-1 border-primary border-solid border-2 font-semibold rounded-lg text-teal-500 text-center transition duration-300 ease-in-out hover:bg-teal-500 hover:text-white hover:shadow-lg"
    style={{ 
      transition: "background-color 0.3s, color 0.3s",
      ":hover": {
        backgroundColor: "purple",
        color: "white",
        transition: "background-color 0.3s, color 0.3s"
      }
    }}
  >
    Learn More
  </button>
</a>
</NavLink>
      </div>
    </div>
  </div>
  )
}

export default OurServices