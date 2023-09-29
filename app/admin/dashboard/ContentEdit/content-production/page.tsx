"use client";
import ContentEditor from "@/Components/Dashboard/ContentEdit/ContentEditor";
import UploadModal from "@/Components/Dashboard/Shared/UploadModal";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
export type videoTypes = videoType[];
type videoType = {
  title: string;
  url: string;
};
export default function ContentProductionEdit() {
  const router = useRouter();
  const [videos, setVideos] = useState<videoTypes>([]);
  const [content, setContent] = useState("");
  const [startingValue, setStartingValue] = useState("");
  const [uploadModal, setUploadModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/api/content/content-production");
    const result = await response.json();
    if (result.result) {
      setContent(result.data.Content);
      setStartingValue(result.data.Content);
      if (result.data.Videos) {
        setVideos(result.data.Videos);
      }
      setLoading(false);
    }
  };

  const handleChange = (newContent: string) => {
    console.log("handled");
    setContent(newContent);
  };

  const handleUplaod = (url: string) => {
    const prevVideos = [...videos];
    const newVideo: videoType = { title: "", url };
    prevVideos.push(newVideo);
    setVideos(prevVideos);
  };

  const handleSetTitle = (index: number, newTitle: string) => {
    const prevVideos = [...videos];
    prevVideos[index].title = newTitle;
    setVideos(prevVideos);
  };
  const handleDeleteItem = (index: number) => {
    const prevVideos = [...videos];
    prevVideos.splice(index, 1);
    setVideos(prevVideos);
  };

  const handleSubmit = async () => {
    setLoading(true);
    console.log("Submitting");
    const data = {
      Content: content,
      Videos: videos,
    };
    await fetch("/api/content/content-production", {
      method: "POST",
      body: JSON.stringify(data),
    });
    setLoading(false);
    router.refresh();
  };
  return (
    <main className="relative flex flex-col gap-5 p-5 rounded-lg bg-white">
      {loading && (
        <div className="absolute top-0 right-0 w-full h-full bg-white bg-opacity-100 flex items-center justify-center z-[5]">
          در حال بارگزاری...
        </div>
      )}
      {uploadModal && (
        <UploadModal
          onUpload={handleUplaod}
          setModalActive={(state: boolean) => {
            setUploadModal(state);
          }}
        />
      )}
      <h1 className="w-full pb-3 border-b-[1px] border-gray-600 text-xl font-semibold">
        ویرایش صفحه تولید محتوا
      </h1>
      <div className="p-3 m-3 border-[1px] border-gray-600 rounded-lg">
        <div className="flex flex-row justify-between items-center px-4 py-2 border-b-[1px] border-gray-600">
          <label>فیلم های دمو</label>
          <button
            className="px-3 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-300 transition-colors"
            onClick={() => {
              setUploadModal(true);
            }}
          >
            فیلم جدید
          </button>
        </div>
        <table className="w-full">
          <thead>
            <tr className="text-right">
              <th>ردیف</th>
              <th>نام</th>
              <th>عملیات</th>
            </tr>
          </thead>
          <tbody>
            {videos &&
              videos.map((item, index) => {
                return (
                  <tr key={'video-item-' + index}>
                    <td>{index + 1}</td>
                    <td>
                      <input
                        type="text"
                        onChange={(e) => {
                          handleSetTitle(index, e.target.value);
                        }}
                        value={item.title}
                        placeholder="تیتر ویدیو"
                      />
                    </td>
                    <td className="flex flex-row gap-2">
                      <button
                        onClick={() => handleDeleteItem(index)}
                        className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-300 transition-colors "
                      >
                        حذف
                      </button>
                      <button
                        onClick={() => window.open(item.url)}
                        className="px-3 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-300 transition-colors "
                      >
                        نمایش
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <h2 className="w-full pb-3 border-b-[1px] border-gray-600 text-xl font-semibold">
        متن زیر ویدیو ها
      </h2>
      <ContentEditor
        onChangeContent={handleChange}
        startValue={startingValue}
      />
      <div>
        <button
          onClick={async () => handleSubmit()}
          className="px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-300 transition-colors "
        >
          ثبت تغییرات
        </button>
      </div>
    </main>
  );
}
