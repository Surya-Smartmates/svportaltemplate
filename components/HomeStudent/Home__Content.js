import React, { useEffect, useState } from "react";
import profile1 from "../../assets/img/profile-1.jpg";
import profile2 from "../../assets/img/profile-2.jpg";
import wheel from "../../assets/img/Wheel.jpg";
import parents from "../../assets/img/parents.svg";
// import question from "../../assets/img/question.svg";
// import social from "../../assets/img/social-group.svg";
// import book from "../../assets/img/book-2.jpg";
// import line from "../../assets/img/line-o.svg";
// import { Link } from "react-router-dom";
import SingleUserProfile from "./SingleUserProfile";
import ProgramDescription from "./ProgramDescription";
import EventsArea from "./EventsArea";
import CardArea from "./CardArea";
import useTrackedStore from "../../store/useTrackedStore";
import _ from "lodash";
import { useRouter } from "next/router";

// const ZOHO = window.ZOHO;
const Home__Content = ({ quickLinks }) => {

    
    const state = useTrackedStore();
    const router = useRouter();
    const profile =
        router.pathname.split("/")?.[1] ||
        state?.portalUserResp?.User_Type?.toLowerCase() ||
        "";
    const [studentsResp, setStudentsResp] = useState([]);

    const modules = state?.enrolmentsResp?.[0]?.Life_Cycle_Stages_String?.split(
        ","
    )?.map((stage) => {
        return {
            name: _.toUpper(stage),
            active:
                _.upperCase(state?.enrolmentsResp?.[0]?.Life_Cycle_Stage) ===
                _.upperCase(stage),
        };
    });
    console.log("Modules ", { modules });
    // const events = state?.enrolmentsResp?.[0]?.Life_Cycle_Stages_String?.split(
    //     ","
    // ).map((stage) => {
    //     let splitedName = _.split(stage, "(")?.[1];
    //     splitedName = _.split(splitedName, ")")?.[0];
    //     return {
    //         name: `${splitedName} Parents Meeting`,
    //         imgSrc: parents,
    //         date:
    //             _.upperCase(state?.enrolmentsResp?.[0]?.Life_Cycle_Stage) ===
    //             _.upperCase(stage)
    //                 ? state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date
    //                 : "TBD",
    //         description:
    //             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni excepturi sint totam nulla veritatis nesciunt suscipit eveniet iusto porro nihil esse dolorem perferendis, repudiandae blanditiis vel delectus molestias saepe?",
    //     };
    // });
    const lcsstage =
        state?.enrolmentsResp?.[0]?.Life_Cycle_Stage_ELICOS ||
        state?.enrolmentsResp?.[0]?.Life_Cycle_Stage;
    let lcsSplitName = _.split(lcsstage, "(")?.[1];
    lcsSplitName = _.split(lcsSplitName, ")")?.[0];
    const events = [
        {
            name: `${lcsSplitName} Self Survey`,
            imgSrc: parents,
            date:
                state?.enrolmentsResp?.[0]?.Student_Survey_Start_Date || "TBD",
            description:
                "StudyVillage self-surveys are an important recurring aspect of each Happy, Healthy and Wise Module. You’ll receive a link to your survey two weeks following the commencement of your degree course semester (and 1 week in for ELICOS students).  Each survey should take no more than 3-5 minutes to complete.  There are two major components to the surveys:•	Invitation to indicate feelings about traditional areas of challenge and opportunity for international students •	Opportunity to set and assess goals, intentions and actions associated with your study",
        },
        {
            name: `${lcsSplitName} One-On-One Meetup`,
            imgSrc: parents,
            date:
                state?.enrolmentsResp?.[0]?.Face_to_Face_Meeting_Date || "TBD",
            description:
                "Your self-survey responses can provide an agenda for the key interaction, your one-on-one catchup with your student supporter. Your supporter will arrange to meet you at a convenient time and location like a local café or on your university campus. It’s their job to get to know you, find out what drives you, and work towards a plan to getting you to where you want to go. Your meetings are fantastic opportunities to: · Talk openly about your recent study experiences; Ask for independent, objective advice; · Make plans, overcome any problems you might face and set goals; and review issues or opportunities arising from survey responses",
        },
        {
            name: `${lcsSplitName} Parents Meeting`,
            imgSrc: parents,
            date: state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date || "TBD",
            description:
                "When your Outline has been submitted, your student supporter will organise a web-based videoconference between you, the student and their parents.  They’re a great opportunity to provide a practical and efficient feedback loop to parents, giving them insights into your student experience while canvassing the any challenges, difficulties or opportunities you face.   And of course, it gives your family confidence and peace of mind that you are getting good support from a professional supporter they can trust and ask questions of.",
        },
        {
            name: `${lcsSplitName} Follow Up Calls`,
            imgSrc: parents,
            date:
                state?.enrolmentsResp?.[0]?.Follow_Up_Call_1_Start_Date ||
                "TBD",
            description:
                "Your student supporter will reach out twice during the semester to find out how things are in your study life, wellbeing and progress. The check-in call duration is usually up to 30 minutes, time enough to cover good ground.",
        },
    ];

    const subTitle = state?.studentsResp?.[0]?.SV_Student_ID;
    return (
        <div className='main-content'>
            <div className='content-wrapper'>
                <div className='user-profile'>
                    {state?.studentsResp?.map((student) => {
                        return (
                            <SingleUserProfile
                                key={student.ID}
                                imgSrc={profile2}
                                name={`${student.Full_Name}`}
                                details={subTitle || "Your Child"}
                                course={student.Award_type}
                                university={`${student.Institution}, ${student.Country_Region}`}
                                btnLink={`/${profile}/student`}
                            />
                        );
                    })}

                    <SingleUserProfile
                        imgSrc={profile1}
                        name={state?.studentSupportersResp?.[0]?.Vendor_Name}
                        details={`Your Student Supporter in Melbourne, Australia`}
                        course='Servicing Students From:'
                        university={
                            state?.studentSupportersResp?.[0]
                                ?.Servicing_Students_From
                        }
                        btnLink={`/${profile}/mentor`}
                    />
                </div>

                {modules && (
                    <ProgramDescription
                        imgSrc={wheel}
                        name={`Your Happy, Healthy and Wise Program`}
                        heading='Program Description'
                        description={state?.portalAssets?.[0]?.Description}
                        modules={modules}
                        quickLinks={quickLinks}
                    />
                )}
                <EventsArea
                    events={events}
                    parentsMeetingDescription={
                        state?.parentsMeetingDescriptions?.[0]?.Description
                    }
                />
                <CardArea />
            </div>
        </div>
    );
};

export default Home__Content;
