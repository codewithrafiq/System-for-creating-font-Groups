import axios from "axios";
import React, { useEffect, useState } from "react";

const SelectFont = ({ remove, id, cOnChange }) => {
  const [fonts, setFonts] = useState();
  const [name, setName] = useState();
  const [fontName, setFontName] = useState();
  const [font, setFont] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let getAllFonts = async () => {
      setLoading(true);
      axios({
        url: "/api/get-fonts-id-and-name",
        method: "GET",
      })
        .then((response) => {
          setFonts(response?.data);
          setLoading(false);
        })
        .catch((error) => {
          // console.log("error--->", error);
        });
    };
    getAllFonts();
  }, []);

  if (loading) return <h1>Loading</h1>;
  return (
    <div className="w-full mb-2 py-3 px-2 border-2 rounded">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-1">
          <div className="icon_icon"></div>
          <div className="">
            <input
              onChange={(e) => {
                setName(e.target.value);
                cOnChange(id, {
                  fontName: fontName,
                  font: font,
                  name: e.target.value,
                });
              }}
              className="w-full border-1 rounded"
              placeholder="Font Name"
              type="text"
            />
          </div>
        </div>
        <div className="col-span-1">
          <select
            onChange={(e) => {
              setFont(e.target.value.name);
              setFontName(JSON.parse(e.target.value).name);
              cOnChange(id, {
                fontName:JSON.parse(e.target.value).name,
                font: JSON.parse(e.target.value).id,
                name: name,
              });
            }}
            className="w-full border-1 rounded"
          >
            <option id={555} className="text-gray-400" value={1}>
              Select a Font
            </option>
            {fonts?.map((item, i) => (
              <option
                key={i}
                name={item?.name}
                value={JSON.stringify({ id: item?._id, name: item?.name })}
              >
                {item?.name}
              </option>
            ))}
          </select>
        </div>
        <div className="col-span-1">
          <input
            className="w-full border-1 rounded"
            placeholder="Specific Size"
            type="number"
          />
        </div>
        <div className="col-span-1 flex items-center">
          <div>
            <input
              className="w-full border-1 rounded"
              placeholder="Price Change"
              type="number"
            />
          </div>
          <div className=" px-2 ">
            <button onClick={() => remove(id)} className="text-red-700">
              X
            </button>
            {/* {console.log(fontName)} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectFont;
