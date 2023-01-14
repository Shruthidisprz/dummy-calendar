import React from "react";
import SelectedDate from "../../Calendar/SelectedDate";
import SideCalendar from "./SideCalendar";
import './LeftContent.scss';
const LeftContent = ()=>{
    // console.log(currentDate);
    return (
        <div className="month-calendar">
            <SelectedDate/>
            <SideCalendar/>
        </div>
        );
}
export default LeftContent