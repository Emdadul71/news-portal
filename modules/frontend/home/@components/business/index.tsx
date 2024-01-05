import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

function Business() {
  return (
    <section>
      <div className=" container">
        <div className=" flex items-center gap-3 h-[36px] mb-[26px] cursor-pointer">
          <MdKeyboardDoubleArrowRight className="text-[#FE0000] text-[30px]" />
          <h1 className=" text-[28px]  font-semibold mb-0">বাণিজ্য</h1>
        </div>
        <div className=" grid grid-cols-4">
          {new Array(4).fill(
            <Link href={"/"} className="group hover:text-inherit">
              <div className=" flex flex-col gap-3 pr-4">
                <div className=" mb-[5px]   bg-gradient-to-t from-black  w-full h-[396px] flex justify-end flex-col relative ">
                  <Image
                    height={190}
                    width={295}
                    src={"/images/home/business.png"}
                    alt="crime"
                  />
                </div>
                <h1 className=" text-[20px] font-semibold mb-0 group-hover:text-primary transition-all">
                  আমদানি–রপ্তানিতে ভাটা কনটেইনার ডিপোর ব্যবসা কমে গেছে
                </h1>
                <p className=" text-[16px] mb-0">
                  ডলার সংকটে পণ্য আমদানিতে ভাটা চলছে। রপ্তানিও খুব বেশি বাড়ছে
                  না। তাতে চট্টগ্রাম বন্দর দিয়ে আমদানি-রপ্তানি পণ্য ব্যবস্থাপনায়
                  নিয়োজিত বেসরকারি কনটেইনার ডিপোগুলোর ব্যবসা।
                </p>
                <p className=" text-[13px] mb-0">ডিসেম্বর ২৭,২০২৩</p>
              </div>
            </Link>
          )}
        </div>
        <div className="h-[1px] w-full  bg-[#DBDADE] mt-[47px] mb-[26px]"></div>
        <div className=" grid grid-cols-4 gap-[26px]">
          {new Array(4).fill(
            <Link href={"/"}>
              <div>
                <div className=" flex gap-[10px]">
                  <div>
                    <Image
                      height={190}
                      width={295}
                      src={"/images/home/business1.png"}
                      alt="crime"
                    />
                  </div>
                  <p className=" mb-0 text-[#4B4B4B] font-medium text-[18px]">
                    ব্যাংকঋণের সর্বোচ্চ সুদের হার বেড়ে ১১.৮৯ শতাংশ
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

export default Business;
