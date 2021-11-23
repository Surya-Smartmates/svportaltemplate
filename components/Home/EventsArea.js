import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../store/useTrackedStore";

const EventsArea = ({ events, userName, parentsMeetingDescription }) => {
  const state = useTrackedStore();
  const profile = state?.portalUserResp?.User_Type?.toLowerCase();

  const [selectedEventIndex, setSelectedEventIndex] = useState(0);
  const [eventImage, setEventImage] = useState("")


  return (
    <div className="events-area">
      <div className="event-box-wrapper white-box">
        <div className="row">
          <div className="col-lg-8">
            <div className="event-content-wrapp">
              <h4>Your Next Event</h4>
              <div className="events-items">
                {/* <!-- single-event-item --> */}
                {events.map((event, index) => (
                  <div
                    className={`single-event-item text-center single-event-${
                      (index % 4) + 1
                    }`}
                    key="index"
                    onClick={() => setSelectedEventIndex(index)}
                  >
                    <div className="event-icons">
                      {/*event.imgSrc !== undefined || event.imgSrc!== null ? <Image
                        // layout='responsive'
                        height={50}
                        width={50}
                        src={event.imgSrc.src}
                        alt=""
                      /> : <div></div>*/}
                    </div>
                    <div className="event-text">
                      <h5>{event.name}</h5>
                      <p>{event.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="paraents-meeting-content">
              <h5>{events[selectedEventIndex].name}</h5>
              <p>{parentsMeetingDescription}</p>
              <div className="quick-link">
                <h5>Quick Links</h5>
                <Link
                  href={`/${profile}/program-calendar`}
                >{`View All ${userName}’s Events`}</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsArea;
