import { useForm } from "react-hook-form";
import { FaHammer } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider";
export default function AddToy() {
  const { user, newToyAdded, setNewToyAdded } = useContext(AuthContext);
  console.log(newToyAdded);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (newToy) => {
    console.log(newToy);

    fetch(`http://localhost:5000/actionFigures`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newToy),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Toy Added",
            icon: "success",
            timer: 1000,
            showConfirmButton: false,
          });
          setNewToyAdded(!newToyAdded)
        }
      });
  };

  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/categories`)
      .then((res) => res.json())
      .then((data) => setSubCategories(data));
  }, []);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="hero min-h-screen">
        <div className="shadow-2xl w-full rounded-3xl">
          <h1 className="text-5xl font-bold text-center">
            Add New Sellable toy <FaHammer className="inline" />{" "}
          </h1>
          <div className="card-body p-12">
            <div className="grid lg:grid-cols-2 gap-x-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  defaultValue={user?.displayName}
                  className="input input-bordered"
                  {...register("sellerName", { required: true })}
                />
                {errors.sellerName && (
                  <span className="text-error">
                    Must have to put your identity
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Phone Number</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your business number"
                  defaultValue={user?.phoneNumber}
                  className="input input-bordered"
                  {...register("phone")}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email Address</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your valid email id"
                  defaultValue={user?.email}
                  className="input input-bordered"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-error">
                    Must have to put your identity
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Super Hero's Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-error">
                    You can't sell a product without it's name
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Price in Dollar"
                  className="input input-bordered"
                  {...register("price", { required: true })}
                />
                {errors.price && (
                  <span className="text-error">
                    You can't sell a product without it's fixed price
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Image URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Choose the best picture for your product"
                  className="input input-bordered"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <span className="text-error">
                    Product can't be sold without it's image
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Rate this product</span>
                </label>
                <input
                  type="number"
                  placeholder="Stars under 0 to 5"
                  className="input input-bordered"
                  {...register("rating", { required: true })}
                />
                {errors.rating && (
                  <span className="text-error">
                    It's good to the product to be sold
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Reviews</span>
                </label>
                <input
                  type="number"
                  placeholder="Add a random number of people"
                  className="input input-bordered"
                  {...register("reviews")}
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Category</span>
                </label>
                <select
                  className="input input-bordered"
                  {...register("subCategory", { required: true })}
                >
                  {subCategories.map((ctg) => (
                    <option key={ctg._id} value={ctg.category}>
                      {ctg.category}
                    </option>
                  ))}
                </select>
                {errors.subCategory && (
                  <span className="text-error">
                    You must have to Choose a category of your toy
                  </span>
                )}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Product Quantity or Stock</span>
                </label>
                <input
                  type="number"
                  placeholder="Total quantity of toy you have"
                  className="input input-bordered"
                  {...register("stock")}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Products Description</span>
              </label>
              <input
                type="text"
                placeholder="Write the best words that describe your product/action figure the best"
                className="input input-bordered"
                {...register("description")}
              />
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
  );
}
