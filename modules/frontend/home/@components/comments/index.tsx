import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Comments() {
  return (
    <section>
      <div className=" container">
        <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
          <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px]" />
          <h1 className=" text-[28px]  font-semibold mb-0">মতামত</h1>
        </div>
        <div className=" grid grid-cols-[400px_430px_1fr] gap-[26px]">
          <Link href={"/"}>
            <div className=" px-[25px] py-[25px] border border-gray-200">
              <div className=" flex flex-col gap-3">
                <div className=" bg-[#FE0000] text-white p-1 w-[60px] text-center">
                  মতামত
                </div>
                <h1 className=" text-[28px] mb-0 font-semibold">
                  আমেরিকার প্রেসিডেন্ট কে হলো, তাতে আমাদের কী
                </h1>
              </div>
              <p className=" mb-0 text-[16px] mt-[26px]">
                জনপ্রিয় তারকাদের ভঙ্গিমায় তাঁরা একটি কালো পর্দার ওপাশ থেকে
                আবির্ভূত হলেন। বেশ বড় একটা ক্রিসমাস ট্রির নিচে রাখা দুটি লাল
                চেয়ারে এসে দুজন বসলেন। ফার্স্ট লেডি জিল বাইডেন একটি কবিতার বই
                নিয়ে সেখান থেকে দ্য নাইট বিফোর ক্রিসমাস কবিতাটি পড়ে শোনালেন।
              </p>
              <div className=" mt-[40px] flex items-center gap-[14px]">
                <div className=" h-[70px] w-[70px] ">
                  <Image
                    height={190}
                    width={295}
                    src={"/images/home/comment.png"}
                    className=" rounded-full"
                    alt="crime"
                  />
                </div>
                <div>
                  <p className=" mb-0">অ্যান্ড্রু মিত্রোভিকা</p>
                  <p className=" mb-0">সাংবাদিক</p>
                </div>
              </div>
            </div>
          </Link>
          <div>
            {new Array(3).fill(
              <div>
                <Link href={"/"}>
                  <div className="  flex items-start gap-[14px]">
                    <div className=" h-[70px] w-[70px] ">
                      <Image
                        height={190}
                        width={295}
                        src={"/images/home/comment.png"}
                        className=" rounded-full"
                        alt="crime"
                      />
                    </div>
                    <div className=" flex flex-col gap-[6px]">
                      <p className=" mb-0 text-[#FE0000] text-[16px] font-semibold">
                        মতামত
                      </p>
                      <h1 className=" mb-0 text-[18px] font-semibold">
                        মানবাধিকার পরিস্থিতি: স্বাধীন তদন্ত কমিশন গঠনে বাধা
                        কোথায়
                      </h1>
                      <p className=" mb-0 mt-1">অ্যান্ড্রু মিত্রোভিকা</p>
                      <p className=" mb-0">সাংবাদিক</p>
                    </div>
                  </div>
                </Link>
                <div className="h-[1px] w-full  bg-[#DBDADE] mt-[9px] mb-[14px]"></div>
              </div>
            )}
          </div>
          <div>
            <Image
              height={245}
              width={295}
              src={"/images/home/ad.png"}
              alt="crime"
            />
          </div>
        </div>
      </div>
      ;
    </section>
  );
}

export default Comments;