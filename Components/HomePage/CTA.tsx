import style from "@/app/style";
import Style from "@/app/style";
import Button from "@/Components/Shared/Button";

const CTA = () => (
  <section
    className={`${style.flexCenter} ${Style.marginY} ${Style.padding} sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}
  >
    <div className={"flex-1 flex flex-col"}>
      <h2 className={style.heading2}>
        رویش جوانه امید مهر آماده همکاری با شماست
      </h2>
      <p className={`${Style.paragraph} mt-5`}>
        اگر امنیت ، به روز بودن و تبلیغات با ضریب نفوذ بالا براتون مهمه با ما
        تماس بگیرید.
      </p>
    </div>
    <div className={`${Style.flexCenter} sm:mr-10 mr-0 sm:mt-0 mt-5`}>
      <Button />
    </div>
  </section>
);

export default CTA;
