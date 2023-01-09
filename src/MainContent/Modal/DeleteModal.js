import React from "react";
import './DeleteModal.scss';
const DeleteModal = (props) =>{
    console.log("open1")
    const deleteEvent = props.deleteEvent;
    // const deleteSingleEvent = props.deleteSingleEvent;
    const setOpenDeleteModal=props.setOpenDeleteModal;
    // const setIsDelete = props.setIsDelete;
    const isDelete = props.isDelete;
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
                    <button onClick={()=>deleteEvent(isDelete)}>Yes</button>
                    {/* <button onClick={()=>setIsDelete(true)}>Yes</button> */}
                    {/* <button onClick={()=>deleteSingleEvent(id)}>Yes</button> */}
                    {/* <button>Yes</button> */}
                    <button onClick={()=>setOpenDeleteModal(false)}>No</button>
                </div>
            </div>
        </div>
    )
}
export default DeleteModal;