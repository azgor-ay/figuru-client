import React from "react";

const NewsLetter = () => {
  return (
    <div className="text-center mt-3 bg-base-200 rounded-3xl lg:px-24 lg:my-12 lg:flex lg:justify-evenly">
      <img
        data-aos="fade-up"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="lg:h-1/2 lg:object-cover hidden lg:block"
        src="https://images.unsplash.com/photo-1558679908-541bcf1249ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
        alt=""
      />
      <div className="p-2 lg:p-12 space-y-5 lg:space-y-10">
        <h6 className="title text-red-600 pt-12 lg:pt-0">Subscribe to Our Newsletter!</h6>
        <div>
          <h1
            className=" text-2xl lg:text-4xl font-bold py-3"
            data-aos="zoom-out"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            Get Exclusive <br />{" "}
            <span className="font-extrabold italic">Action Figure Updates</span>
          </h1>
          <p className="text-sm px-12">
            Be the first to know about the latest and greatest world-class
            action figures! We'll keep you in the loop with all the exciting
            collectibles hitting the shelves.
          </p>
        </div>
        <div
          className=""
          data-aos="zoom-out"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
          <input
            type="email"
            name=""
            id=""
            placeholder="Enter your running email address"

            className=" w-10/12 lg:w-full text-black p-5 lg:pl-12 bg-white rounded-3xl shadow-2xl text-xs"
          />
          <input
            type="submit"
            value="Subscribe"
            className="bg-black text-white rounded-r-3xl p-4 lg:w-1/3 relative bottom-14 left-[120px] lg:left-[205px]"
          />
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
