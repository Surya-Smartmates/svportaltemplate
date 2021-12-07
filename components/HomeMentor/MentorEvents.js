import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../store/useTrackedStore";
import parents from "../../assets/img/parents.svg"

const MentorEvents = ({ events, userName, parentsMeetingDescription, imgCol, textCol }) => {
    const state = useTrackedStore();
    const profile = state?.portalUserResp?.User_Type?.toLowerCase();

    const [selectedEventIndex, setSelectedEventIndex] = useState(0);

    useEffect(()=>{
        console.log(events)
    },[])
    return (
        <div className='events-area'>
            {/*<div className='event-box-wrapper white-box'>*/}
                <div className='row'>
                    <div className={imgCol}>
                        <div className='event-content-wrapp'>
                            <h4>Your Next Event</h4>
                            <div className=''>
                                {/* <!-- single-event-item --> */}
                                
                                    <div
                                        className="single-event-item text-center" 
                                        >
                                        <div className='event-icons'>
                                            <Image
                                                // layout='responsive'
                                                height={50}
                                                width={50}
                                                src={parents}
                                                alt=''
                                            />
                                        </div>
                                        <div className='event-text'>
                                            <h5>{events.Task}</h5>
                                            <p>{events.Task_Assigned_Date}</p>
                                        </div>
                                    </div>
                               
                            </div>
                        </div>
                    </div>
                    <div className={textCol}>
                        <div className='paraents-meeting-content' style = {{ maxHeight:"50px" }}>
                            {/*<h5>{events[selectedEventIndex].name}</h5>
                            <p>{events?.[selectedEventIndex]?.description}</p>*/}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            <div className='quick-link'>
                                
                                <Link
                                    href={`/${profile}/program-calendar`}>{`View All ${userName}’s Events`}</Link>
                            </div>
                        </div>
                    </div>
                </div>
            {/*</div>*/}
        </div>
    );
};

export default MentorEvents;
