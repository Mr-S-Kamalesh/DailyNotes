import React, { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const CreateNote = (props) => {
  const [inputData, setInputData] = useState({
    title: "",
    content: "",
  });
  const [expand, setExpand] = useState(false);
  const changeInput = (e) => {
    const { name, value } = e.target;
    setInputData((preValue) => {
      return { ...preValue, [name]: value };
    });
  };
  // console.log(inputData);

  const addItem = () => {
    if (!inputData.title || !inputData.content) {
      alert("Field Could Not Be Empty :)");
      return;
    }
    props.noteData(inputData);
    setInputData({ title: "", content: "" });
  };
  const expandInput = () => {
    setExpand(false);
  };
  const hideInput = () => {
    setExpand(true);
  };
  return (
    <div>
      <div className="main_note">
        <form>
          {expand ? (
            <input
              type="text"
              value={inputData.title}
              name="title"
              placeholder="Title"
              onChange={changeInput}
            />
          ) : null}
          <textarea
            rows=""
            column=""
            value={inputData.content}
            name="content"
            placeholder="write notes..."
            autoComplete="off"
            onChange={changeInput}
            onClick={hideInput}
            onDoubleClick={expandInput}
          ></textarea>
          {expand ? (
            <Button onClick={addItem} className="MuiButton-root">
              <AddIcon className="plus_sign" />
            </Button>
          ) : null}
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
