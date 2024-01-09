import Image from "next/image";
import React from "react";
import { BsDot } from "react-icons/bs";
import { IoMdPlayCircle } from "react-icons/io";
import { MdKeyboardDoubleArrowRight, MdPlayArrow } from "react-icons/md";
import VideogalleryTop from "./@components/VideogalleryTop";
import Heading from "./@components/Heading";
import AdvertiseSpace2 from "../news/categories/@components/Advertisement_Space/AdvertiseSpace2";
import SelectedVideo from "./@components/SelectedVideo";
import BangladeshVideo from "./@components/BangladeshVideo";
import Entertainment from "./@components/Entertainment";
import MoreVideo from "./@components/MoreVideo";

export default function VideoGallery() {
  return (
    <>
      <div className=" container">
        <Heading />
      </div>
      <VideogalleryTop />
      <div className=" container">
        <SelectedVideo />
        <AdvertiseSpace2 />
        <BangladeshVideo />
        <Entertainment />
        <MoreVideo />
      </div>
    </>
  );
}
