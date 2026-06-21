import React, {useContext} from 'react'
import noteContext from "../context/notes/noteContext"


const Noteitem = (props) => {
    const context = useContext(noteContext);
    const { deleteNote, togglePin } = context;
    const { note, updateNote } = props;

    const handleTogglePin = () => {
        togglePin(note._id, note.isPinned);
    };

    return (
        <div className="col-md-3">
            <div className="card my-3" style={{ position: 'relative' }}>
                <i
                    className={`fa-thumb-tack mx-2 ${note.isPinned ? 'fas' : 'far'}`}
                    onClick={handleTogglePin}
                    title={note.isPinned ? 'Unpin Note' : 'Pin Note'}
                    style={{
                        position: 'absolute',
                        top: '10px',
                        right: '10px',
                        cursor: 'pointer',
                        color: note.isPinned ? '#ffc107' : '#6c757d',
                        fontSize: '1.1rem',
                        transition: 'color 0.2s ease, transform 0.2s ease',
                        transform: note.isPinned ? 'rotate(0deg)' : 'rotate(45deg)',
                    }}
                ></i>
                <div className="card-body">
                    <div className="d-flex align-items-center">
                        <h5 className="card-title">{note.title}</h5>
                        <i className="far fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id)}}></i>
                        <i className="far fa-edit mx-2" onClick={()=>{updateNote(note)}}></i>
                    </div>
                    <p className="card-text">{note.description}</p>

                </div>
            </div>
        </div>
    )
}

export default Noteitem
