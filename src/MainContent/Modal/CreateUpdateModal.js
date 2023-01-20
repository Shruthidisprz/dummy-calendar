import moment from "moment";
import React, { useContext, useState } from "react";
import { DataContext } from "../../DataContext/DataContext";
import { ServiceContext } from "../../DataContext/Services";
import './CreateUpdateModal.scss';

const CreateUpdateModal = ()=>{
    const {isEditEvent,currentDate,setErrorPopUp,setOpenCreateModal,setIsEditEvent} = useContext(DataContext);
    const {editEvent,createEvents}= useContext(ServiceContext);
    const handleTitle=()=>{
        return isEditEvent ? isEditEvent[0].eventName : '';
    }
    const handleEventDate = ()=>{
        return isEditEvent ? isEditEvent[0].eventDate.slice(0,10) : currentDate.toISOString().slice(0,10);
    }
    const handleStartTime = ()=>{
        return isEditEvent ? isEditEvent[0].startTimeHrMin.slice(11,16) : '';
    }
    const handleEndTime = ()=>{
        return isEditEvent ? isEditEvent[0].endTimeHrMin.slice(11,16) : '';
    }
    const handleDescription = ()=>{
        return isEditEvent ? isEditEvent[0].descriptionOfEvent : '';
    }
    const handleCancel=()=>{
        setOpenCreateModal(false);
        setIsEditEvent('');
    }
    const [title,setTitle]=useState(handleTitle());
    const [eventDate,setEventDate] = useState(handleEventDate());
    const [startTime,setStartTime] = useState(handleStartTime());
    const [endTime, setEndTime]=useState(handleEndTime());
    const [description, setDescription]=useState(handleDescription());
    const isSubmit=()=>{
        const newEvent = {
            // id:isEditEvent,
            eventName:title,
            eventDate:eventDate,
            startTimeHrMin:startTime,
            endTimeHrMin:endTime,     
            descriptionOfEvent:description,
        }
        if(newEvent.eventName.trim()!=="" && newEvent.startTimeHrMin.trim()!=="" && newEvent.endTimeHrMin.trim()!==""){
            moment(newEvent.eventDate+' ' +newEvent.startTimeHrMin,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm') >= moment(new Date()).format('YYYY-MM-DD HH:mm')? (isEditEvent ? editEvent(newEvent) :  createEvents(newEvent)):setErrorPopUp("Cannot create events for the past")
            setOpenCreateModal(false);
            setIsEditEvent('');
        }
        else{
            setErrorPopUp("Please fill out all the fields");
            // setOpenCreateModal(true);
        }
        // editEvent(newEvent)
        // console.log(newEvent.eventDate,"dateee")
        // setTitle("");
        // setEventDate(eventDate);
        // setStartTime("");
        // setEndTime("");
        // setDescription("");
    }
    // const isSubmit=(e)=>{
    //     const newEvent={
    //         // id:0,
    //         eventName:title,
    //         eventDate:eventDate,
    //         startTimeHrMin:startTime,
    //         endTimeHrMin:endTime,     
    //         descriptionOfEvent:description,       
    //     }
    //     // var dateTime = moment(newEvent.eventDate + ' ' + newEvent.startTimeHrMin, 'DD-MM-YYYY HH:mm');
    //     // console.log(dateTime,"dateTime")
    //     // // console.log(formatISO(parseISO(newEvent.eventDate)) , "eventdate")
    //     // console.log(newEvent.startTimeHrMin,"starttime")
    //     // console.log(moment(newEvent.eventDate+' ' +newEvent.startTimeHrMin,'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]') >= moment(new Date()).format('YYYY-MM-DDTHH:mm:ss[Z]'),"time compare");
    //     // console.log(moment(newEvent.eventDate+' ' +newEvent.startTimeHrMin,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm'));
    //     // console.log(moment(new Date()).format('YYYY-MM-DD HH:mm'))
    //     // console.log(moment(newEvent.eventDate+' ' +newEvent.startTimeHrMin,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm') >= moment(new Date()).format('YYYY-MM-DD HH:mm'))
    //     moment(newEvent.eventDate+' ' +newEvent.startTimeHrMin,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm') >= moment(new Date()).format('YYYY-MM-DD HH:mm')? createEvents(newEvent):setErrorPopUp("Cannot create events for the past")
    //     // isEventCreated && setEvent([...event,newEvent])
    //     // console.log(isEventCreated);
    //     // createEvents(newEvent)
    //     setTitle("");
    //     setEventDate(eventDate);
    //     setStartTime("");
    //     setEndTime("");
    //     setDescription("");
    //     setOpenCreateModal(false);
    //     // retrieveEvents();
    //         // setCreateEvent({
    //             //     eventName:title,
    //             //     eventDate:eventDate,
    //             //     startTimeHrMin:startTime,
    //             //     endTimeHrMin:endTime,     
    //             //     descriptionOfEvent:description,   
    //             // })
    //         };
    return(
        <div>
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-header">
                        <div className="modal-title"><b>{isEditEvent ? "Update" : "Add"} Event</b></div>
                        <div onClick={()=>handleCancel()} className='close-button'> &times; </div>
                    </div>
                    <form className="modal-body" onSubmit={isSubmit}>
                        <div>
                            <label>Event Title</label>
                            <input type='text' value={title} onChange={(e)=>setTitle(e.target.value)} required/>
                        </div>
                        <div>
                            <label>Event Date</label>
                            <input type='date' value={eventDate} onChange={(e)=>{setEventDate(e.target.value)}} required/>
                        </div>
                        <div>
                            <label>From Time</label>
                            <input type='time' value={startTime} onChange={(e)=>{setStartTime(e.target.value)}} required/>
                        </div>
                        <div>
                            <label>To Time</label>
                            <input type='time' value={endTime} onChange={(e)=>{setEndTime(e.target.value)}} required/>
                        </div>
                        <div>
                            <label>Description</label>
                            <input type='text' value={description} onChange={(e)=>{setDescription(e.target.value)}}/>
                        </div>
                    </form>
                    <div className="modal-footer">
                        <button onClick={()=>handleCancel()}>Cancel</button>
                        <button onClick={isSubmit}>{isEditEvent ? "Update" : "Save"}</button>
                    </div>
                </div>
            </div>
            {/* {console.log(flashMessage,"flash")} */}
        </div>
    )
}
export default CreateUpdateModal;