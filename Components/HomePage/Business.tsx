import styles, { layout } from "@/app/style";
import Button from "../Shared/Button";
import { features } from "@/Constants";
import Image from "next/image";
import { BaseUrl } from "@/Constants/Config";

const FeatureCard = ({
  imgUrl,
  title,
  content,
  index,
}: {
  imgUrl: string;
  title: string;
  content: string;
  index: number;
}) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <Image
        alt={"icon"}
        src={imgUrl}
        width={0}
        height={0}
        className={"w-[50%] h-[50%] object-contain fill-white"}
      />
    </div>
    <div className={"flex-1 flex flex-col mr-3"}>
      <h4
        className={" font-semibold text-white text-[18px] leading-[23px] mb-1"}
      >
        {title}
      </h4>
      <p
        className={
          "font-yekan font-normal text-dimWhite text-[13px] leading-[24px] mb-1"
        }
      >
        {content}
      </p>
    </div>
  </div>
);

const Business = async () => {
  const response = await fetch(new URL("/api/content/business-data", BaseUrl));

  const data = (await response.json());
  return (
    <section id={"features"} className={layout.section}>
      <div className={`${layout.sectionInfo} rightside`}>
        <h2
          className={
            "font-yekan font-semibold xs:text-[30px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full"
          }
        >
          {data.title && data.title.content}
        </h2>
        <p className={`${styles.paragraph} mt-5`}>
          {data.text && data.text.content}
        </p>
        <Button styles={"mt-10"} />
      </div>
      <div className={`${layout.sectionImg} flex-col leftside`}>
        {data.cards &&
          data.cards.map(
            (
              feature: {
                _id: string;
                title: string;
                content: string;
                imgUrl: string;
              },
              index: number
            ) => (
              <div key={feature._id}>
                <FeatureCard
                  key={feature._id}
                  title={feature.title}
                  content={feature.content}
                  imgUrl={feature.imgUrl}
                  index={index}
                />
              </div>
            )
          )}
      </div>
    </section>
  );
};

export default Business;
