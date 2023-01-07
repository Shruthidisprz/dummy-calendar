import React from "react";
import Calendar from "../../Calendar/Calendar";
import SelectedDate from "../../Calendar/SelectedDate";
import './MonthCalendar.scss';
const MonthCalendar = (props)=>{
    let currentDate= props.currentDate;
    let setCurrentDate=props.setCurrentDate;
    // console.log(currentDate);
    return (
        <div className="month-calendar">
            <SelectedDate currentDate={currentDate} setCurrentDate={setCurrentDate}/>
            <Calendar value={currentDate} onChange={setCurrentDate}/>
        </div>
        );
}
export default MonthCalendar