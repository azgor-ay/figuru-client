import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import {
  FaBoxOpen,
  FaEdit,
  FaHandsWash,
  FaPhone,
  FaPlus,
  FaTrash,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../customHooks/useTitle";

const MyToys = () => {
  useTitle('My Toys')
  const { user } = useContext(AuthContext);
  const [dataChange, setDataChange] = useState(false);

  const [myToys, setMyToys] = useState([]);
  const [sort, setSort] = useState("High to Low");

  useEffect(() => {
    fetch(`https://figuru.vercel.app/actionFigures?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [dataChange]);

  useEffect(() => {
    if (sort === "High to Low") {
      const high = myToys.sort((a, b) => a.price - b.price);
      setMyToys(high);
    } else if (sort === "Low to High") {
      const low = myToys.sort((a, b) => b.price - a.price);
      setMyToys(low);
    }
  }, [sort]);

  const clearAllToys = () => {
    Swal.fire({
      title: "ARE YOU SURELY WANT TO DELETE ALL THE TOYS!",
      text: "Be sure there is no undo or recycle bin",
      confirmButtonText: "Clear All",
      confirmButtonColor: "black",
      cancelButtonColor: "#858585",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://figuru.vercel.app/actionFigures?email=${user?.email}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setDataChange(!dataChange);
            }
          });
      }
    });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Do you really want to Delete",
      text: "Be sure there is no undo or recycle bin",
      confirmButtonText: "Yes",
      confirmButtonColor: "black",
      cancelButtonColor: "#858585",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://figuru.vercel.app/actionFigures/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              setDataChange(!dataChange);
            }
          });
      }
    });
  };

  return (
    <div className="overflow-x-auto w-full">
      {" "}
      {/* <h1 className="text-6xl text-center py-6 font-extrabold">
        All the toys you added to this website
      </h1> */}
      <div className="flex justify-between items-center py-4">
        <Link to="/addToy">
          <button className="btn rounded-3xl">
            {" "}
            <FaPlus className="mr-2" />
            Add more toys
          </button>
        </Link>
        <div className="">
          <label className="text-xl">Sort By Price </label>
          <select
            name=""
            id=""
            onClick={(e) => {
              setSort(e.target.value);
            }}
            className="border px-5 py-2 rounded-3xl"
          >
            <option value="Low to High">Low to High</option>
            <option value="High to Low">High to Low</option>
          </select>
        </div>
        <button onClick={clearAllToys} className="btn rounded-3xl">
          Clear All Toys <FaHandsWash className="ml-2" />
        </button>
      </div>
      <table className="table w-full">
        {/* head sellerName email image name*/}
        <thead>
          <tr>
            <th></th>
            <th>Toy/Action Figure</th>
            <th>Seller</th>
            <th>phone</th>
            <th>stock</th>
            <th>price</th>
            <th>Update/Delete</th>
          </tr>
        </thead>
        <tbody>
          {myToys.length > 0 ? (
            <>
              {sort &&
                myToys.map((toy) => (
                  <tr key={toy._id}>
                    <th></th>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-squircle w-12 h-12">
                            <img
                              src={toy.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{toy.name}</div>
                          <div className="text-sm opacity-50">
                            {toy.subCategory}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      {toy.sellerName}
                      <br />
                      <span className="badge badge-ghost badge-sm">
                        {toy.email}
                      </span>
                    </td>
                    <td className="flex items-center justify-start">
                      <FaPhone className="mr-3 text-xs" /> {toy.phone}
                    </td>
                    <td className="">
                      <FaBoxOpen className="inline mb-1 mr-3" />
                      {toy.stock}
                    </td>
                    <td>${toy.price}</td>
                    <th className="flex justify-evenly items-center">
                      <Link to={`/updateToy/${toy._id}`}>
                        <FaEdit className="text-3xl cursor-pointer" />
                      </Link>
                      <FaTrash
                        onClick={() => handleDelete(toy._id)}
                        className="text-5xl hover:bg-gray-200 cursor-pointer duration-200 rounded-full px-2 py-3"
                      />
                    </th>
                  </tr>
                ))}
            </>
          ) : (
            <tr>
              <td colSpan={6} className="mx-auto text-center">
                <h1 className="text-3xl py-6 text-center font-bold">
                  Looks Like you haven't add any toy yet!
                </h1>
                <Link to="/addToy">
                  <button className="btn rounded-3xl">
                    <FaPlus />
                    Add A Toy
                  </button>
                </Link>
              </td>
            </tr>
          )}
        </tbody>

        {/* foot */}
        <tfoot>
          <tr>
            <th></th>
            <th>Toy/Action Figure</th>
            <th>Seller</th>
            <th>Phone</th>
            <th>stock</th>
            <th>price</th>
            <th>Update/Delete</th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default MyToys;
