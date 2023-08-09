import "../globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "@/app/style";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

export const metadata: Metadata = {
  title: "رویش جوانه امید مهر - رجام",
  description:
    "امنیت با هزینه پایین و بهترین بهره وری ، تجارت مدرن ، سیستم های ارتباطی پرسرعت و مدرن و تبلیغات هوشمند و هدفمند.",
  keywords:
    "دوربین مخفی ، دوربین مدار بسته ، سیستم های هوشمند ، ساخت محتوا ، فیلم ، سریال ، تبلیغات در فضای مجازی ، رپورتاژ ، آگهی ،فیلم تبلیغاتی ، تبلیغات ، برگزاری سمینار، برگزاری رویداد ، برگزاری رویداد فرهنگی هنری ، شبکه ، ساخت شبکه های داخلی ، پیشگامان ، اینترنت ، نت پرسرعت ، فیبر نوری ، نمایندگی انحصاری پیشگامان استان البرز",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir={"rtl"}>
      <body>
        <main className={"bg-primary w-full bg-primary "}>
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar />
            </div>
          </div>
          {children}
          <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
            <div className={`${styles.boxWidth}`}>
              <Footer />
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
