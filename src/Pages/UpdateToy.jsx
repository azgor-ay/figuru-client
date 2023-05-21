import React from "react";
import { useForm } from "react-hook-form";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";
import { Link, useLoaderData, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const UpdateToy = () => {
  const previousData = useLoaderData();
  console.log(previousData);
  const { _id, image, name, price, rating, reviews, stock } = previousData[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (newToy) => {
    console.log(newToy);
    fetch(`https://figuru.vercel.app/actionFigures/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Toy Updated",
            icon: "success",
            timer: 1000,
            showConfirmButton: false,
          });
        } else if (data.modifiedCount === 0) {
          Swal.fire({
            title: "No Updated data Found",
            icon: "error",
            timer: 1000,
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="hero min-h-screen ">
          <div className="shadow-2xl w-full rounded-3xl">
            <div className="flex items-center justify-between">
              <Link to="/myToys">
                <button className="btn ml-12">
                  {" "}
                  <FaArrowLeft className="inline mr-2" /> Back to My toys
                </button>
              </Link>
              <h1 className="text-5xl font-bold pt-12 title ">
                Update your toy details
              </h1>
              <Link to="/addToy">
                <button className="btn mr-12">
                  {" "}
                  Add new toy <FaArrowRight className="inline ml-2" />
                </button>
              </Link>
            </div>
            <div className="card-body p-12">
              <div className="grid lg:grid-cols-2 gap-x-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your Super Hero's Name"
                    defaultValue={name}
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-error">Empty Field!</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Price</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Price in Dollar"
                    defaultValue={price}
                    className="input input-bordered"
                    {...register("price", { required: true })}
                  />
                  {errors.price && (
                    <span className="text-error">Empty Field!</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Product Image URL</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={image}
                    placeholder="Choose the best picture for your product"
                    className="input input-bordered"
                    {...register("image", { required: true })}
                  />
                  {errors.image && (
                    <span className="text-error">Empty Field!</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Rate this product</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Stars under 0 to 5"
                    defaultValue={rating}
                    className="input input-bordered"
                    {...register("rating", { required: true })}
                  />
                  {errors.rating && (
                    <span className="text-error">Empty Field!</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Reviews</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Add a random number of people"
                    defaultValue={reviews}
                    className="input input-bordered"
                    {...register("reviews", { required: true })}
                  />
                  {errors.reviews && (
                    <span className="text-error">Empty Field!</span>
                  )}
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Stock</span>
                  </label>
                  <input
                    type="number"
                    placeholder="Total quantity of toy you have"
                    defaultValue={stock}
                    className="input input-bordered"
                    {...register("stock", { required: true })}
                  />
                  {errors.stock && (
                    <span className="text-error">Empty Field!</span>
                  )}
                </div>
              </div>

              <div className="form-control mt-6">
                <input
                  type="submit"
                  className="btn btn-primary"
                  value="Add to your toy list"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
