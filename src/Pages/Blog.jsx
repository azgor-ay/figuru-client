import React from "react";

const Blog = () => {
  return (
    <div
      className="hero min-h-fit relative -top-24 rounded-3xl"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-20 rounded-3xl"></div>
      <div className="text-neutral-content">
        <div className="pt-[500px]"></div>
        <h1
          data-aos="fade-down"
          data-aos-duration="2000"
          className="text-7xl font-bold relative -top-80 -left-48"
        >Answer to the given <br /> <span className="title">questions</span>
        </h1>
      </div>
    </div>
  );
};

export default Blog;
