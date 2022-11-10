import React from "react";

const FontUpload = () => {
  const convertFontFiletoBase64 = async (file) => {
    const result_base64 = await new Promise((resolve) => {
      const fileReader = new FileReader();
      fileReader.onload = () => resolve(fileReader.result);
      fileReader.readAsDataURL(file);
    });
    return result_base64;
  };

  const onFileInput = async (e) => {
    const { files } = e.currentTarget;
    if (files && files?.length > 0) {
      const font = await convertFontFiletoBase64(files[0]);

      // @ts-ignore
      const fontFace = new FontFace("uploadedFont", `url(${font})`);
      document.fonts.add(fontFace);
      await fontFace.load();
    }
  };
  return (
    <div>
      <div className="container">
        <input type="file" onInput={onFileInput} accept={".ttf"} />
        <span className="text" style={{ fontFamily: "uploadedFont" }}>
          Sample Text
        </span>
      </div>
    </div>
  );
};

export default FontUpload;
