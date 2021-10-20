import React from 'react'

function CalendarModal(props){
    return(props.trigger)?(
    <div>
        <div className = "calpopup">
            <div className = "calpopup-content">
                <h1>{props.EventTitle}</h1>
                <button className = "calpopup-content-btn">TEST</button>
            </div>
        </div>
    </div>):"";
}

export default CalendarModal