'use client'

import { SetAsRead } from "@/lib/Actions/Messages.action";
import { useRouter } from "next/navigation";

export default function SetAsReadButton({uid} : {uid:string}) {
    const router = useRouter();
 return   <button className={`bg-blue-400 px-3 py-2 rounded-lg text-white`}
    onClick={() => {
        SetAsRead(uid);
router.refresh();
    }}>
    علامت زدن به عنوان خوانده شده
    </button>
}