"use client";
import { excerpt } from "@/helpers/utils";
import Image from "next/image";
import { BsTwitterX } from "react-icons/bs";
import { FaEllipsisVertical } from "react-icons/fa6";
import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaRegEnvelope, FaWhatsapp } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMapPin, HiOutlinePrinter } from "react-icons/hi2";
import TextExpander from "../../@common/text-expander";
import { RiFacebookBoxLine } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io";
import { GoDot } from "react-icons/go";

const footerText = `IMMLINK is one of the revolutionary projects that Canadapine Inc. is working on. We, Canadapine Inc., are a 100% CANADIAN company, incorporated federally and provincially under Canada Business Corporations Act, bearing the corporation number 1560868-6 and Extra Provincial Corporation in Alberta number is 2125716064. We call this revolutionary as this project does NOT exist anywhere and is built from scratch.  `;

const Footer = () => {
  // const init = 150;
  // const [count, setCount] = useState(init);
  // const about = excerpt(footerText, count);
  // const handleMore = () => {
  //   setCount(10000);
  // };

  return (
    <section>
      <div className="container border-gray-300 border-t pt-[40px]  ">
        <div className=" mb-[50px]">
          <Link href="/">
            <Image
              src="/images/misc/logo.png"
              width={200}
              height={40}
              alt="logo"
            />
          </Link>
        </div>
        <div className=" flex flex-col gap-[30px] border-b border-gray-300 pb-[40px] ">
          <div className=" w-full  flex justify-between text-[14px] text-[#9A9EA6]">
            <Link href="/">
              <p className="mb-0">About us</p>
            </Link>
            <Link href="/">
              <p className="mb-0">Blog</p>
            </Link>
            <Link href="/">
              <p className="mb-0">Careers</p>
            </Link>
            <Link href="/">
              <p className="mb-0"> Jobs</p>
            </Link>
            <Link href="/">
              <p className="mb-0">In Press</p>
            </Link>
            <Link href="/">
              <p className="mb-0"> Gallery</p>
            </Link>
          </div>
          <div className=" w-full  flex justify-between text-[14px] text-[#9A9EA6]">
            <Link href="/">
              <p className="mb-0">About us</p>
            </Link>
            <Link href="/">
              <p className="mb-0">Blog</p>
            </Link>
            <Link href="/">
              <p className="mb-0">Careers</p>
            </Link>
            <Link href="/">
              <p className="mb-0"> Jobs</p>
            </Link>
            <Link href="/">
              <p className="mb-0">In Press</p>
            </Link>
            <Link href="/">
              <p className="mb-0"> Gallery</p>
            </Link>
          </div>
        </div>
        <div className=" flex justify-between pt-[37px] pb-[40px] border-b border-gray-300">
          <div className=" flex gap-[15px] text-[24px] ">
            <Link href={"/"}>
              <RiFacebookBoxLine />
            </Link>
            <Link href={"/"}>
              <BsTwitterX />
            </Link>
            <Link href={"/"}>
              <FaWhatsapp />
            </Link>
            <Link href={"/"}>
              <FaInstagram />
            </Link>
            <Link href={"/"}>
              <IoLogoYoutube />
            </Link>
          </div>
          <div className=" flex gap-[5px] items-center">
            <Link href="/">
              <p className="mb-0 text-[13px] text-[#4B465C]"> বিডি ক্যাম্পাস</p>
            </Link>
            <div>
              <GoDot className="h-6 w-6 p-1 " />
            </div>
            <Link href="/">
              <p className=" mb-0 text-[13px] text-[#4B465C]">বিজ্ঞাপন</p>
            </Link>
            <div>
              <GoDot className="h-6 w-6 p-1 " />
            </div>
            <Link href="/">
              <p className=" mb-0 text-[13px] text-[#4B465C]">সার্কুলেশন</p>
            </Link>
            <div>
              <GoDot className="h-6 w-6 p-1 " />
            </div>
            <Link href="/">
              <p className=" mb-0 text-[13px] text-[#4B465C]">
                শর্তাবলি ও নীতিমালা
              </p>
            </Link>
            <div>
              <GoDot className="h-6 w-6 p-1 " />
            </div>
            <Link href="/">
              <p className=" mb-0 text-[13px] text-[#4B465C]">গোপনীয়তা নীতি</p>
            </Link>
          </div>
        </div>
        <div className=" flex justify-center items-center gap-[10px] h-[30px] mt-[30px]">
          <h1 className=" mb-0 text-[13px] text-[#A8AAAE]">
            স্বত্ব © ১৯৯৮-২০২৩ বিডি ক্যাম্পাস
          </h1>
          <p className=" mb-0">|</p>
          <h1 className=" mb-0 text-[13px] text-[#A8AAAE]">
            সম্পাদক ও প্রকাশক: মামুন
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Footer;
