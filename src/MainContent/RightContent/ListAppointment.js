// import { format, parse, parseISO } from "date-fns";
import { format } from "date-fns";
import React from "react";
import './ListAppointment.scss';
const ListAppointment=(props)=>{
    const event = props.event;
    const currentDate = props.currentDate;
    
    return(
        <div>
            {/* {event && format(currentDate, "dd LLLL yyyy")} */}
            {event.map((item,index)=>{
                return(
                    (currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)) &&
                            <li key={index} className="event-display-side">
                            <div>{item.eventName}</div>
                            <div><span>{item.startTimeHrMin.slice(11,16)} - </span>
                            <span> {item.endTimeHrMin.slice(11,16)}</span></div>
                            <div>{item.descriptionOfEvent}</div>
                            </li>
                )})}
        </div>
    )
}
export default ListAppointment;