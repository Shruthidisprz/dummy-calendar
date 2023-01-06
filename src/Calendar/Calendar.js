import React from 'react';
import './Calendar.scss';
import { DaysOfWeek } from "./DaysOfWeek";
import Cell from './Cell';
import { addMonths, addYears, differenceInDays, endOfMonth, format, setDate, startOfMonth,subMonths, subYears } from 'date-fns';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLessThan, faGreaterThan,faArrowRightLong, faArrowLeftLong } from '@fortawesome/free-solid-svg-icons';
// // import {faArrowRightLong, faArrowLeftLong} from '@fortawesome/free-regular-svg-icons'

const Calendar =(props)=>{
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
    const prevMonth=()=>onChange(subMonths(value,1));
    const nextMonth=()=>onChange(addMonths(value,1));
    const prevYear=()=>onChange(subYears(value,1));
    const nextYear=()=>onChange(addYears(value,1));
    const handleClickDate=(date)=>{
        const clickDate = setDate(value, date);
        console.log(clickDate);
        onChange(clickDate);
    }
    return(
        <div className='calendar'>
            <div className='calendar-top-row'>
                <div className='claendar-top-row-month'>
                    <span onClick={prevMonth} className="arrow">{"<"}</span>
                    <span><b>{format(value,"LLLL")}</b></span>
                    <span onClick={nextMonth} className="arrow">{">"}</span>
                </div>
                <div className='calendar-top-row-year'>
                    <span onClick={prevYear} className="arrow">{"<"}</span>
                    <span><b>{format(value,"yyyy")}</b></span>
                    <span onClick={nextYear} className="arrow">{">"}</span>
                </div>
            </div>
            <div className='calendar-view'>
                <div className='calendar-days-of-week'>
                {DaysOfWeek.map((days,index)=><div className='days-of-week' key={index}><Cell>{days}</Cell></div>)}
                </div>
                <div className='calendar-dates'>
                {Array.from({length:prevStartDateGap-1}).map((index)=><div key={index}><Cell/></div>)}
                {Array.from({length:numOfDays}).map((days,index)=>{
                    const date = index+1;
                    const isCurrentDate = date===value.getDate();
                    return(
                        <div key={date} onClick={()=>handleClickDate(date)} className="date-cell"><Link to="/days"><Cell isActive={isCurrentDate}>{date}</Cell></Link></div>
                    )})
                }
                {Array.from({length:afterEndDateGap}).map((index)=><div key={index}><Cell/></div>)}
                </div>
            </div>
        </div>
    )
}
export default Calendar