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

      <div
        className="p-12 bg-base-300 my-12 rounded-3xl shadow-2xl"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h3 className="text-xl font-bold">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </h3>
        <p>
          <span className="underline font-bold">Answer:</span> Access token and
          refresh token are things that allows a server to authenticate user
          only data and not send the data to any other user. And they can be
          stored on local host and http only cookies. <br />
          <br /> Access token is basically has low lifespan and refresh tokens
          usually have much lifespan.
        </p>
      </div>
      <div
        className="p-12 bg-base-300 my-12 rounded-3xl shadow-2xl"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h3 className="text-xl font-bold">Compare SQL and NoSQL databases?</h3>
        <p>
          <span className="underline font-bold">Answer:</span> SQL database is
          stand for Structured Query Language means it follows a proper
          structured way to manage data it is more scalable and more relation
          table based SQL data base are more sensitive to store and use data
          also. <br />
          <br />
          On the other hand NoSQL database are not so relational based the are
          object based data base and used for light weight database and it
          basically used where strong data analyzing or algorithm works are not
          needed but it can works with more apis and more scalable on real time
          use.
        </p>
      </div>
      <div
        className="p-12 bg-base-300 my-12 rounded-3xl shadow-2xl"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h3 className="text-xl font-bold">
          What is express JS? What is Nest JS?
        </h3>
        <p>
          <span className="underline font-bold">Answer:</span> Express js is a
          web application framework for Node js that works are to simplified
          server side works and thats made it so popular for wep application
          works like handling http requests and building apis. <br />
          <br /> On the other hand next js is a typescript based scalable server
          focused framework. It is heavily inspired by angular. It follows
          module's, dependencies and etc to make the server more scalable upon
          express js.
        </p>
      </div>
      <div
        className="p-12 bg-base-300 my-12 rounded-3xl shadow-2xl"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <h3 className="text-xl font-bold">
          What is MongoDB aggregate and how does it work?
        </h3>
        <p>
          <span className="underline font-bold">Answer:</span> It is a thing
          that used to do calculation on mongoDB database hosted data and it
          helps to do data analyzing and reporting by take array stages as input
          and play specific operation on each data. Maybe there is a lot more
          details left but its the basic overview.{" "}
        </p>
      </div>
    </div>
  );
};

export default Blog;
