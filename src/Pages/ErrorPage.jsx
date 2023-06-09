import React from "react";
import gif from "../assets/404/carDrive.gif";
import { Link } from "react-router-dom";
const ErrorPage = () => {
  return (
    <div>
      <img className="w-full relative lg:-top-48" src={gif} alt="" />
      <div className="absolute lg:top-[150px] lg:left-[430px] text-center">
        <h1 className=" font-extrabold leading-loose">
          <span className="uppercase text-5xl">oops!</span> <br />
          <span className="text-2xl">
            FIGURU MIA: Wrong Route Detected!
          </span>
        </h1>
        <Link to='/'>
          <button className="lg:mt-96 btn rounded-3xl hover:scale-105 hover:drop-shadow-xl duration-500">
            Back to home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
