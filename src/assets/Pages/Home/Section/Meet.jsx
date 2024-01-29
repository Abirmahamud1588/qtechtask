import React from "react";
import group from "../Section/meet.jpg";

const Meet = () => {
  return (
    <div className="  rounded-xl bg-[#FAF8F6] w-full flex flex-col-reverse md:flex-row justify-between  my-12 md:my-10 items-center">
      <div className="w-full md:w-2/4 pl-5">
        <h1 className=" mt-5 text-3xl md:text-4xl font-bold text-[#333461]">
          Get 15-Minutes Complimentary online session.
        </h1>
        <h3 className="text-[#4A556C] my-5 text-[18px]">
          Limited Period Offer. Claim Now.
        </h3>

        <button className=" px-6 my-2 md:my-0  bg-teal-500 text-white p-2 rounded">
          Book Now
        </button>
      </div>
      <div className="  md:pt-10  md:w-2/4   ">
        <img src={group} className=" w-full rounded-r-2xl  md:ml-0" alt="" />
      </div>
    </div>
  );
};

export default Meet;
