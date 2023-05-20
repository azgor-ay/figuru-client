import React, { useRef } from "react";

const HomeBanner = () => {

  return (
    <div
      className="hero min-h-screen relative -top-24 z-0 rounded-3xl"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1558507334-57300f59f0bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YWN0aW9uJTIwZmlndXJlc3xlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-5 rounded-3xl"></div>
      <div className="max-w-2xl relative -top-24 -left-24 space-y-5">
        <h1 data-aos="fade-down" className="heading">
          Welcome to <span className="heading2">Figuru</span>
        </h1>
        <p className="mb-5" data-aos="zoom-in">
          Figuru your ultimate destination for superhero action figures and
          collectibles. We are an online store dedicated to bringing you the
          most incredible and authentic superhero figures from across the
          universe. Whether you're a die-hard comic book fan, a movie
          enthusiast, or a passionate collector, Figuru is here to fuel your
          superhero obsession.
        </p>

        <a href="#actionFigures" className="btn rounded-lg" data-aos="zoom-in">
          <button>
            Get Your Toys
          </button>
        </a>
      </div>
    </div>
  );
};

export default HomeBanner;
