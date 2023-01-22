import React from "react";
import LeftSidebarForm from "./LeftSidebarForm";
import NoteForm from "./NoteForm";

export default function Notes() {

    const [haveNotes, updateHaveNotes] = React.useState(false)
    
    const createANewNote = () => {
        <NoteForm />   
        console.log("first Click")
        updateHaveNotes(true)
        console.log("Second Click")
    }
    return (
        <div className="allNotes">
            { haveNotes === false ? <div className="noNotes">
                <h1>You have no Notes.</h1>
                <button className="addNote" onClick={createANewNote}>Create one Now</button>
            </div> :
            <div className="haveNotes">
                <div className="leftSideBar">
                    <LeftSidebarForm />
                </div>
                <div className="rightSideBar">
                    Right Side Bar
                </div>
            </div>
            }
        </div>
    )
}