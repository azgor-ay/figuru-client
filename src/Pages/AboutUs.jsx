import React from "react";
import batman from "../assets/About Page/pngwing.com.png";
import { Link } from "react-router-dom";
const AboutUs = () => {
  return (
    <div>
      {/* About Banner */}
      <div
        className="hero min-h-screen relative -top-24 rounded-3xl"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1608889825103-eb5ed706fc64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-30 rounded-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1
              data-aos="fade-down"
              data-aos-duration="2000"
              className="mb-5 text-5xl font-bold"
            >
              About Figuru
            </h1>
            <p className="mb-5" data-aos="fade-down" data-aos-duration="2000">
              At Figuru, we believe in the power of superheroes. They inspire
              us, ignite our imaginations, and remind us of the extraordinary
              potential within each of us. We are passionate about bringing
              these iconic characters to life through meticulously crafted and
              highly detailed figures.
            </p>
            <a href="#community" data-aos="fade-down" data-aos-duration="2000">
              <button className="btn btn-primary">Join Community</button>
            </a>
          </div>
        </div>
      </div>

      {/* Our Mission */}
      <div className="py-16">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <img
            src={batman}
            className="max-w-sm w-1/2 mx-auto"
            data-aos="fade-right"
            data-aos-duration="2000"
          />
          <div className="w-1/2" data-aos="fade-left" data-aos-duration="2000">
            <h1 className="text-5xl font-bold">Our Mission</h1>
            <p className="py-6 pr-48">
              Our mission is to create an immersive experience for superhero
              enthusiasts, collectors, and fans alike. We strive to provide you
              with the finest superhero figures that embody the essence and
              spirit of your beloved characters. Each figure is crafted with
              precision, attention to detail, and a deep respect for the source
              material.
            </p>
            <button className="btn btn-primary">Visit Shop</button>
          </div>
        </div>
      </div>

      {/* Quality and Craft Man Ship */}
      <div className="py-24">
        <div className="flex flex-col items-center lg:flex-row-reverse">
          <img
            data-aos="fade-left"
            data-aos-duration="2000"
            src="https://s3b.cashify.in/gpro/uploads/2022/09/15120606/Best-3D-Printers-In-India.jpg"
            alt="3d printer"
            className="w-1/2 rounded-lg"
          />
          <div
            className="text-right mx-10"
            data-aos="fade-up-right"
            data-aos-duration="4000"
          >
            <h1 className="text-5xl font-bold">Quality and Craftsmanship</h1>
            <p className="py-3">
              We understand that true fans appreciate the importance of quality.
              That's why we take pride in our commitment to craftsmanship. Our
              team of skilled artisans and designers work tirelessly to produce
              figures that meet our stringent standards. From the initial
              concept to the final product, we ensure every detail is
              meticulously executed to deliver an exceptional piece that you'll
              cherish for years to come.
            </p>
            <button className="btn btn-primary">Visit Shop</button>
          </div>
        </div>
      </div>

      {/* Community */}
      <div
        id="community"
        className="hero min-h-screen rounded-t-3xl"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1559107503-521c2b36b98d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60 rounded-t-3xl"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-3xl">
            <h1
              className="mb-5 text-5xl font-bold"
              data-aos="fade-up"
              data-aos-duration="4000"
            >
              Join the Figuru Community
            </h1>
            <p className="mb-5" data-aos="fade-up" data-aos-duration="4000">
              We invite you to join our vibrant community of superhero
              enthusiasts. Connect with fellow fans, share your collection, and
              stay updated on the latest releases, exclusive offers, and
              exciting events. Follow us on social media and sign up for our
              newsletter to be part of the Figuru family.
            </p>
            <Link to="/register">
              <button
                className="btn btn-primary"
                data-aos="fade-up"
                data-aos-duration="4000"
              >
                Create Account
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
