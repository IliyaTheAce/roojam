'use client'

import { useRouter } from "next/navigation";

export default function BackButton(){
    const router = useRouter();
 return   <button className={`bg-emerald-500 px-3 py-2 rounded-lg text-white`}
    onClick={() => {
router.back();
    }}>
   بازگشت
    </button>
}