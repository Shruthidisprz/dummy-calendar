import React from "react";
import format from "date-fns/format";
import './SelectedDate.scss';
const SelectedDate =(props)=>{
    let currentDate= props.currentDate;
    let setCurrentDate=props.setCurrentDate;
    const handleClickToday=()=>setCurrentDate(new Date());

    return(
        <div className="today"> 
            {/* <p>Selected Date : {format(currentDate,"dd LLLL yyyy")}</p> */}
            {/* <button className="today-button" onClick={()=>handleClickToday()}>Today</button> */}
            <button className="secondary-button" onClick={()=>handleClickToday()}>Today</button>
        </div>
    )
}
export default SelectedDate