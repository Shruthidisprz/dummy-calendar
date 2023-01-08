import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import moment from "moment";
import React, { useState } from "react";
import './DisplayEvent.scss';
import DeleteModal from "./DeleteModal";
import Axios from "../Axios/Axios";
// import { setISODay } from "date-fns";
const DisplayEvent=(props)=>{
    const event = props.event;
    const setEvent = props.setEvent;
    const currentDate= props.currentDate;
    const [openDeleteModal,setOpenDeleteModal] = useState(false);
    // const [isDelete,setIsDelete] = useState(false);
    const [isDelete,setIsDelete] = useState('');
    // let Id ;
    const handleDelete=(id)=>{
        console.log(id,"id");
        setIsDelete(id);
        console.log(isDelete,"id1")
        setOpenDeleteModal(true);
        console.log(id,"id")
        console.log(openDeleteModal,"open")
        // console.log(isDelete,"delete")
        // isDelete && deleteEvent(id);
    }
    
    const deleteEvent= async (delId)=>{
        console.log(delId,"delId");
        // setOpenDeleteModal(true);
        // console.log(openDeleteModal,"opendeletr")
        // {isDelete &&
        // openDeleteModal&&
        console.log(delId,"id1");
        await Axios.delete(`api/appointments/event/${delId}`)
            const afterDelete =  event.filter((delItem)=>{
                return delItem.id !== delId;
            })
            setEvent(afterDelete);
            console.log(afterDelete,"afterDelete")
            setOpenDeleteModal(false);
        // console.log(openDeleteModal,'openDeleteModal')
        // {openDeleteModal && <DeleteModal setIsDelete={setIsDelete} setOpenDeleteModal={setOpenDeleteModal} id={Id}/>}
        // console.log(isDelete,"isDelete")
        // isDelete && await Axios.delete(`api/appointments/event/${Id}`)
        // isDelete && handleDelete();
    }
    
    return(
        <div>
                {event.map((item)=>{
                    const start =  moment (item.startTimeHrMin,'DD-MM-YYYY HH:mm')
                    // console.log(start,"start");
                    const end =  moment (item.endTimeHrMin,'DD-MM-YYYY HH:mm')
                    const result = end.diff(start,'minutes')
                    // console.log(result, "result")
                    const eventHeight = (result / 60)*46;
                    // console.log(parseInt(item.startTimeHrMin.slice(14,16)),"time");
                    const topHr = parseInt(item.startTimeHrMin.slice(11,13));
                    const topMin= (parseInt(item.startTimeHrMin.slice(14,16))/60)*46;
                    console.log(topHr, "topHr");
                    console.log(topMin, "topMin");
                    console.log((topHr*46)+topMin+92 , "top")
                    const isSelectedDate = currentDate.toISOString().slice(0,10) === item.eventDate.slice(0,10)
                    return(
                        // (topHr*46)+topMin+46
                        // <div>
                        <div className="event-wrapper">
                            {/* <div className={isSelectedDate? "display-event" : "no-event"}style={{height:eventHeight,top:(topHr*46)+topMin+46, padding:"0px"}}><span>{isSelectedDate && item.eventName}</span><span><span><FontAwesomeIcon className="icon" icon={faTrash} onClick={()=>deleteEvent(item.id)}/></span><span><FontAwesomeIcon className="icon"icon={faPencil}/></span></span></div> */}
                            <div className={isSelectedDate? "display-event" : "no-event"}style={{height:eventHeight,top:(topHr*46)+topMin+46, padding:"0px"}}><span>{isSelectedDate && item.eventName}</span><span><span><FontAwesomeIcon className="icon" icon={faTrash} onClick={()=>handleDelete(item.id)}/></span><span><FontAwesomeIcon className="icon"icon={faPencil}/></span></span></div>
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
                {console.log(isDelete,"delete id")}
                {openDeleteModal && <DeleteModal setOpenDeleteModal={setOpenDeleteModal} deleteEvent={deleteEvent} isDelete ={isDelete} />}
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