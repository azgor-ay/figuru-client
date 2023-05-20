import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import WebsiteLayout from "./WebsiteLayout";
import Home from "./Pages/Home";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import AllToys from "./Pages/AllToys";
import MyToys from "./Pages/MyToys";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddToy from "./Pages/AddToy";
import AuthProvider from "./AuthProvider";
import ToyDetails from "./Pages/ToyDetails";
import AuthRequired from "./AuthRequired";

const router = createBrowserRouter([
  {
    path: "/",
    element: <WebsiteLayout></WebsiteLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/about",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/singleToyDetails/:id",
        element: <AuthRequired><ToyDetails></ToyDetails></AuthRequired>,
        loader : ({params}) => fetch(`http://localhost:5000/actionFigures?id=${params.id}`)
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: <AuthRequired><MyToys></MyToys></AuthRequired>,
      },
      {
        path: "/addToy",
        element: <AuthRequired><AddToy></AddToy></AuthRequired>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
