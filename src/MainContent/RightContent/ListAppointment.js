// import { format, parse, parseISO } from "date-fns";
// import { format } from "date-fns";
// import { formatISO, parseISO } from "date-fns";
import moment from "moment/moment";
import React, { useContext, useEffect } from "react";
import { DataContext } from "../../DataContext/DataContext";
import { ServiceContext } from "../../DataContext/Services";
import './ListAppointment.scss';
const ListAppointment=()=>{
    // const {event,currentDate} = useContext(DataContext);
    // const {currentDate,event} = useContext(DataContext);
    const {currentDate} = useContext(DataContext);
    const {getAllEventByDate,getByDate} = useContext(ServiceContext);
    // const event = props.event;
    // const currentDate = props.currentDate;
    // const [startTime , setSatrtTime] = useState('');
    useEffect(()=>{
        getAllEventByDate(moment(currentDate,"DD-MM-YYYY").format("YYYY-MM-DD"));
        console.log(getByDate,"get")
        // eslint-disable-next-line
    },[currentDate,getByDate])

    // console.log(getEventByDate.eventDate,"date");
    return(
        <div>
            {getByDate && getByDate.map((item,index)=>{
            // {event.map((item,index)=>{
                const start = parseInt(item.startTimeHrMin.slice(11,13));
                const end = parseInt(item.endTimeHrMin.slice(11,13));
                const startTime = (start%12===0)?(12+item.startTimeHrMin.slice(13,16)):(start%12) + item.startTimeHrMin.slice(13,16);
                const endTime = (end%12===0)?(12+item.endTimeHrMin.slice(13,16)):(end%12)+ item.endTimeHrMin.slice(13,16);
                return(
                    (currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)) &&
                        <li key={index} className="event-display-side">
                        <div className="event-name">{item.eventName}</div>
                        <div><span>{(start>=12) ? startTime+" pm" : startTime+" am"} - </span>
                        <span> {(end>=12) ? endTime+" pm" : endTime+" am"}</span></div>
                        <div className="event-name">{item.descriptionOfEvent}</div>
                        </li>
                )})}
        </div>
        // <div className="list-item">
        //     {/* <div className="list-item-wrapper"> */}
        //     {/* {event && format(currentDate, "dd LLLL yyyy")} */}
        //     {event.map((item,index)=>{
        //         const start = parseInt(item.startTimeHrMin.slice(11,13));
        //         const end = parseInt(item.endTimeHrMin.slice(11,13));
        //         // if(start >12){
        //         //     setSatrtTime(((start%12)+12) + item.startTimeHrMin.slice(13,16))
        //         // }else{
        //         //     setSatrtTime((start%12) + item.startTimeHrMin.slice(13,16))
        //         // }
        //         const startTime = (start%12===0)?(12+item.startTimeHrMin.slice(13,16)):(start%12) + item.startTimeHrMin.slice(13,16);
        //         const endTime = (end%12===0)?(12+item.endTimeHrMin.slice(13,16)):(end%12)+ item.endTimeHrMin.slice(13,16);
        //         return(
        //             (currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)) &&
        //                     <li key={index} className="event-display-side">
        //                     <div className="event-name">{item.eventName}</div>
        //                     {/* {(start >12) ? setSatrtTime(((start%12)+12) + item.startTimeHrMin.slice(13,16)) : setSatrtTime((start%12) + item.startTimeHrMin.slice(13,16))} */}
        //                     <div><span>{(start>=12) ? startTime+" pm" : startTime+" am"} - </span>
        //                     <span> {(end>=12) ? endTime+" pm" : endTime+" am"}</span></div>
        //                     {/* <div><span>{item.startTimeHrMin.slice(11,16)} - </span>
        //                     <span> {item.endTimeHrMin.slice(11,16)}</span></div> */}
        //                     <div className="event-name">{item.descriptionOfEvent}</div>
        //                     </li>
        //         )})}
        //         {/* </div> */}
        // </div>
    )
}
export default ListAppointment;