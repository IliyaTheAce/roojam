interface props {
  title: string;
  imgUrl: string;
  url: string;
}
import Image from "next/image";
import Link from "next/link";
export default function ServicesCard({ title, imgUrl, url }: props) {
  return (
    <Link
      href={`/internet-services/${url}`}
      className="flex flex-col gap-3 p-4 rounded-md text-dimWhite items-center justify-center w-[200px]"
    >
      <Image
        src={imgUrl}
        alt={title}
        width={100}
        height={100}
        className="grayscale invert hover:invert-0 transition-all"
      />
      <h1 className="text-lg font-semibold">{title}</h1>
    </Link>
  );
}
