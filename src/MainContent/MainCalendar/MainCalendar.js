import React, { useContext } from 'react';
import { DaysOfWeek } from "../../Calendar/DaysOfWeek";
import { differenceInDays, endOfMonth, setDate, startOfMonth} from 'date-fns';
import './MainCalendar.scss'
import Cells from './Cells';
import { DataContext } from '../../DataContext/DataContext';
// import ShowEvent from './ShowEvent';
// import { Link } from 'react-router-dom';
const MainCalendar =()=>{
    const {event, currentDate,setCurrentDate} = useContext(DataContext);
    // const event = props.event;
    // const currentDate = props.currentDate;
    // const setCurrentDate=props.setCurrentDate;
    const startDate = startOfMonth(currentDate);
    const endDate =endOfMonth(currentDate);
    const numOfDays= differenceInDays(endDate,startDate)+1; 
    const prevStartDateGap = startDate.getDay()===0?7:startDate.getDay();
    let check = endDate.getDay();
    if(startDate.getDay()===0){
        (check+=1)
    }
    const afterEndDateGap=check===0?check:7-check;
    const handleClickDate=(date)=>{
        const clickDate = setDate(currentDate, date);
        // console.log(clickDate ,"clickDate");
        setCurrentDate(clickDate);
    }
    return(
        <div className='main-calendar'>
            <div className='main-calendar-view'>
                <div className='main-calendar-days'>
                    {DaysOfWeek.map((days,index)=><div className='main-calendar-days-of-week' key={index}>{days}</div>)}
                    {Array.from({length:prevStartDateGap-1}).map((index)=><div key={index}><Cells/></div>)}
                    {Array.from({length:numOfDays}).map((days,index)=>{
                        const date = index+1;
                        const isCurrentDate = date===currentDate.getDate();
                        const filterEvent = event.filter((filter)=>{
                            return filter.eventDate.slice(0,10)===setDate(currentDate,date).toISOString().slice(0,10);
                        })
                        // console.log(filterEvent)
                        return(
                            <div key={date} onClick={()=>handleClickDate(date)}  className="date-cells">
                                <Cells isActive={isCurrentDate}>
                                    <div className='date-display'>
                                        <div>{date}</div>
                                        {/* <div>{event.map((item,key)=>{ */}
                                            {/* {filterEvent && filterEvent.length <=2 ? filterEvent.map((filterItem,key)=>{
                                            return(
                                                <div className='event-month-view-wrapper'>
                                                <div index={key} className="event-month-view"> {filterItem.eventName}</div>
                                                </div>
                                            )})
                                        :filterEvent.slice(0,2).map((filterItem,key)=>{
                                            return(
                                                <div className='event-month-view-wrapper'>
                                                <div index={key} className="event-month-view"> {filterItem.eventName}</div>
                                                </div>
                                            )})} */}
                                            {filterEvent && (filterEvent.length >=3 ? filterEvent.slice(0,2):filterEvent).map((filterItem,key)=>{
                                                return(
                                                    <div className='event-month-view-wrapper'>
                                                    <div index={key} className="event-month-view"> {filterItem.eventName}</div>
                                                    </div>
                                                )})}
                                            {filterEvent && filterEvent.length>=3 &&
                                            <div className='see-more'><b>+<span>{filterEvent.length-2}</span> more</b></div>}
                                                {/* // <li index={key} className="event-month-view">{ item.eventDate===setDate(currentDate,date).toISOString().slice(0,10) ? item.eventName : undefined}</li>
                                                // <li index={key} className="event-month-view">{ item.eventDate.slice(0,10)=== format(setDate(currentDate,date), "yyyy-MM-dd") ? item.title : undefined}</li>
                                            // })} */}
                                        {/* </div> */}
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