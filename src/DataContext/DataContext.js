import React, { createContext, useState } from "react";
const DataContext = createContext();
const DataContextProvider = ({children}) =>{
    const [currentDate, setCurrentDate]=useState(new Date());
    const [event,setEvent]=useState([]);
    const [openCreateModal,setOpenCreateModal]=useState(false);
    const [errorPopUp,setErrorPopUp] = useState('');
    const [isId,setIsId] = useState('');
    // const [isDay,setIsDay] = useState(false);


    const [isEditEvent,setIsEditEvent]=useState(false);
    // const [title,setTitle]=useState('');
    // const [eventDate,setEventDate] = useState(currentDate.toISOString().slice(0,10));
    // const [startTime,setStartTime] = useState('');
    // const [endTime, setEndTime]=useState('');
    // const [description, setDescription]=useState('');
    

    return(
        <DataContext.Provider value={{currentDate,setCurrentDate,event,setEvent,openCreateModal,setOpenCreateModal,errorPopUp,setErrorPopUp,isId,setIsId,isEditEvent,setIsEditEvent}}>
            {children}
        </DataContext.Provider>
    )
}
// const ModalContext =({children})=>{
    
// }
export {DataContext,DataContextProvider}