import { Menu, Sidebar } from "react-pro-sidebar";
import { usePathname } from "next/navigation";

import SidebarSegmentDashboard from "./segments/dashboard";
import SidebarSegmentJob from "./segments/job";
import SidebarSegmentLiveNews from "./segments/live_news";
import SidebarSegmentMedia from "./segments/media";
import SidebarSegmentNews from "./segments/news";
import SidebarSegment24onbdNews from "./segments/news_24onbd";
import SidebarSegmentSettings from "./segments/settings";
import SidebarSegmentUser from "./segments/user";
import SidebarSegmentVideoNews from "./segments/video_news";
import SidebarSegmentWebStory from "./segments/web_story";
import Link from "next/link";
import Image from "next/image";

interface propTypes {
  collapsed: boolean;
  toggled: boolean;
  setCollapsed?: Function | any;
  setToggled?: Function | any;
  pathname?: any;
}

export const SidebarComponent = ({
  collapsed,
  toggled,
  setToggled,
}: propTypes) => {
  const { pathname } = usePathname();

  return (
    <Sidebar
      collapsed={collapsed}
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="lg"
      className="shrink-0 h-screen overflow-auto scroll"
      backgroundColor="#F6F7FA"
      style={{ border: 0 }}
    >
      <div className="sticky top-0 z-50 p-2 bg-[#F6F7FA]">
        <div className="relative px-4 py-2">
          <Link href="/dashboard">
            <Image
              src="/images/misc/logo.png"
              alt=""
              width={960}
              height={540}
            />
            {/* <img src="/images/misc/logo-light.png" alt="logo" /> */}
          </Link>
        </div>
      </div>
      <Menu className="custom_side_nav">
        <SidebarSegmentDashboard pathname={pathname} />
        <SidebarSegmentNews pathname={pathname} />
        {/*
        <SidebarSegment24onbdNews pathname={pathname} />
        <SidebarSegmentVideoNews pathname={pathname} />
        <SidebarSegmentLiveNews pathname={pathname} />
        <SidebarSegmentJob pathname={pathname} />
        <SidebarSegmentWebStory pathname={pathname} />
        <SidebarSegmentMedia pathname={pathname} />
        <SidebarSegmentUser pathname={pathname} />
        <SidebarSegmentSettings pathname={pathname} /> */}
      </Menu>
    </Sidebar>
  );
};

export default SidebarComponent;
