// import { formatISO, parseISO } from "date-fns";
import moment from "moment";
import React, {  useContext, useState } from "react";
// import uuid from "react-uuid";
import { DataContext } from "../../DataContext/DataContext";
import { ServiceContext } from "../../DataContext/Services";
// import Axios from "../Axios/Axios";
import './CreateModal.scss';
// import ErrorPopUp from "./ErrorPopUp";
const CreateModal = ()=>{
    const {currentDate,setOpenCreateModal,setErrorPopUp} = useContext(DataContext);
    const {createEvents} =  useContext(ServiceContext);
    // const setOpenCreateModal = props.setOpenCreateModal;
    // const currentDate = props.currentDate;
    // const event = props.event;
    // const setEvent = props.setEvent;
    // const retrieveEvents=props.retrieveEvents;
    const [title,setTitle]=useState('');
    const [eventDate,setEventDate] = useState(currentDate.toISOString().slice(0,10));
    const [startTime,setStartTime] = useState('');
    const [endTime, setEndTime]=useState('');
    const [description, setDescription]=useState('');
    // const [isEventCreated,setIsEventCreated]=useState(false);
    
    

    
    const isSubmit=(e)=>{
        const newEvent={
            // id:0,
            eventName:title,
            eventDate:eventDate,
            startTimeHrMin:startTime,
            endTimeHrMin:endTime,     
            descriptionOfEvent:description,       
        }
        // var dateTime = moment(newEvent.eventDate + ' ' + newEvent.startTimeHrMin, 'DD-MM-YYYY HH:mm');
        // console.log(dateTime,"dateTime")
        // // console.log(formatISO(parseISO(newEvent.eventDate)) , "eventdate")
        // console.log(newEvent.startTimeHrMin,"starttime")
        // console.log(moment(newEvent.eventDate+' ' +newEvent.startTimeHrMin,'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]') >= moment(new Date()).format('YYYY-MM-DDTHH:mm:ss[Z]'),"time compare");
        // console.log(moment(newEvent.eventDate+' ' +newEvent.startTimeHrMin,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm'));
        // console.log(moment(new Date()).format('YYYY-MM-DD HH:mm'))
        // console.log(moment(newEvent.eventDate+' ' +newEvent.startTimeHrMin,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm') >= moment(new Date()).format('YYYY-MM-DD HH:mm'))
        moment(newEvent.eventDate+' ' +newEvent.startTimeHrMin,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm') >= moment(new Date()).format('YYYY-MM-DD HH:mm')? createEvents(newEvent):setErrorPopUp("Cannot create events for the past")
        // isEventCreated && setEvent([...event,newEvent])
        // console.log(isEventCreated);
        // createEvents(newEvent)
        setTitle("");
        setEventDate(eventDate);
        setStartTime("");
        setEndTime("");
        setDescription("");
        setOpenCreateModal(false);
        // retrieveEvents();
            // setCreateEvent({
                //     eventName:title,
                //     eventDate:eventDate,
                //     startTimeHrMin:startTime,
                //     endTimeHrMin:endTime,     
                //     descriptionOfEvent:description,   
                // })
            };
            
    return(
        <div>
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-header">
                        <div className="modal-title"><b>Add Event</b></div>
                        <div onClick={()=>setOpenCreateModal(false)} className='close-button'> &times; </div>
                    </div>
                    <form className="modal-body" onSubmit={isSubmit}>
                <div>
                    <label>Event Title</label>
                    <input type='text' required value={title} onChange={(e)=>setTitle(e.target.value)}/>
                </div>
                <div>
                    <label>Event Date</label>
                    <input type='date' value={eventDate} onChange={(e)=>{setEventDate(e.target.value)}}/>
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
                        <button onClick={()=>setOpenCreateModal(false)}>Cancel</button>
                        <button onClick={isSubmit}>Save</button>
                    </div>
                </div>
            </div>
            {/* {console.log(flashMessage,"flash")} */}
        </div>
    )
}
export default CreateModal