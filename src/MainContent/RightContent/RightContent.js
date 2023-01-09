import './RightContent.scss';
import React, { useContext } from 'react';
import CreateModal from '../Modal/CreateModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import ListAppointment from './ListAppointment';
import { DataContext } from '../../DataContext/DataContext';
// import { format } from 'date-fns';
const RightContent=()=>{
    const {openCreateModal,setOpenCreateModal} = useContext(DataContext);
    // const [openCreateModal,setOpenCreateModal]=useState(false);
    return(
    <div className='right-content'>
        <div><button className='secondary-button' onClick={()=>setOpenCreateModal(true)}>
            <span><b>Create</b></span>
            <FontAwesomeIcon icon={faPlus} className="icon"></FontAwesomeIcon></button>
        </div>
        {openCreateModal&&<CreateModal/>}
        <div className='search-bar'>
            <div><FontAwesomeIcon icon={faMagnifyingGlass}  className="icon"></FontAwesomeIcon></div>
            <div><input type="search" placeholder='Search'/></div>
        </div>
        {/* <div><b>{format(currentDate, "dd LLLL yyyy")} - Appointment</b></div> */}
        <div className='list-appointment'>
            <ListAppointment/>
        </div>
    </div>
    )
}
export default RightContent