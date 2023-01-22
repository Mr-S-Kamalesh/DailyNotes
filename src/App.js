import { useEffect, useState } from "react";
import "./App.css";
import CreateNote from "./CreateNote";
import Footer from "./Footer";
import Header from "./Header";
import Notes from "./Notes";
const getLoacaleStorage = () => {
  let list = localStorage.getItem("lists");
  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

function App() {
  const [noteValue, setNotValue] = useState(getLoacaleStorage);
  const addNotes = (note) => {
    setNotValue((preValu) => {
      return [...preValu, note];
    });
  };
  const deleteNode = (id) => {
    setNotValue((oldData) =>
      oldData.filter((forDel, ind) => {
        return ind !== id;
      })
    );
  };

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(noteValue));
  }, [noteValue]);
  // console.log(`${noteValue[0].content} and : ${noteValue[0].content});

  return (
    <div>
      <Header />
      <CreateNote noteData={addNotes} />
      {noteValue.map((noteVal, index) => {
        return (
          <Notes
            key={index}
            id={index}
            title={noteVal.title}
            content={noteVal.content}
            onselect={deleteNode}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
