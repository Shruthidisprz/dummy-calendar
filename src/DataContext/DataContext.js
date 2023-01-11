import React, { createContext, useState } from "react";
import Axios from "../MainContent/Axios/Axios";
const DataContext = createContext();
const DataContextProvider = ({children}) =>{
    const [currentDate, setCurrentDate]=useState(new Date());
    const [event,setEvent]=useState([]);
    const [openCreateModal,setOpenCreateModal]=useState(false);
    const [errorPopUp,setErrorPopUp] = useState('');
    const [isId,setIsId] = useState('');

    const [isEditEvent,setIsEditEvent]=useState(false);
    const [title,setTitle]=useState('');
    const [eventDate,setEventDate] = useState(currentDate.toISOString().slice(0,10));
    const [startTime,setStartTime] = useState('');
    const [endTime, setEndTime]=useState('');
    const [description, setDescription]=useState('');
    const retrieveEvents = async ()=>{
        try{
            const response =  await Axios.get("api/appointments/all-appointments");
            // console.log(response.data,"data");
            // setEvent(response.data);
            return response.data;
        }
        catch(error){
            // console.log(error);
        }
    }
    const getAllEvent = async () => {
        const getAllEvents = await retrieveEvents();
        getAllEvents && setEvent(getAllEvents,...event);
        // console.log(getAllEvents,"getAllEvents")
        }

    return(
        <DataContext.Provider value={{currentDate,setCurrentDate,event,setEvent,openCreateModal,setOpenCreateModal,errorPopUp,setErrorPopUp,isId,setIsId,getAllEvent , title,setTitle,eventDate,setEventDate,startTime,setStartTime,endTime,setEndTime,description,setDescription,isEditEvent,setIsEditEvent}}>
            {children}
        </DataContext.Provider>
    )
}
// const ModalContext =({children})=>{
    
// }
export {DataContext,DataContextProvider}