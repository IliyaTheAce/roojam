import styles, { layout } from "@/app/style";
import Button from "../Shared/Button";
import { BaseUrl } from "@/Constants/Config";

export default async function AboutUs() {
  const response = await fetch(new URL("/api/content/About", BaseUrl));
  const data = await response.json();
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo} rightside`}>
        <h2 className={`${styles.heading2} font-shabnam`}>درباره ما</h2>
        {data.data && data.data?.length !== 0 && data.data[0].content && (
          <p
            className={`${styles.paragraph} font-shabnam max-w-[470px] mt-5 text-justify`}
            dangerouslySetInnerHTML={{ __html: data.data[0].content }}
          />
        )}
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImg} leftside`}>
        {/* <img alt={"card"} src={card} className={'w-[100%] h-[100%] '}/> */}
      </div>
    </section>
  );
}
