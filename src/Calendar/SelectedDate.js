import React, { useContext } from "react";
// import format from "date-fns/format";
import './SelectedDate.scss';
import { DataContext } from "../DataContext/DataContext";
const SelectedDate =()=>{
    // let currentDate= props.currentDate;
    // let setCurrentDate=props.setCurrentDate;
    const {setCurrentDate} = useContext(DataContext);
    const handleClickToday=()=>setCurrentDate(new Date());

    return(
        <div className="today"> 
            {/* <p>Selected Date : {format(currentDate,"dd LLLL yyyy")}</p> */}
            {/* <button className="today-button" onClick={()=>handleClickToday()}>Today</button> */}
            <button className="primary-button" onClick={()=>handleClickToday()}>Today</button>
        </div>
    )
}
export default SelectedDate