import group from "../Section/Group.jpg";

const Sidebyside = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between  my-10 md:my-10 items-center">
      <div className="w-full md:w-2/4">
        <h1 className=" text-3xl md:text-5xl font-bold text-[#333461]">
          Don’t miss out on my ‘Live life at the full potential’ free guide{" "}
        </h1>
        <h3 className="text-[#4A556C] my-5 text-[18px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua minim
          veniam.
        </h3>
        <h3 className="text-[#4A556C] my-5 text-[14px]">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo.
        </h3>
        <button className=" my-2 md:my-0  bg-teal-500 text-white p-2 rounded">
          Get Your Free Guide Now
        </button>
      </div>
      <div className="w-full  md:w-2/4  relative ">
        <div className="flex   h-[90px] w-[90px] bg-[#20AD96] roun items-center justify-center  absolute top-[-30px] right-[-10px] md:right-[60px] rounded-full ">
          <div>
            <p className=" text-white font-bold text-[12px] ">Free guide </p>
          </div>
        </div>

        <img src={group} className="mb-6  md:ml-10" alt="" />
      </div>
    </div>
  );
};

export default Sidebyside;
