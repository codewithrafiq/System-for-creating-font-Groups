import axios from "axios";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from 'react-router-dom';

const FontUpload = () => {
  const navigate = useNavigate();
  const convertFontFileToBase64 = async (file) => {
    const result_base64 = await new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });
    return result_base64;
  };

  const uploadFont = async (object) => {
    axios({
      url: "/api/add-font",
      method: "POST",
      data: object,
    })
      .then((response) => {
        // // console.log("response: " + JSON.stringify(response));
        navigate('/fonts');
      })
      .catch((error) => {
        // // console.log("error: " + JSON.stringify(error));
      });
  };

  const onDrop = useCallback(async (acceptedFiles) => {
    // console.log("acceptedFiles.length--->", acceptedFiles.length);
    for (let index = 0; index < acceptedFiles.length; index++) {
      let fileName = acceptedFiles[index].name;
      let fontToBase64 = await convertFontFileToBase64(acceptedFiles[index]);
      // // console.log('=============fontToBase64=======================');
      // // console.log(fontToBase64);
      // // console.log('==============fontToBase64======================');
      let object = {
        name: fileName.split(".")[0],
        data: fontToBase64,
      };
      await uploadFont(object);
    }
  }, []);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "file/ttf": [".ttf"],
    },
    onDrop,
  });

  return (
    <div className="w-full p-5 ">
      <div
        className="border-dashed border-2 border-slate-400 w-full h-[500px] flex justify-center items-center bg-slate-100"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <div className="flex flex-col items-center">
          <img
            className="w-12 text-gray-400"
            src="/icons/cloud-arrow-up.svg"
            alt="cloud-arrow-up"
          />
          <p className="font-normal leading-5">
            <span className="font-medium">Click to upload</span> or drag and
            drop
          </p>
          <p className="font-normal leading-5">Only TTF File Allowed</p>
        </div>
      </div>
    </div>
  );
};

export default FontUpload;
