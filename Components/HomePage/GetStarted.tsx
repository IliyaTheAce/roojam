"use client";
import styles from "@/app/style";
import Image from "next/image";
import Link from "next/link";

const GetStarted = () => {
  return (
    <Link href={"./ContactUs"}>
      <div
        className={`${styles.flexCenter} w-[140px] h-[140px] rounded-full bg-green-gradient p-[2px] cursor-pointer transition-all`}
      >
        <div
          className={`${styles.flexCenter} flex-col bg-primary hover:bg-dimBlue  w-[100%] h-[100%] rounded-full transition-all `}
        >
          <div className={`${styles.flexStart} flex-row`}>
            <p
              className={
                "font-yekan font-medium text-[24px] leading-[23px] ml-2 text-white"
              }
            >
              <span>اینجا</span>
            </p>
            <Image
              width={23}
              height={23}
              src={"/assets/arrow-up.svg"}
              className={"object-contain"}
              alt={"arrow"}
            />
          </div>
          <p
            className={
              "font-yekan font-medium text-[24px] leading-[23px] text-white"
            }
          >
            <span>شروع کن</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default GetStarted;
