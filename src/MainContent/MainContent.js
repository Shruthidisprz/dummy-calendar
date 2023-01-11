import React, { useContext, useEffect } from "react";
import MonthCalendar from "./LeftContent/MonthCalendar";
import DayInterval from './DayInterval/DayInterval';
import './MainContent.scss';
// import Axios from "./Axios/Axios";
// import Calendar from "../Calendar/Calendar";
import MainCalendar from "./MainCalendar/MainCalendar";
import { Route, Routes } from "react-router-dom";
import RightContent from "./RightContent/RightContent";
import { DataContext } from "../DataContext/DataContext";
import ErrorPopUp from "./Modal/ErrorPopUp";
const MainContent=()=>{  
    // const [event, setEvent]=useState([]);

    const {errorPopUp,getAllEvent} = useContext(DataContext);
        
        // retrieveEvents();
    useEffect(()=>{
        getAllEvent();
        // eslint-disable-next-line 
    },[])
    return(
        <div className="content">
            <MonthCalendar/>
            <Routes>
                <Route exact path="/" element={<MainCalendar/>} />
                <Route exact path="/days" element={<DayInterval/>} />
            </Routes>
            <RightContent/>
            {/* {console.log(FlashMessage,"flash")} */}
            {/* {console.log(errorPopUp,"error pop up")} */}
            {errorPopUp && <ErrorPopUp/>}
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