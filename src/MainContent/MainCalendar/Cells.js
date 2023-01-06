import React from "react";
import { Link } from "react-router-dom";
import './Cells.scss';

const Cells=(props)=>{
    const isActive = props.isActive;
    // const filterEvent = event.filter((item)=>{
    //     return 
    // })
    return(
        <div className= {isActive ? "selected-cells": "cells"}>
            <Link to="/days">{props.children}</Link>
        </div>
    )
}
export default Cells