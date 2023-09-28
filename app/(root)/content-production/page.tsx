import ContentCreationData from "@/lib/Actions/ContentCreation.action";
import VideoPlayer from "./VideoPlayer";
import { url } from "inspector";
import { BaseUrl } from "@/Constants/Config";

export default async function ContentProduction() {
  const response = await fetch(
    new URL("/api/content/content-production", BaseUrl)
  );
  const data = await response.json();
  return (
    <main className="flex flex-col gap-6 justify-center w-full max-w-[1270px] mx-auto text-white px-4">
      <VideoPlayer videos={data.data.Videos} />
      <section
        className=""
        dangerouslySetInnerHTML={{ __html: data.data.Content }}
      />
    </main>
  );
}
