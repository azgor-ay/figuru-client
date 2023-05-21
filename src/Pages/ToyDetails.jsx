
import React from "react";
import { useLoaderData } from "react-router-dom";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaBoxOpen } from "react-icons/fa";

const ToyDetails = () => {
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
        <img
          src={image}
          className="max-w-xs rounded-lg"
        />
        <div className="w-1/2">
          <h1 className="text-8xl font-bold">{name}</h1>
          <p className="py-6">
            {description}
          </p>
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
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
