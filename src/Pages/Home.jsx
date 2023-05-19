import React from 'react';
import HomeBanner from '../Components/StandAlone/HomeBanner';
import PhotoGallery from '../Components/ShareAble/PhotoGallery';
import TrendingFigures from '../Components/ShareAble/TrendingFigures';
import PictureGallery from '../Components/ShareAble/PictureGallery';
import ActionFigures from '../Components/StandAlone/ActionFigures';


const Home = () => {
    return (
        <div>
            {/* Home page Banner */}
            <HomeBanner></HomeBanner>
            
            {/* Action Figures with Sub Category*/}
            <ActionFigures></ActionFigures>

            <PictureGallery></PictureGallery>

            {/* Photo Gallery */}
            <PhotoGallery></PhotoGallery>

            {/* Trending Action Figures */}
            <TrendingFigures></TrendingFigures>
        </div>
    );
};

export default Home;