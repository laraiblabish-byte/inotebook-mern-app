import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
    const notesInitial =  [
    {
        "_id": "6ace1361fc67fc00c26e9e41",
        "user": "6acd07899d4586df2add7811",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2026-10-13T11:17:53.345Z",
        "__v": 0
    },
    {
        "_id": "6ace23f91925432ff465867c",
        "user": "6acd07899d4586df2add7811",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "Youtube",
        "date": "2026-10-13T12:28:41.611Z",
        "__v": 0
    },
    {
        "_id": "6ace24241925432ff465867d",
        "user": "6acd07899d4586df2add7811",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "Youtube",
        "date": "2026-10-13T12:29:24.442Z",
        "__v": 0
    },
    {
        "_id": "6ace3f5b20910076cee66c7e",
        "user": "6acd07899d4586df2add7811",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "Youtube",
        "date": "2026-10-13T14:25:31.907Z",
        "__v": 0
    },
     {
        "_id": "6ace1361fc67fc00c26e9e41",
        "user": "6acd07899d4586df2add7811",
        "title": "My Title",
        "description": "Please wake up early",
        "tag": "personal",
        "date": "2026-10-13T11:17:53.345Z",
        "__v": 0
    },
    {
        "_id": "6ace23f91925432ff465867c",
        "user": "6acd07899d4586df2add7811",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "Youtube",
        "date": "2026-10-13T12:28:41.611Z",
        "__v": 0
    },
    {
        "_id": "6ace24241925432ff465867d",
        "user": "6acd07899d4586df2add7811",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "Youtube",
        "date": "2026-10-13T12:29:24.442Z",
        "__v": 0
    },
    {
        "_id": "6ace3f5b20910076cee66c7e",
        "user": "6acd07899d4586df2add7811",
        "title": "New note",
        "description": "Please access the playlist",
        "tag": "Youtube",
        "date": "2026-10-13T14:25:31.907Z",
        "__v": 0
    }
    
]
    const [notes, setNotes] = useState(notesInitial)
  
  
  return (
    <NoteContext.Provider value={{notes, setNotes}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;