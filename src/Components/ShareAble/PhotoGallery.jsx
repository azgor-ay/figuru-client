import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original:
      "https://www.sideshow.com/cdn-cgi/image/height=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/912296/star-lord-rocket-raccoon_marvel_gallery_6450273c84d20.jpg",
    thumbnail:
      "https://www.sideshow.com/cdn-cgi/image/height=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/912296/star-lord-rocket-raccoon_marvel_gallery_6450273c84d20.jpg",
  },
  {
    original:
      "https://www.sideshow.com/wp/wp-content/uploads/2017/08/marvel-guardians-of-the-galaxy-vol-2-rocket-deluxe-version-sixth-scale-hot-toys-feature902965.jpg",
    thumbnail:
      "https://www.sideshow.com/wp/wp-content/uploads/2017/08/marvel-guardians-of-the-galaxy-vol-2-rocket-deluxe-version-sixth-scale-hot-toys-feature902965.jpg",
  },
  {
    original:
      "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
    thumbnail:
      "https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg",
  },
  
];

const PhotoGallery = () => {
  return (
    <div>
      <h1 className="title uppercase text-5xl py-5 text-center font-extrabold">
        Explore our awesome <span className="">action figures</span>
      </h1>
      <ImageGallery
        infinite
        lazyLoad={true}
        useTranslate3D
        onErrorImageURL={"Image Not Found"}
        autoPlay={true}
        thumbnailPosition={"left"}
        items={images}
      />
    </div>
  );
};

export default PhotoGallery;
