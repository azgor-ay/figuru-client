import React from "react";

const TrendingFigures = () => {
  return (
    <div>
      <h1
        className="text-4xl px-12 lg:text-6xl font-semibold text-center py-5"
        data-aos="zoom-out"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        Our Trending <span className="heading2">Action Figures</span>
      </h1>
      <div
        className="carousel w-full"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/nPTpxMK/Img-1.jpg" className="w-full" />
          <div className="absolute top-16 lg:top-1/4 left-20 lg:left-48">
            <h4 className="title text-xs lg:text-3xl">Action Figure of</h4>
            <h2 className="text-2xl lg:text-7xl font-extrabold">
              Rocket Raccoon
            </h2>
            <p className="text-xl py-3 w-1/2 hidden lg:block">
              Rocket Raccoon action figure is an incredible replica of the
              notorious Guardians of the Galaxy character. Standing at 6 inches
              tall, this highly detailed collectible features Rocket's signature
              tactical outfit, menacing expression, and a variety of
              interchangeable weapons. With articulated joints for dynamic
              posing, this action figure captures Rocket's fierce and cunning
              nature, making it a must-have for any Marvel fan's collection.{" "}
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="lg:btn lg:btn-circle lg:btn-primary">
              ❮
            </a>
            <a href="#slide2" className="lg:btn lg:btn-circle lg:btn-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/WGjdzKg/Img-2.jpg" className="w-full" />
          <div className="absolute top-12 lg:top-1/4 right-24 lg:right-48 text-right">
            <h4 className="title text-xs lg:text-3xl">Action Figure of</h4>
            <h2 className="text-2xl pl-48 lg:pl-0 lg:text-6xl font-extrabold">
              The OG Guardian
            </h2>
            <p className="text-xl relative pl-96 ml-64 text-right py-3 hidden lg:block">
              The OG Guardian action figure pays homage to the legendary
              founding member of the Guardians of the Galaxy. Standing at 6
              inches tall, this meticulously crafted collectible showcases the
              OG Guardian's iconic uniform, determined expression, and a range
              of interchangeable cosmic weaponry. With its poseable joints and
              intricate detailing, this action figure encapsulates the essence
              of the original Guardian, making it an essential addition to any
              Marvel enthusiast's collection.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="lg:btn lg:btn-circle lg:btn-primary">
              ❮
            </a>
            <a href="#slide3" className="lg:btn lg:btn-circle lg:btn-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/3NxJry5/Img-3.jpg" className="w-full" />
          <div className="absolute lg:top-[100px] lg:left-48 left-20 top-12">
            <h4 className="title text-xs lg:text-3xl">Action Figure of</h4>
            <h2 className="text-4xl lg:text-8xl font-extrabold pr-48 lg:pr-0 ">
              Baby Groot
            </h2>
            <p className="text-xl w-1/2 py-3 hidden lg:block">
              The Baby Groot action figure brings the adorable and lovable
              character from Guardians of the Galaxy to life. Standing at a
              charming 4 inches tall, this meticulously designed collectible
              showcases Baby Groot's endearing expression and iconic potted
              plant appearance. With its articulated limbs and gentle swaying
              motion, this action figure captures the essence of Baby Groot's
              innocence and mischievous nature. Additionally, it features a
              built-in sound module that allows it to say the iconic phrase, "I
              am Groot," delighting fans of all ages. This figure is a must-have
              for any Marvel enthusiast and a perfect companion for cosmic
              adventures.
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="lg:btn lg:btn-circle lg:btn-primary">
              ❮
            </a>
            <a href="#slide4" className="lg:btn lg:btn-circle lg:btn-primary">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src="https://i.ibb.co/8gWnz3P/Img-4.jpg" className="w-full" />
          <div className="absolute top-[50px] left-1/4">
            <h4 className="title text-xs lg:text-3xl">Our favorite</h4>
            <h2 className="text-2xl lg:text-5xl font-extrabold leading-normal">
              Deadpool's Double Trouble Display : <br /> Merc with a Quirk
            </h2>
            <p className="text-xl py-3 mr-24 hidden lg:block">
              Unleash the witty chaos of Deadpool with our captivating "Double
              Trouble Display: Merc with a Quirk"! This eye-catching showcase
              features an action-packed scene that captures Deadpool's zany
              essence. Suspended mid-air on a clear acrylic stand, Deadpool
              strikes a dynamic pose, brandishing a plethora of deadly weapons.
              Surrounding him are miniature explosions and a backdrop of
              shattered fourth walls. The display is bathed in vibrant LED
              lighting, emphasizing the red and black color scheme that defines
              Deadpool's iconic look. With intricate detailing and a range of
              interchangeable accessories, this action figure brings the Merc
              with a Mouth to life in a display that is both visually striking
              and brimming with double meanings, just like Deadpool himself.
              Whether you're a fan of the character's humor or appreciate his
              unpredictable antics, this display will be the centerpiece of any
              collection, promising to both amuse and astound onlookers. So,
              grab your chimichangas and get ready for a quirk-filled adventure
              with Deadpool's Double Trouble Display!
            </p>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="lg:btn lg:btn-circle lg:btn-primary">
              ❮
            </a>
            <a href="#slide1" className="lg:btn lg:btn-circle lg:btn-primary">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingFigures;
