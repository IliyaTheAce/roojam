"use client";
import { useState } from "react";
export default function VideoPlayer({
  videos,
}: {
  videos: [{ title: string; filePath: string; customData: { poster: string } }];
}) {
  const [selectedVideo, setSelectedVideo] = useState(0);
  return (
    <section className="flex flex-col items-center justify-center">
      <video className="w-full h-auto">
        <source src={videos[selectedVideo].filePath} />
      </video>
      <div className="lg:flex flex-row gap-1 hidden">
        {videos.map((video, index) => (
          <button>{video.title}</button>
        ))}
      </div>
    </section>
  );
}
