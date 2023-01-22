import React from "react";
import Button from "@mui/material/Button";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Notes = (props) => {
  const deleteNote = () => {
    props.onselect(props.id);
  };
  return (
    <div className="note">
      <p><h1>{props.title}</h1></p>
      <br/>
      <p>{props.content}</p>
      <Button onClick={deleteNote} className="dbtn">
        <DeleteOutlineIcon className="delbtn" />
      </Button>
    </div>
  );
};

export default Notes;
