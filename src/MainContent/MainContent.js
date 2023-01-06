import React, { useState } from "react";
import MonthCalendar from "./LeftContent/MonthCalendar";
import DayInterval from './DayInterval/DayInterval';
import './MainContent.scss';
// import Calendar from "../Calendar/Calendar";
import MainCalendar from "./MainCalendar/MainCalendar";
import { Route, Routes } from "react-router-dom";
import RightContent from "./RightContent/RightContent";
const MainContent=(props)=>{  
    const currentDate=props.currentDate;
    const setCurrentDate=props.setCurrentDate;
    const [event, setEvent]=useState([]);
    return(
        <div className="content">
            <MonthCalendar currentDate={currentDate} setCurrentDate={setCurrentDate}/>
            <Routes>
                <Route exact path="/" element={<MainCalendar value={currentDate} onChange={setCurrentDate} event={event}/>} />
                <Route exact path="/days" element={<DayInterval currentDate={currentDate} setCurrentDate={setCurrentDate} event={event}/> } />
            </Routes>
            <RightContent currentDate={currentDate} setCurrentDate={setCurrentDate} event={event} setEvent={setEvent}/>
        </div>
    );
}
export default MainContent
// <div><MainCalendar value={currentDate} onChange={setCurrentDate}/></div>
// <div></div>
// <DayInterval currentDate={currentDate} setCurrentDate={setCurrentDate} /> 