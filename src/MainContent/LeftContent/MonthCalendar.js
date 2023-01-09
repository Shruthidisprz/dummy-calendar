import React from "react";
import Calendar from "../../Calendar/Calendar";
import SelectedDate from "../../Calendar/SelectedDate";
import './MonthCalendar.scss';
const MonthCalendar = ()=>{
    // console.log(currentDate);
    return (
        <div className="month-calendar">
            <SelectedDate/>
            <Calendar/>
        </div>
        );
}
export default MonthCalendar