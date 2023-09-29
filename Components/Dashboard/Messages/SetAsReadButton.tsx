"use client";

import { BaseUrl } from "@/Constants/Config";
import { revalidatePath } from "next/cache";
import { useRouter } from "next/navigation";

export default function SetAsReadButton({ uid }: { uid: string }) {
  return (
    <button
      className={`bg-blue-400 px-3 py-2 rounded-lg text-white`}
      onClick={async () => {
        const response = await fetch(
          new URL(`/api/messages?uid=${uid}`, BaseUrl),
          { method: "Patch" }
        );
        revalidatePath("/admin/dashboard/messages");
      }}
    >
      علامت زدن به عنوان خوانده شده
    </button>
  );
}
