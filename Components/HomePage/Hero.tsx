"use client";
import styles from "@/app/style";
import { robot } from "@/public/assets";
import GetStarted from "@/Components/HomePage/GetStarted";
import Image from "next/image";
import { RevealWrapper } from "next-reveal";

const Hero = () => {
  return (
    <section
      id={"home"}
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <RevealWrapper
        mobile={false}
        className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
        delay={250}
        origin={"right"}
        reset={false}
        duration={2500}
        distance={"65px"}
      >
        <Image
          src={robot}
          alt="billing"
          className={"w-[100%] h-[100%] relative z-[5]"}
        />
        <div
          className={"absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient "}
        />
        <div
          className={
            "absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 white__gradient"
          }
        />
        <div
          className={
            "absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient "
          }
        />
      </RevealWrapper>
      <div className={`ss:hidden ${styles.flexStart} mb-5`}>
        <GetStarted />
      </div>
      <RevealWrapper
        mobile={false}
        className={`flex-1 ${styles.flexStart} flex-col xm:px-16 xl:px-0 px-`}
        delay={250}
        origin={"left"}
        reset={false}
        duration={1500}
        distance={"65px"}
      >
        <div
          className={
            "flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2"
          }
        >
          {/*<img src={discount} alt={'discount'} className={'w-[32px] h-[32px]'}/>*/}
          <p className={`${styles.paragraph} mr-2 font-yekan text-[22px]`}>
            دنیایی <span className={"text-white"}>متفاوت و بروز</span> را با ما
            تجربه کنید...
          </p>
        </div>

        <div className={"flex flex-row justify-between items-center w-full"}>
          <h1
            className={
              "flex-1 font-tunisia font-semibold ss:text-[72px] text-[100px]  text-white ss:leading-[100px] leading-[100px] "
            }
          >
            نگرشی
            <br className={"sm:block hidden"} />{" "}
            <span className={"text-gradient-2 "}>نویـن و خلاق</span>{" "}
          </h1>
          <div className={"ss:flex hidden md:mr-4 mr-0"}>
            <GetStarted />
          </div>
        </div>
        <h1
          className={
            " font-tunisia font-semibold ss:text-[68px] text-[52px] text-white  ss:leading-[100px] leading-[75px] W-full"
          }
        >
          در دنیای مدرن
        </h1>
        <p
          className={`${styles.paragraph} max-w-[470px] mt-5 font-yekan text-[22px]`}
        >
          مجموعه رویش جوانه امید مهر برآن است تا تجربه ای نو در خدمات مدرن را به
          صاحبان کسب و کار ارائه نماید.
        </p>
      </RevealWrapper>
    </section>
  );
};

export default Hero;
