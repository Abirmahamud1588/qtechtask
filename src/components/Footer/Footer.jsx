import React from "react";
import Container from "../../Container";
import logo from "../Nav/logo.png";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <Container>
      <div className=" py-[70px] flex w-full md:flex-row flex-col justify-between items-start ">
        <div className="w-full md:w-1/3">
          <div>
            <img src={logo} alt="" />
          </div>
          <h1 className="text-[16px]  my-2 md:mt-10 text-[#4A556C]">
            Design amazing digital experiences that create more happy in the
            world.
          </h1>
        </div>
        <div className="w-1/3">
          <h1 className="font-bold mb-3">Pages</h1>
          <ul className="flex flex-col space-y-3 ">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/">Services</NavLink>
            <NavLink to="/">Extra Salespage</NavLink>
            <NavLink to="/">About Us</NavLink>
          </ul>
        </div>
        <div className="w-1/3">
          <h1 className="font-bold mb-3">Contact</h1>
          <ul className="flex flex-col space-y-3 ">
            <NavLink to="/">+22555</NavLink>
            <NavLink to="/">ab@gmail.com</NavLink>
            <NavLink to="/">Facebook</NavLink>
            <NavLink to="/">Instagram</NavLink>
          </ul>
        </div>
      </div>
    </Container>
  );
};

export default Footer;
