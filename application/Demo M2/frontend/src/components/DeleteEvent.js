import React,{useState} from 'react';
//This whole file is a temp file for learning and testing, NOT FOR FINAL PRODUCT
export const DeleteEvent=({onDelete,eventText,onClose})=>{
    const [title,setTitle]=useState('');
    const [error,setError]=useState(false);

    return(
        <>
        <div id="deleteEvent">
            <h2>Delete Event</h2>
            <p id="eventText">{eventText}</p>
            <button onClick={onDelete} id="deleteButton">DELETE</button>
            <button
                onClick={onClose}
                id="cancelButton">CANCEL</button>
        </div>
        <div id="backDrop"></div>
        </>
    )
}