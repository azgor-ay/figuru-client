import React, { useEffect, useState } from "react";
import PhotoAlbum from "react-photo-album";
// import photos from "../../assets/Photos/Untitled-1.jpg";

const PictureGallery = () => {
  const [photos, setPhotos] = useState([]);
  useEffect(() => {
    fetch(`https://figuru.vercel.app/galleryPhotos`)
      .then((res) => res.json())
      .then((data) => setPhotos(data));
  }, []);
  return (
    <div
    className="py-12"
      data-aos="flip-up"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="6000"
    >
        <h1 className="heading text-center py-5">Our photo <span className="heading2">gallery</span></h1>
      <PhotoAlbum layout="columns" photos={photos} />
    </div>
  );
};

export default PictureGallery;
