import React, { useContext, useEffect, useState } from "react";
import { FaBoxOpen, FaEdit, FaPhone, FaSearch, FaTrash } from "react-icons/fa";
import { AuthContext } from "../AuthProvider";
import Swal from "sweetalert2";
import { useLoaderData, useNavigate } from "react-router-dom";

const AllToys = () => {
  const { loading } = useContext(AuthContext);
  const [allToys, setAllToys] = useState([]);
  const navigate = useNavigate();
  const [searchText, setSearchText] = useState("");
  const { totalToys } = useLoaderData();

  const [toyPerPage, setToyPerPage] = useState(20);
  const totalPages = Math.ceil(totalToys / toyPerPage);
  const pageNumbers = [...Array(totalPages).keys()];
  const [currentPage, setCurrentPage] = useState(0);

  const options = [20, 40, 50];

  const handleToyPerPage = (event) => {
    setToyPerPage(parseInt(event.target.value));
    setCurrentPage(0);
  };
  useEffect(() => {
    fetch(
      `http://localhost:5000/allToys?page=${currentPage}&limit=${toyPerPage}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, [currentPage, toyPerPage]);

  if (loading) {
    return "Loading";
  } else {
    return (
      <div className="overflow-x-auto w-full">
        <div className="flex items-center justify-center">
          <h1 className="title text-5xl">All the products this website has</h1>
          <div className="text-center py-6">
            <label className="text-xl relative left-24 border-r pt-2 py-3 pr-3 ">
              Search
            </label>
            <input
              type="text"
              name="search"
              className="border py-3 rounded-3xl pl-28 pr-12"
              placeholder="Only by toy name . . ."
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
            />
            <FaSearch className="inline text-gray-300 relative right-8" />
          </div>
        </div>

        <table className="table w-full">
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
            {allToys
              .filter((toy) => {
                if (searchText == "") {
                  return toy;
                } else if (
                  toy?.name?.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return toy;
                }
              })
              .map((toy) => (
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
                    <button
                      className="btn rounded-3xl"
                      onClick={() => {
                        Swal.fire({
                          title: "REDIRECT TO TOY DETAILS ?",
                          text: "Note: You have to register/login if you haven't",
                          confirmButtonText: "Yes",
                          confirmButtonColor: "black",
                          cancelButtonColor: "#858585",
                          showCancelButton: true,
                          cancelButtonText: "No",
                        }).then((result) => {
                          if (result.isConfirmed) {
                            navigate(`/singleToyDetails/${toy._id}`);
                          }
                        });
                      }}
                    >
                      Show Details
                    </button>
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

        {/* Pagination */}
        <div className="text-center p-6">
          Pages
          {pageNumbers.map((pg) => (
            <button
              className={currentPage === pg ? "active" : "normal"}
              key={pg}
              onClick={() => setCurrentPage(pg)}
            >
              {pg}
            </button>
          ))}
        </div>
      </div>
    );
  }
};

export default AllToys;
