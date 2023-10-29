import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [title, setTitle] = React.useState("");
    const [content, setContent] = React.useState("");
    const [notes, setNotes] = React.useState([]);
    const [add, setAdd] = React.useState(false);
    const [del, setDel] = React.useState(false);

    const titleHandler = (event) => {
        setTitle(event.target.value);
    };

    const contentHandler = (event) => {
        setContent(event.target.value);
    };

    // const noteHandler = (event) => {};

    const addHandler = (event) => {
        event.preventDefault();
        setNotes((prev) => [...prev, { title: title, content: content }]);
        setTitle("");
        setContent("");
        setAdd(true);
    };

    const delHandler = (id) => () => {
        setNotes((prev) => prev.filter((note, idx) => idx !== id));
        setDel(true);
    };
    return (
        <div>
            <Header />
            <CreateArea titleFunc={titleHandler} contentFunc={contentHandler} addFunc={addHandler} titleValue={title} contentValue={content}/>
            {notes.map((note, idx) => (
                <Note key={idx} title={note.title} content={note.content} id={idx} delFunc={delHandler} />
            ))}
            <Footer />
        </div>
    );
}

export default App;
