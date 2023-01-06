import {addHours,eachHourOfInterval,format} from "date-fns";
import React, { useState } from "react";
// import React from "react";
import './DayInterval.scss';
import DisplayEvent from "./DisplayEvent";

const DayInterval=(props)=>{
    const currentDate= props.currentDate;
    const event = props.event;
    const [filteredEvent,setFilteredEvent]=useState([]);
    // console.log(currentDate.toDateString());
    // const date = currentDate.getDate();
    // console.log(date);
    // const month = currentDate.getMonth();
    // console.log(month);
    // const year = currentDate.getFullYear();
    // console.log(year);
    // const newDate = new Date(year,month,date);
    const newDate = new Date(currentDate.getFullYear(),currentDate.getMonth(),currentDate.getDate());
    // const newDate= currentDate.toISOString().slice(0,10);
    console.log(newDate);
    // console.log(new Date().getUTCDate());
    // console.log(add(currentDate,{hours: 23,minutes: 59,seconds:59}));
    const eachHourOfDay = eachHourOfInterval({
        start:newDate,
        end:addHours(newDate,24)
    })
    // console.log(eachHourOfDay);
    // console.log(new Date())
    return(
        <div className="day-view">
            <div className="day-interval">
            <div className="current-day">
                <div><b>{format(currentDate,"EEEE")}</b></div>
                <div><b>{currentDate.getDate()}</b></div>
            </div>
            <div className="time-line">
                <div></div>
                {eachHourOfDay.map((day,index)=>{
                    return(
                    // <ul className="time-interval" key={index}><li className="time"><div className="time-format">{index===0||index===24 ?"0 am":format(day,"h aaa")}</div><div className="event"><hr/> hello </div></li></ul>
                    <div className="time-interval">
                        <div className="one-interval">
                        {/* <div className="time">{index===0||index===24 ? "00":format(day,"HH")}</div> */}
                        <div className="time">{format(day,"HH")}</div>
                        <hr/>
                        </div>
                        {/* <div className="time">{format(day,"HH")}</div> */}
                        

                        <div className="event">
                            {/* {console.log(index.toString())} */}
                            <DisplayEvent day={day} event={event} filteredEvent={filteredEvent} setFilteredEvent={setFilteredEvent}/>
                            {/* {filteredEvent} */}
                            {/* {console.log(filteredEvent,"dayinterval")} */}
                        </div>
                    </div>
                    )})}               
            </div>
            {/* {Array.from({length:eachHourOfDay}).map((day,index)=>{
                const time = eachHourOfDay;
                return(
                    <ul className="time-interval">
                    <li>day</li>
                    </ul>
            )})} */}
            </div>
            {filteredEvent}
        </div>
    )
}
export default DayInterval