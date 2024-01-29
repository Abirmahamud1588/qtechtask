import img1 from "../Section/g1.jpg";
import icon1 from "../Section/icon1.png";
import vector from "../Section/Vector.png";
const Herosection = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between  my-10 md:my-20 items-center">
      <div className="w-full md:w-2/5">
        <img
          className="md:ml-[-50px] md:mt-[-100px] md:mb-10"
          src={vector}
          alt=""
        />
        <h2 className=" text-[#4A556C] my-2">
          Proven strategies backed by science for success.
        </h2>

        <h1 className=" text-4xl md:text-6xl font-bold text-[#333461]">
          Live life at the full potential
        </h1>
        <h3 className="text-[#4A556C] my-5 text-[18px]">
          I help people to discover their true potential and live a fulfilling
          life... Discover the simple 3 steps that I discovered to hack
          productivity. It just works and it is begin using backed by science.
          Wanna transform your life?
        </h3>
        <button className=" my-2 md:my-0  bg-teal-500 text-white p-2 rounded">
          Get Your Free Guide Now
        </button>
      </div>
      <div className="w-full  md:w-2/4  relative ">
        <div className="flex bg-white w-[220px] p-5 absolute top-[-30px] left-[-15px]  md:left-[-30px]">
          <div>
            <img src={icon1} alt="" />
          </div>
          <div>
            <h1 className="text-[#333461]  font-extrabold text-2xl">100%</h1>
            <p className="text-[#4A556C] text-[12px] ">
              Success rate this year
            </p>
          </div>
        </div>
        <img src={img1} className="mb-6 md:mb-[-120px] md:ml-10" alt="" />
      </div>
    </div>
  );
};

export default Herosection;
