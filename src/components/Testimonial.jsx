import React from "react";
import Testimonial from "../css/Testimonial.css";
import review_image from "../assets/review_image.png";
import star from "../assets/star.png";
import frame_one from "../assets/frame_one.png";
import frame_two from "../assets/frame_two.png";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
// import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import { EffectFlip, Pagination, Navigation } from "swiper";

const HeroRight = () => {
  return (
    <section className="bg-[#fcfcfc] md:px-15 lg:px-20 px-5 py-10">
      <div className="w-full flex md:flex-row lg:flex-row xl:flex-row flex-col">
        <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 py-12 w-full">
          <Swiper
            effect={"flip"}
            grabCursor={true}
            pagination={false}
            navigation={true}
            modules={[EffectFlip, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>
                <p className="text-primary uppercase text-base font-medium">
                  Testimonial
                </p>
                <h2 className="text-secondary underline underline-offset-8 mt-3 text-2xl font-semibold">
                  Success Stories by Students
                </h2>
                <p className="py-5  text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor
                  sit amet consectetur adipisicing elit.Lorem ipsum dolor sit
                  amet consectetur adipisicing elit.Lorem ipsum dolor sit amet
                  consectetur adipisicing elit.
                </p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <p className="text-primary uppercase text-base font-medium">
                  Testimonial
                </p>
                <h2 className="text-secondary underline underline-offset-8 mt-3 text-2xl font-semibold">
                  Success Stories by Students
                </h2>
                <p className="py-5 text-base">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem
                  ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum
                  dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 py-12 w-full">
          {/* start */}

          <div className="container px-2 mx-auto relative">
            <div className="absolute inset-5 -inset-y-3">
              <img src={frame_one} alt="" />
            </div>

            <div className="flex flex-wrap -m-1">
              <div className="w-full md:w-1/3 xl:w-1/3 p-1 ">
                <div className="bg-primary bg-opacity-[.15] border border-coolGray-100 shadow-dashboard rounded-md">
                  <div className="flex flex-col justify-center items-center  pt-8 pb-6 ">
                    <img src={review_image} alt="" />
                    <h2 class="text-base font-medium text-primary">
                      Samita Roy
                    </h2>
                    <h3 class="mb-3 text-sm font-medium text-coolGray">
                      India
                    </h3>
                    <img src={star} alt="" />
                    <p className="px-3 py-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam, iure?
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-1/3 xl:w-1/3 p-1 ">
                <div className="bg-primary bg-opacity-[.15] border border-coolGray-100 shadow-dashboard rounded-md">
                  <div className="flex flex-col justify-center items-center  pt-8 pb-6 ">
                    <img src={review_image} alt="" />
                    <h2 class="text-base font-medium text-primary">
                      Samita Roy
                    </h2>
                    <h3 class="mb-3 text-sm font-medium text-coolGray">
                      India
                    </h3>
                    <img src={star} alt="" />
                    <p className="px-3 py-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam, iure?
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/3 xl:w-1/3 p-1 ">
                <div className="bg-primary bg-opacity-[.15] border border-coolGray-100 shadow-dashboard rounded-md">
                  <div className="flex flex-col justify-center items-center  pt-8 pb-6 ">
                    <img src={review_image} alt="" />
                    <h2 class="text-base font-medium text-primary">
                      Samita Roy
                    </h2>
                    <h3 class="mb-3 text-sm font-medium text-coolGray">
                      India
                    </h3>
                    <img src={star} alt="" />
                    <p className="px-3 py-3">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Quam, iure?
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* md:ml-[5rem] md:inset-y-[50px] lg:ml-[48rem] lg:inset-y-[295px]            pl-64 -mt-4 md:pl-[92%] md:inset-y-72  xl:pt-2*/}
            <div className="absolute frameTwo ">
              <img src={frame_two} alt="" />
            </div>
          </div>

          {/* end */}
        </div>
      </div>
    </section>
  );
};

export default HeroRight;
