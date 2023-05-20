import React, { useContext } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../../public/Logo.webp";
import { AuthContext } from "../../AuthProvider";
import { Tooltip } from "react-tooltip";
const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation()

  const handleLogOut = () => {
    logOut()
      .then((result) => {
        navigate(location?.pathname);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <div className="navbar px-12 my-5 relative z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>Item 1</a>
            </li>
            <li tabIndex={0}>
              <a className="justify-between">
                Parent
                <svg
                  className="fill-current"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
                </svg>
              </a>
              <ul className="p-2">
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <a>Item 3</a>
            </li>
          </ul>
        </div>
        <Link to="/">
          <img className="w-48" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink className={({isActive})=>isActive ? "activeNav" : "default"} to={"/"}>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive ? "activeNav" : "default"} to={"/about"}>About Us</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive ? "activeNav" : "default"} to={"/blog"}>Blog</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive ? "activeNav" : "default"} to={"/allToys"}>All Toys</NavLink>
          </li>
          {user && (
            <>
              <li>
                <NavLink className={({isActive})=>isActive ? "activeNav" : "default"} to={"/myToys"}>My Toys</NavLink>
              </li>
              <li>
                <NavLink className={({isActive})=>isActive ? "activeNav" : "default"} to={"/addToy"}>Add A Toy</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div className="flex-none">
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user.photoURL ? (
                    <img
                      className=""
                      data-tooltip-id="user-name"
                      data-tooltip-content={
                        user.displayName ? user.displayName : "Anonymous User"
                      }
                      src={user?.photoURL}
                    />
                  ) : (
                    <img
                      className=""
                      data-tooltip-id="user-name"
                      data-tooltip-content={
                        user.displayName ? user.displayName : "Anonymous User"
                      }
                      src="https://i.ibb.co/HBbr8DM/User.png"
                    />
                  )}
                  <Tooltip id="user-name" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">Seller</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
