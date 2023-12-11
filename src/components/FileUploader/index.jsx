import React from "react";

import { api } from "../../utilities/axios";

import "./styles.scss";

const FileUploader = () => {
  //Upload file on file drop
  const uploadFile = async (e) => {
    try {
      e.preventDefault();
      let [file] = e.dataTransfer.files;
      console.log("file details", file);
      const formData = new FormData();
      formData.append("img-file", file, file.name);

      const { data } = await api.post("/upload-image", formData);

      console.log("data: ", data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="dropzone">
      <input
        id="dropzone-input"
        type="file"
        className="d-none"
        // onChange={uploadFile}
      />
      <label
        htmlFor="dropzone-input"
        className="dropzone-box"
        onDragOver={uploadFile}
        onDrop={uploadFile}
      >
        <p className="dropzone-label">Drop your file here...</p>
      </label>
    </div>
  );
};

export default FileUploader;
