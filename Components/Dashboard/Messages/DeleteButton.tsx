"use client";

import { BaseUrl } from "@/Constants/Config";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export default function DeleteButton({ uid }: { uid: string }) {
  return (
    <button
      className={`bg-red-400 px-3 py-2 rounded-lg text-white`}
      onClick={async () => {
        const response = await fetch(
          new URL(`/api/messages?uid=${uid}`, BaseUrl),
          { method: "Delete" }
        );
        revalidatePath("/admin/dashboard/messages");
      }}
    >
      حذف
    </button>
  );
}
