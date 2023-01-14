import { formatISO, parseISO } from "date-fns";
import moment from "moment";
import React, { createContext, useContext, useState } from "react";
import Axios from "../MainContent/Axios/Axios";
import { DataContext } from "./DataContext";
const ServiceContext =  createContext();
const ServiceContextProvider = ({children})=>{
    const {event,setEvent,setErrorPopUp,isEditEvent} = useContext(DataContext);
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    const retrieveEvents = async ()=>{
            const response =  await Axios.get("api/appointments");
            // console.log(response.data,"data");
            // setEvent(response.data);
            return response.data;
    }
    const getAllEvent = async () => {
        const getAllEvents = await retrieveEvents();
        getAllEvents && setEvent(getAllEvents,...event);
        // console.log(getAllEvents,"getAllEvents")
    }
    const deleteEvent= async (delId)=>{
        // console.log(delId,"delId");
        // setOpenDeleteModal(true);
        // console.log(openDeleteModal,"opendeletr")
        // {isId &&
        // openDeleteModal&&
        // console.log(delId,"id1");
        await Axios.delete(`api/appointments/${delId}`)
            // const afterDelete =  event.filter((delItem)=>{
            //     return delItem.id !== delId;
            // })
            getAllEvent();
            // setEvent(afterDelete);

            // console.log(afterDelete,"afterDelete")
            setOpenDeleteModal(false);
        // console.log(openDeleteModal,'openDeleteModal')
        // {openDeleteModal && <DeleteModal setisId={setisId} setOpenDeleteModal={setOpenDeleteModal} id={Id}/>}
        // console.log(isId,"isId")
        // isId && await Axios.delete(`api/appointments/event/${Id}`)
        // isId && handleDelete();
    }
    const editEvent = async (myEvent)=>{
        try{
            const request = {
                id:isEditEvent[0].id,
                eventName : myEvent.eventName,
                eventDate:formatISO(parseISO(myEvent.eventDate)),
                startTimeHrMin:moment(myEvent.eventDate + ' ' + myEvent.startTimeHrMin, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]'),
                endTimeHrMin:moment(myEvent.eventDate + ' ' + myEvent.endTimeHrMin, 'YYYY-MM-DD HH:mm').format('YYYY-MM-DDTHH:mm:ss[Z]'),    
                descriptionOfEvent:myEvent.descriptionOfEvent, 
            }
            await Axios.put("api/appointments",request);
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
    return(
        <ServiceContext.Provider value={{getAllEvent,deleteEvent,setOpenDeleteModal,openDeleteModal,editEvent}}>
            {children}
        </ServiceContext.Provider>
    )
}
export {ServiceContext,ServiceContextProvider}