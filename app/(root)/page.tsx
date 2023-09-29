import styles from "../style";
import Hero from "@/Components/HomePage/Hero";
import React from "react";
import Stats from "@/Components/HomePage/Stats";
import Services from "@/Components/HomePage/Services";
import CTA from "@/Components/HomePage/CTA";
import AboutUs from "@/Components/HomePage/AboutUs";
import Clients from "@/Components/HomePage/Clients";
import Business from "@/Components/HomePage/Business";
import { BaseUrl } from "@/Constants/Config";

export default async function Home() {
  // const response = await fetch(new URL("/api/content/Home", BaseUrl));
  // const data = await response.json();
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
          <Business />
          {/*/!*<Billing/>*!/*/}
          <Services />
          <AboutUs />
          <Clients />
          <CTA />
          {/*/!*<Footer/>*!/*/}
        </div>
      </div>
    </>
  );
}
