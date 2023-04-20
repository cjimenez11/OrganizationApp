import React,{useState} from 'react';
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "../utils/HandleApi";
import ToDo from "./ToDo";

export const Day =({day,onClick})=>{
    const [toDo, setToDo] = useState([])
    const [text, setText] = useState("")
    const [isUpdating, setIsUpdating] = useState(false)
    const [toDoId, setToDoId] = useState("")

    const className=`day ${day.value==='padding'?'padding':''} ${day.isCurrentDay?'currentDay':''}`;

    const updateMode = (_id, text) => {
        setIsUpdating(true)
        setText(text)
        setToDoId(_id)
    }

    return(
        <div onClick={onClick} className={className}>
            {day.value==='padding'?'':day.value}
            {day.event&&<div className='event'>{day.event.title}</div>}
        </div>
    );
};