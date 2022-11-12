import React, { useEffect } from "react";
// import { Buffer } from "buffer";
import axios from "axios";

const ShowSingleFont = ({ data,reloadPage }) => {
  useEffect(() => {
    let setFont = async () => {
      const fontFace = new FontFace(`${data?.name}`, `url(${data?.data})`);
      document.fonts.add(fontFace);
      await fontFace.load();
    };
    setFont();
  }, [data?.data,data?.name]);

  const deleteFont = async (fontid) => {
    axios({
      url: `/api/delete-fonts/${fontid}`,
      method: "post",
    })
      .then((response) => {
        // // console.log("======deleteFont=========deleteFont==response===================");
        // // console.log(response);
        // // console.log("====================================");
        reloadPage(response)
      })
      .catch((error) => {
        // // console.log("error--->", error);
      });
  };

  return (
    <tr className="border-b-2">
      <td className="px-6 py-4 text-xs text-gray-700 text-start">
        {data.name}
      </td>
      <td className="px-6 py-4 text-xs text-gray-700 text-start">
        <span className="text" style={{ fontFamily: `${data?.name}` }}>
          Sample Text
        </span>
      </td>
      <td className="px-6 py-4 text-xs text-gray-700 text-start">
        <button onClick={()=>deleteFont(data?._id)} class="hover:bg-red-700 hover:text-white text-red-600 font-bold py-2 px-4 rounded">
          Delete
        </button>
      </td>
    </tr>
  );
};

export default ShowSingleFont;
