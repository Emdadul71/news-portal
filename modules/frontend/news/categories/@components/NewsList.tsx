import React from "react";
import AdvertiseSpace3 from "./Advertisement_Space/AdvertiseSpace3";
import NewsTilesWide from "./NewsTilesWide";
import AdvertiseSpace4 from "./Advertisement_Space/AdvertiseSpace4";

export default function NewsList() {
  return (
    <div className=" pt-[30px] border-t-[1px] border-gray-200">
      <div className=" grid grid-cols-[220px_616px_1fr] gap-[26px]">
        <div>
          <AdvertiseSpace3 />
        </div>
        <div>{new Array(10).fill(<NewsTilesWide />)}</div>
        <div>
          <AdvertiseSpace4 />
        </div>
      </div>
    </div>
  );
}
