import Image from "next/image";

export default function Profile() {
  return (
    <div className="flex flex-row gap-3 rounded-lg  pl-3  hover:bg-slate-300 transition-colors  border-secondary border-2">
      <Image
        src="https://upload.roojam.ir/1685001714434_ali.jpg"
        alt="profile pic"
        width={45}
        height={45}
        className="aspect-square rounded-lg "
      />
      <span className="my-auto font-shabnam font-semibold text-dimBlack">
        ایلیا فرهادی
      </span>
    </div>
  );
}
