import React from "react";
import team from "../assets/team.png";
const TeamMembers = () => {
  return (
    <section className="bg-[#fcfcfc] lg:px-20 px-5 py-10 ">
      <div className="w-full flex md:flex-row lg:flex-row xl:flex-row flex-col">
        <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 w-full">
          <img className="" src={team} alt="" />
        </div>
        <div className="md:w-6/12 lg:w-6/12 xl:w-6/12 py-20 w-full">
          <p className="text-primary uppercase text-base font-medium">
            our team
          </p>
          <h2 className="text-secondary underline underline-offset-8 mt-3 text-2xl font-semibold">
            Meet Our Team Members
          </h2>
          <p className="py-5 text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus est distinctio ullam dolore amet possimus sit ipsum
            harum. Dolorum, sunt.Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatibus est distinctio ullam dolore amet
            possimus sit ipsum harum. Dolorum, sunt.
          </p>
          <div className="flex justify-end items-end">
            <button className="text-sm md:text-lg px-5 py-1 mt-8 border-primary border-solid border-2 rounded-lg text-white text-center bg-primary">
              More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
