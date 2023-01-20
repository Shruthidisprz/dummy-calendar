import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useContext } from "react";
import './DisplayEvent.scss';
import DeleteModal from "../Modal/DeleteModal";
// import Axios from "../Axios/Axios";
import { DataContext } from "../../DataContext/DataContext";
// import UpdateModal from "../Modal/UpdateModal";
import { ServiceContext } from "../../DataContext/Services";
import CreateUpdateModal from "../Modal/CreateUpdateModal";
// import { formatISO, parseISO } from "date-fns";
// import { setISODay } from "date-fns";
const DisplayEvent=()=>{
    const {event,currentDate,setIsEditEvent,setOpenCreateModal,OpenCreateModal,setIsId} = useContext(DataContext);
    const{setOpenDeleteModal,openDeleteModal} = useContext(ServiceContext);
    // const event = props.event;
    // const setEvent = props.setEvent;
    // const currentDate= props.currentDate;
    // const [openUpdateModal, setOpenUpdateModal] = useState(false);
    // const [openUpdateModal, setOpenUpdateModal] = useState(false);
    // const [isId,setisId] = useState(false);
    // let Id ;
    const handleDelete=(id)=>{
        setIsId(id);
        setOpenDeleteModal(true);
        // console.log(id,"id");
        // console.log(isId,"id1")
        // console.log(id,"id")
        // console.log(openDeleteModal,"open")
        // console.log(isId,"delete")
        // isId && deleteEvent(id);
    }
    const handleEdit=(editId)=>{
        const filteredEvent = event.filter((item)=>{
            return item.id === editId
        })
        setIsEditEvent(filteredEvent);
        // console.log(isEditEvent,"isEdit");
        // setIsId(filteredEvent);
        // setIsEditEvent(true);
        // setOpenUpdateModal(true);
        setOpenCreateModal(true);
    }
    // const currentTimeHr =new Date().getHours()*46
    // const currentTimeMin = (new Date().getMinutes()/60)*46
    
    // console.log(currentTime)
    // console.log((new Date().getMinutes()/60)*46,"min")
    // console.log((new Date().getHours())+10)
    // const currentTimeMin = new 
    return(
        <div>
            {event.map((item)=>{
                const start =  moment (item.startTimeHrMin,'DD-MM-YYYY HH:mm')
                // console.log(start,"start");
                const end =  moment (item.endTimeHrMin,'DD-MM-YYYY HH:mm')
                const result = end.diff(start,'minutes')
                // console.log(result, "result")
                // const eventHeight = (result / 60)*46;
                const eventHeight = (result / 60)*45;
                // console.log(eventHeight,"height")
                // console.log(parseInt(item.startTimeHrMin.slice(14,16)),"time");
                const topHr = parseInt(item.startTimeHrMin.slice(11,13));
                // const topHr = parseInt(item.startTimeHrMin.getHours());
                // const topHr = moment(item.startTimeHrMin).getHours();
                // const topMin= (parseInt(item.startTimeHrMin.slice(14,16))/60)*45.8;
                // const topMin= ((moment(item.startTimeHrMin).getMinutes())/60)*45.8;
                // const topMin= (parseInt(item.startTimeHrMin.getMinutes())/60)*45.8;
                const topMin= (parseInt(item.startTimeHrMin.slice(14,16))/60)*46;
                // console.log(topHr, "topHr");
                // console.log(topMin, "topMin");
                // console.log((topHr*46)+topMin+92 , "top")
                const isSelectedDate = currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)
                return(
                    // (topHr*46)+topMin+46
                    // <div>
                    <div className="event-wrapper">
                        {/* <div className={isSelectedDate? "display-event" : "no-event"}style={{height:eventHeight,top:(topHr*46)+topMin+46, padding:"0px"}}><span>{isSelectedDate && item.eventName}</span><span><span><FontAwesomeIcon className="icon" icon={faTrash} onClick={()=>deleteEvent(item.id)}/></span><span><FontAwesomeIcon className="icon"icon={faPencil}/></span></span></div> */}
                        <div className={isSelectedDate? (eventHeight >= 11.25 ? "display-event" : "enlarge") : "no-event"} style={{height:eventHeight,top:(topHr*45.8)+topMin+45.8, padding:"0px"}} ><span>{isSelectedDate && item.eventName}</span><span><span><FontAwesomeIcon className="icon" icon={faTrash} onClick={()=>handleDelete(item.id)}/></span><span><FontAwesomeIcon className="icon"icon={faPencil} onClick={()=>handleEdit(item.id)} /></span></span></div>
                        {/* <div className={isSelectedDate?"display-event" : "no-event"} style={{height:eventHeight,top:(topHr*45.8)+topMin+45.8, padding:"0px"}} ><span>{isSelectedDate && item.eventName}</span><span><span><FontAwesomeIcon className="icon" icon={faTrash} onClick={()=>handleDelete(item.id)}/></span><span><FontAwesomeIcon className="icon"icon={faPencil} onClick={()=>handleEdit(item.id)} /></span></span></div> */}
                        {/* <div className={isSelectedDate? "display-event" : "no-event"}style={{height:eventHeight,top:(topHr*46)+topMin+46, padding:"0px"}}><span>{isSelectedDate && item.eventName}</span><span><span><FontAwesomeIcon className="icon" icon={faTrash} onClick={()=>handleDelete(item.id)}/></span><span><FontAwesomeIcon className="icon"icon={faPencil} onClick={()=>handleEdit(item.id)} /></span></span></div> */}
                    </div>
                    /* { openDeleteModal &&
                    // console.log(item.id)
                    <div className="modal-background">
                        <div className="modal-container">
                            <div className="modal-body">
                                Are you sure you want to delete?
                            </div>
                            <div className="modal-footer">
                                <button onClick={()=>setOpenDeleteModal(false)}>No</button>
                                <button onClick={()=>{deleteEvent(item.id)}}>Yes</button>
                            </div>
                        </div>
                    </div>                            
                    } */
                    // </div>
                )
            })}
            {/* {console.log(Id,"id3")} */}
            {/* {console.log(isId,"delete id")} */}
            {openDeleteModal && <DeleteModal />}
            {OpenCreateModal && <CreateUpdateModal/>}
            {/* {openUpdateModal && <UpdateModal setOpenUpdateModal={setOpenUpdateModal}/>} */}
            {/* {openUpdateModal && <UpdateModal setOpenUpdateModal={setOpenUpdateModal}/>} */}
        </div>
    )
}
export default DisplayEvent;
// onClick={()=>deleteEvent(item.id)}import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import moment from "moment";
// import React, { useState } from "react";
// import './DisplayEvent.scss';
// import DeleteModal from "./DeleteModal";
// const DisplayEvent=(props)=>{
//     const event = props.event;
//     const setEvent = props.setEvent;
//     const currentDate= props.currentDate;
//     const [openDeleteModal,setOpenDeleteModal] = useState(false);
//     const deleteEvent=(Id)=>{
//         console.log(Id,"id");
//         const afterDelete =  event.filter((delItem)=>{
//             return delItem.id !== Id;
//         })
//         console.log(afterDelete,"afterDelete");
//         setEvent(afterDelete);
//         setOpenDeleteModal(false);
//     }
//     return(
//         <div>
//                 {event.map((item)=>{
//                     const start =  moment (item.startTimeHrMin,'DD-MM-YYYY HH:mm')
//                     // console.log(start,"start");
//                     const end =  moment (item.endTimeHrMin,'DD-MM-YYYY HH:mm')
//                     const result = end.diff(start,'minutes')
//                     // console.log(result, "result")
//                     const eventHeight = (result / 60)*46;
//                     // console.log(parseInt(item.startTimeHrMin.slice(14,16)),"time");
//                     const topHr = parseInt(item.startTimeHrMin.slice(11,13));
//                     const topMin= (parseInt(item.startTimeHrMin.slice(14,16))/60)*46;
//                     console.log(topHr, "topHr");
//                     console.log(topMin, "topMin");
//                     console.log((topHr*46)+topMin+92 , "top")
//                     const isSelectedDate = currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)
//                     return(
//                         // (topHr*46)+topMin+46
//                         // <div>
//                         <div className="event-wrapper">
//                             <div className={isSelectedDate? "display-event" : "no-event"}style={{height:eventHeight,top:(topHr*46)+topMin+46, padding:"0px"}}><span>{isSelectedDate && item.eventName}</span><span><span><FontAwesomeIcon className="icon" icon={faTrash} onClick={()=>setOpenDeleteModal(true)}/></span><span><FontAwesomeIcon className="icon"icon={faPencil}/></span></span></div>
//                             {openDeleteModal && <DeleteModal deleteEvent={deleteEvent} setOpenDeleteModal={setOpenDeleteModal} id={item.id}/>}
//                         </div>
//                         /* { openDeleteModal &&
//                         // console.log(item.id)
//                         <div className="modal-background">
//                             <div className="modal-container">
//                                 <div className="modal-body">
//                                     Are you sure you want to delete?
//                                 </div>
//                                 <div className="modal-footer">
//                                     <button onClick={()=>setOpenDeleteModal(false)}>No</button>
//                                     <button onClick={()=>{deleteEvent(item.id)}}>Yes</button>
//                                 </div>
//                             </div>
//                         </div>                            
//                         } */
//                         // </div>
//                     )
//                 })}
//         </div>
//     )
// }
// export default DisplayEvent;
// // onClick={()=>deleteEvent(item.id)}