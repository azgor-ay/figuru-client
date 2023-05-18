import React from "react";
import PhotoAlbum from "react-photo-album";
// import photos from "../../assets/Photos/Untitled-1.jpg";

const PictureGallery = () => {
    const photos = [
        {
            src : 'https://marveltoynews.com/wp-content/uploads/2014/07/MMS252-Rocket-Raccoon-Hot-Toys-Guardians-of-the-Galaxy-Figure-e1405695658312.jpg',
            height: 1291,
            width: 861,
        },
        {
            src : 'https://tamashiinations.fr/19025-large_default/marvel-figure-captain-america-avengers-assemble-shfiguarts.jpg',
            height: 900,
            width: 900,
        },
        {
            src : 'https://cdn.shopify.com/s/files/1/1969/6605/products/1bc33ac6-11c8-4aa4-bd4e-40018186548a.jpg?v=1669925315',
            height: 750,
            width: 600,
        },
        {
            src : 'https://images.unsplash.com/photo-1581556522426-10c14e0243c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3xabFZYcTBtZlBwQXx8ZW58MHx8fHw%3D&w=1000&q=80',
            height: 1000,
            width: 1000,
        },
        {
            src : 'https://i.pinimg.com/originals/f5/70/a9/f570a9344405699317e7b22c889f55ac.jpg',
            height: 1365,
            width: 2048,
        },
        {
            src : 'https://images5.alphacoders.com/523/thumb-1920-523395.jpg',
            height: 1080,
            width: 1920,
        },
        {
            src : 'https://m.media-amazon.com/images/I/61AXIn0KPML._AC_UF894,1000_QL80_.jpg',
            height: 1000,
            width: 714,
        },
        {
            src : 'https://shop.hasbro.com/_next/image?url=https%3A%2F%2Fwww.hasbro.com%2Fcommon%2Fproductimages%2Fen_US%2F8E272A5DC871463B9D90D90D5623F760%2F31656178e61a552b5af0787dc2e069cb2e617af7.jpg&w=828&q=75',
            height: 828,
            width: 828,
        },
        {
            src : 'https://images.hdqwalls.com/wallpapers/superman-justice-league-toy-vm.jpg',
            height: 3750,
            width: 5250,
        },
        {
            src : 'https://cdn.shopify.com/s/files/1/0255/3842/9014/products/batman-the-batman-bandai-spirits-shfiguarts-963232_800x.jpg?v=1679345968',
            height: 800,
            width: 800,
        },
        {
            src : 'https://cdn.shopify.com/s/files/1/0442/0865/2456/products/99ac95c27c8d7da85cda5a2e883cbea758d2b3ed0f132e60389bab8539da89be_ea9733dd-751d-476c-9e25-4ac31b693822_480x480.jpg?v=1668605986',
            height: 480,
            width: 320,
        },
        {
            src : 'https://i.pinimg.com/originals/06/c7/aa/06c7aa4df6d2abcda76905031de1d037.jpg',
            height: 4032,
            width: 3024,
        },
        {
            src : 'https://rare-gallery.com/uploads/posts/122267-black-panther-action-figure-5k.jpg',
            height: 3549,
            width: 5017,
        },
        {
            src : 'https://i.ebayimg.com/images/g/WpoAAOSwz4JkWbia/s-l1600.jpg',
            height: 5250,
            width: 3750,
        },
        {
            src : 'https://i.pinimg.com/originals/aa/41/b2/aa41b207aa2333c06b23bd14955e52d7.jpg',
            height: 799,
            width: 598,
        },
        {
            src : 'https://www.superherohype.com/wp-content/uploads/sites/4/2022/06/black-adam-action-figure-featured.jpg',
            height: 360,
            width: 640,
        },
        {
            src : 'https://toyphotographers.com/wp-content/uploads/2020/01/jAntManuaryTewnnisBall-WEB-1-1024x683.jpg',
            height: 683,
            width: 1024,
        },
        {
            src : 'https://cdn.shopify.com/s/files/1/0216/0984/0740/products/peacemaker-tv-1-6-scale-peacemaker-hot-toys-910487-4895228610843_800x.jpg?v=1649448222',
            height: 1000,
            width: 692,
        },



    ]
  return (
    <div>
      <PhotoAlbum layout="columns" photos={photos} />
    </div>
  );
};

export default PictureGallery;
