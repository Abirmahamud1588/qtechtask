import client1 from "../Section/client1.jpg";
import star from "../Section/stars.jpg";

const Testimonial = () => {
  return (
    <div className=" py-10 md:py-20">
      <h1 className="text-4xl md:text-[48px] text-[#333461] font-bold max-w-[500px]">
        Hear out what my clients say about me.
      </h1>
      <div className="flex flex-col justify-between md:flex-row space-y-5 md:space-y-0 md:space-x-5 my-5">
        <div className="bg-white p-10">
          <h1 className="text-[#4A556C] text-[20px]  ">
            'I gained so much confidence in my ability to connect and deepen my
            relationships with people. '
          </h1>
          <h2 className="text-[#333461] text-[20px] font-bold">Jane</h2>
          <img className="my-2" src={client1} alt="" />
          <img src={star} alt="" />
        </div>

        <div className="bg-white p-10 ">
          <h1 className="text-[#4A556C] text-[20px]  ">
            'I gained so much confidence in my ability to connect and deepen my
            relationships with people. '
          </h1>
          <h2 className="text-[#333461] text-[20px] font-bold">Jane</h2>

          <img className="my-2" src={client1} alt="" />
          <img src={star} alt="" />
        </div>

        <div className="bg-white p-10">
          <h1 className="text-[#4A556C] text-[20px]  ">
            'I gained so much confidence in my ability to connect and deepen my
            relationships with people. '
          </h1>
          <h2 className="text-[#333461] text-[20px] font-bold">Jane</h2>
          <img className="my-2" src={client1} alt="" />
          <img src={star} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
