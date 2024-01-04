import BlogCard from "@/modules/@common/blog-card";
import React from "react";

const topStoriesData = [
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    desc: "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    desc: "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    desc: "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    desc: "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
  {
    title:
      "গ্রহণযোগ্য নির্বাচন করতে ব্যর্থ হলে রাষ্ট্র নিজেই ব্যর্থ হয়ে যাবে: কমিশনার আনিছুর",
    desc: "এবার নির্বাচনে সবচেয়ে বেশি নির্বাহী ম্যাজিস্ট্রেট নিয়োগ করার কথা উল্লেখ করে আনিছুর রহমান বলেন, এর উদ্দেশ্য একটাই, তা হলো অবাধ, সুষ্ঠু ও নিরপেক্ষ নির্বাচন আয়োজন করা। তাঁরা যদি অবাধ, সুষ্ঠু ও গ্রহণযোগ্য নির্বাচন না করতেপারেন, কোনো কারণে যদি তাঁরা ব্যর্থ হন, তাহলে রাষ্ট্র নিজেই ব্যর্থ রাষ্ট্র হয়ে যাবে। তাঁরা সেটা চাইবেন না। কারণ, এতে বাংলাদেশ সমগ্র বিশ্ব থেকে বিচ্ছিন্ন হয়ে যাব।",
  },
];
const TopStories = () => {
  return (
    <section>
      <div className="container">
        <h2>শীর্ষ খবর</h2>
        <div className="grid lg:grid-cols-4 gap-6 ">
          {topStoriesData?.map((item: any, i: any) => {
            const isFirst = i == 0;
            return (
              <BlogCard
                key={i}
                data={item}
                classes={{
                  root: isFirst
                    ? "md:col-span-2 md:row-span-2 self-start"
                    : "self-start",
                  imageWrapper: isFirst
                    ? "mb-4 md:!h-[396px]"
                    : "md:!h-[190px]",
                  imageStyle: isFirst
                    ? "!h-full object-cover"
                    : "h-full object-cover",

                  title: isFirst ? "text-28px " : "text-xl mb-2",
                  desc: isFirst ? "mb-3" : "hidden",
                  date: isFirst ? "mb-3" : "",
                }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopStories;