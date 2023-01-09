// import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {addHours,eachHourOfInterval,format} from "date-fns";
// import moment from "moment";
import React, { useContext } from "react";
import { DataContext } from "../../DataContext/DataContext";
// import React from "react";
import './DayInterval.scss';
import DisplayEvent from "./DisplayEvent";

const DayInterval=()=>{
    const {currentDate} = useContext(DataContext);
    // const currentDate= props.currentDate;
    // const [filteredEvent,setFilteredEvent]=useState([]);
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
    // console.log(newDate);
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
                    {/* {event.map((item)=>{
                        const start =  moment (item.startTimeHrMin,'DD-MM-YYYY HH:mm')
                        // console.log(start,"start");
                        const end =  moment (item.endTimeHrMin,'DD-MM-YYYY HH:mm')
                        const result = end.diff(start,'minutes')
                        // console.log(result, "result")
                        const eventHeight = (result / 60)*46;
                        // console.log(parseInt(item.startTimeHrMin.slice(14,16)),"time");
                        const topHr = parseInt(item.startTimeHrMin.slice(11,13));
                        const topMin= (parseInt(item.startTimeHrMin.slice(14,16))/60)*46;
                        console.log(topHr, "topHr");
                        console.log(topMin, "topMin");
                        console.log((topHr*46)+topMin+92 , "top")
                        const isSelectedDate = currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)
                        return(
                            // (topHr*46)+topMin+46
                            <div className="event-wrapper">
                                <div className={isSelectedDate? "display-event" : "no-event"}style={{height:eventHeight,top:(topHr*46)+topMin+46, padding:"0px"}}><span>{isSelectedDate && item.eventName}</span><span><span><FontAwesomeIcon className="icon" icon={faTrash}/></span><span><FontAwesomeIcon className="icon"icon={faPencil}/></span></span></div>
                            </div>
                        )
                    })} */}
                    <DisplayEvent/>
                    {eachHourOfDay.map((day,index)=>{
                        return(
                        // <ul className="time-interval" key={index}><li className="time"><div className="time-format">{index===0||index===24 ?"0 am":format(day,"h aaa")}</div><div className="event"><hr/> hello </div></li></ul>
                        <div className="time-interval" key={index}>
                            <div className="one-interval">
                            {/* <div className="time">{index===0||index===24 ? "00":format(day,"HH")}</div> */}
                                <div className="time">
                                    <span>{format(day,"hh aaa")}</span>
                                </div>
                                <div className="hour-line"></div>
                            </div>
                            {/* <div className="time">{format(day,"HH")}</div> */}
                            

                            {/* <div className="event">
                                <DisplayEvent day={day} event={event} filteredEvent={filteredEvent} setFilteredEvent={setFilteredEvent}/>
                            </div> */}
                                {/* {filteredEvent} */}
                                {/* {console.log(index.toString())} */}


                                {/* {console.log(filteredEvent,"dayinterval")} */}

                            
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
            {/* {filteredEvent} */}
        </div>
    )
}
export default DayInterval