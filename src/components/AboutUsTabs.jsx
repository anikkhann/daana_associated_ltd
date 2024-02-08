import React, { useState } from "react";
import daana from "../assets/service.png"; // Assuming this is the correct import for the image

const AboutUsTabs = ({ color }) => {
  const [openTab, setOpenTab] = useState(1);

  return (
    <section className="w-full  md:px-15 lg:px-20 pt-24 pb-14 px-5  bg-secondary bg-opacity-[.10]">
      <div className="flex flex-wrap">
        <div className="w-full relative">
          <div className="flex justify-items-center items-center justify-center">
            <ul
              className="flex list-none pt-3 pb-4 flex-row absolute -top-9 sm:-top-12 md:-top-12 z-20"
              role="tablist"
            >
              <li className="-mb-px mr-2 sm:mr-4 md:mr-4 lg:mr-16 last:mr-0 text-center">
                <a
                  className={`text-xs sm:text-base sm:px-10 sm:py-4 md:text-base md:px-10 md:py-4 lg:text-lg font-bold px-2 lg:px-14 py-3 lg:py-5 bg-white rounded-xl block leading-normal " +
                          ${
                            openTab === 1
                              ? "text-primary border-t-4 border-primary bg-white border-l-4"
                              : "text-gray-500 bg-accent border-t-4 border-gray-500 border-l-4"
                          }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(1);
                  }}
                  data-toggle="tab"
                  href="#link1"
                  role="tablist"
                >
                  Our Mission
                </a>
              </li>
              <li className="-mb-px mr-2 sm:mr-4 md:mr-4 lg:mr-16 last:mr-0  text-center">
                <a
                  className={`text-xs sm:text-base sm:px-10 sm:py-4 md:text-base md:px-10 md:py-4 lg:text-lg font-bold px-2 lg:px-14 py-3 lg:py-5 bg-white rounded-xl block leading-normal " +
                          ${
                            openTab === 2
                              ? "text-primary border-t-4 border-primary bg-white border-l-4"
                              : "text-gray-500 bg-accent border-t-4 border-gray-500 border-l-4"
                          }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(2);
                  }}
                  data-toggle="tab"
                  href="#link2"
                  role="tablist"
                >
                  Our Objectives
                </a>
              </li>
              <li className="-mb-px mr-2 sm:mr-4 md:mr-4 lg:mr-16 last:mr-0 text-center">
                <a
                  className={`text-xs sm:text-base sm:px-10 sm:py-4 md:text-base md:px-10 md:py-4 lg:text-lg font-bold px-2 lg:px-14 py-3 lg:py-5 bg-white rounded-xl block leading-normal " +
                          ${
                            openTab === 3
                              ? "text-primary border-t-4 border-primary bg-white border-l-4"
                              : "text-gray-500 bg-accent border-t-4 border-gray-500 border-l-4"
                          }`}
                  onClick={(e) => {
                    e.preventDefault();
                    setOpenTab(3);
                  }}
                  data-toggle="tab"
                  href="#link3"
                  role="tablist"
                >
                  Our Values
                </a>
              </li>
            </ul>
          </div>

          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
            <div className="px-4 py-5 flex-auto">
              <div>
                {/* tab 1 */}
                <div
                  className={`pt-14 ${openTab === 1 ? "block" : "hidden"}`}
                  id="link1"
                >
                  <div className="w-full flex md:flex-row lg:flex-row xl:flex-row flex-col">
                    <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 w-full md:pt-0 md:pb-0 md:pl-9 md:pr-9 lg:pl-0 lg:pr-0 grid place-items-center">
                      <img
                        className="w-[300px] h-[200px] sm:w-[350px] sm:h-[350px]"
                        src={daana}
                        alt=""
                      />
                    </div>
                    <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 py-2 sm:py-12 w-full lg:px-12">
                      <p className="py-5 text-lg text-primary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Soluta nesciunt ipsum sequi animi non nostrum ad ab
                        dolores dignissimos maiores?
                      </p>

                      <p className="py-1 text-base">
                        Lorem ipsum dolor, sit amet consectetur adipisicing
                        elit. Consectetur eaque tempora adipisci inventore in
                        suscipit explicabo rem fugit quam nisi sunt
                        reprehenderit repellat, eos, esse officiis, debitis
                        voluptates possimus nam.
                      </p>
                    </div>
                  </div>
                </div>
                {/* tab2 */}
                <div
                  className={`pt-14 ${openTab === 2 ? "block" : "hidden"}`}
                  id="link2"
                >
                  <div className="w-full flex md:flex-row lg:flex-row xl:flex-row flex-col">
                    <div className="order-2 md:order-1 md:w-6/12 lg:w-6/12 xl:w-6/12 sm:py-12 py-5 w-full lg:px-12">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="">
                          <div className="text-sm sm:text-base font-normal ">
                            <h1 className="text-4xl text-primary font-bold">
                              1.
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Perspiciatis sed dignissimos error sequi
                              veniam facilis impedit iusto? Odio, pariatur
                              quidem?
                            </p>
                          </div>
                          <div className="text-sm sm:text-base font-normal ">
                            <h1 className="text-4xl text-primary font-bold">
                              3.
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Suscipit explicabo fuga dolores quas
                              excepturi laudantium a optio veritatis voluptate
                              officia!
                            </p>
                          </div>
                        </div>

                        <div className="">
                          <div className="text-sm sm:text-base font-normal ">
                            <h1 className="text-4xl text-primary font-bold">
                              2.
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Hic quaerat veritatis fugit commodi nihil
                              nam, aliquam sunt deserunt distinctio nostrum.
                            </p>
                          </div>
                          <div className="text-sm sm:text-base font-normal">
                            <h1 className="text-4xl text-primary font-bold">
                              4.
                            </h1>
                            <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit. Eveniet ex dolorem tempore saepe recusandae
                              tempora odit aperiam tenetur error ut!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 md:w-6/12 lg:w-6/12 xl:w-6/12 w-full md:pt-0 md:pb-0  lg:pl-0 lg:pr-0 grid place-items-center justify-center">
                      <img
                        className="w-[300px] h-[200px] sm:w-[350px] sm:h-[350px]"
                        src={daana}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
                {/* tab 3 */}
                <div
                  className={`pt-14 ${openTab === 3 ? "block" : "hidden"}`}
                  id="link3"
                >
                  <div className="flex justify-center items-center">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Eveniet ex dolorem tempore saepe recusandae tempora odit
                      aperiam tenetur error ut!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTabs;
