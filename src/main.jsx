import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import WebsiteLayout from "./WebsiteLayout";
import Home from "./Pages/Home";
import ContactUs from "./Pages/ContactUs";
import AboutUs from "./Pages/AboutUs";
import Blog from "./Pages/Blog";
import AllToys from "./Pages/AllToys";
import MyToys from "./Pages/MyToys";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import AddToy from "./Pages/AddToy";
import AuthProvider from "./AuthProvider";

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
        path: "/contact",
        element: <ContactUs></ContactUs>,
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
        path: "/allToys",
        element: <AllToys></AllToys>,
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
      },
      {
        path: "/addToy",
        element: <AddToy></AddToy>,
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
