"use client";
import { useState } from "react";
import ReactPlayer from "react-player";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react"; // import from 'keen-slider/react.es' for to get an ES module

export default function VideoPlayer({
  videos,
}: {
  videos: [{ title: string; url: string }];
}) {
  const [selectedVideo, setSelectedVideo] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      },
      rtl: true,
      breakpoints: {
        "(min-width: 400px)": {
          slides: { perView: 2, spacing: 5 },
        },
        "(min-width: 1000px)": {
          slides: { perView: 4, spacing: 10 },
        },
      },
      slides: { perView: 1 },
    },
    [
      // add plugins here
    ]
  );
  return (
    <section className="flex flex-col items-center justify-center ">
      <ReactPlayer
        url={videos[selectedVideo].url}
        controls
        width={"100%"}
        height={"auto"}
      />
      <div ref={sliderRef} className="w-full mt-10 keen-slider">
        {videos.map((video, index) => (
          <button
            onClick={() => {
              setSelectedVideo(index);
            }}
            key={'video-'+index}
            className={`${
              index === selectedVideo ? "bg-black" : "hover:bg-black"
            } p-2 flex flex-col items-center gap-2 keen-slider__slide`}
          >
            <div className="w-full h-auto aspect-video bg-white flex justify-center items-center text-black">
              Video Preview
            </div>
            <p className="line-clamp-1">{video.title}</p>
          </button>
        ))}
        {loaded && instanceRef.current && (
          <>
            <Arrow
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.prev()
              }
              disabled={currentSlide === 0}

            />

            <Arrow
              left
              onClick={(e: any) =>
                e.stopPropagation() || instanceRef.current?.next()
              }
              disabled={currentSlide === videos.length - 1}
            />
          </>
        )}
      </div>
    </section>
  );
}

function Arrow(props: {
  disabled: boolean;
  left?: boolean;
  onClick: (e: any) => void;
}) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return (
    <svg
      onClick={props.onClick}
      className={`arrow ${
        props.left ? "arrow--left" : "arrow--right"
      } ${disabeld}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {props.left && (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      )}
      {!props.left && (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}
