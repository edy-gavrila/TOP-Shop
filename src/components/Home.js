import React from "react";
import carDrawing from "../assets/img/car-drawing.png";
import CustomIcon from "./UI/CustomIcon";
import { IoArrowForwardOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div
      className=" flex flex-wrap pt-10 md:pt-[130px] md:flex-row-reverse"
      data-testid="home-component"
    >
      <div className=" w-full md:w-1/2 sm:px-10 md:px-0">
        <img src={carDrawing} alt="car" />
      </div>
      <div className="lg:pt-28 w-full md:mb-10  md:w-1/2">
        <h2 className="text-5xl md:text-4xl text-blue-600 font-bold mb-20 md:mb-14">
          Welcome to the SHOP.!
        </h2>
        <Link to="/shop" className="flex items-center mx-auto max-w-fit bg-slate-800 shadow-md shadow-slate-800 text-white px-4  py-3 hover:bg-slate-900 active:scale-95 uppercase">
          <span className="text-xl md:text-lg mr-4">Realize your dreams</span>
          <CustomIcon icon={<IoArrowForwardOutline />} size="1.5rem" />
        </Link>
      </div>
    </div>
  );
}

export default Home;
