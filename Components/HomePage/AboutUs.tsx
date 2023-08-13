import styles, { layout } from "@/app/style";
import Button from "../Shared/Button";
import AboutPageData from "@/lib/Actions/AboutData";

export default async function AboutUs() {
  const data = await AboutPageData();
  return (
    <section className={layout.section}>
      <div className={`${layout.sectionInfo} rightside`}>
        <h2 className={`${styles.heading2} font-shabnam`}>درباره ما</h2>
        {data.data[0].content && (
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
