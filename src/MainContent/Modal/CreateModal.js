// import { format } from "date-fns";
// import { faCalendar } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { parseISO } from "date-fns";
import React, {  useState } from "react";
import axios from "axios";
// import CreateFrom from "../LeftContent/CreateFrom";
// import React from "react";
import './CreateModal.scss';
const CreateModal = (props)=>{
    const setOpenModal = props.setOpenModal;
    const currentDate = props.currentDate;
    // const setCurrentDate=props.setCurrentDate;
    const event = props.event;
    const setEvent = props.setEvent;
    // const initialDate = currentDate.toISOString().slice(0,10)
    const [title,setTitle]=useState('');
    // const [date,setDate] = useState(initialDate);
    const [eventDate,setEventDate] = useState(currentDate.toISOString().slice(0,10));
    // const [eventDate,setEventDate] = useState(initialDate);
    const [startTime,setStartTime] = useState('');
    const [endTime, setEndTime]=useState('');
    const [description, setDescription]=useState('');
    // const axios = require('axios');
    // const func = axios.get('http://localhost:5169/api/appointments/all-appointments').then(function(response){
    //     console.log(response);
    // }).catch(function(error){
    //     console.log(error);
    // })
    // func();
    // const config = {
    //     headers: {
    //         "Access-Control-Allow-Origin": "*",
    //         "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
    //     }
    // };
    axios.get('api/appointments/all-appointments').then(function(response){
        // response.forEach(element => {
            setEvent(response.data[0]);
        // });
        console.log(event)
    }).catch(function(error){
        console.log(error);
    })
    // func();

    // const axios = require('axios');

    // async function doGetRequest() {

    // let res = await axios.get('http://localhost:5169/api/appointments/all-appointments');

    // let data = res.data;
    // console.log(data);
    // }

// doGetRequest();
    const isSubmit=(e)=>{
        // setCurrentDate(format(eventDate,"yyyy LL dd"));
        // setCurrentDate(parseISO(eventDate));
        // console.log("parse",parseISO(eventDate));
        console.log("Current date",currentDate);
        // console.log("date pasre",Date.parse(eve));
        // console.log(date);
        // setEvent([...event,
        //     {
        //         id:0,
        //         title:title,
        //         date:eventDate,
        //         startTime:startTime,
        //         endTime:endTime,            
        //     }])
        //     setTitle("");
        //     setEventDate(eventDate);
        //     setStartTime("");
        //     setEndTime("");
        //     setOpenModal(false);
        //     // console.log("value",parseISO(eventDate));
        // };
        setEvent([...event,
            {
                id:0,
                eventName:title,
                eventDate:eventDate,
                startTimeHrMin:startTime,
                endTimeHrMin:endTime,     
                descriptionOfEvent:description,       
            }])
            setTitle("");
            setEventDate(eventDate);
            setStartTime("");
            setEndTime("");
            setDescription("");
            setOpenModal(false);
            // console.log("value",parseISO(eventDate));
        };
    // const handleDate=(e)=>{
    //     setCurrentDate(e.target.value);
    //     return(
    //         setDate(e.target.value)
    //     );
    // }
        // const setDate =()=>currentDate.toString.slice(0,10);
    // const setDate =()=>format(currentDate,"yyyy LL dd");
    // const dateValue =()=>date.toISOString().slice(0,10);
    // const setDate =()=>setDate1.slice(0,7);
    // console.log("current")
    // console.log(format(currentDate,"yyyy MM dd"));
    // console.log("current1")
    // console.log(setDate());
    return(
        <div className="modal-background">
            <div className="modal-container">
                <div className="modal-header">
                    <div className="modal-title"><b>Add Event</b></div>
                    <div onClick={()=>setOpenModal(false)} className='close-button'> &times; </div>
                </div>
                <form className="modal-body" onSubmit={isSubmit}>
            <div>
                <label>Event Title</label>
                <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Event Date</label>
                {/* <input type='date' value={date} onChange={e=>setDate(e.target.value)}/> */}
                {/* <input type='date' value={setDate()} onChange={e=>setDate(e.target.value)}/> */}
                {/* <input type='date' value={dateValue()} onChange={(e)=>{setDate(e.target.value)}}/> */}
                <input type='date' value={eventDate} onChange={(e)=>{setEventDate(e.target.value)}}/>
                {/* <input type='text' value={date} onChange={(e)=>{setDate(e.target.value)}} <FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon>/> */}
                {/* <input type='date' value={date} onChange={()=>handleDate}/> */}
                {/* {console.log(date)} */}
                {/* <input type='date' value="2022-01-02"/> */}
            </div>
            <div>
                <label>From Time</label>
                <input type='time' value={startTime} onChange={(e)=>{setStartTime(e.target.value)}}/>
            </div>
            <div>
                <label>To Time</label>
                <input type='time' value={endTime} onChange={(e)=>{setEndTime(e.target.value)}}/>
            </div>
            <div>
                <label>Description</label>
                <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
            </div>
        </form>
                <div className="modal-footer">
                    <button onClick={()=>setOpenModal(false)}>Cancel</button>
                    <button onClick={isSubmit}>Save</button>
                </div>
            </div>
        </div>
    )
}
export default CreateModal