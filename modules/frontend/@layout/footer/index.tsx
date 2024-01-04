"use client";
import { excerpt } from "@/helpers/utils";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { HiOutlineMapPin, HiOutlinePrinter } from "react-icons/hi2";
import TextExpander from "../../@common/text-expander";

const footerText = `IMMLINK is one of the revolutionary projects that Canadapine Inc. is working on. We, Canadapine Inc., are a 100% CANADIAN company, incorporated federally and provincially under Canada Business Corporations Act, bearing the corporation number 1560868-6 and Extra Provincial Corporation in Alberta number is 2125716064. We call this revolutionary as this project does NOT exist anywhere and is built from scratch.  `;

const Footer = () => {
  // const init = 150;
  // const [count, setCount] = useState(init);
  // const about = excerpt(footerText, count);
  // const handleMore = () => {
  //   setCount(10000);
  // };

  return (
    <section className="mt-auto bg-[#1D1D1B] pb-0">
      <div className="container">
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-8 lg:gap-[143px] py-5 lg:py-[50px]">
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/misc/immi-link-footer-logo.png"
                width={105}
                height={28}
                alt="logo"
              />
            </Link>

            <div className=" text-grey mb-8">
              <TextExpander text={footerText} />
            </div>
            <ul className="flex flex-col gap-5">
              {/* <li>
                <a
                  href="tel:+1 (639) 316-4943
                  "
                  className="inline-flex items-center gap-2 group"
                >
                  <FiPhoneCall className="text-white group-hover:text-hover transition-all text-xl" />
                  <span className="text-white group-hover:text-hover transition-all text-sm">
                    +1 (639) 316-4943
                  </span>
                </a>
              </li> */}
              <li>
                <a
                  href="mailto:info@immilink.ca"
                  className="inline-flex items-center gap-2 group"
                >
                  <FaRegEnvelope className="text-white group-hover:text-hover transition-all text-xl" />
                  <span className="text-white group-hover:text-hover transition-all text-sm">
                    info@immilink.ca
                  </span>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <HiOutlineMapPin className="text-white text-xl" />
                  <span className="text-white text-sm">
                    57 Bridlecrest Court SW Calgary AB T2Y 5J3 Canada
                  </span>
                </div>
              </li>
              {/* <li>
                <div className="flex items-center gap-2">
                  <HiOutlinePrinter className="text-white text-xl" />
                  <span className="text-white text-sm">+1-212-9876543</span>
                </div>
              </li> */}
            </ul>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-[auto_180px_auto] gap-5 lg:gap-[80px]">
            <div>
              <p className="font-bold text-white">About</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/about-us" className="text-sm">
                    About us
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-sm">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    In Press
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Affiliate
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">Service Providers</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Immigration{" "}
                    <span className="block">Consultants (RCIC)</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Insurance Agents
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Insurance Agents
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Lawyers & Legal Aids
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Find Financial Advisors
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-bold text-white">FAQ</p>
              <ul className="flex flex-col gap-4 text-white">
                <li>
                  <Link href="/about-us" className="text-sm">
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Payments
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Returns
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Copyright
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" className="text-sm">
                    Language
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-2 lg:gap-[143px] pb-5 lg:pb-12 items-center">
          <div className="order-1 lg:order-0">
            <p className="text-white text-sm text-center lg:text-start mb-0">
              © 2010-2023, All Rights Reserved
            </p>
          </div>
          <ul className="flex gap-2 lg:gap-0 justify-center lg:justify-between flex-wrap lg:order-1">
            <li>
              <Link href="/about-us" className="text-white text-sm">
                About us
              </Link>
            </li>
            <li>
              <Link href="/contact-us" className="text-white text-sm">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-white text-sm">
                Privacy policy
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="text-white text-sm">
                Disclaimer
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-white text-sm">
                Sitemap
              </Link>
            </li>
            <li>
              <Link href="/about-us" className="text-white text-sm">
                Terms of Use
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
