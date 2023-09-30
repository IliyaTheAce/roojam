import CompanyInfoCard from "@/Components/ContactUsPage/CompanyInfoCard";
import { BaseUrl } from "@/Constants/Config";
import ContactForm from "@/Components/ContactUsPage/ContactForm";

export default async function ContactUs() {
  const response = await fetch(
    new URL("/api/content/ContactUsPageInfo", BaseUrl)
  );
  const CompanyInfo = (await response.json()).data;

  return (
    <section
      className={
        "flex flex-col md:flex-row justify-center py-10 px-6  md:space-x-14"
      }
    >
      <div
        className={
          "absolute z-[0] opacity-50 w-[60%] h-[60%] -right-[40%] rounded-full blue__gradient"
        }
      />
      <div
        className={
          "absolute z-[0] opacity-20 w-[60%] h-[60%] right-[40%]  rounded-full blue__gradient"
        }
      />
      <ContactForm />
      <div className={"flex flex-col py-14 px-4 max-w-[450px] z-[1]"}>
        {CompanyInfo &&
          CompanyInfo.map((item: any, index: number) => (
            <CompanyInfoCard
              title={item.title}
              content={item.content}
              key={index}
            />
          ))}
      </div>
      <div className={"object-contain z-[1] flex justify-center"}>
        <iframe
          src="https://api.neshan.org/v2/static?key=service.9af7c27f378b4af186fdd76b73079153&type=dreamy-gold&zoom=17&center=35.815064,50.986432&width=450&height=450&marker=red"
          width={"450"}
          height={"450"}
        ></iframe>
      </div>
    </section>
  );
}
