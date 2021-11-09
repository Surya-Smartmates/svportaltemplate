import React, {useState, useEffect} from "react";
import { Calendar, momentLocalizer, views } from "react-big-calendar";
import moment from "moment";
import events from "./events";
import "react-big-calendar/lib/css/react-big-calendar.css";
// import './calendar__style.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
import useTrackedStore from "../../store/useTrackedStore";

const localizer = momentLocalizer(moment);



const ColoredDateCellWrapper = ({ children }) =>
    React.cloneElement(React.Children.only(children), {
        style: {
            backgroundColor: "lightblue",
        },
    });

const My__Calendar = ({ events, formatDate }) => {
    const state = useTrackedStore();
    
    // console.log({
    //     title: "Meeting with Parents",
    //     start: state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date,
    //     end: state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date,
    //     up_down_ind: "N",
    // });
    // const events = [
    //   {
    //     title: "Meeting with Parents",
    //     start: state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date,
    //     end: state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date,
    //     up_down_ind: "N",
    //   },
    // ];
    
    return (
        <div>
            {console.log(events)}
            <Calendar
                localizer={localizer}
                events={events}
                components={{
                    timeSlotWrapper: ColoredDateCellWrapper,
                    toolbar: CustomToolbar,
                }}
                onSelectEvent = {(event)=>{formatDate(event)}}
                startAccessor='start'
                endAccessor='end'
                views={{
                    month: true,
                }}
                style={{ height: 500, width: "100%" }}
            />
            
        </div>
    );
};
export let navigate = {
    PREVIOUS: "PREV",
    NEXT: "NEXT",
};

class CustomToolbar extends React.Component {
    render() {
        let {
            localizer: { messages },
            label,
        } = this.props;
        return (
            <div className='rbc-toolbar'>
                <span className='rbc-btn-group'>
                    <button
                        type='button'
                        onClick={this.navigate.bind(null, navigate.PREVIOUS)}>
                        <FontAwesomeIcon icon={faCaretLeft} />
                    </button>
                    <span className='rbc-toolbar-label'>{label}</span>
                    <button
                        type='button'
                        onClick={this.navigate.bind(null, navigate.NEXT)}>
                        <FontAwesomeIcon icon={faCaretRight} />
                    </button>
                </span>
            </div>
        );
    }
    navigate = (action) => {
        this.props.onNavigate(action);
    };
}

export default My__Calendar;
