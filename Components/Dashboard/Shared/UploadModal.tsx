"use client";
import { useRef, useState } from "react";
export default function UploadModal({
  onUpload,
  setModalActive,
}: {
  onUpload: (url: string) => any;
  setModalActive: (state: boolean) => any;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState(null);
  return (
    <div
      className={`fixed z-50 top-0 right-0 w-full h-screen bg-gray-400 bg-opacity-30 flex items-center justify-center`}
    >
      <form
        onSubmit={async (e) => {
          const formData = new FormData();
          console.log(e.currentTarget.file.files[0]);
          formData.append("file", e.currentTarget.file.files[0]);
          e.preventDefault();
          const result = await fetch("/api/upload", {
            method: "post",
            body: formData,
          });
          if (result.ok) {
            const res = await result.json();
            onUpload(res.url);
            setModalActive(false);
          }
        }}
        name="fileUpload"
        method="post"
        encType="multipart/form-data"
        className="min-h-[400px] min-w-[500px] flex flex-col bg-white rounded-lg p-4 gap-3 items-center"
      >
        <h3 className="w-full pb-3 border-b-[1px] border-gray-600 text-md font-semibold">
          <i className="fi fi-rr-cross" />
          آپلود فایل
        </h3>
        <div className="flex flex-row gap-3 ">
          <input
            name="file"
            type="file"
            hidden
            ref={fileRef}
            onChange={(e) => {
              if(
                !e.target.files
              ) return;
              var file = e.target.files[0];
              let reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onload = () => {
                //@ts-ignore
                setFile(reader.result);
              };
              reader.onerror = function (error) {
                console.log("Error: ", error);
              };
            }}
          />
          <button
            onClick={() => {
              fileRef.current?.click();
            }}
            type="button"
            className="px-3 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-500 transition-colors"
          >
            انتخاب فایل جدید
          </button>
          {file && (
            <button
              type="submit"
              className="px-3 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-500 transition-colors"
            >
              آپلود و ثبت
            </button>
          )}
        </div>
        {file&&
        <img src={file} alt="preview" className="max-w-[300px] h-auto" />
}
      </form>
    </div>
  );
}
