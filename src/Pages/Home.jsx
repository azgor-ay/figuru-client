import React from 'react';
import HomeBanner from '../Components/StandAlone/HomeBanner';
import PhotoGallery from '../Components/ShareAble/PhotoGallery';
import TrendingFigures from '../Components/ShareAble/TrendingFigures';
import PictureGallery from '../Components/ShareAble/PictureGallery';
import ActionFigures from '../Components/StandAlone/Gallery';
import Gallery from '../Components/StandAlone/Gallery';


const Home = () => {
    return (
        <div>
            {/* Home page Banner */}
            <HomeBanner></HomeBanner>

            <Gallery></Gallery>

            <PictureGallery></PictureGallery>

            {/* Photo Gallery */}
            <PhotoGallery></PhotoGallery>

            {/* Trending Action Figures */}
            <TrendingFigures></TrendingFigures>
        </div>
    );
};

export default Home;