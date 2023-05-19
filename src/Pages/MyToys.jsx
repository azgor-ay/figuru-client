import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider";
import {
  FaBan,
  FaBoxOpen,
  FaBroom,
  FaCross,
  FaDumpster,
  FaEdit,
  FaHandsWash,
  FaPhone,
  FaPlus,
  FaTrash,
  FaXing,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [dataChange, setDataChange] = useState(false);

  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/actionFigures?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [dataChange]);

  const clearAllToys = () => {
    Swal.fire({
      title: "ARE YOU SURELY WANT TO DELETE ALL THE TOYS!",
      text: "Be sure there is no undo or recycle bin",
      confirmButtonText: "Clear All",
      confirmButtonColor: "black",
      cancelButtonColor: "#858585",
      showCancelButton: true,
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/actionFigures?email=${user?.email}`, {
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
    console.log(id);
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
        console.log("ho paise");
        fetch(`http://localhost:5000/actionFigures/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              setDataChange(!dataChange);
            }
          });
      }
    });
  };
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex justify-between items-center py-4">
        <Link to="/addToy">
          <button className="btn rounded-3xl">
            {" "}
            <FaPlus className="mr-2" />
            Add more toys
          </button>
        </Link>
        <h1 className="text-5xl font-extrabold">
          All the toys you added to this website
        </h1>
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
              {myToys.map((toy) => (
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
                    <FaEdit className="text-3xl " />
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
