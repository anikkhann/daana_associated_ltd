import React from "react";
import Footer from "./Footer";
// import about_us_bannerImg from "../assets/about_us_bannerImg .jpg";
import AboutUsTabs from "./AboutUsTabs";
import Header from "./Header";
import Navbar from "./Navbar";
const AboutUsDetail = (props) => {
  return (
    <section className="w-full overflow-hidden ">
      <Header></Header>
      {/* <NavbarTwo></NavbarTwo> */}
      <Navbar></Navbar>

      {/* <div className="w-full mx-auto">
        <div className="max-h-[500px] relative">
         
          <div className="absolute w-full h-full text-white max-h-[500px] bg-secondary/30 flex flex-row sm:flex-col justify-center md:px-28 px-5 py-14">
            <div className="md:w-[60%] w-full ">
              <p className="md:text-2xl lg:text-2xl w-full text-base font-medium text-white">
                Kingston Global Studies Ltd. is an education counseling and
                placement company headquartered in Dhaka, Bangladesh with
                liaison offices in Australia, Canada and the UK.
              </p>
            </div>
          </div>

          <img
            className="w-full max-h-[500px]"
            // src={about_us_bannerImg}
            alt=""
          />
        </div>
      </div> */}

      <div className="py-10 px-5 md:px-32 bg-secondary bg-opacity-[.10]">
    
        <div className="px-4 my-5 md:text-center md:my-5 ">
         
            <h2 className="text-secondary pb-2 text-2xl font-bold md:text-4xl">
            About Us
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

        <div>
          <p className="font-base font-medium pt-10">
            The company was established with a mission to make world-class
            higher education accessible to our students and thus contribute to
            the progress and development of our nation. The pursuit of higher
            education in foreign countries can be complex, intimidating and full
            of pitfalls. Online information overload may create confusion and
            make it difficult to make the right decision. We made it our
            responsibility to assess your eligibility and aptitude, and find the
            most rewarding opportunity for you. We strive to help those who have
            genuine aspiration and honest intention, who seek high quality
            education, great academic experience, unparalleled education support
            services, globally recognized degrees and career prospects after
            studying in their chosen country of destination.
          </p>

          <p className="font-base font-medium pt-5">
            We work to protect the interests of both the students and our
            partners in education. In addition to the professional code of
            conducts, we observe ethical, moral and personal values to maintain
            high standards in our work.
          </p>

          <p className="font-base font-medium pt-5">
            With our extensive and trustworthy network of partners and offices
            we can help you with course options that best suit you and we will
            be a part of your entire education journey. Wherever you want to go,
            we will help you to get there, and will be there to assist you when
            things go wrong.
          </p>
        </div>
      </div>

      <AboutUsTabs></AboutUsTabs>
      <Footer></Footer>
    </section>
  );
};

export default AboutUsDetail;
