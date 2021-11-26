import { useRouter } from "next/router";
import React, {useState, useEffect} from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import useTrackedStore from "../../store/useTrackedStore";
import cliniko from "../../assets/mentors/img/Cliniko.jpg";
import Link from "next/link";
import Image from "next/image";
import axios from 'axios';
import PdfSlider from "../../components/pdf-slider/PdfSlider";


import * as cookie from 'cookie'
import {getSession} from "next-auth/client"
import Router from 'next/router'

const InteractionReport = ({studentSupportersResp}) => {
    const router = useRouter();
    const state = useTrackedStore();

    const [studentEmail, setStudentEmail] = useState("")
    const [programName, setProgramName] = useState("Settling In")
    const [meetingType, setMeetingType] = useState("")
    const [survey_ID, setSurvey_ID] = useState("")
    const [reportContent, setReportContent] = useState("")

    const topbarLinks = [
        {
            href: "/mentor",
            label: `View Profile`,
        },
    ];
    
    const studentsList = state?.studentsResp
    

    const base_url = axios.create({
        baseURL: `${process.env.NEXTAUTH_URL}`
    })

    async function getStudentEmail(data){
        console.log(data)
        setStudentEmail(data)
        const SurveyID = await base_url.post(
            "/api/getZohoData",{
            moduleApiName:"Student_Surveys",
            criteria:`(Email:equals:${data})`
        }).then(resp=>resp.data).then(data => data.data)
        SurveyID !== undefined ? setSurvey_ID(SurveyID[0].id) : alert("Student's Survey isn't prepared yet")
        console.log(survey_ID)
        
    }

    state.setStudentSupportersResp(studentSupportersResp)

    useEffect(()=>{
        console.log(programName)
    },[programName])


    useEffect(()=>{
        console.log(reportContent)
    }, [reportContent])
    const checkModule = (data) =>{
        setProgramName(data)
        
    }

    const handleReportChange=(e)=>{
        setReportContent(e.target.value)
    }
    async function reportSubmitHandler(){
        if(survey_ID ===  ""){
            alert("please pick the Student for the report")
        }

        const dataToSubmit = {
            id: survey_ID
        }

        const dataToSubmit_Enrollment = {
            id: studentsList.id
        }
        
        switch(programName){
            
            case "Consolidating Studies":
                dataToSubmit["Meeting_Note_Consolidating_Studies"] = reportContent
                dataToSubmit_Enrollment["Latest_Interaction_Report"] = reportContent
                break
            case "Goal Setting":
                dataToSubmit["Meeting_Note_Goal_Setting"] = reportContent
                dataToSubmit_Enrollment["Latest_Interaction_Report"] = reportContent
                break
            case "Tracking Progress":
                dataToSubmit["Meeting_Note_Tracking_Progress"] = reportContent
                dataToSubmit_Enrollment["Latest_Interaction_Report"] = reportContent
                break
            case "Transition":
                dataToSubmit["Meeting_Note_Transition"] = reportContent
                dataToSubmit_Enrollment["Latest_Interaction_Report"] = reportContent
                break
            default:
                dataToSubmit["Meeting_Note"] = reportContent
                dataToSubmit_Enrollment["Latest_Interaction_Report"] = reportContent
        }

        
        let updateCRMSurvey
        console.log(dataToSubmit)

        if(reportContent === ""){
            alert("Please fill in the report")
        } else{
            updateCRMSurvey = await axios.post(
                `${process.env.NEXTAUTH_URL}/api/updateRecord`,{
                    moduleName:"Student_Surveys",
                    updated_data :{
                        "data": [
                            dataToSubmit
                        ]
                    }
                }
    
            )
            Router.reload(window.location.pathname)
        }
        

        const update_enrollment_latest_interaction_report = await axios.post(
            `${process.env.NEXTAUTH_URL}/api/updateRecord`,{
                moduleName:"Deals",
                updated_data :{
                    "data": [
                        dataToSubmit_Enrollment
                    ]
                }
            }

        )
        
    }
    const profile =
        router.pathname.split("/")?.[1] ||
        state?.portalUserResp?.User_Type?.toLowerCase() ||
        "";

    const moduleList = [
        //"M1", "M2", "M3", "M4", "M5", "M6", "M7", "M8", "M9", "ELICOS A", "ELICOS B", "ELICOS C", "ELICOS D", "ELICOS E"
        "Settling In", "Consolidating Studies", "Tracking Progress", "Goal Setting", "Goal Tracking", "Transition"
    ] 

    

    const profileUserName = `${studentSupportersResp?.[0]?.Vendor_Name || ""}`;
    return (
        <>
            <Navbar
                profileUserName={profileUserName}
                topbarLinks={topbarLinks}
            />
            <div class='main-root'>
                <Sidebar />
                <div className='main-content'>
                    <div className='content-wrapper'>
                        {/* apply-wrapper */}
                        <div className='apply-main-wrapper'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='apply-grid-box'>
                                            <div className='apply-wrapper white-box'>
                                                <h4>Interaction Report</h4>
                                                <p>
                                                    Use the form below to
                                                    complete your latest
                                                    Interaction Report.
                                                </p>
                                                <div className='apply-form-wrapp'>
                                                    <form>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Students Name
                                                            </label>
                                                            <select className = "nice-select">
                                                            <option value = "select Student for report" disabled selected></option>
                                                            {studentsList.map((student)=>{
                                                                return(
                                                                    <option onClick = {()=>{getStudentEmail(student.Cont_Email)}}>{student.Contact_Name.name}</option>
                                                                )
                                                                
                                                            })}
                                                            </select>
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Module Number
                                                                and Name
                                                            </label>
                                                            <select className = "nice-select">
                                                            {moduleList.map((mod)=>{
                                                                return(<option onClick = {()=>{checkModule(mod)}}>{mod}</option>)
                                                            })}
                                                            </select>{/*map modules here */}
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Meeting Type
                                                                (Please select)
                                                            </label>
                                                            <select className='nice-select'>
                                                                <option data-display='One-on-one Meetups'>
                                                                    One-on-one
                                                                    Meetups
                                                                </option>
                                                                <option
                                                                    value={1}>
                                                                    Meet the
                                                                    Parents
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Student's Email
                                                            </label>
                                                            <input type='text' value={studentEmail} />
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Meeting Date
                                                                (DD-MM-YYYY)
                                                            </label>
                                                            <input type='text' />
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Meeting Time
                                                                (am/pm)
                                                            </label>
                                                            <input type='text' />
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Meeting Location
                                                                (eg, Zee Cafe,
                                                                University of
                                                                Manchester
                                                                Campus or Web
                                                                Meeting, Zoom)
                                                            </label>
                                                            <input type='text' />
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Your Report
                                                            </label>
                                                            <textarea
                                                            onChange={handleReportChange}
                                                                name
                                                                id
                                                                cols={30}
                                                                rows={10}
                                                                defaultValue={
                                                                    ""
                                                                }
                                                            />
                                                        </div>
                                                        <div className='register-btn pt-3'>
                                                            
                                                        </div>
                                                    </form>
                                                    <button
                                                                onClick = {()=>{reportSubmitHandler()}}
                                                                className='btn'>
                                                                Submit
                                                            </button>
                                                </div>
                                                {/* previous-report */}
                                                <div className='previous-report-wrapper pt-4 pt-lg-5'>
                                                    <div className='previous-report'>
                                                        <h5>
                                                            View Your Previous
                                                            Reports
                                                        </h5>
                                                        <a href = "/mentors/rep-list">
                                                            Student’s Profiles
                                                            &gt;&gt;
                                                        </a>
                                                        <div style = {{ width: "30%" }}>
                                                        
                                                        </div>
                                                            
                                                        
                                                        
                                                    </div>
                                                   
                                                    <div className='previous-report'>
                                                        <h5>
                                                            For Guidelines on
                                                            Writing Your
                                                            Interaction Report
                                                        </h5>
                                                        <a href = "/mentors/guidelines">
                                                            Learning Materials
                                                            &gt;&gt;
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* previous-report */}
                                               
                                            </div>
                                            
                                            {/*<div className='check-active-sidebar'>
                                                <div className='others-active white-box'>
                                                    <h4>
                                                        Check In Other
                                                        Activities
                                                    </h4>
                                                    <div className='apply-form-wrapp'>
                                                        <form action>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Which
                                                                    activity are
                                                                    you checking
                                                                    in?(please
                                                                    select)
                                                                </label>
                                                                <select className='nice-select'>
                                                                    <option data-display='Follow Up Call'>
                                                                        Follow
                                                                        Up Call
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            1
                                                                        }>
                                                                        Pre-Departure
                                                                        Call
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            2
                                                                        }>
                                                                        Open
                                                                        Support
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Student’s
                                                                    Name
                                                                </label>
                                                                <input type='text' />
                                                            </div>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Module
                                                                    Number and
                                                                    Name
                                                                </label>
                                                                <input type='text' />
                                                            </div>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Meeting Date
                                                                    and Time
                                                                </label>
                                                                <input type='date' />
                                                            </div>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Activity
                                                                    Date
                                                                    (DD-MM-YYYY)
                                                                </label>
                                                                <input type='text' />
                                                            </div>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Activity
                                                                    Time (am/pm)
                                                                </label>
                                                                <input type='text' />
                                                            </div>
                                                            <div className='register-btn pt-3'>
                                                                <button
                                                                    type='submit'
                                                                    className='btn'>
                                                                    Check In
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className='single-sidebar feedback-widget text-center mt-lg-5 mt-4'>
                                                    <div className='feedback-widget-content'>
                                                        <div className='feedback-wi-icon'>
                                                            <Image
                                                                src={cliniko}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <div className='feedbac-widget-text pt-3'>
                                                            <h4>Case Notes</h4>
                                                            <p>
                                                                Access Cliniko
                                                                to update your
                                                                case notes by
                                                                clicking on the
                                                                button below.
                                                            </p>
                                                            <a href='page-5.html'></a>
                                                            <Link
                                                                className='btn cliniko-btn'
                                                                href='/support'>
                                                                Cliniko
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* apply-wrapper_End */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InteractionReport;

export async function getServerSideProps(context) {
    const session = await getSession(context)

    console.log(session);
    const parsedCookies = cookie.parse(context.req.headers.cookie || "");

  // if seesion not found then navigate him to the login
  if (!session) {
    return {
      redirect: {
        destination: "/login",
      },
      props: {
        session: null,
      },
    };
  }

  if (session && session.remember === false) {
    // when the user signin first time, remember variable in cookie will be empty but session variable will contain exp thats why we have to check it first
    let expired = Date.now() > (parsedCookies.expiredTime ?? session.exp);

    if (expired) {
      //remove remember from cookie
      if (parsedCookies.expiredTime) {
        context.res.setHeader(
          "Set-Cookie",
          cookie.serialize("expiredTime", String(parsedCookies.expiredTime), {
            httpOnly: true,
            maxAge: 0,
          })
        );
      }
      return {
        redirect: {
          destination: "/login",
        },
        props: {
          session: null,
        },
      };
    }
  }

  let studentSupportersResp = [];
  let studentsResp = [];

  const {
    data: { access_token: accessToken },
  } = await axios.get(process.env.ACCESSTOKEN_URL);

  //get SS data from CRM
  const { data: mentorResp } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
      moduleApiName: "Vendors",
      criteria: `(Email:equals:${session?.user?.email})`,
    }
  );
  studentSupportersResp = mentorResp?.data;
  const { data: stuResp } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
        moduleApiName: "Deals",
        criteria: `(Assigned_Student_Supporters:equals:${studentSupportersResp?.[0]?.id})`
    }
  );
studentsResp = stuResp?.data
  //set SS data to Zustand

  return{
      props:{
        studentSupportersResp,
        studentsResp
      }
  }
}
