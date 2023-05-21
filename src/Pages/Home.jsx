import React from "react";
import HomeBanner from "../Components/StandAlone/HomeBanner";
import TrendingFigures from "../Components/ShareAble/TrendingFigures";
import PictureGallery from "../Components/ShareAble/PictureGallery";
import ActionFigures from "../Components/StandAlone/ActionFigures";
import NewsLetter from "../Components/ShareAble/NewsLetter";
import useTitle from "../customHooks/useTitle";

const Home = () => {
  useTitle('Home')
  return (
    <div>
      {/* Home page Banner */}
      <HomeBanner></HomeBanner>

      {/* Action Figures with Sub Category*/}
      <ActionFigures></ActionFigures>

      {/* Photo Gallery */}
      <PictureGallery></PictureGallery>
      
      {/* <PhotoGallery></PhotoGallery> */}

      {/* Trending Action Figures */}
      <TrendingFigures></TrendingFigures>

      {/* News Letter */}
      <NewsLetter></NewsLetter>
    </div>
  );
};

export default Home;
