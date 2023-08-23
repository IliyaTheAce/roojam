"use client";

import React, { useEffect, useState } from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { SimpleUploadAdapter } from "@ckeditor/ckeditor5-upload";
import { Context } from '@ckeditor/ckeditor5-core';
import { Bold, Italic } from '@ckeditor/ckeditor5-basic-styles';
import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
export default function ContentEditor() {

    const API_URL = "http://localhost:3000/api/upload";
    const UPLOAD_ENDPOINT = "https://upload.roojam.ir/";
    
    function uploadAdapter(loader:any) {
        return {
          upload: () => {
            return new Promise((resolve, reject) => {
              const body = new FormData();
              loader.file.then((file:any) => {
                body.append("file", file);
                // let headers = new Headers();
                // headers.append("Origin", "http://localhost:3000");
                fetch(API_URL, {
                  method: "post",
                  body: body
                  // mode: "no-cors"
                })
                  .then((res) => res.json())
                  .then((res) => {
                    resolve({
                      default: res.url
                    });
                  })
                  .catch((err) => {
                    reject(err);
                  });
              });
            });
          }
        };
      }
      function uploadPlugin(editor:any) {
        editor.plugins.get("FileRepository").createUploadAdapter = (loader:any) => {
          return uploadAdapter(loader);
        };
      }

  return (
    <CKEditor
    config={{
        extraPlugins: [uploadPlugin]
      }}
      editor={ClassicEditor}
      onReady={(editor) => {
        // You can store the "editor" and use when it is needed.
        console.log("Editor is ready to use!", editor);
      }}
      onChange={(event, editor) => {
        // do something when editor's content changed
        const data = editor.getData();
        console.log({ data });
      }}
    />
  );
}
