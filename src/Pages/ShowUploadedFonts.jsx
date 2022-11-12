import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowSingleFont from "../components/ShowSingleFont";

const ShowUploadedFonts = () => {
  const [fonts, setFonts] = useState();
  const [reload, setReload] = useState();
  const [loading, setLoading] = useState(false);

  let reloadPage = (data) => {
    setReload(data);
  };

  useEffect(() => {
    let getAllFonts = async () => {
      setLoading(true);
      axios({
        url: "/api/get-fonts",
        method: "GET",
      })
        .then((response) => {
          // // console.log("response: " + response.data);
          // // console.log("response: " + typeof(response.data));
          setFonts(response?.data);
          setLoading(false);
        })
        .catch((error) => {
          // // console.log("error--->", error);
        });
    };
    getAllFonts();
  }, [reload]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center">
        <p className="text-xl">Loading...</p>
      </div>
    );
  } else {
    return (
      <div className="table_div p-10 bg-white">
        <div className="">
          <p className="font-medium text-xl leading-3">Our Fonts</p>
          <p className="text-md leading-9">Browse a list of Zepto to </p>
        </div>
        <table className="w-full">
          <thead className=" text-start bg-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs uppercase text-gray-800  text-start">
                Font Name
              </th>
              <th className="px-6 py-4 text-xs uppercase text-gray-800  text-start">
                Preview
              </th>
              <th className="px-6 py-4 text-xs uppercase text-gray-800  text-start"></th>
            </tr>
          </thead>
          <tbody>
            {fonts?.map((item, i) => (
              <ShowSingleFont key={i} data={item} reloadPage={reloadPage} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
};

export default ShowUploadedFonts;
