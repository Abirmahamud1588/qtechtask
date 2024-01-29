import { NavLink } from "react-router-dom";
import logo from "../Nav/Logo.png";
const Navber = () => {
  return (
    <div>
      <header className="h-25 md:h-16 py-3 md:py-0">
        <nav className="w-full h-full max-w-[1200px] mx-auto flex flex-col md:flex-row   justify-between items-center px-[20px]">
          <div>
            <img src={logo} alt="" />
          </div>
          <div className=" flex flex-col md:flex-row justify-center  items-center space-x-5 ">
            <ul className="space-x-5 ">
              <NavLink to="/">Home</NavLink>
              <NavLink to="/ss">Services</NavLink>
              <NavLink to="/">Extra Salespage</NavLink>
              <NavLink to="/">About Us</NavLink>
            </ul>
            <button className=" my-2 md:my-0  bg-teal-500 text-white p-2 rounded">
              Get Your Free Guide Now
            </button>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navber;
