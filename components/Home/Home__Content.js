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
const Home__Content = ({ quickLinks, subTitle }) => {
    const state = useTrackedStore();
    const router = useRouter();
    const profile =
        router.pathname.split("/")?.[1] ||
        state?.portalUserResp?.User_Type?.toLowerCase() ||
        "";
    const [studentsResp, setStudentsResp] = useState([]);

    useEffect(()=>{
        setStudentsResp(state?.studentsResp)
    }, [])


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
    //console.log("Modules ", { modules });
    const events = state?.enrolmentsResp?.[0]?.Life_Cycle_Stages_String !== undefined ?
    state?.enrolmentsResp?.[0]?.Life_Cycle_Stages_String?.split(
        ","
    ).map((stage) => {
        let splitedName = _.split(stage, "(")?.[1];
        splitedName = _.split(splitedName, ")")?.[0];
        return {
            name: `${splitedName} Parents Meeting`,
            imgSrc: parents,
            date:
                _.upperCase(state?.enrolmentsResp?.[0]?.Life_Cycle_Stage) ===
                _.upperCase(stage)
                    ? state?.enrolmentsResp?.[0]?.Parent_s_Meeting_Date
                    : "TBD",
            description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur magni excepturi sint totam nulla veritatis nesciunt suscipit eveniet iusto porro nihil esse dolorem perferendis, repudiandae blanditiis vel delectus molestias saepe?",
        };
    }) : [{name: "No Modules", imgSrc:"No Image"}];
    //console.log(events);
    return (
        <div className='main-content'>
            <div className='content-wrapper'>
                <div className='user-profile'>
                    {state?.studentsResp?.map((student) => {
                        
                        return (
                            <SingleUserProfile
                                key={student.ID}
                                imgSrc={profile2}
                                stuData = {student}
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
                        details={`${state?.studentsResp?.[0]?.Full_Name}’s Student Supporter in Melbourne, Australia`}
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
                        name={`${state?.studentsResp?.[0]?.Full_Name}’s Happy, Healthy and Wise Program`}
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
