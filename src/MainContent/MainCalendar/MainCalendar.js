import React from 'react';
import { DaysOfWeek } from "../../Calendar/DaysOfWeek";
import { differenceInDays, endOfMonth, format, setDate, startOfMonth} from 'date-fns';
import './MainCalendar.scss'
import Cells from './Cells';
// import ShowEvent from './ShowEvent';
// import { Link } from 'react-router-dom';
const MainCalendar =(props)=>{
    const event = props.event;
    const value = props.value;
    const onChange=props.onChange;
    const startDate = startOfMonth(value);
    const endDate =endOfMonth(value);
    const numOfDays= differenceInDays(endDate,startDate)+1; 
    const prevStartDateGap = startDate.getDay();
    let check = endDate.getDay();
    if(startDate.getDay()===0){
        (check+=1)
    }
    const afterEndDateGap=check===0?check:7-check;
    const handleClickDate=(date)=>{
        const clickDate = setDate(value, date);
        // console.log(clickDate ,"clickDate");
        onChange(clickDate);
    }
    return(
        <div className='main-calendar'>
            <div className='main-calendar-view'>
                <div className='main-calendar-days'>
                    {DaysOfWeek.map((days,index)=><div className='main-calendar-days-of-week' key={index}>{days}</div>)}
                    {Array.from({length:prevStartDateGap-1}).map((index)=><div key={index}><Cells/></div>)}
                    {Array.from({length:numOfDays}).map((days,index)=>{
                        const date = index+1;
                        const isCurrentDate = date===value.getDate();
                        return(
                            <div key={date} onClick={()=>handleClickDate(date)}  className="date-cells">
                                <Cells isActive={isCurrentDate}>
                                    <div className='date-display'>
                                        <div>{date}</div>
                                        <div>{event.map((item,key)=>{
                                            // {console.log( item.eventDate.slice(0,10),"item date",format(setDate(value,date), "yyyy-MM-dd"),"format date")}
                                            console.log(item.eventDate.slice(0,10), "eventDate");
                                            console.log(setDate(value,date).toISOString().slice(0,10), "setDAte");
                                            return(
                                                <li index={key} className="event-month-view">{ item.eventDate.slice(0,10)===setDate(value,date).toISOString().slice(0,10) ? item.eventName : undefined}</li>
                                                // <li index={key} className="event-month-view">{ item.eventDate===setDate(value,date).toISOString().slice(0,10) ? item.eventName : undefined}</li>
                                                // <li index={key} className="event-month-view">{ item.eventDate.slice(0,10)=== format(setDate(value,date), "yyyy-MM-dd") ? item.title : undefined}</li>
                                            )})}
                                        </div>
                                    </div>
                                </Cells>
                            </div>
                        )})
                    }
                    {Array.from({length:afterEndDateGap}).map((index)=><div key={index}><Cells/></div>)}
                </div>
            </div>
        </div>
    )
}
export default MainCalendar