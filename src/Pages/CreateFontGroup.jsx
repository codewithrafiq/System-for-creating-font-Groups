import axios from "axios";
import React, { useState } from "react";
import SelectFont from "../components/SelectFont";
import { useNavigate } from "react-router-dom";

const CreateFontGroup = () => {
  const [groupName, setgroupName] = useState();
  const [allFrontGroup, setAllFrontGroup] = useState({});

  const navigate = useNavigate();

  let getChangesValue = (id, value) => {
    let o = {
      name: value.name,
      font: value.font,
      fontName: value.fontName,
    };
    setAllFrontGroup({ ...allFrontGroup, [id]: o });
  };
  const filterListAndRemove = (id) => {
    let d = inputList.filter(function (item) {
      return item.id !== id;
    });
    setInputList(d);
  };

  let createFontGroupObject = () => {
    var size = Object.keys(allFrontGroup).length;
    console.log("size--->", size);
    if (size < 2) {
      alert("Group size must be greater than two.");
    } else {
      // font_names: (allFrontGroup.map((f,i)=>f.name))
      let font = Object.values(allFrontGroup).map((f, i) => f.name);
      console.log("font.....>", font);
      console.log(
        "createFontGroupObject-------allFrontGroup-->",
        allFrontGroup
      );
      axios({
        url: "/api/create-font-group",
        method: "POST",
        data: {
          title: groupName,
          count: size,
          fonts: Object.values(allFrontGroup),
        },
      })
        .then((response) => {
          // console.log(
          //   "================createFontGroupObject===================="
          // );
          // console.log(response);
          // console.log("====================================");
          navigate("/font-groups");
        })
        .catch((error) => {
          // console.log("================error====================");
          // console.log(error);
          // console.log("====================================");
        });
    }
  };

  const [inputList, setInputList] = useState([
    <SelectFont
      key={0}
      remove={filterListAndRemove}
      id={0}
      cOnChange={getChangesValue}
    />,
  ]);
  const onAddBtnClick = (event) => {
    setInputList(
      inputList.concat(
        <SelectFont
          key={inputList.length}
          remove={filterListAndRemove}
          id={inputList.length}
          cOnChange={getChangesValue}
        />
      )
    );
  };
  // console.log("inputList======>", inputList);
  return (
    <div className="w-full p-9">
      <div className="w-full">
        <p className="">Create Font Group</p>
        <p className="">You have to select at least two fonts</p>
      </div>
      <div className="w-full py-2">
        <input
          className="w-full border-2"
          placeholder="Group Title"
          type="text"
          onChange={(e) => setgroupName(e.target.value)}
        />
      </div>
      {inputList}
      <div className=" flex justify-between">
        <button
          className="bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
          onClick={onAddBtnClick}
        >
          Add Row
        </button>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 border border-green-700 rounded" onClick={createFontGroupObject}>Create</button>
      </div>
    </div>
  );
};

export default CreateFontGroup;
