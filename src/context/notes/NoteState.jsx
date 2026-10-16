import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const host = "http://localhost:5000"
    const notesInitial = [

    ]
    const [notes, setNotes] = useState(notesInitial)

    //Add a Note
    const addNote = async (title, description, tag) => {
        // API Call

        const response = await fetch(`${host}/api/notes/addnote`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFjZDA3ODk5ZDQ1ODZkZjJhZGQ3ODExIn0sImlhdCI6MTc5MTgyMTczN30.QUhQN2sEQmt1eHF7xZOQNtRaWue2JoZySklZoyHgeh8'
            },
            body: JSON.stringify({ title, description, tag })
        });



        const note = await response.json();
        setNotes(notes.concat(note))
    }

    //GET all Notes
    const getNote = async () => {
        // API Call

        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFjZDA3ODk5ZDQ1ODZkZjJhZGQ3ODExIn0sImlhdCI6MTc5MTgyMTczN30.QUhQN2sEQmt1eHF7xZOQNtRaWue2JoZySklZoyHgeh8'
            },
        });
        const json = await response.json()
        console.log(json)
        setNotes(json)
    }

    // Delete a Note
    const deleteNote = async (id) => {

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFjZDA3ODk5ZDQ1ODZkZjJhZGQ3ODExIn0sImlhdCI6MTc5MTgyMTczN30.QUhQN2sEQmt1eHF7xZOQNtRaWue2JoZySklZoyHgeh8'
            },
        });
        const json = await response.json();

        console.log(json)

        console.log("Deleting the note with id" + id);
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }



    // Edit a Note 
    const editNote = async (id, title, description, tag) => {
        // API Call

        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNmFjZDA3ODk5ZDQ1ODZkZjJhZGQ3ODExIn0sImlhdCI6MTc5MTgyMTczN30.QUhQN2sEQmt1eHF7xZOQNtRaWue2JoZySklZoyHgeh8'
            },
            body: JSON.stringify({ title, description, tag })
        });

        const newNotes = JSON.parse(JSON.stringify(notes));

        // Logic to edit in client
        for (let index = 0; index < newNotes.length; index++) {
            if (newNotes[index]._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;

            }

        }
        setNotes(newNotes);

    };



    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNote }}>
            {props.children}
        </NoteContext.Provider>
    );
};


export default NoteState;