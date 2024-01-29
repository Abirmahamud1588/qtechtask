import Container from "../../../Container";
import Card from "./Section/Card";
import Herosection from "./Section/Herosection";
import Meet from "./Section/Meet";
import Newsletter from "./Section/Newsletter";
import Second from "./Section/Second";
import Sidebyside from "./Section/Sidebyside";
import Testimonial from "./Section/Testimonial";

const Home = () => {
  return (
    <>
      <div className="bg-[#FAF8F6] w-full">
        <Container>
          <Herosection></Herosection>
        </Container>
      </div>
      <Second></Second>
      <div className="bg-[#FAF8F6] w-full">
        <Container>
          <Testimonial></Testimonial>
        </Container>
      </div>
      <Container>
        <Card></Card>
      </Container>
      <Container>
        <Sidebyside></Sidebyside>
      </Container>
      <div className="">
        <Container>
          <Meet></Meet>
        </Container>
      </div>
      <div className="bg-[#FAF8F6]">
        <Container>
          <Newsletter></Newsletter>
        </Container>
      </div>
    </>
  );
};

export default Home;
