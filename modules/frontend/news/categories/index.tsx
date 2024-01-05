import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiMapPin } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import HeadingWithOverlay from "./@components/HeadingWithOverlay";
import CartMedium from "./@components/CartMedium";
import HeadingWithOption from "./@components/HeadingWithOption";

const Categories = () => {
  return (
    <section>
      <div className=" container ">
        <HeadingWithOption />
        <div className=" grid grid-cols-[3fr_1fr]   mt-[26px] gap-[13px] border-b-[1px] border-gray-300 pb-[26px] ">
          <div className="grid grid-cols-[2fr_1fr] gap-[26px] self-start border-gray-200  border-r-[1px] pr-[13px]">
            <HeadingWithOverlay />
            <CartMedium />
            <div className="col-span-2 border-t-[1px] border-gray-200 pt-[26px]">
              <div className=" grid grid-cols-3 gap-[26px]">
                {new Array(3).fill(<CartMedium />)}
              </div>
            </div>
          </div>
          <div className=" felx flex-col self-start">
            <div>
              <Image
                height={75}
                width={615}
                src={"/images/home/ad.png"}
                alt="crime"
                className=" mb-[26px]"
              />
            </div>
            <div className=" bg-[#FAFCFF] p-[26px] ">
              <div className="  flex gap-[10px]">
                <FiMapPin className=" text-[#FE0000] text-[24px]" />
                <p className=" mb-[26px] text-xl">আমার এলাকার খবর</p>
              </div>
              <div className=" flex flex-col gap-[20px]">
                <Select
                  defaultValue="বিভাগ"
                  className=" w-[100%]"
                  options={[
                    {
                      label: "বিভাগ",
                      value: "বিভাগ",
                    },
                    {
                      label: "বিভাগ",
                      value: "বিভাগ",
                    },
                  ]}
                />
                <Select
                  defaultValue="জেলা"
                  className=" w-[100%]"
                  options={[
                    {
                      label: "জেলা",
                      value: "জেলা",
                    },
                    {
                      label: "জেলা",
                      value: "জেলা",
                    },
                  ]}
                />
                <Select
                  defaultValue="উপজেলা"
                  className=" w-[100%]"
                  options={[
                    {
                      label: "উপজেলা",
                      value: "উপজেলা",
                    },
                    {
                      label: "উপজেলা",
                      value: "উপজেলা",
                    },
                  ]}
                />
                <button className=" text-[13px] font-medium leading-[17px] p-2 w-full bg-[#FE0000] text-white rounded hover:bg-slate-400 transition-all">
                  খুঁজুন
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
