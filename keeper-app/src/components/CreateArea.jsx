import React from "react";

function CreateArea(props) {
    return (
        <div>
            <form>
                <input name="title" placeholder="Title" onChange={props.titleFunc} value={props.titleValue}/>
                <textarea name="content" placeholder="Take a note..." rows="3" onChange={props.contentFunc} value={props.contentValue}/>
                <button onClick={props.addFunc}>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
