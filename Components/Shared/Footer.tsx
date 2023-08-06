import styles from "@/app/style";
import { footerLinks, socialMedia } from "@/Constants/index";
import Image from "next/image";

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className={"flex-1 flex flex-col justify-start ml-10"}>
        <Image
          height={72}
          width={266}
          src={"/assets/logo.png"}
          alt={"roojam"}
          className={"object-contain"}
        />
        <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>
          A new way to make payments easy, reliable and secure.
        </p>
      </div>
      <div
        className={
          "flex-[1.5] w-full flex flex- row justify-between flex-wrap md:mt-0 mt-10"
        }
      >
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.title}
            className={"flex flex-col ss:my-0 my-4 min-w-[150px]"}
          >
            <h4
              className={
                "font-poppins font-medium text-[18px] leading-[27px] text-white"
              }
            >
              {footerLink.title}
            </h4>
            <ul className={"list-none mt-4"}>
              {footerLink.links.map((Link, index) => (
                <li
                  key={Link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {Link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div
      className={
        "flex w-full justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]"
      }
    >
      <p
        className={
          "font-poppins font-normal text-central text-[18px] leading-[27px] text-white"
        }
      >
        2021 HooBank. All Rights Reserved.
      </p>
      <div className={"flex felx-row md:mt-0 mt-6"}>
        {socialMedia.map((social, index) => (
          <Image
            width={21}
            height={21}
            key={social.id}
            src={social.icon}
            alt={social.id}
            className={`object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "ml-6" : "ml-0"
            }`}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
