import VideoPlayer from "./VideoPlayer";
import { BaseUrl } from "@/Constants/Config";
import type { Metadata } from "next";
export const metadata: Metadata = {
  description:
    "خدمات تولید محتوا با کیفیت برای کسب و کارها , محتوا سازی حرفه‌ای برای بهبود دیدگاه و شناخت برند شما",
  title: "رجام - تولید محتوا",
};
export default async function ContentProduction() {
  const response = await fetch(
    new URL("/api/content/content-production", BaseUrl)
  );
  const data = await response.json();
  return (
    <main className="flex flex-col gap-6 justify-center w-full max-w-[1270px] mx-auto text-white px-4">
      <VideoPlayer videos={data.data.Videos} />
      <section dangerouslySetInnerHTML={{ __html: data.data.Content }} />
    </main>
  );
}
