interface props {
  title: string;
  imgUrl: string;
}
import Image from "next/image";
export default function ServicesCard({ title, imgUrl }: props) {
  return (
    <div className="flex flex-col gap-3 p-4 rounded-md text-dimWhite">
      <Image src={imgUrl} alt={title} width={0} height={0} sizes="100vw" className="h-auto"/>
      <h1 className="text-lg font-semibold">{title}</h1>
    </div>
  );
}
