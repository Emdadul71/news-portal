import { Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoShareSocialOutline } from "react-icons/io5";

export default function FullNewsArticel() {
  return (
    <div className=" flex justify-end">
      <div className=" mt-[57px] grid grid-cols-[709px_295px] gap-[26px] ">
        <div>
          <div>
            <Image
              src="/images/catagories/yunus.png"
              width={1090}
              height={40}
              alt="logo"
            />
          </div>
          <p className=" pb-[12px] pt-[12px] border-b-[1px] text-base border-gray-200">
            ড. মুহাম্মদ ইউনূস
          </p>
          <p className="text-[18px] leading-[32px] mt-[26px]">
            নোবেলজয়ী ড. মুহাম্মদ ইউনূস এক বিবৃতিতে বাংলাদেশের নাগরিকদের প্রতি
            অন্যায়ের বিরুদ্ধে এবং গণতন্ত্র ও মানবাধিকারের পক্ষে সোচ্চার হওয়ার
            আহ্বান জানিয়েছেন। ইউনূস সেন্টারের ভেরিফায়েড ফেসবুক পেজে ওই বিবৃতি
            প্রকাশ করা হয়েছে। ‘শ্রম আদালতের রায় নিয়ে প্রফেসর ইউনূসের বক্তব্য’
            শিরোনামে গত সোমবার বিবৃতিটি প্রকাশ করা হয়। এতে তাঁর বিরুদ্ধে শ্রম
            আদালতের রায়কে ‘সব আইনি নজির ও যুক্তির পরিপন্থী’ বলেছেন তিনি।
            বিবৃতিতে মুহাম্মদ ইউনূস বলেছেন, ‘আমার আইনজীবীরা আদালতে দৃঢ়ভাবে
            যুক্তি দেখিয়েছেন, আমার বিরুদ্ধে এই রায় সব আইনি নজির ও যুক্তির
            পরিপন্থী।’ ৮৩ বছর বয়সী মুহাম্মদ ইউনূস গ্রামীণ ব্যাংকের প্রতিষ্ঠাতা।
            এই ব্যাংকের মাধ্যমে ক্ষুদ্রঋণ কার্যক্রম পরিচালনা করে লাখ লাখ মানুষের
            দারিদ্র্য মুক্তিতে ভূমিকা রাখার জন্য আন্তর্জাতিকভাবে প্রশংসিত তিনি।
            গ্রামীণ টেলিকমের চেয়ারম্যানের পদে থেকে শ্রম আইন লঙ্ঘনের অভিযোগের
            একটি মামলায়
          </p>
          <div className=" flex justify-center">
            <Image
              height={295}
              width={295}
              src={"/images/home/ad.png"}
              alt="crime"
              className=" mb-[26px]"
            />
          </div>
          <p className="text-[18px] leading-[32px] mt-[26px]">
            গত সোমবার তাঁকে ছয় মাসের কারাদণ্ড ও ৩০ হাজার টাকা জরিমানা করেন ঢাকার
            একটি আদালত। গ্রামীণ টেলিকমের তিন কর্মকর্তাকেও একই সাজা দেওয়া হয়েছে।
            রায় ঘোষণার পর ড. ইউনূস বলেছিলেন, তিনি যে দোষ করেননি, সেই দোষে তাঁকে
            শাস্তি দেওয়া হয়েছে। বিবৃতিতে দেশের মানুষের জন্য কাজ করে যাওয়ার
            প্রত্যয় জানিয়েছেন মুহাম্মদ ইউনূস। তিনি বলেছেন, ‘আমি আমার সাধ্যমতো
            বাংলাদেশের জনগণের সেবা করে যাব ও সামাজিক ব্যবসার আন্দোলনে কাজ করে
            যাব।’ দেশের মানুষের প্রতি আহ্বান জানিয়ে বিবৃতিতে ড. ইউনূস বলেন, ‘আমি
            বাংলাদেশের প্রত্যেক নাগরিককে অন্যায়ের বিরুদ্ধে এবং গণতন্ত্র ও
            মানবাধিকারের পক্ষে এক কণ্ঠে কথা বলার আহ্বান জানাই।’
          </p>
          <div className=" mt-[30px] mb-[26] pb-[26px] border-b-[1px] border-gray-200">
            <h1 className=" text-xl">
              <span className=" text-[#FE0000]">রাজনীতি </span>
              থেকে আরও পড়ুন
            </h1>
            <div className=" flex gap-3">
              <button className=" px-[16px] py-[8px] text-base rounded bg-gray-100 text-[#4B465C] hover:bg-primary transition-all hover:text-white">
                আইন ও বিচার
              </button>
              <button className=" px-[16px] py-[8px] text-base rounded bg-gray-100 text-[#4B465C] hover:bg-primary transition-all hover:text-white">
                তথ্যমন্ত্রী
              </button>
              <button className=" px-[16px] py-[8px] text-base rounded bg-gray-100 text-[#4B465C] hover:bg-primary transition-all hover:text-white">
                হাছান মাহ্‌মুদ
              </button>
              <button className=" px-[16px] py-[8px] text-base rounded bg-gray-100 text-[#4B465C] hover:bg-primary transition-all hover:text-white">
                রাজনীতি
              </button>
              <button className=" px-[16px] py-[8px] text-base rounded bg-gray-100 text-[#4B465C] hover:bg-primary transition-all hover:text-white">
                ড. মুহাম্মদ ইউনূস
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}