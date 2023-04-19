import React,{useState} from 'react';
//This whole file is a temp file for learning and testing, NOT FOR FINAL PRODUCT
export const NewEvent=({onSave,onClose})=>{
    const [title,setTitle]=useState('');
    const [error,setError]=useState(false);

    return(
        <>
        <div id="newEvent">
            <h2>New Event</h2>
            <input
                className={error?'error':''}
                value={title}
                onChange={e=>setTitle(e.target.value)}
                id="eventTitleInput"
                placeholder="Event Title"
            />
            <button
                onClick={()=>{
                    if(title){
                        setError(false);
                        onSave(title);
                    }else{
                        setError(true);
                    }
                }}
                id="saveButton">SAVE</button>
            <button
                onClick={onClose}
                id="cancelButton">CANCEL</button>
        </div>
        <div id="backDrop"></div>
        </>
    )
}