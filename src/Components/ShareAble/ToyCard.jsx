import React, { useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { FaBoxOpen } from "react-icons/fa";
import { Link } from "react-router-dom";

const ToyCard = ({ toy }) => {
  const [fullDesc, setFullDesc] = useState(false);
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
  } = toy;
  return (
    <div className="card card-side bg-base-100 rounded-3xl shadow-lg">
      <img className="w-1/2 object-cover rounded-l-3xl" src={image} alt="Toy" />
      <div className="p-5 flex flex-col">
        <h2 className="card-title text-4xl pb-2 font-bold">{name}</h2>
        <>
          {fullDesc ? (
            <p>
              {description}
              <span
                onClick={() => setFullDesc(false)}
                className="btn-link cursor-pointer"
              >
                Show Less
              </span>
            </p>
          ) : (
            <p>
              {description.split(" ").slice(0, 5).join(" ")}
              {"..."}{" "}
              <span
                onClick={() => setFullDesc(true)}
                className="btn-link cursor-pointer"
              >
                Show More
              </span>
            </p>
          )}
        </>
        <p className="text-xl pt-5">
          Seller: <span className="title font-extralight">{sellerName}</span>
        </p>
        <p className="text-xl pb-5 text-green-700">
          <FaBoxOpen className="inline" /> In Stock : {stock}
        </p>
        <h3 className="text-amber-600 text-2xl">
          Price: <span>${price}</span>
        </h3>
        <p className="flex items-center">
          <Rating
            className="mr-3"
            style={{ maxWidth: 130 }}
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

        <div className="mt-auto">
          <Link to={`/singleToyDetails/${_id}`}>
            <button className="btn bg-gradient-to-br from-amber-500 to-amber-600 w-full border-none">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
