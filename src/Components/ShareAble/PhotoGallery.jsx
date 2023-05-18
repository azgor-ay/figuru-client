import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
const images = [
  {
    original: "https://www.madhouse.it/files/Madhouse_Files/Foto/63430_429677.JPG",
    thumbnail: "https://www.madhouse.it/files/Madhouse_Files/Foto/63430_429677.JPG",
  },
  {
    original: "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/3db13dcab4d740ab9b0c9cc432d84395_Large.jpg",
    thumbnail: "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/3db13dcab4d740ab9b0c9cc432d84395_Large.jpg",
  },
  {
    original: "https://images.stockx.com/images/Hot-Toys-Marvel-Avengers-Endgame-Rocket-Racoon-Collectible-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1661736556",
    thumbnail: "https://images.stockx.com/images/Hot-Toys-Marvel-Avengers-Endgame-Rocket-Racoon-Collectible-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1661736556",
  },
  {
    original: "https://www.sideshow.com/cdn-cgi/image/height=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/906762/captain-america_marvel_gallery_5f0e4947b2d65.jpg",
    thumbnail: "https://www.sideshow.com/cdn-cgi/image/height=850,quality=90,f=auto/https://www.sideshow.com/storage/product-images/906762/captain-america_marvel_gallery_5f0e4947b2d65.jpg",
  },
  {
    original: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1556204812604-F563UTLWWGDLOJ63NPL7/image-asset.jpeg",
    thumbnail: "https://images.squarespace-cdn.com/content/v1/51b3dc8ee4b051b96ceb10de/1556204812604-F563UTLWWGDLOJ63NPL7/image-asset.jpeg",
  },
  {
    original: "https://cdn.shopify.com/s/files/1/0287/6024/4268/products/Avengers-4-Endgame-Rocket-Raccoon-1-6-Scale-Action-Figure-Titan-Pop-Culture-638_1200x1200.jpg?v=1677665573",
    thumbnail: "https://cdn.shopify.com/s/files/1/0287/6024/4268/products/Avengers-4-Endgame-Rocket-Raccoon-1-6-Scale-Action-Figure-Titan-Pop-Culture-638_1200x1200.jpg?v=1677665573",
  },
  {
    original: "https://mightymega.com/wp-content/uploads/2017/02/rocket_raccoon_guardians_of_the_galaxy_vol_2_sixth_scale_action_figure_hot_toys_1.jpg",
    thumbnail: "https://mightymega.com/wp-content/uploads/2017/02/rocket_raccoon_guardians_of_the_galaxy_vol_2_sixth_scale_action_figure_hot_toys_1.jpg",
  },
  {
    original: "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/58b07d32f7e0ab82be524e5f/1557985610823/hot-toys-reveals-their-guardians-of-the-galaxy-vol-2-rocket-raccoon-action-figure-social.jpg?format=1500w",
    thumbnail: "https://static1.squarespace.com/static/51b3dc8ee4b051b96ceb10de/51ce6099e4b0d911b4489b79/58b07d32f7e0ab82be524e5f/1557985610823/hot-toys-reveals-their-guardians-of-the-galaxy-vol-2-rocket-raccoon-action-figure-social.jpg?format=1500w",
  },
  {
    original: "https://technabob.com/blog/wp-content/uploads/2017/03/rocket-1.jpg",
    thumbnail: "https://technabob.com/blog/wp-content/uploads/2017/03/rocket-1.jpg",
  },
  {
    original: "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/f33fb1d005ac40ab9a4661cdd0588f1e_Large.jpg",
    thumbnail: "https://c1-ebgames.eb-cdn.com.au/merchandising/images/packshots/f33fb1d005ac40ab9a4661cdd0588f1e_Large.jpg",
  },
  {
    original: "https://cdn1.sugotoys.com.au/images/20220613145445/pd1563437228kho-1-1.jpg?strip=all&lossy=1&ssl=1",
    thumbnail: "https://cdn1.sugotoys.com.au/images/20220613145445/pd1563437228kho-1-1.jpg?strip=all&lossy=1&ssl=1",
  },
  {
    original: "https://www.blacksbricks.de/images/product_images/original_images/rockethtdel3.jpg",
    thumbnail: "https://www.blacksbricks.de/images/product_images/original_images/rockethtdel3.jpg",
  },
  {
    original: "https://www.toyark.com/wp-content/uploads/2017/02/Hot-Toys-GotG-Vol.-2-Rocket-Raccoon-Deluxe-017-800x450.jpg",
    thumbnail: "https://www.toyark.com/wp-content/uploads/2017/02/Hot-Toys-GotG-Vol.-2-Rocket-Raccoon-Deluxe-017-800x450.jpg",
  },
  {
    original: "https://images.stockx.com/images/Hot-Toys-Marvel-Avengers-Endgame-Rocket-Racoon-Collectible-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1661736556",
    thumbnail: "https://images.stockx.com/images/Hot-Toys-Marvel-Avengers-Endgame-Rocket-Racoon-Collectible-Figure.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1661736556",
  }
];

const PhotoGallery = () => {
  return (
    <div>
    <h1 
    className="title uppercase text-5xl py-5 text-center font-extrabold">
        Explore our awesome {" "}
    <span className="">
        action figures
    </span></h1>
      <ImageGallery 
      infinite 
      lazyLoad={true}
      useTranslate3D 
      onErrorImageURL={"Image Not Found"}
      autoPlay={true} 
      thumbnailPosition={"left"}
      items={images} />
    </div>
  );
};

export default PhotoGallery;
