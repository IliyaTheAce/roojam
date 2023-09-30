import { BaseUrl } from "@/Constants/Config";
import styles from "@/app/style";
import Image from "next/image";
import { Fragment } from "react";
export default async function AboutUs() {
  const response = await fetch(new URL("/api/content/About", BaseUrl));
  const { data } = await response.json();
  return (
    <div className={"justify-center flex my-24"}>
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
      <div
        className={
          "md:max-w-[50%] max-w-[80%]  text-justify flex flex-col items-center "
        }
      >
        {data &&
          data.map(
            (item: { imgUrl: string; content: string }, index: number) => {
              return (
                <Fragment key={"ab" + index}>
                  <Image
                    alt={"AboutUsImg"}
                    src={item.imgUrl}
                    width={0}
                    sizes="100vw"
                    height={0}
                    className={"h-auto w-full"}
                  />
                  <div
                    className={`${styles.paragraph}  mt-10`}
                    dangerouslySetInnerHTML={{ __html: item.content }}
                  />
                </Fragment>
              );
            }
          )}
      </div>
    </div>
  );
}
