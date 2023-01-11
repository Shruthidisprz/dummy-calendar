import { format, formatISO, parseISO } from "date-fns";
import moment from "moment";
import React, { useContext  , useState } from "react";
import { DataContext } from "../../DataContext/DataContext";
import Axios from "../Axios/Axios";
import './UpdateModal.scss';
const UpdateModal = (props) =>{
    const {isId,setErrorPopUp,getAllEvent,} = useContext(DataContext);
    const [title,setTitle]=useState(isId[0].eventName);
    const [eventDate,setEventDate] = useState(isId[0].eventDate.slice(0,10));
    console.log(isId[0].eventDate.slice(0,10),"date")
    const [startTime,setStartTime] = useState(isId[0].startTimeHrMin.slice(11,16));
    // console.log(isId[0].startTimeHrMin.format("HH:mm:ss"),"startTime")
    console.log(isId[0].startTimeHrMin.slice(11,16),"startTime")
    const [endTime, setEndTime]=useState(isId[0].endTimeHrMin.slice(11,16));
    const [description, setDescription]=useState(isId[0].descriptionOfEvent);
    const {setOpenUpdateModal} = props;
    const editEvent = async (myEvent)=>{
        try{
            const request = {
                id:isId[0].id,
                eventName : myEvent.eventName,
                eventDate:formatISO(parseISO(myEvent.eventDate)),
                startTimeHrMin:moment(myEvent.eventDate + ' ' + myEvent.startTimeHrMin, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]'),
                endTimeHrMin:moment(myEvent.eventDate + ' ' + myEvent.endTimeHrMin, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]'),    
                descriptionOfEvent:myEvent.descriptionOfEvent, 
            }
            await Axios.put("api/appointments/event",request);
            // const response = await Axios.put("api/appointments/event",request);
            // await setCurrentDate(parseISO(myEvent.eventDate));
            // console.log(response.data,"resp");
            // setEvent([...event,response.data])
            // setTitle(myEvent.eventName);
            // setEventDate(myEvent.eventDate);
            // setStartTime(myEvent.startTimeHrMin);
            // setEndTime( myEvent.endTimeHrMin);
            // setDescription(myEvent.descriptionOfEvent);
            // console.log(response.data);
            getAllEvent();
        }catch(error){
            setErrorPopUp(error.response.data);
            console.log(error.response.data,"error")
        }
    }
    const isEdit=()=>{
        const updateEvent = {
            // id:isId,
            eventName:title,
            eventDate:eventDate,
            startTimeHrMin:startTime,
            endTimeHrMin:endTime,     
            descriptionOfEvent:description,
        }
        editEvent(updateEvent);
        setOpenUpdateModal(false)
        // console.log(updateEvent.eventDate,"dateee")
    }
    console.log(format(parseISO(isId[0].eventDate),"yyyy LL dd"),"dates")
    console.log(new Date(),"my date");
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