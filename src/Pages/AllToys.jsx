import React, { useContext, useEffect, useState } from "react";
import { FaBoxOpen, FaEdit, FaPhone, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider";

const AllToys = () => {
  const { loading } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  console.log(allToys);

  useEffect(() => {
    fetch(`http://localhost:5000/actionFigures`)
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, []);

  // const [dataChange, setDataChange] = useState(false);
  // const handleDelete = (id) => {
  //   console.log(id);
  //   fetch(`http://localhost:5000/actionFigures/${id}`, {
  //     method: "DELETE",
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //       if (data.deletedCount > 0) {
  //         setDataChange(!dataChange);
  //       }
  //     });
  // };

  if (loading) {
    return "Loading";
  } else {
    return (
      <div className="overflow-x-auto w-full">
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy) => (
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
                    {toy.email ? toy.email : "Web Site Owner"}
                  </span>
                </td>
                <td>
                  <FaPhone className="inline mb-1 mr-3" />
                  {toy.phone ? toy.phone : "Use Live Message Instead"}
                </td>
                <td className="">
                  <FaBoxOpen className="inline mb-1 mr-3" />
                  {toy.stock}
                </td>
                <td>${toy.price}</td>
                <th className="flex justify-evenly items-center">
                  {/* <button onClick={() => {handleDelete(toy._id);}}>X</button> */}
                  <Link to={`/singleToyDetails/${toy._id}`}>
                    <button className="btn rounded-3xl">Show Details</button>
                  </Link>
                </th>
              </tr>
            ))}
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
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
};

export default AllToys;
