import axios from "axios";
import React, { useEffect, useState } from "react";
import SingleFontGroup from "../components/SingleFontGroup";

const ShowFontGroups = () => {
  const [fontGroups, setFontGroups] = useState([]);
  const [reload, setReload] = useState();

  let reloadPage = (data) => {
    setReload(data);
  };

  useEffect(() => {
    let getFontGroups = async () => {
      axios({
        url: "/api/get-font-groups",
      })
        .then((res) => {
          setFontGroups(res?.data);
        })
        .catch((err) => {
          // console.log("==================ShowFontGroups==================");
          // console.log(err);
          // console.log("====================================");
        });
    };
    getFontGroups();
  }, [reload]);

  return (
    <div className="table_div p-10 bg-white">
      <div className="">
        <p className="font-medium text-xl leading-3">Our Font Groups</p>
        <p className="text-md leading-9">List of available font groups.</p>
      </div>
      <table className="w-full">
        <thead className=" text-start bg-gray-100">
          <tr>
            <th className="px-6 py-4 text-xs uppercase text-gray-800  text-start">
              Name
            </th>
            <th className="px-6 py-4 text-xs uppercase text-gray-800  text-start">
              Fonts
            </th>
            <th className="px-6 py-4 text-xs uppercase text-gray-800  text-start">
              Count
            </th>
            <th className="px-6 py-4 text-xs uppercase text-gray-800  text-start"></th>
          </tr>
        </thead>
        <tbody>
          {fontGroups?.map((group, i) => (
            <SingleFontGroup key={i} group={group} reloadPage={reloadPage} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowFontGroups;
