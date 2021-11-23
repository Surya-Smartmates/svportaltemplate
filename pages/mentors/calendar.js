import { useRouter } from "next/router";
import React from "react";

import MyCalendar from "../../components/Calendar/My__Calendar";
import useTrackedStore from "../../store/useTrackedStore";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import moment from "moment";

const SupportCalendar = () => {
  const router = useRouter();
  const state = useTrackedStore();
  const topbarLinks = [
    {
      href: "/mentor",
      label: `View Profile`,
    },
  ];

  const profile =
    router.pathname.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";
  const profileUserName = `${
    state?.studentSupportersResp?.[0]?.Vendor_Name || ""
  }`;
  let nextEvent = {};

  const events = state?.svTasksResp?.map((task) => {
    if (
      nextEvent?.Task_Assigned_Date === undefined &&
      moment().isSameOrBefore(task.Task_Assigned_Date)
    ) {
      nextEvent = task;
    } else if (
      nextEvent?.Task_Assigned_Date !== undefined &&
      moment().isSameOrBefore(task.Task_Assigned_Date) &&
      moment(nextEvent?.Task_Assigned_Date).isSameOrAfter(
        task.Task_Assigned_Date
      )
    ) {
      nextEvent = task;
    }
    return {
      title: task?.Task,
      start: task?.Task_Assigned_Date,
      end: task?.Task_Due_Date,
      up_down_ind: "N",
    };
  });

  return (
    <>
      <Navbar profileUserName={profileUserName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            {/* apply-wrapper */}
            <div className="apply-main-wrapper">
              <div className="container-fluid">
                <div className="event-calnder-wrapper white-box">
                  <div className="event-calender-title pb-2">
                    <h4>Your Calendar</h4>
                  </div>
                  <MyCalendar events={events} />
                </div>
                {/*<div className="row">
                  <div className="col-lg-7">
                    <div className="apply-wrapper white-box mt-4 mt-lg-5">
                      <h4>Add Event or Pending Action</h4>
                      <div className="apply-form-wrapp">
                        <form action>
                          <div className="single-input-wrap">
                            <label htmlFor>Students Name</label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>Participants</label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>
                              Event Type (eg. M2 Parents Meeting or M4 Open
                              Support)
                            </label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>Meeting Date and Time</label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>
                              Meeting Location or Link (if Web Meeting)
                            </label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>Note</label>
                            <input type="text" />
                          </div>
                          <div className="single-input-wrap">
                            <label htmlFor>Attach File</label>
                            <input type="text" />
                          </div>
                          <div className="register-btn pt-3">
                            <button type="submit" className="btn">
                              Add
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>*/}
              </div>
            </div>
            {/* apply-wrapper_End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportCalendar;
