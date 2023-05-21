import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaArrowLeft, FaArrowRight, FaBoxOpen } from "react-icons/fa";
import useTitle from "../customHooks/useTitle";

const ToyDetails = () => {
  useTitle('Single Toy Details')
  const singleToy = useLoaderData();
  const {
    _id,
    image,
    name,
    price,
    rating,
    reviews,
    description,
    sellerName,
    stock,
  } = singleToy[0];
  return (
    <div className="hero min-h-fit shadow-2xl my-5 rounded-xl pb-8">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={image} className="max-w-xs rounded-lg" />
        <div className="w-full px-6 lg:px-0 lg:w-1/2">
          <h1 className="text-4xl lg:text-8xl font-bold">{name}</h1>
          <p className="py-6">{description}</p>
          <p className="text-2xl pt-5">
            Seller: <span className="title font-extralight">{sellerName}</span>
          </p>
          <p className="text-2xl pb-5 text-green-700">
            <FaBoxOpen className="inline" /> In Stock : {stock}
          </p>
          <h3 className="text-amber-600 text-3xl">
            Price: <span>${price}</span>
          </h3>
          <p className="flex items-center">
            <Rating
              className="mr-3"
              style={{ maxWidth: 150 }}
              value={rating}
              readOnly
            />
            <span
              title="Amount of People who gives reviews"
              className="text-xl text-amber-600"
            >
              {`(${reviews})`}{" "}
            </span>
          </p>
          <div className="flex justify-between mt-5">
            <Link to="/">
              <button className="btn mx-2 my-1">
                {" "}
                <FaArrowLeft className="mr-3" /> Home
              </button>
            </Link>
            <Link to="/allToys">
              <button className="btn mx-2 my-1">
                All Toys <FaArrowRight className="ml-3" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
