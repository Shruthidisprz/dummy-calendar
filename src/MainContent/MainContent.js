import React, { useEffect, useState } from "react";
import MonthCalendar from "./LeftContent/MonthCalendar";
import DayInterval from './DayInterval/DayInterval';
import './MainContent.scss';
import Axios from "./Axios/Axios";
// import Calendar from "../Calendar/Calendar";
import MainCalendar from "./MainCalendar/MainCalendar";
import { Route, Routes } from "react-router-dom";
import RightContent from "./RightContent/RightContent";
const MainContent=(props)=>{  
    const currentDate=props.currentDate;
    const setCurrentDate=props.setCurrentDate;
    const [event, setEvent]=useState([]);
        const retrieveEvents = async ()=>{
            const response =  await Axios.get("api/appointments/all-appointments");
            // console.log(response.data,"data");
            // setEvent(response.data);
            return response.data;
        }
        // retrieveEvents();
    useEffect(()=>{
        const getAllEvent = async () => {
            const getAllEvents = await retrieveEvents();
            getAllEvents && setEvent(getAllEvents,...event);
            console.log(getAllEvents,"getAllEvents")
            }
        getAllEvent();
        // eslint-disable-next-line 
    },[])
    return(
        <div className="content">
            <MonthCalendar currentDate={currentDate} setCurrentDate={setCurrentDate}/>
            <Routes>
                <Route exact path="/" element={<MainCalendar value={currentDate} onChange={setCurrentDate} event={event}/>} />
                <Route exact path="/days" element={<DayInterval currentDate={currentDate} setCurrentDate={setCurrentDate} event={event} setEvent={setEvent} />} />
            </Routes>
            <RightContent currentDate={currentDate} setCurrentDate={setCurrentDate} event={event} setEvent={setEvent} retrieveEvents={retrieveEvents}/>
        </div>
    );
}
export default MainContent
// <div><MainCalendar value={currentDate} onChange={setCurrentDate}/></div>
// <div></div>
// <DayInterval currentDate={currentDate} setCurrentDate={setCurrentDate} /> 



/* <div className="delete-modal-background">
            <div className="delete-modal-container">
                <div className="delete-modal-body">
                    Are you sure you want to delete?
                </div>
                <div className="delete-modal-footer">
                    <button onClick={()=>deleteEvent(id)}>Yes</button>
                    <button onClick={()=>setOpenDeleteModal(false)}>No</button>
                </div>
            </div>
        </div> */