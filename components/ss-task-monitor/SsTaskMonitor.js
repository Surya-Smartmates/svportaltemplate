import React from 'react'



const SsTaskMonitor =()=>{
    return (
       <div>
       <div className = "widget-component">
           <h1 className = "widget-header">Task Monitor</h1>
            <div className = "row-group">
                <div className = "widget-row">
                    <h3 className = "widget-section-header">Student Name</h3>
                </div>
                <div className = "widget-row">
                    <h3 className = "widget-section-header">Current Task</h3>
                </div>
                <div className = "widget-row">
                    <h3 className = "widget-section-header">Current Status</h3>
                </div>
                <div className = "widget-row-content">
                    <select onChange = {()=>console.log("test")} className = "widget-dropdown">
                        <option>OPTION 1</option>
                        <option>OPTION 2</option>
                        <option>OPTION 3</option>
                    </select>
                </div>
                <div className = "widget-row-content">
                    <h3 className = "widget-section-header">Task Name Here</h3>
                </div>
                <div className = "widget-row-content">
                    <h3 className = "widget-section-header">Status Here</h3>
                </div>
            </div>
                <div className = "widget-row">
                    <h3 className = "widget-section-header">Task Start Date</h3>
                </div>
                <div className = "widget-row">
                    <h3 className = "widget-section-header">Task End Date</h3>
                </div>
                <div className = "widget-row">
                    <h3 className = "widget-section-header">Task List</h3>
                </div>
                <div className = "widget-row-content">
                    <input id = "taskStartDate"></input>
                </div>
                <div className = "widget-row-content">
                    <input id = "taskEndDate"></input>
                </div>
                <div className = "widget-row-content">
                <ul>
                    <li>Task 1</li>
                    <li>Task 2</li>
                    <li>Task 3</li>
                </ul>
                </div>
                <h3 className = "widget-row widget-section-header">COMMENT</h3>
                    <textarea className = "widget-text">
                    </textarea>
                <div className = "widget-row">
                    <button className = "widget-button" onClick = {()=>console.log("test")}>Submit</button>
                </div>
                <div className = "widget-row">&nbsp;</div>
            </div>
       </div>
    )
}

export default SsTaskMonitor