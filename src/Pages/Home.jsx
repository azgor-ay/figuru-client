import React from 'react';
import HomeBanner from '../Components/StandAlone/HomeBanner';
import PhotoGallery from '../Components/ShareAble/PhotoGallery';
import TrendingFigures from '../Components/ShareAble/TrendingFigures';

const Home = () => {
    return (
        <div>
            {/* Home page Banner */}
            <HomeBanner></HomeBanner>

            {/* Photo Gallery */}
            <PhotoGallery></PhotoGallery>

            {/* Trending Action Figures */}
            <TrendingFigures></TrendingFigures>
        </div>
    );
};

export default Home;