import React from "react";
import slide1 from "../../assets/Banner/Img-1.jpg";
import slide2 from "../../assets/Banner/Img-2.jpg";
import slide3 from "../../assets/Banner/Img-3.jpg";
import slide4 from "../../assets/Banner/Img-4.jpg";

const HomeBanner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={slide1} className="w-full" />
        <div className="absolute top-1/4 left-48">
          <h4 className="title text-3xl">Action Figure of</h4>
          <h2 className="text-7xl font-extrabold">Rocket Raccoon</h2>
          <p className="text-3xl py-3">Captain of guardians of the galaxy </p>
          <div className="btn btn-primary">Buy Now</div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle btn-primary">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={slide2} className="w-full" />
        <div className="absolute top-1/4 right-48 text-right">
          <h4 className="title text-3xl">Action Figure of</h4>
          <h2 className="text-6xl font-extrabold">The OG Guardian</h2>
          <p className="text-3xl py-3">Rocket Raccoon the captain.</p>
          <div className="btn btn-primary">Buy Now</div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle btn-primary">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={slide3} className="w-full" />
        <div className="absolute top-1/4 left-48">
          <h4 className="title text-3xl">Action Figure of</h4>
          <h2 className="text-8xl font-extrabold">Baby Groot</h2>
          <p className="text-3xl py-3">I am groot.</p>
          <div className="btn btn-primary">Buy Now</div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle btn-primary">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle btn-primary">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={slide4} className="w-full" />
        <div className="absolute top-1/4 left-1/3">
          <h4 className="title text-3xl">Our Awesome Deals</h4>
          <h2 className="text-8xl font-extrabold">70 - 80% Off</h2>
          <p className="text-3xl py-3">Hurry up offer closes soon...</p>
          <div className="btn btn-primary">Visit Shop Now</div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle btn-primary">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-primary">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
