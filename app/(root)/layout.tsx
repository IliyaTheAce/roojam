import "../globals.css";
import type { Metadata } from "next";
import styles from "@/app/style";
import Navbar from "@/Components/Shared/Navbar";
import Footer from "@/Components/Shared/Footer";

export const metadata: Metadata = {
  title: "رویش جوانه امید مهر - رجام",
  description:
    "رجام، یک شرکت پیشرو در ارائه خدمات تکنولوژی اطلاعات و ارتباطات (ITC) با تمرکز بر روی خدمات اینترنت، امنیت شبکه، تولید محتوا، ساخت تیزر و تبلیغات، برنامه نویسی وب و بسیاری از خدمات مهم دیگر است. ما تلاش میکنیم تا با بهره‌گیری از تکنولوژی‌های پیشرفته، نیازهای فعلی و آینده‌ی شما را در زمینه‌های مختلف تکنولوژی اطلاعات مرتفع کنیم",
  keywords:
      "رجام، اینترنت، دیتاسنتر، امنیت شبکه، فیبر نوری، VoIP، تولید محتوا، تیزر، تبلیغات، برنامه نویسی سایت" ,
  alternates: {
    canonical: `https://roojam.ir`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir={"rtl"}>
      <body>
        <main className={"bg-primary w-full"}>
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
