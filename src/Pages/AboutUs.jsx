import React from "react";
import batman from "../assets/About Page/pngwing.com.png";
const AboutUs = () => {
  return (
    <div>
      {/* About Banner */}
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://www.comicbasics.com/wp-content/uploads/2020/08/The-Top-10-Greatest-Superheroes-Without-Superpowers-In-Comics-Today.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">About Figuru</h1>
            <p className="mb-5">
              At Figuru, we believe in the power of superheroes. They inspire
              us, ignite our imaginations, and remind us of the extraordinary
              potential within each of us. We are passionate about bringing
              these iconic characters to life through meticulously crafted and
              highly detailed figures.
            </p>
            <button className="btn btn-primary">Visit Shop</button>
          </div>
        </div>
      </div>

      {/* Our Mission */}

      <div className="pt-16">
        <div className="flex flex-col items-center justify-between lg:flex-row">
          <img src={batman} className="max-w-sm w-1/2 mx-auto" />
          <div className="w-1/2">
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
      <div className="py-14">
        <div className="flex flex-col items-center lg:flex-row-reverse">
          <img
            src="https://s3b.cashify.in/gpro/uploads/2022/09/15120606/Best-3D-Printers-In-India.jpg"
            alt="3d printer"
            className="w-1/2 rounded-lg"
          />
          <div className="text-right mx-10">
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
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://altrincham.todaynews.co.uk/wp-content/uploads/sites/7/elementor/thumbs/superheroessale-1-ox5jd9d3vw1tritln1t7tiy0d3t1zd8dgoczupgyeg.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">
              Join the Figuru Community
            </h1>
            <p className="mb-5">
              We invite you to join our vibrant community of superhero
              enthusiasts. Connect with fellow fans, share your collection, and
              stay updated on the latest releases, exclusive offers, and
              exciting events. Follow us on social media and sign up for our
              newsletter to be part of the Figuru family.
            </p>
            <button className="btn btn-primary">Join Community</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
