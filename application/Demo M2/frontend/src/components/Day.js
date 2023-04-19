import React from 'react';

export const Day =({day,onClick})=>{
    const className=`day${day.value==='padding'?'padding':''}${day.isCurrentDay?'currentDay':''}`;
    return(
        <div onClick={onClick} className='day'>
            {day.value==='padding'?'':day.value}
            {day.event&&<div className='event'>{day.event.title}</div>}
        </div>
    );
};