import React,{useState, useEffect} from 'react';
import {Day} from './Day';
import {NewEvent} from './NewEvent'; //only for testing/learning, REPLACE WITH TODO COMPONENT
import {ToDo} from './ToDo';
import './calendar.css';

export const Calendar =()=>{
    const [nav, setNav]=useState(0);    //month tracker
    const [days, setDays]=useState([]); //day tracker
    const [dateDisplay, setDateDisplay]=useState('');   //displays month/year
    const [clicked, setClicked]=useState();
    const [events, setEvents]=useState(
        localStorage.getItem('events')?JSON.parse(localStorage.getItem('events')):[]
    );  //supposed to items attached to day, FIX TO ALLOW FOR MULTIPLE ITEMS PER DAY
    const eventForDate=date=>events.find(e=>e.date===date);
    var toDate=new Date();  //initializes current date

    //trying to figure out how to use the dateinput to adjust calendar on demand
//    var newDate=document.getElementById("newDate");
    const[dt,setDate]=useState(toDate);
    const handleDate=(event)=>{setDate(new Date(document.getElementById("newDate").value))};

    //function to set an event item
    useEffect(()=>{
        localStorage.setItem('events',JSON.stringify(events));
    }, [events]);

    //function for drawing calendar from date, SHOULD RELOCATE TO BACKEND JS
    useEffect(()=>{
        const weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        if(nav!==0){
            dt.setMonth(new Date().getMonth()+nav);
        }
        const day=dt.getDate();
        const month=dt.getMonth();
        const year=dt.getFullYear();
        console.log(year);
        const firstDayOfMonth=new Date(year,month,1);
        const daysInMonth=new Date(year,month+1,0).getDate();
        const dateString=firstDayOfMonth.toLocaleDateString('en-us',{
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
        });
        setDateDisplay(`${dt.toLocaleDateString('en-us',{month: 'long'})} ${year}`);
        const paddingDays=weekdays.indexOf(dateString.split(', ')[0]);

        const daysArr=[];
        for(let i=1;i<=paddingDays+daysInMonth;i++){
            const dayString='${month+1}/${i-paddingDays}/${year}';
            if(i>paddingDays){
                daysArr.push({
                    value: i-paddingDays,
                    event: eventForDate(dayString),
                    isCurrentDay: i-paddingDays===day&&nav===0,
                    date: dayString
                });
            }else{
                daysArr.push({
                    value: 'padding',
                    event: null,
                    isCurrentDay: false,
                    date: ''
                });
            }
        }
        setDays(daysArr);
    },[events,nav]);}
    useDate();

    //the actual calendar component
    return(
        <>
        <div id="c_container">
            <div id="c_header">
                <div id="monthDisplay">{dateDisplay}</div>
                <div>
                    <button id="prevMonth"
                        onClick={()=>setNav(nav-1)}
                    >BACK</button>
                    <button id="nextMonth"
                        onClick={()=>setNav(nav+1)}
                    >NEXT</button>
                    <input type="date" id="newDate" oninput={handleDate}/>
                </div>
            </div>
            <div id="weekdays">
                <div>Sunday</div>
                <div>Monday</div>
                <div>Tuesday</div>
                <div>Wednesday</div>
                <div>Thursday</div>
                <div>Friday</div>
                <div>Saturday</div>
            </div>
            <div id="calendar">
                {days.map((d,index)=>(
                    <Day
                        key={index}
                        day={d}
                        onClick={()=>{
                            if(d.value!=='padding'){
                                setClicked(d.date);
                            }
                        }}
                    />
                ))}
            </div>
        </div>
        {clicked&&
            <NewEvent
                onClose={()=>setClicked(null)}
                onSave={title=>{
                    setEvents([...events,{title,date:clicked}]);
                    setClicked(null);
                }}
            />
            //temp code for learning how to apply an event to a calendar, REPLACE WITH TO-DO CODE
        }
        </>
    );
}
export default Calendar;