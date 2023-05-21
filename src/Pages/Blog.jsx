import React from "react";
import useTitle from "../customHooks/useTitle";

const Blog = () => {
  useTitle("Q & A / Blog");
  return (
    <div>
      <div
        className="hero min-h-fit relative -top-24 rounded-3xl"
        style={{
          backgroundImage: `url("https://i.ibb.co/pXCs6tc/blog.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-20 rounded-3xl"></div>
        <div className="text-neutral-content">
          <div className="pt-[500px]"></div>
          <h1
            data-aos="fade-down"
            data-aos-duration="2000"
            className="text-7xl font-bold relative -top-80 -left-48"
          >
            Answer to the given <br /> <span className="title">questions</span>
          </h1>
        </div>
      </div>

      <div className="p-12 bg-base-300 my-12 rounded-3xl shadow-2xl">
        <h3 className="text-xl font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h3>
        <p>Answer: </p>
      </div>
      <div className="p-12 bg-base-300 my-12 rounded-3xl shadow-2xl">
        <h3 className="text-xl font-bold">Compare SQL and NoSQL databases?</h3>
        <p>Answer: </p>
      </div>
      <div className="p-12 bg-base-300 my-12 rounded-3xl shadow-2xl">
        <h3 className="text-xl font-bold">What is express JS? What is Nest JS?</h3>
        <p>Answer: </p>
      </div>
      <div className="p-12 bg-base-300 my-12 rounded-3xl shadow-2xl">
        <h3 className="text-xl font-bold">What is MongoDB aggregate and how does it work?</h3>
        <p>Answer: </p>
      </div>
    </div>
  );
};

export default Blog;
