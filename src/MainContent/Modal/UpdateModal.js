import moment from "moment";
import React, { useContext  , useState } from "react";
import { DataContext } from "../../DataContext/DataContext";
import { ServiceContext } from "../../DataContext/Services";
import './UpdateModal.scss';
const UpdateModal = (props) =>{
    const {isEditEvent,setErrorPopUp} = useContext(DataContext);
    const {editEvent}= useContext(ServiceContext);
    const [title,setTitle]=useState(isEditEvent[0].eventName);
    const [eventDate,setEventDate] = useState(isEditEvent[0].eventDate.slice(0,10));
    console.log(isEditEvent[0].eventDate.slice(0,10),"date")
    const [startTime,setStartTime] = useState(isEditEvent[0].startTimeHrMin.slice(11,16));
    // console.log(isEditEvent[0].startTimeHrMin.format("HH:mm:ss"),"startTime")
    console.log(isEditEvent[0].startTimeHrMin.slice(11,16),"startTime")
    const [endTime, setEndTime]=useState(isEditEvent[0].endTimeHrMin.slice(11,16));
    const [description, setDescription]=useState(isEditEvent[0].descriptionOfEvent);
    const {setOpenUpdateModal} = props;
    
    const isEdit=()=>{
        const updateEvent = {
            // id:isEditEvent,
            eventName:title,
            eventDate:eventDate,
            startTimeHrMin:startTime,
            endTimeHrMin:endTime,     
            descriptionOfEvent:description,
        }
        moment(updateEvent.eventDate+' ' +updateEvent.startTimeHrMin,'YYYY-MM-DD HH:mm').format('YYYY-MM-DD HH:mm') >= moment(new Date()).format('YYYY-MM-DD HH:mm')? editEvent(updateEvent):setErrorPopUp("Cannot create events for the past")
        setOpenUpdateModal(false)
        // editEvent(updateEvent)
        // console.log(updateEvent.eventDate,"dateee")
    }
    // console.log(format(parseISO(isEditEvent[0].eventDate),"yyyy LL dd"),"dates")
    // console.log(new Date(),"my date");
    return(
        <div>
            <div className="modal-background">
                <div className="modal-container">
                    <div className="modal-header">
                        <div className="modal-title"><b>Add Event</b></div>
                        <div onClick={()=>setOpenUpdateModal(false)} className='close-button'> &times; </div>
                    </div>
                    <form className="modal-body" onSubmit={isEdit}>
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
                        <button onClick={()=>setOpenUpdateModal(false)}>Cancel</button>
                        <button onClick={isEdit}>Update</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default UpdateModal