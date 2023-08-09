import styles from "./style";
// import {
//   AboutUs,
//   Business,
//   Clients,
//   CTA,
//   Footer,
//   Hero,
//   Navbar,
//   Services,
//   Stats,
// } from "../Components/Index.js";
import { RevealWrapper } from "next-reveal";
import MainPageData from "@/lib/Actions/mainPageData.actions";
import Hero from "@/Components/HomePage/Hero";
import React from "react";
import Stats from "@/Components/HomePage/Stats";
import Services from "@/Components/HomePage/Services";
import CTA from "@/Components/HomePage/CTA";

export default async function Home() {
  const data = await MainPageData();
  // const sr = ScrollReveal({
  //   distance: "65px",
  //   duration: 2500,
  //   reset: false,
  // });
  // sr.reveal(".hero-img", {
  //   delay: 450,
  //   origin: " right",
  // });
  // sr.reveal(".rightside", {
  //   origin: " right",
  // });
  // sr.reveal(".leftside", {
  //   origin: "left",
  // });
  // sr.reveal(".topside", {
  //   origin: "top",
  // });
  return (
    <>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={` ${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          {/*<Business />*/}
          {/*/!*<Billing/>*!/*/}
          <Services />
          {/*<AboutUs />*/}
          {/*<Clients />*/}
          <CTA />
          {/*/!*<Footer/>*!/*/}
        </div>
      </div>
    </>
  );
}
