"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={"w-full flex py-6 justify-between items-center navbar"}>
      <div className={"w-full flex py-6 justify-between items-center navbar"}>
        <ul
          className={
            "list-none sm:flex hidden justify-start items-center flex-1"
          }
        >
          <li
            className={
              "font-yekan font-normal cursor-pointer text-[18px] text-white hover:text-secondary transition-all ml-10"
            }
          >
            <Link href={"/"}>خانه</Link>
          </li>
          <li
            className={
              "font-yekan font-normal cursor-pointer text-[18px] text-white hover:text-secondary transition-all ml-10"
            }
          >
            <a href={"./#features"}>ویژگی ها</a>
          </li>
          <li
            className={
              "font-yekan font-normal cursor-pointer text-[18px] text-white hover:text-secondary transition-all ml-10"
            }
          >
            <a href={"./#services"}>خدمات</a>
          </li>
          <li
            className={
              "font-yekan font-normal cursor-pointer text-[18px] text-white hover:text-secondary transition-all ml-10"
            }
          >
            <Link href={"/ContactUs"}>ارتباط با ما</Link>
          </li>
          <li
            className={
              "font-yekan font-normal cursor-pointer text-[18px] text-white hover:text-secondary transition-all ml-0"
            }
          >
            <Link href={"/AboutUs"}>درباره ما</Link>
          </li>
        </ul>
        <a href={"./"}>
          <Image
            width={92}
            height={85}
            src={"/assets/logo.png"}
            alt={"roojam"}
          />
        </a>
        <div className={"sm:hidden flex flex-1 justify-end items-center"}>
          <img
            src={toggle ? "/assets/close.svg" : "/assets/menu.svg"}
            alt={"menu"}
            className={"w-[28px] h-[28px] object-contain"}
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-black-gradient absolute z-[10]  top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
            <ul
              className={
                "list-none flex flex-col justify-end items-center flex-1 "
              }
            >
              <li
                className={
                  "font-yekan font-normal cursor-pointer text-[16px]  text-white hover:text-secondary mb-4"
                }
              >
                <Link href={"/"}>خانه</Link>
              </li>
              <li
                className={
                  "font-yekan font-normal cursor-pointer text-[16px]  text-white hover:text-secondary mb-4"
                }
              >
                <a href={"./#features"}>ویژگی ها</a>
              </li>
              <li
                className={
                  "font-yekan font-normal cursor-pointer text-[16px]  text-white hover:text-secondary mb-4"
                }
              >
                <a href={"./#services"}>خدمات</a>
              </li>
              <li
                className={
                  "font-yekan font-normal cursor-pointer text-[16px]  text-white hover:text-secondary mb-4"
                }
              >
                <Link href={"/ContactUs"}>ارتباط با ما</Link>
              </li>
              <li
                className={
                  "font-yekan font-normal cursor-pointer text-[16px]  text-white hover:text-secondary mb-0"
                }
              >
                <Link href={"/AboutUs"}>درباره ما</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
