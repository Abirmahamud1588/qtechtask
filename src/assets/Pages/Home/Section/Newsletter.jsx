import React from "react";

const Newsletter = () => {
  return (
    <div className="flex  flex-col md:flex-row justify-between w-full my-6 md:my-6 items-center">
      <div className=" w-full md:w-3/5">
        <h1 className=" mt-5 text-2xl md:text-3xl font-bold text-[#333461]">
          Get notified when I publish new articles
        </h1>
        <p className="text-[#4A556C] my-5 text-[18px]">
          Stay up to date with the latest news, announcements, and articles.
        </p>
      </div>
      <div className=" w-full md:w-2/5">
        <input
          type="text"
          placeholder="Enter Your Email"
          className=" w-[250px] border py-2 pl-2 mx-2 rounded-md"
        />
        <button className=" rounded-md  text-center my-2 md:my-0  bg-teal-500 text-white p-2 rounded">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
