import React, {useState, useCallback, useEffect} from "react";
import happen from "../../assets/mentors/img/happen-bg.jpg";
import student1 from "../../assets/mentors/img/student-1.jpg";
import student2 from "../../assets/mentors/img/student-2.jpg";
import student3 from "../../assets/mentors/img/student-3.jpg";
import student4 from "../../assets/mentors/img/student-4.jpg";
import student5 from "../../assets/mentors/img/studernt-5.jpg";
import student6 from "../../assets/mentors/img/student-6.jpg";
import user from "../../assets/mentors/img/user-st.svg";
import parents from "../../assets/img/parents.svg"
import question from "../../assets/mentors/img/question.svg";
import social from "../../assets/mentors/img/social-group.svg";
import fb from "../../assets/img/facebook-fix-green.svg"
import yt from "../../assets/img/youtube-green.svg"
import ig from "../../assets/img/instagram-fix-green.svg"
import lkin from "../../assets/img/linkedin-fix-green.svg"
import book from "../../assets/mentors/img/book-2.jpg";


import Image from "next/image";
import MyCalendar from "../../components/Calendar/My__Calendar";

import SingleUserProfile from "../../components/HomeStudent/SingleUserProfile";
import MentorEvents from "../../components/HomeMentor/MentorEvents"

//Smartmates add popup to Calendar
import CalendarModal from "../../components/calendar-modal/calendar-modal";

import { useRouter } from "next/dist/client/router";
import useTrackedStore from "../../store/useTrackedStore";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import { useSession, signIn, signOut, getSession } from "next-auth/client";
import Cookies from "js-cookie";
import * as cookie from "cookie";
import axios from "axios";
import _ from "lodash";
import moment from "moment";
import Link from "next/link";

//Smartmates add Panel
import ConfirmPopup from "../../components/ss-task-monitor/ConfirmPopup"
import SsTaskMonitor from "../../components/ss-task-monitor/SsTaskMonitor";
import Router from "next/router"
import PdfSlider from "../../components/pdf-slider/PdfSlider";
import { CarouselData } from "../../components/PDF_Carousel/CarouselData";

//import { Navigation } from "swiper";
// const events = [
//   {
//     title: "General Meeting",
//     start: "2021-03-03 02:00",
//     end: "2021-03-03 06:59",
//     up_down_ind: "N",
//   },
//   {
//     title: "Meeting",
//     start: "2021-03-03 02:00",
//     end: "2021-03-03 06:59",
//     up_down_ind: "N",
//   },
//   {
//     title: "General",
//     start: "2021-03-03 02:00",
//     end: "2021-03-03 06:59",
//     up_down_ind: "N",
//   },
//   {
//     title: "Parent-Teacher Meeting",
//     start: "2021-04-04 07:00",
//     end: "2021-04-04 23:59",
//     up_down_ind: "Y",
//   },
//   {
//     title: "Career Counceling",
//     start: "2021-05-05 00:00",
//     end: "2021-05-10 01:59",
//     up_down_ind: "Y",
//   },
//   {
//     title: "Project Meeting",
//     start: "2021-06-06 02:00",
//     end: "2021-06-06 06:59",
//     up_down_ind: "N",
//   },
//   {
//     title: "Exam Result Review",
//     start: "2021-07-07 07:00",
//     end: "2021-07-07 23:59",
//     up_down_ind: "Y",
//   },
//   {
//     title: "Scholarship Review",
//     start: "2021-08-08 00:00",
//     end: "2021-08-08 01:59",
//     up_down_ind: "Y",
//   },
//   {
//     title: "Yearly Final Meeting",
//     start: "2021-09-09 02:00",
//     end: "2021-09-09 06:59",
//     up_down_ind: "N",
//   },
// ];

