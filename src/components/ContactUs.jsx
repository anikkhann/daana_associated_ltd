import React from 'react'
import Header from "./Header";
import Navbar from "./Navbar";
import Footer from "./Footer";
const ContactUs = () => {
  return (
  <>
  <Header></Header>
    <Navbar></Navbar>
   
   
    <section
    className="w-full overflow-hidden bg-secondary bg-opacity-[.10]"
  >
      <div className="px-4 my-20 md:text-center md:my-20 ">
         
         <h2 className="text-secondary pb-2 text-2xl font-bold md:text-4xl">
         Contact Us
         </h2>
         <div className="flex w-32 mt-1 mb-5 overflow-hidden rounded md:mx-auto md:mb-5">
             <div className="flex-1 h-2 bg-teal-200">
             </div>
             <div className="flex-1 h-2 bg-teal-400">
             </div>
             <div className="flex-1 h-2 bg-teal-300">
             </div>
         </div>
     </div>
    
    <div  className=" flex justify-center items-center">
    <div
      className="container w-[85%] md:w-90% max-w-[1000px] mt-[5px] mb-[50px] mr-auto ml-auto flex items-center justify-center"
    >
      
      <div
        className="left relative hidden md:inset-y-5 z-10 md:w-[50%] min-h-[450px] bg-secondary bg-opacity-[10] md:flex items-center justify-center p-[30px] rounded-lg text-white"
      >
        
        <div
          className="content absolute min-h-[450px] w-full grid grid-cols-1 sm:justify-items-center text-base font-medium"
        >
          
          <div className="mb-5">
            <h4
              className="py-4 text-3xl font-medium text-white underline underline-offset-8"
            >
              Contact Information
            </h4>
            <ul className="text-gray-200 mt-10">
              <li className="pb-4">
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                <a className="hover:text-secondary-500 pl-2 text-lg">
                  Location
                </a>
              </li>
              <li className="pb-4">
                <i className="fa fa-mobile" aria-hidden="true"></i>
                <a href="" className="hover:text-secondary-500 pl-2 text-lg">
                  +880 1111111111
                </a>
              </li>
              <li className="pb-4">
                <i className="fa fa-envelope" aria-hidden="true"></i>
                <a href="" className="hover:text-secondary-500 pl-2 text-lg">
                  new@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div
        className="right w-full md:-ml-[130px] md:w-[74%] h-[600px] rounded-lg bg-grey-lighter flex flex-col bg-white px-6 py-8 shadow-md"
      >
        <div className="md:pl-[30%] md:pr-[10%] mt-7">
          <div>
            <h1 className="text-primary text-3xl font-semibold">
              Get In Touch
            </h1>
            <p className="py-4 text-base font-medium">
              Don't be shy. Give us a call or drop us a line.
            </p>
          </div>
          <form>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4 input input-bordered border-transparent focus:border-transparent focus:right-0 bg-primary bg-opacity-10 placeholder-secondary placeholder-opacity-50 text-secondary font-medium placeholder:text-md"
              name="fullname"
              placeholder="Your Name"
            />

            <input
              type="email"
              className="block border border-grey-light w-full p-3 rounded mb-4 input input-bordered border-transparent focus:border-transparent focus:right-0 bg-primary bg-opacity-10  placeholder-secondary placeholder-opacity-50 text-secondary font-medium placeholder:text-md"
              name="email"
              placeholder="Your Email"
            />

            <textarea
              type="text"
              id="message"
              rows="4"
              className="shadow-sm rounded-md p-3 outline-none w-full placeholder:text-sm input-bordered border-transparent focus:border-transparent focus:right-0 bg-primary bg-opacity-10  placeholder-secondary placeholder-opacity-50 text-secondary font-medium placeholder:text-md"
              placeholder="Type Your Message Here"
            ></textarea>

            <button
              className="px-4 py-2 font-semibold text-gray-100 bg-teal-500 rounded-md hover:bg-teal-600text-sm md:text-base  mt-8 border-primary border-solid border-2 text-center btn-primary"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
    </div>
   

  
  </section>
  <Footer></Footer>
  </>
  )
}

export default ContactUs