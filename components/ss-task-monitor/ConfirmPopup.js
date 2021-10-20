import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'


function ConfirmPopup({ isOpen, CurrentRecord, toggle, CloseSVTask }){

        return(
            <div style = {{ display: isOpen ? "block" : "none" }} className = "popup-section">
                <div className = "popup-content">
                <h4 className = "popup-text">Confirm Closing of Task:</h4>
                <h4 className = "popup-text">Student's Name</h4><h4 className ="popup-data">{CurrentRecord?.task.Student.name}</h4>
                <h4 className = "popup-text">Student's Task</h4><h4  className ="popup-data">{CurrentRecord?.task.Task}</h4>
                <h4 className = "popup-text">Assigned Date</h4><h4  className ="popup-data">{CurrentRecord?.task.Task_Assigned_Date}</h4>
                <h4 className = "popup-text">Task Status</h4><h4 className ="popup-data">{CurrentRecord?.task.Task_Status}</h4>
                <button className = "popup-inner-btn btn btn-success" onClick={CloseSVTask}>APPROVE</button>
                <button className = "popup-inner-btn btn btn-danger" onClick={()=>{toggle()}}>CANCEL</button>
                </div>
            </div>
        )

   
}

export default ConfirmPopup