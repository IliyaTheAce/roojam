'use client'

import { DeleteMessage, SetAsRead } from "@/lib/Actions/Messages.action";
import { useRouter } from "next/navigation";

export default function DeleteButton({uid} : {uid:string}) {
    const router = useRouter();
 return   <button className={`bg-red-400 px-3 py-2 rounded-lg text-white`}
    onClick={() => {
        DeleteMessage(uid);
router.push('/admin/dashboard/messages');
    }}>
  حذف
    </button>
}