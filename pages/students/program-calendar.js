import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import useTrackedStore from "../../store/useTrackedStore";
import Program__Content from "../../components/Program__Calendar_Student/Program__Content";

const ProgramCalendar = () => {
    const state = useTrackedStore();
    const topbarLinks = [
        {
            href: "/student",
            label: `View Profile`,
        },
    ];
    const profileUserName = `${state?.studentsResp?.[0]?.Full_Name || ""}`;
    const quickLink = {
        href: "http://learn.studyvillage.org/",
        label: "Watch Video or Read SV Handbook",
    };
    //! Events are set manually, need to fix it
    const events = [
        {
            title: "Self Survey",
            start: state?.enrolmentsResp?.[0]?.Survey_Sent_Date,
            end: state?.enrolmentsResp?.[0]?.Survey_Sent_Date,
            up_down_ind: "N",
        },
        {
            title: "One-On-One",
            start: state?.enrolmentsResp?.[0]?.Face_to_Face_Meeting_Date,
            end: state?.enrolmentsResp?.[0]?.Face_to_Face_Meeting_Date,
            up_down_ind: "N",
        },
        {
            title: "Parents Meeting",
            start: state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date,
            end: state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date,
            up_down_ind: "N",
        },
        {
            title: "1st Follow Up Call",
            start: state?.enrolmentsResp?.[0]?.Follow_Up_Call_1_Start_Date,
            end: state?.enrolmentsResp?.[0]?.Follow_Up_Call_1_Start_Date,
            up_down_ind: "N",
        },
        {
            title: "2nd Follow Up Call",
            start: state?.enrolmentsResp?.[0]?.Follow_Up_Call_2_Start_Date,
            end: state?.enrolmentsResp?.[0]?.Follow_Up_Call_2_Start_Date,
            up_down_ind: "N",
        },
    ];
    return (
        <>
            <Navbar
                profileUserName={profileUserName}
                topbarLinks={topbarLinks}
            />
            <div class='main-root'>
                <Sidebar />
                <Program__Content quickLink={quickLink} events={events} />
            </div>
        </>
    );
};

export default ProgramCalendar;
