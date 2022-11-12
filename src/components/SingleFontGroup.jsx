import axios from "axios";
import React from "react";

const SingleFontGroup = ({ group, reloadPage }) => {
  const deleteFont = async (groupId) => {
    axios({
      url: `/api/delete-fonts-group/${groupId}`,
      method: "post",
    })
      .then((response) => {
        reloadPage(response);
      })
      .catch((error) => {
        // // console.log("error--->", error);
      });
  };
  return (
    <tr className="border-b-2">
      <td className="px-6 py-4 text-xs text-gray-700 text-start">
        {group?.title}
      </td>
      <td className="px-6 py-4 text-xs text-gray-700 text-start">
        {group?.fonts?.map((font, i) => (
          <p>
            <span className="font-medium">{font?.name}</span> =
            <span>{font?.fontName} , </span>
          </p>
        ))}
      </td>
      <td className="px-6 py-4 text-xs text-gray-700 text-start">
        <p className="">{group?.count}</p>
      </td>

      <td className="px-6 py-4 text-xs text-gray-700 text-start">
        <button
          onClick={() => deleteFont(group?._id)}
          class="hover:bg-red-700 hover:text-white text-red-600 font-bold py-2 px-4 rounded"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SingleFontGroup;
