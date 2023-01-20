import React, { useContext } from "react";
import { DataContext } from "../../DataContext/DataContext";
import { ServiceContext } from "../../DataContext/Services";
import './DeleteModal.scss';
const DeleteModal = () =>{
    // console.log("open1")
    const {isId} = useContext(DataContext);
    const {deleteEvent,setOpenDeleteModal} = useContext(ServiceContext);
    // const deleteEvent = props.deleteEvent;
    // const deleteSingleEvent = props.deleteSingleEvent;
    // const setOpenDeleteModal=props.setOpenDeleteModal;
    // const setIsDelete = props.setIsDelete;
    // const isId = props.isId;
    // const id = props.id;
    // console.log(id,"id modal")
    return(
        <div className="delete-modal-background">
            <div className="delete-modal-container">
                <div className="delete-modal-body">
                    Are you sure you want to delete?
                </div>
                <div className="delete-modal-footer">
                    {/* <button onClick={()=>deleteEvent(id)}>Yes</button> */}
                    <button onClick={()=>deleteEvent(isId)}>Yes</button>
                    {/* <button onClick={()=>setisId(true)}>Yes</button> */}
                    {/* <button onClick={()=>deleteSingleEvent(id)}>Yes</button> */}
                    {/* <button>Yes</button> */}
                    <button onClick={()=>setOpenDeleteModal(false)}>No</button>
                </div>
            </div>
        </div>
    )
}
export default DeleteModal;