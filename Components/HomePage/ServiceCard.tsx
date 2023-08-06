import Image from "next/image";
import { images } from "next/dist/build/webpack/config/blocks/images";

interface ServiceCardProps {
  content: string;
  title: string;
  imgUrl: string;
}

const ServiceCard = ({ content, title, imgUrl }: ServiceCardProps) => {
  return (
    <div
      className={
        "relative flex flex-col px-7 py-9 rounded-[20px] max-w-[370px] md:ml-10 sm:ml-5 ml-0 my=5 feedback-card h-full"
      }
    >
      <Image
        loading={"lazy"}
        alt={title}
        src={imgUrl}
        width={0}
        height={0}
        sizes="100vw"
        // style={{ width: "100%", height: "auto", borderRadius: "10px" }}
        className={"w-full h-auto rounded-[10px]"}
      />

      <h4
        className={
          " font-semibold text-[20px] leading-[32px] text-white my-10 "
        }
      >
        {title}
      </h4>
      <p
        className={
          " font-normal text-[18px] leading-[32px] text-white text-justify line-clamp-3"
        }
      >
        {content}
      </p>
    </div>
  );
};

export default ServiceCard;
