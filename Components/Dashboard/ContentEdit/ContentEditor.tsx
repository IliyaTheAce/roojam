"use client";

import React, { createRef } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Font from "@ckeditor/ckeditor5-font";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { Image, ImageResize } from "@ckeditor/ckeditor5-image";
import "../../../app/editor.css";
type ContentEditorType = {
  onChangeContent?: (newContent: string) => any;
  startValue?: string;
};
export default function ContentEditor({
  onChangeContent,
  startValue,
}: ContentEditorType) {
  const API_URL = "https://upload.roojam.ir";
  const toolBarRef = createRef<HTMLDivElement>();
  function uploadAdapter(loader: any) {
    return {
      upload: () => {
        return new Promise((resolve, reject) => {
          const body = new FormData();
          loader.file.then((file: any) => {
            body.append("file", file);
            // let headers = new Headers();
            // headers.append("Origin", "http://localhost:3000");
            fetch(API_URL, {
              method: "post",
              body: body,
              // mode: "no-cors"
            })
              .then((res) => res.json())
              .then((res) => {
                resolve({
                  default: res.url,
                });
              })
              .catch((err) => {
                reject(err);
              });
          });
        });
      },
    };
  }
  function uploadPlugin(editor: any) {
    editor.plugins.get("FileRepository").createUploadAdapter = (
      loader: any
    ) => {
      return uploadAdapter(loader);
    };
  }

  return (
    <>
      <div ref={toolBarRef} />

      <CKEditor
        config={{
          extraPlugins: [uploadPlugin],
          language: "fa",
          // @ts-ignore
          fontFamily: {
            options: ["shabnam", "yekan", "tunisia", "IranSans"],
          },
          fontSize: {
            options: [
              "default",
              9,
              10,
              11,
              12,
              13,
              15,
              16,
              17,
              18,
              19,
              20,
              25,
              30,
              35,
              40,
            ],
          },
        }}
        //@ts-ignore
        editor={DecoupledEditor}
        onReady={(editor) => {
          // You can store the "editor" and use when it is needed.
          console.log("ready");
          if (toolBarRef.current) {
            toolBarRef.current.innerHTML = "";
            //@ts-ignore

            toolBarRef.current.appendChild(editor.ui.view.toolbar.element);
          }
          console.log("Editor is ready to use!", editor);
        }}
        data={startValue}
        onChange={(event, editor) => {
          //@ts-ignore
          const data = editor.getData();
          if (onChangeContent) {
            onChangeContent(data);
          }
        }}
      />
    </>
  );
}
