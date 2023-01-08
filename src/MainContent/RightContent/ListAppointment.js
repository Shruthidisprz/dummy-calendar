// import { format, parse, parseISO } from "date-fns";
// import { format } from "date-fns";
import React from "react";
import './ListAppointment.scss';
const ListAppointment=(props)=>{
    const event = props.event;
    const currentDate = props.currentDate;
    // const [startTime , setSatrtTime] = useState('');
    return(
        <div>
            {/* {event && format(currentDate, "dd LLLL yyyy")} */}
            {event.map((item,index)=>{
                const start = parseInt(item.startTimeHrMin.slice(11,13));
                const end = parseInt(item.endTimeHrMin.slice(11,13));
                // if(start >12){
                //     setSatrtTime(((start%12)+12) + item.startTimeHrMin.slice(13,16))
                // }else{
                //     setSatrtTime((start%12) + item.startTimeHrMin.slice(13,16))
                // }
                const startTime = (start%12===0)?(12+item.startTimeHrMin.slice(13,16)):(start%12) + item.startTimeHrMin.slice(13,16);
                const endTime = (end%12===0)?(12+item.endTimeHrMin.slice(13,16)):(end%12)+ item.endTimeHrMin.slice(13,16);
                return(
                    (currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)) &&
                            <li key={index} className="event-display-side">
                            <div>{item.eventName}</div>
                            {/* {(start >12) ? setSatrtTime(((start%12)+12) + item.startTimeHrMin.slice(13,16)) : setSatrtTime((start%12) + item.startTimeHrMin.slice(13,16))} */}
                            <div><span>{(start>=12) ? startTime+" pm" : startTime+" am"} - </span>
                            <span> {(end>=12) ? endTime+" pm" : endTime+" am"}</span></div>
                            {/* <div><span>{item.startTimeHrMin.slice(11,16)} - </span>
                            <span> {item.endTimeHrMin.slice(11,16)}</span></div> */}
                            <div>{item.descriptionOfEvent}</div>
                            </li>
                )})}
        </div>
    )
}
export default ListAppointment;