import React, { useState, useEffect } from 'react'
import {useRouter} from 'next/router';
import PdfSlider from '../../components/pdf-slider/PdfSlider'
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../store/useTrackedStore";
import profile1 from "../../assets/img/profile-1.jpg";
import profile2 from "../../assets/img/profile-2.jpg";
import wheel from "../../assets/img/Wheel.jpg";
import parents from "../../assets/img/parents.svg";


const SsTaskMonitor =({TaskDetails, disButton, CheckTask}) =>{
    const router = useRouter()
    /**{TaskDetails.TaskDetails.task.Enrollment.name} 
    {TaskDetails.TaskDetails.task.Student_Supporter.name}
    {TaskDetails.TaskDetails.task.Task}
    {TaskDetails.TaskDetails.task.Task_Assigned_Date}
    {TaskDetails.TaskDetails.task.Task_Due_Date}
    {TaskDetails.TaskDetails.task.Task_Status}*/
    return (
        <div className = "row task-section">
        <h4 className = "ss-monitor-title">Student Supporter Monitor</h4>
        <div className = "col-sm-4 task-data">
        <h3>Student Name</h3>
        <div>{TaskDetails?.task.Student.name}</div>
        </div>
        <div className = "col-sm-4 task-data">
        <h3>Student Record ID</h3>
        <div>{TaskDetails.task.id}</div>
        </div>
        <div className = "col-sm-4 task-data">
        <h3>Current Task</h3>
        <div>{TaskDetails.task.Task}</div>
        </div>
        <div className = "col-sm-4 task-data">
        <h3>Projected Start Date</h3>
        <div>{TaskDetails.task.Task_Assigned_Date}</div>
        </div>
        <div className = "col-sm-4 task-data">
        <h3>Projected End Date</h3>
        <div>{TaskDetails.task.Task_Due_Date}</div>
        </div>
        <div className = "col-sm-4 task-data">
        <h3>Task Status</h3>
        <div>{TaskDetails.task.Task_Status}</div>
        </div>
        <div className = "col-sm-4 task-data"></div>
        <div className = "col-sm-4">
        
        <button disabled = {disButton}  onClick = {()=>{CheckTask()}} style = {{marginTop: '100px'}}className = "btn btn-primary task-btn">CLOSE AND PROCEED TO NEXT TASK</button>
        </div>
        
        

        

    </div>
    )
}
 /*single-event-${(index % 4) + 1}*/
export default SsTaskMonitor