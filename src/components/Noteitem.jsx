import React, {useContext} from 'react'
import NoteContext from '../context/notes/NoteContext';

const Noteitem = (props) => {
    const context = useContext(NoteContext);
    const { deleteNote } = context;
    const { note, updateNote, showAlert } = props;
    return (
        <div className='col-md-3 my-2'>
            <div className="card my-2">
                <div className="card-body">
                    <div className='d-flex align-items-center'>
                    <h5 className="card-title">{note.title}</h5>
                    <span  onClick={()=>{deleteNote(note._id);
                         showAlert("Deleted successfully", "success");}} ><i className="fa-solid fa-trash mx-2"></i></span>
                   <span onClick={()=>{updateNote(note)}}><i className="fa-regular fa-pen-to-square mx-2"></i></span>
                    </div>
                    <p className="card-text">{note.description}</p>
                   
                </div>
            </div>
        </div>
    )
}

export default Noteitem