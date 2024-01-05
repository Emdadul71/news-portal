import React from "react";
import { GoDotFill } from "react-icons/go";
import AdvertiseSpace1 from "../categories/@components/Advertisement_Space/AdvertiseSpace1";
import AdvertiseSpace2 from "../categories/@components/Advertisement_Space/AdvertiseSpace2";
import CartMedium from "../categories/@components/CartMedium";
import FullNewsArticelHeading from "./@components/FullNewsArticelHeading";
import FullNewsArticel from "./@components/FullNewsArticel";
import CommentShareReadmore from "./@components/CommentShareReadmore";

export default function NewsDetails() {
  return (
    <section>
      <div className=" container">
        <div className=" grid grid-cols-[1fr_295px] gap-[26px] ">
          <FullNewsArticelHeading />
          <div>
            <AdvertiseSpace1 />
          </div>
        </div>

        <FullNewsArticel />
        <FullNewsArticel />
        <div className=" flex justify-end">
          <div className="grid grid-cols-[709px_295px] gap-[26px]">
            <CommentShareReadmore />
          </div>
        </div>
        <div className=" mt-[26px] mb-[26px] border-b-[1px] border-t-[1px] border-gray-200">
          <AdvertiseSpace2 />
        </div>
        <div>
          <h1 className=" text-xl font-semibold leading-[26px] text-black">
            রাজনীতি নিয়ে আরও পড়ুন
          </h1>
          <div className=" grid grid-cols-4 gap-[26px]">
            {new Array(4).fill(<CartMedium />)}
          </div>
        </div>
      </div>
      ;
    </section>
  );
}
