import { sidebarItems } from "@/Constants/DashboardConstants";
import Link from "next/link";

export default function SideBar () {
    return <aside className="bg-[#2a3542] h-full md:fixed right-0 w-[210px]">
    <div id="sidebar"  className="flex flex-col gap-2 px-4 py-5 text-white text-sm">
        {sidebarItems.map(item => {
            return <Link href={item.link} key={item.link} className="flex flex-row gap-2 py-2 px-3 hover:bg-zinc-700 items-center rounded-md">
                <i className={`${item.icon} text-lg text-secondary flex items-start`}></i>
{item.title}
            </Link>
        })}
    </div>
</aside>
}