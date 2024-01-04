import React from "react";
import TopStories from "./@components/top-stories";
import BreakingNews from "./@components/breaking-news";
import CountryNews from "./@components/country-news";
import Opinion from "./@components/opinion";
import Gallery from "./@components/gallery";
import VideoGallery from "./@components/video-gallery";
import Crime from "./@components/crime";

const Home = () => {
  return (
    <>
      <TopStories />
      <BreakingNews />
      <CountryNews />
      <Crime />
      <Opinion />
      <Gallery />
      <VideoGallery />
    </>
  );
};

export default Home;
