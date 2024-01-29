import image from "../Section/image.jpg";
const Card = () => {
  return (
    <div className="py-10 md:py-20">
      <h1 className=" text-center max-w-[600px] mx-auto text-4xl md:text-5xl font-bold text-[#333461]">
        Stay Motivated, read the weekly blog articles.
      </h1>
      <div className=" my-10 flex md:flex-row flex-col md:space-x-5 md:space-y-0 space-y-5">
        <div className="border border-[#EDEFF5]">
          <img className="w-full" src={image} alt="" />
          <div className="p-5">
            <h1 className="text-[#041434] text-[24px] my-4 font-bold">
              Balancing your love and work life.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>

        <div className="border border-[#EDEFF5]">
          <img className="w-full" src={image} alt="" />
          <div className="p-5">
            <h1 className="text-[#041434] text-[24px] my-4 font-bold">
              Balancing your love and work life.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>

        <div className="border border-[#EDEFF5]">
          <img className="w-full" src={image} alt="" />
          <div className="p-5">
            <h1 className="text-[#041434] text-[24px] my-4 font-bold">
              Balancing your love and work life.
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua minim
              veniam.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center ">
        <button className=" rounded-md  text-center my-2 md:my-0  bg-teal-500 text-white p-2 rounded">
          Read More
        </button>
      </div>
    </div>
  );
};

export default Card;
