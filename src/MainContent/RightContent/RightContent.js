import './RightContent.scss';
import React, { useState } from 'react';
import CreateModal from '../Modal/CreateModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import ListAppointment from './ListAppointment';
// import { format } from 'date-fns';
const RightContent=(props)=>{
    const currentDate = props.currentDate;
    const setCurrentDate = props.setCurrentDate;
    const event = props.event;
    const setEvent=props.setEvent;
    const retrieveEvents=props.retrieveEvents;
    const [openCreateModal,setOpenCreateModal]=useState(false);
    return(
    <div className='right-content'>
        <div><button className='secondary-button' onClick={()=>setOpenCreateModal(true)}>
            <span><b>Create</b></span>
            <FontAwesomeIcon icon={faPlus} className="icon"></FontAwesomeIcon></button>
        </div>
        {openCreateModal&&<CreateModal setOpenCreateModal={setOpenCreateModal} currentDate={currentDate} setCurrentDate={setCurrentDate} event={event} setEvent={setEvent} retrieveEvents={retrieveEvents}/>}
        <div className='search-bar'>
            <div><FontAwesomeIcon icon={faMagnifyingGlass}  className="icon"></FontAwesomeIcon></div>
            <div><input type="search" placeholder='Search'/></div>
        </div>
        {/* <div><b>{format(currentDate, "dd LLLL yyyy")} - Appointment</b></div> */}
        <ListAppointment event={event} currentDate={currentDate}/>
    </div>
    )
}
export default RightContent