const SupportHome = ({
  studentSupportersResp,
  svTasksResp,
  portalUserResp,
  studentsResp,
}) => {
  const router = useRouter();
  const state = useTrackedStore();

  //Embla Carousel Declaration Here
 
  const SliderData = [
    {title: "Slider 1",
      image_cover: fb}
  ]
  const topbarLinks = [
    {
      href: "/mentor",
      label: `View Profile`,
    },
  ];

  //console.log({ studentSupportersResp });
  //console.log({studentsResp});
  state.setStudentSupportersResp(studentSupportersResp);
  state.setSvTasksResp(svTasksResp);
  state.setPortalUserResp(portalUserResp);
  state.setStudentsResp(studentsResp);
  
  //Smartmates codes

  
  const highlightTask = (data) =>{
   
    //Add enrollment data to section
    console.log(data)
    let ListTaskName = [];

    console.log("Student Name is " + data.Contact_Name.name)
    console.log(events)
    ListTaskName = events.filter((e)=>{
      if(e.task.Student !== null && e.task.Student.name.includes(data.Contact_Name.name)&& e.task.Task_Status.includes("Not Completed")){
        return true
      }
    })

    if(ListTaskName.length === 0){
      alert("This student have no pending task")
    }
    
    
    const TaskData = ListTaskName.length !== 0 ? ListTaskName[0] : {task: {Enrollment:{name:""}, Task:"", Student:{name:""}, Student_Supporter:{name:""}, Task_Assigned_Date:"", Task_Due_Date:"", Task_Status:"", id:""}}
    if(TaskData !== undefined){
      setSpecificTask(TaskData)
      console.log("successfully set Specific Task")
    }else{
      setSpecificTask({task: {Enrollment:{name:""}, Task:"", Student:{name:""}, Student_Supporter:{name:""}, Task_Assigned_Date:"", Task_Due_Date:"", Task_Status:"", id:""}}) 
    }
    setEnableCloseTask(false)
    console.log(specificTask)
      /* 
    
     /* && moment().isSameOrBefore(e.Task_Assigned_Date) &&
      moment(nextEvent?.Task_Assigned_Date).isSameOrAfter(
        task.Task_Assigned_Date)
      
    
    specificTask.length !== 0 ? (setSpecificEnrollment(specificTask[0]), setEnableCloseTask(false) )
    : 
    (alert("Student have no Task yet"),setSpecificEnrollment({task: {Enrollment:{name:""}, Task:"", Student_Supporter:{name:""}, Task_Assigned_Date:"", Task_Due_Date:"", Task_Status:""}}) ,setEnableCloseTask(true));
    highlightStu === "" ? setHighlightStu("student-highlight") : setHighlightStu("")
    console.log(specificTask)
    console.log("check Specific Enrollment")
    console.log(specificEnrollment.task)*/
  }

  async function CloseSVTask(){
    console.log("test")
    let completeTask = {...specificTask};
    console.log("this is the task")
    console.log(completeTask)
    console.log(completeTask.task.id)
    let confirmUpdate = confirm(`CLOSE THIS TASK?:\n ${completeTask.task?.Enrollment?.name}`)
    //completeTask.task.Task_Status = "Completed"

    if(confirmUpdate === true){//${process.env.NEXTAUTH_URL}
      const updateTaskinCRM = await axios.put(`/api/updateRecord`, {
        moduleName : "SV_Tasks",
        updated_data : {
          "data": [
            {
              "id":completeTask.task.id.toString(),
              "Task_Status": "Completed"//completeTask.task.Task_Status
            }
          ]
        }
      })
      console.log(updateTaskinCRM) 
    }
    Router.reload(window.location.pathname)
  }
  async function OpenTaskPopup (){
    setShowPopup(!showPopup)
  }

  const [specificTask, setSpecificTask] = useState({task: {Enrollment:{name:""}, Task:"", Student:{name:""}, Student_Supporter:{name:""}, Task_Assigned_Date:"", Task_Due_Date:"", Task_Status:"", id:""}})
  const [showPopup, setShowPopup] = useState(false)
  const [popupTitle, setPopupTitle] = useState("")
  const [highlightStu, setHighlightStu] = useState("")
  const [enableCloseTask, setEnableCloseTask] = useState(true)
  const [hgEvent, setHgEvent] = useState({title:"test", start:new Date().toString(), end:new Date().toString(), student_name: ""})
  //Embla Carousel Properties

  
  
  const profile =
    router.pathname.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";
  const profileUserName = `${studentSupportersResp?.[0]?.Vendor_Name || ""}`;
  let nextEvent = {};
  console.log("Today ", moment());

  useEffect(()=>{
    state.setSvTasksResp(svTasksResp);
    console.log(state?.studentSupportersResp?.[0])
  }, [])
  
  /*const CalEvents = (svTasksResp !== null && svTasksResp !== undefined) ? svTasksResp?.map((task) => { //Add avoidance to null value
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
    return {title: task?.Task,
      start: task?.Task_Assigned_Date,
      end: task?.Task_Due_Date,
      student_name: task?.Enrollment?.name, //Smartmates code for checking Student Name
      student_supporter: task?.Student_Supporter?.name, 
      status: task?.Task_Status,
      //Smartmates Code for checking Student Supporter name
      //Smartmates Code for checking Student Supporter Email
      up_down_ind: "N",
    };
  }) : null;*/

  const formatDate = (dd) =>{
    let ClickedEvent = {...dd}
    ClickedEvent.start = ClickedEvent.start.toString()
    ClickedEvent.end = ClickedEvent.end.toString()
    ClickedEvent.student_name = dd.student_name
    setHgEvent(ClickedEvent)
    }


  const CalEvents = []
  const events =  (svTasksResp !== null && svTasksResp !== undefined) ? svTasksResp?.map((task) => { //Add avoidance to null value
    let start = task.Task_Assigned_Date
    let end = task.Task_Due_Date
    let title = task.Task
    let student_name = task.Student.name
    if (
      nextEvent?.Task_Assigned_Date === undefined &&
      moment().isSameOrBefore(task.Task_Assigned_Date)
    ) {
      nextEvent = task;
      CalEvents.push({start: start, end: end, title: title, student_name: student_name})
    } else if (
      nextEvent?.Task_Assigned_Date !== undefined &&
      moment().isSameOrBefore(task.Task_Assigned_Date) &&
      moment(nextEvent?.Task_Assigned_Date).isSameOrAfter(
        task.Task_Assigned_Date
      )
    ) {
      nextEvent = task;
    }
    return {task
      /*title: task?.Task,
      start: task?.Task_Assigned_Date,
      end: task?.Task_Due_Date,
      student_name: task?.Enrollment.name, //Smartmates code for checking Student Name
      student_supporter: task?.Student_Supporter.name, 
      status: task?.Task_Status,
      //Smartmates Code for checking Student Supporter name
      //Smartmates Code for checking Student Supporter Email
      up_down_ind: "N",*/
    };
  }) : null;
  console.log({ nextEvent });

  

  useEffect(()=>{
    console.log("hello")
    console.log(events)
  })

  return (
    <>
      <Navbar profileUserName={profileUserName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
        <ConfirmPopup CloseSVTask = {()=>{CloseSVTask()}} CurrentRecord = {specificTask} toggle = {()=>setShowPopup(false)} isOpen = {showPopup}/> 
          <div className="content-wrapper">
          <div className = "row">
            <div className = "col-md-6">
              <SingleUserProfile
              name ={state?.studentSupportersResp?.[0]?.Vendor_Name}
              details = {"Your Student Supporter From " + state?.studentSupportersResp?.[0]?.Servicing_Students_From}
              course = "This is Student Supporter Description"
              defClass = "ment-single-profile single-profile d-flex align-items-center white-box"
              />
            </div>
            <div className = "col-md-6">
            <SingleUserProfile 
              defClass = "ment-single-profile single-profile d-flex align-items-center white-box"
            />  
            </div>
          </div>
            
            
            <div className="activitis-area">
              <div className="single-activities white-box">
              <MentorEvents  imgCol = "col-lg-6" textCol = "col-lg-6" events = {state?.svTasksResp?.[0]}/>
              <h4>Your Students</h4>
                <div className="studetnt-list">
                
                  {(state?.studentsResp !== undefined || state?.studentsResp !== null) ? state?.studentsResp?.map((student, index) => {
                    return ( student.Stage !== "Closed Won" ? 
                      <div
                        className="single-student-list d-flex align-items-center"
                        key={index}
                      >
                        <div className="st-list-img">
                          <Image width={60} height={60} src={student1} alt="" />
                        </div>
                        <div className={`st-name-list click-highlight ${highlightStu}`}>
                          <a onClick = {()=>{highlightTask(student)}}href>{student?.Contact_Name?.name}</a>
                        </div>
                      </div>
                     : <div></div>);
                  }) : <div></div>}
                  
                  {/* student?.Full_Name*/}
                  {/* st-inner-title */}
                  {/* <div className="st-inner-title">
                    <h4>New Students</h4>
                    <p>
                      Your new students haven’t completed their profile yet.
                      When they do you will find all their details in the Your
                      Students Tab, and they will no longer appear in this list.
                    </p>
                  </div>
                   */}
                  {/* st-inner-title */}
                  {/* single-student-list */}
                  {/* <div className="single-student-list d-flex align-items-center">
                    <div className="st-list-img">
                      <span>
                        <Image width={60} height={60} src={user} alt="" />
                      </span>
                    </div>
                    <div className="st-name-list">
                      <a href>Terence Souza</a>
                    </div>
                  </div>
                   */}
                  {/* single-student-list */}
                  {/* single-student-list */}
                  {/* <div className="single-student-list d-flex align-items-center">
                    <div className="st-list-img">
                      <span>
                        <Image width={60} height={60} src={user} alt="" />
                      </span>
                    </div>
                    <div className="st-name-list">
                      <a href>Shirmali Silva </a>
                    </div>
                  </div> */}
                  {/* single-student-list */}
                </div>
              </div>
              <div className="your-students white-box">
              <div className="calender-title">
                  <h4>Your Calendar</h4>
                  <span>Friday, October 17th</span>
                  <MyCalendar formatDate ={formatDate} style = {{zIndex: 20}} events={CalEvents} />
                  <div style = {{ marginBottom: "20px" }}>
                  <div>Event Name: {hgEvent.title}</div>
                  <div>Student's Name: {hgEvent.student_name}</div>
                  <div>Start Date: {hgEvent.start}</div>
                  <div>End Date: {hgEvent.end}</div>
                  </div>
                  <div className="calender-bottom mt-3 mt-lg-4">
                  <CalendarModal EventTitle = {popupTitle} trigger = {showPopup}/>
                    <div className="activits-text">
                      <h5>
                        Next Up:{/*nextEvent?.Task*/} with {/*nextEvent?.Student_Name*/}
                      </h5>
                      {/* <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat.
                      </p> */}
                      <Link href="mentors/calendar">
                        <a href className="btn">
                          Go To Your Calendar
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
            <div className = "row">
                <div className = "col-lg-8"  style ={{ marginTop: "2%" }}>
                <MentorEvents imgCol = "col-lg-4" textCol = "col-lg-8" events = {state?.svTasksResp?.[0]}/>
                </div>
                <div className = "col-lg-4" style ={{ marginTop: "5%" }} >
                <h4>Next Up: {state?.svTasksResp?.[0]?.Task}</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>

            </div>
                  <div>
                  <SsTaskMonitor disButton = {enableCloseTask}  CheckTask = {()=>{OpenTaskPopup()}} TaskDetails = {specificTask} />
                     
                  </div>
            <div className = "single-card-block white box">
                      <h4>Core Happy, Healthy, Wise Program</h4>
                      <div className = "row">
                        <div className = "col-lg-4">
                          <Image width = {300} height = {300} src={parents} alt="parents image"/>
                        </div>
                        <div className = "col-lg-4">
                          <Image width = {300} height = {300} src={parents} alt="parents image"/>
                        </div>
                        <div className = "col-lg-4">
                          <Image width = {300} height = {300} src={parents} alt="parents image"/>
                        </div>
                        <div className = "col-lg-4">
                          <Image width = {300} height = {300} src={parents} alt="parents image"/>
                        </div>
                      </div>
            </div>
            {/* calender-blok-area */}
            {/* CARD-ITEMS */}
            <div className="card-block-area">
              {/* single-card */}
              <div className="single-card-block white-box text-center">
                <div className="card-icon">
                  <Image width={60} height={60} src={question} alt="" />
                </div>
                <div className="card-text">
                  <h4>Need Help?</h4>
                  <p>
                    You can contact your Agent or StudyVillage directly. Click
                    below for all contact details.
                  </p>
                </div>
                <Link href="mentors/contact">
                  <a href="page-5.html" className="btn contact-btn">
                    Contact us
                  </a>
                </Link>
              </div>
              {/* single-card */}
              {/* single-card */}
              <div className="single-card-block white-box text-center">
                <div className="student-card-icon">
                <a href = "https://www.facebook.com/105113841330878" target = "_blank" rel="noreferrer noopener"><Image className = "socmed-image"  src={fb} alt=''/></a>
                    <a href = "https://www.youtube.com/channel/UCbzNF9F-uZDotmUWL_p8vhQ" target = "_blank" rel="noreferrer noopener"><Image className = "socmed-image-yt" src={yt} alt=''/></a>
                    <a href = "https://www.linkedin.com/company/69714823" target = "_blank" rel="noreferrer noopener"><Image  className = "socmed-image" src={lkin} alt=''/></a>
                    <a href = "https://instagram.com/study_village" target = "_blank" rel="noreferrer noopener"><Image className = "socmed-image" src={ig} alt=''/></a>
                </div>
                <div className="card-text">
                  <h4>Follow Us</h4>
                  <p>
                    Follow StudyVillage Social Media to know more about how we
                    help students in their studies and personal growth journey..
                  </p>
                </div>
              </div>
              {/* single-card */}
              {/* single-card */}
              <div className="single-card-block white-box text-center">
              <div className= 'card-icon'>
                    {/**/}
                    <Image width={100} height={100} src={book} alt='' width={20} height={20}/>
                </div>
                <div className="card-text">
                  <h4>Resolve</h4>
                  <p>
                    Our journal talks in depth about the challenges of studying
                    overseas, in an accessible, practical and light-hearted way.
                  </p>
                </div>
                <a href className="btn contact-btn">
                  Read
                </a>
              </div>
              {/* single-card */}
            </div>
            {/* CARD-ITEMS */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SupportHome;

export async function getServerSideProps(context) {
  const session = await getSession(context);

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

  // when user sign in using credential provider and uncheck the remember option
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
  //* Everyting is now OK, do your additional Code Here
  let portalUserResp = {};
  let parentsResp = [];
  let studentsResp = [];
  let enrolmentsResp = [];
  let surveysResp = [];
  let svTasksResp = [];
  let studentSupportersResp = [];
  let agentsResp = [];
  let portalAssets = [];
  let parentsMeetingDescriptions = [];
  let lifecycleDetails = [];
  let allAssets = [];
  let leadsResp = [];
  const {
    data: { access_token: accessToken },
  } = await axios.get(process.env.ACCESSTOKEN_URL);
  console.log({ accessToken });

  // //todo Fetching Portal User Details
  const { data: portResp } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
      moduleApiName: "Portal_Users",
      criteria: `(Email:equals:${session?.user?.email})`,
    }
  );
  portalUserResp = portResp?.data?.[0];

  // //todo FetchingAgents Details
  const { data: mentorResp } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
      moduleApiName: "Vendors",
      criteria: `(Email:equals:${session?.user?.email})`,
    }
  );
  studentSupportersResp = mentorResp?.data;
  console.log("check if this is the data")
  console.log({ studentSupportersResp});
  console.log(studentSupportersResp?.[0]?.id)

  
  // //todo Fetching SV Tasks for that Mentors
  const { data: svTasks } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
      moduleApiName: "SV_Tasks",
      criteria: `((Student_Supporter:equals:${studentSupportersResp?.[0]?.id})and(Task_Status:equals:Not%20Completed))`,
    }
  );
  // and(Task_Status:equals:Not%20Completed)
  svTasksResp = svTasks.data !== undefined ? svTasks?.data : [];
  console.log({ svTasksResp });

  // //todo Fetching Agent's Students Details
  const { data: stuResp } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
      moduleApiName: "Deals",
      criteria: `(Assigned_Student_Supporters:equals:${studentSupportersResp?.[0]?.id})`,
    }
  );
 
  studentsResp = stuResp.data !== undefined  ? stuResp?.data : [];
  console.log({stuResp})
/**/
  return {
    props: {
      portalUserResp,
      studentSupportersResp,
      svTasksResp,
      studentsResp,
    },
  };
}
