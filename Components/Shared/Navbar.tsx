"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { navBarItems } from "@/Constants";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={"w-full flex py-6 justify-between items-center navbar font-shabnam"}>
      <div className={"w-full flex py-6 justify-between items-center navbar"}>
        <ul
          className={
            "list-none sm:flex hidden justify-start items-center flex-1 "
          }
        >
          {navBarItems.map((item) => {
            return (
              <li
              key={item.title}
                className={
                  " group relative font-normal cursor-pointer text-[18px] text-white hover:text-secondary transition-all ml-10  " 
                }
              >
                <Link
                  href={item.link}
                  className={
                    item.nested
                      ? "flex items-center gap-1 justify-center"
                      : ""
                  }
                >
                  {item.title}
                  {item.nested && (
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
                    </span>
                  )}
                </Link>
                {item.nested ? (
                  <div className="invisible absolute z-50 flex w-[200%] flex-col bg-black-gradient text-dimWhite shadow-xl group-hover:visible rounded-md p-5 text-sm gap-3">
                    {item.treeItems &&
                      item.treeItems.map((treeItem) => {
                        return (
                          <Link
                          key={treeItem.title}
                            href={treeItem.link}
                            className="hover:text-gray-600 transition-colors"
                          >
                            {treeItem.title}
                          </Link>
                        );
                      })}
                  </div>
                ) : (
                  ""
                )}
              </li>
            );
          })}
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
                <Link href={"/contact"}>ارتباط با ما</Link>
              </li>
              <li
                className={
                  "font-yekan font-normal cursor-pointer text-[16px]  text-white hover:text-secondary mb-0"
                }
              >
                <Link href={"/about"}>درباره ما</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
