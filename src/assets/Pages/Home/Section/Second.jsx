import vector2 from "../Section/Vector2.png";
import frame from "../Section/Frame.png";
import internet from "../Section/internet.png";
import human from "../Section/human.png";

const Second = () => {
  return (
    <>
      <div className=" w-full h-full max-w-[1200px]  mx-auto flex  flex-col md:flex-row justify-between my-8 md:my-[100px] px-10 items-center">
        <div className="md:w-2/4">
          <img src={vector2} className="mb-5" alt="" />
          <h1 className="text-[#333461] text-4xl md:text-[48px] font-bold">
            I can help you in these particular areas.
          </h1>
        </div>
        <div className="md:w-2/4">
          <p className="text-[#4A556C] text-[17px] my-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
          <p className="text-[#4A556C] text-[17px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo.
          </p>
        </div>
      </div>
      <div className=" w-full h-full max-w-[1200px]  mx-auto flex  flex-col md:flex-row justify-between md:my-[100px] px-10 items-center gap-5 mb-10">
        <div>
          <img src={frame} alt="" />
          <h1 className="text-[#041434] text-[24px] my-4 font-bold">
            1:1 Coaching
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>

        <div>
          <img src={internet} alt="" />
          <h1 className="text-[#041434] text-[24px] my-4 font-bold">
            Consultation
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>

        <div>
          <img src={human} alt="" />
          <h1 className="text-[#041434] text-[24px] my-4 font-bold">
            Group Coaching Sessions
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua minim
            veniam.
          </p>
        </div>
      </div>
    </>
  );
};

export default Second;
