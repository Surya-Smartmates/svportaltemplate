import React, {useEffect} from "react";
import dynamic from "next/dynamic";
// import AgentHome from "./components/AgentHome/AgentHome";
import NavbarAgent from "../../components/Shared/Navbar/Navbar-Agent";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
// import "./style.css";
// import "./responsive.css";
// import happenbg from "../../assets/img/happen-bg.png";


import applybtn from "../../assets/agents/img/just-blue.png"

import social from "../../assets/agents/img/social-group.svg";
import fb from "../../assets/img/facebook-fix-green.svg"
import yt from "../../assets/img/youtube-green.svg"
import ig from "../../assets/img/instagram-fix-green.svg"
import lkin from "../../assets/img/linkedin-fix-green.svg"
import feedback from "../../assets/agents/img/feedback.svg";

import book from "../../assets/agents/img/resolve-page2.png";

import Image from "next/image";
import { useRouter } from "next/router";
import useTrackedStore from "../../store/useTrackedStore";
import { useSession, signIn, signOut, getSession } from "next-auth/client";
import Cookies from "js-cookie";
import * as cookie from "cookie";
import axios from "axios";
import _ from "lodash";

// import Chart from "../../components/Chart/Chart";
const Chart = dynamic(
  async () => await import("../../components/Chart/Chart"),
  { ssr: false }
);
// console.log({ Chart });
const AgentDashboard = ({
  portalUserResp,
  agentsResp,
  leadsResp,
  studentsResp,
}) => {
  const router = useRouter();
  const state = useTrackedStore();
  const topbarLinks = [
    {
      href: "/profile",
      label: `View Profile`,
    },
  ];
  state.setAgentsResp(agentsResp);
  state.setPortalUserResp(portalUserResp);
  state.setStudentsResp(studentsResp);
  const profile =
    router.pathname.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";
//Smartmates Code

useEffect(()=>{
  console.log(state?.agentsResp?.[0]?.id)
  console.log(state.studentsResp)
},[])
  async function submitNewRecord (data){
    const submittedData = {
      name: data.target.name.value,
      pref_contact: data.target.pref_contact.value,
      course: data.target.course.value,
      institution: data.target.institution.value,
      program: data.target.program.value,
      city: data.target.city.value,
      agency: data.target.agency.value,
      date: data.target.date.value
    }

    const addRecordResponse = await axios.post()
    console.log(data.target.program.value)
    console.log(submittedData)
    data.preventDefault()
  }
  const profileUserName = `${state?.agentsResp?.[0]?.Agency_Name || ""}`;
  const agentID = `${state?.agentsResp?.[0]?.id || ""}`
  return (
    <>
      <NavbarAgent agentID = {agentID} imgSrc = {state?.agentsResp?.[0]?.Image_URL} profileUserName={profileUserName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            {/* hapaning-items */}
            {/*<div className="happening-wrapper">
              <div className="content-title">
                <h4>What’s Happening</h4>
              </div>
              <div className="happenig-items d-grid">
                
                <div
                  className="single-happen d-flex align-items-center justify-content-center"
                  style={{
                    backgroundImage: `url("${happenbg.src}")`,
                  }}
                >
                  <div className="happen-count-text">
                    {state?.agentsResp?.[0]?.No_of_Prospective_Students}
                  </div>
                  <div className="hapent-cotnet">
                    <h4>LEADS</h4>
                    <p>
                      Follow Up for the chance <br />
                      to earn 1500$
                    </p>
                  </div>
                </div>
                
                {single-happening-items}
                <div
                  className="single-happen d-flex align-items-center justify-content-center"
                  style={{
                    backgroundImage: `url("${happenbg.src}")`,
                  }}
                >
                  <div className="happen-count-text">
                    {" "}
                    {state?.agentsResp?.[0]?.No_of_Enrolled_Students}
                  </div>
                  <div className="hapent-cotnet">
                    <h4>STUDENTS</h4>
                    <p>
                      Enrolled with <br />
                      StudyVillage so far
                    </p>
                  </div>
                </div>
                {single-happening-items}
                
                <div
                  className="single-happen d-flex align-items-center justify-content-center"
                  style={{
                    backgroundImage: `url("${happenbg.src}")`,
                  }}
                >
                  <div className="happen-count-text">
                    {" "}
                    {state?.agentsResp?.[0]?.Applications_Submitted_This_Month}
                  </div>
                  <div className="hapent-cotnet">
                    <h4>APPLICATION</h4>
                    <p>
                      Submitted this month <br />
                      with StudyVillage
                    </p>
                  </div>
                </div>
                
                <div
                  className="single-happen d-flex align-items-center justify-content-center"
                  style={{
                    backgroundImage: `url("${happenbg.src}")`,
                  }}
                >
                  <div className="happen-count-text">9</div>
                  <div className="hapent-cotnet">
                    <h4>NEW RESOURCE</h4>
                    <p>
                      Loaded to the portal. Visit the resource tab to increase
                      your selling opportunities
                    </p>
                  </div>
                </div>
                 single-happening-items 
              </div>
            </div>*/}
            {/* hapaning-items_End */}

            {/* Apply Studies-items */}
            <div className="content-title">
              <h4 className = "home-title">Welcome to your StudyVillage Portal</h4>
            </div>
            <div className = "row" style = {{ marginTop:"5%" }}>
              <div className = "col-md-4 apply-section">
                <div style = {{ paddingTop: "20%" }} className="card-text">
                  {/*<h4 className = "stu-app ">STUDENT APPLICATION</h4>
                      <strong><i className = "stu-app-sub">
                      Click here to launch application on behalf of your student
                      </i></strong>*/}
                      <a 
                        href="https://forms.zohopublic.com/studyvillage/form/C1StudyVillageprogramapplicationforAgentPortal/formperma/avLZwfvjgtvfVp_2V4H7S9qlY2W2IGwI4OwlVVStMfs" 
                        target = "_blank" 
                        rel="noreferrer noopener" 
                        className=" contact-btn">
                       <Image width = {400} height={50} src={applybtn}/>
                    </a>
                </div>
                  
              </div>
                <div className = "col-md-6">
                  <h4>
                  StudyVillage News Feed
                  </h4>
                  <p>
                    <b>December 2021</b><br/>
                  StudyVillage is expanding beyond its pilot group of agents and now has representatives in 9 countries throughout the world.  
                  We are working with a number of institutional partners, including the Sri Lankan government, to drastically improve the international student experience.
                  Watch this space, your portal will be regularly updated with a series of new tools to improve the student experience.  We'll inform of you of key updates via email.  
                  </p>
                </div>
              </div>
              
            <div className="card-block-area">
           
              {/* single-card */}
             {/**single-card-block white-box text-center */}
              
              {/* single-card */}
              <div style = {{ width: "200%" }}>
              
              </div>
             
            </div>
            {/* Apply Studies-items_END */}

            {/* commition-pipline */}
            {/*<div className="commission-area white-box">
              <div className="sec-title">
                <h4>Commission Pipeline</h4>
              </div>

              <div className="pipline-cart-area">
                <Chart />
              </div>
            </div>*/}
            {/* commition-pipline */}
            {/* register-area */}
            <div className="register-lead-area d-grid">     
              {/**//*<div className="rgister-lead-form white-box">
                <h4>Register a Lead</h4>
                <form  onSubmit = {submitNewRecord} >
                  <div className="single-input-wrap">
                    <label htmlFor="name">Name and Surname</label>
                    <input id = "name" type="text" />
                  </div>
                  <div className="single-input-wrap">
                    <label htmlFor>Preferred Contact</label>
                    <input id = "pref_contact" type="text" />
                  </div>
                  <div className="single-input-wrap">
                    <label htmlFor>Intended Course of Study</label>
                    <input id = "course" type="text" />
                  </div>
                  <div className="single-input-wrap">
                    <label htmlFor>Intended Institution</label>
                    <input id = "institution" type="text" />
                  </div>
                  <div className="single-input-wrap">
                    <label htmlFor>Location City/County</label>
                    <input id = "city" type="text" />
                  </div>
                  <div className="single-input-wrap">
                    <label htmlFor>Your Agency</label>
                    <input id = "agency" type="text" />
                  </div>
                  <div className="single-input-wrap">
                    <label htmlFor>StudyVillage Program (If Known)</label>
                    <input id = "program" type="text" />
                  </div>
                  <div className="single-input-wrap">
                    <label htmlFor>Date (DD/MM/YYYY)</label>
                    <input id = "date" type="text" />
                  </div>
                  <div className="register-btn pt-3">
                    <button type="submit" className="btn">
                      Register
                    </button>
                  </div>
                </form>
              </div>*/}
              {/*<div className="leads-wrapper white-box">
                <h4>Leads</h4>
                <div className="registerd-items">
                  <div className="single-resgisterd d-flex align-items-start justify-content-between">
                    <div className="menu-icon">
                      <Image width={150} height={150} src={men} alt="icon" />
                    </div>
                    <div className="register-text">
                      Casandra Pizarro, <a href>pizcas@hotmail.com</a>, Bachelor
                      Degree in UK, Award Program on 24/09/2021
                    </div>
                    <button type="button">
                      <Image
                        width={150}
                        height={150}
                        src={trash}
                        alt="trash icon"
                      />
                    </button>
                  </div>
                </div>*/}
                {/* commissions */}
                {/* <div className="cf-comission">
                  <h6>Follow up for the chance to earn a commission of:</h6>
                  <h1>$1500</h1>
                  <span>*Commission is quoted in USD</span>
                </div> */}
                {/* commissions */}
              {/*</div>*/}
              {/* <div className="bulk-lead white-box">
                <h4>Bulk Leads</h4>
                <p>
                  Do you have a large number of leads? You can upload an Excel
                  File here for bulk leads. Please make sure any leads you
                  provide will be tagged to your agency
                </p>
                <div className="upload-file-opt">
                  <div className="up-file-btn">
                    <input type="file" id file-upload />
                    <label htmlFor="file-upload">Upload</label>
                  </div>
                  <div className="file-name-here">
                    <div className="single-file-name d-flex align-items-center">
                      <div className="up-file-icon">
                        <Image width={50} height={50} src={xlfile} alt="icon" />
                      </div>
                      <div className="up-file-name">Leads_090921</div>
                    </div>
                    <div className="single-file-name d-flex align-items-center">
                      <div className="up-file-icon">
                        <Image width={50} height={50} src={xlfile} alt="icon" />
                      </div>
                      <div className="up-file-name">Leads_300821</div>
                    </div>
                  </div>
                </div>
              </div>
             */}
            </div>
            
             <h4 style = {{ fontSize: "0.9em" }}> Your StudyVillage Students</h4>
            <table className = "table table-striped table-bordered">
                        <thead>
                          <tr className = "table-sv">
                            <td>Name</td>
                            <td>Country</td>
                            <td>University</td>
                            <td>Start Date</td>
                            <td>End Date</td>
                            <td style = {{ textAlign: "center" }}>Total Semesters</td>
                            <td>Email Address</td>
                            <td>Contact Number</td>
                          </tr>
                        </thead>
                        <tbody>
                        {
                          state?.studentsResp.map((student)=>{
                            return(
                              <tr className = "table-secondary">
                            <td>{student.Full_Name}</td>
                            <td></td>
                            <td>{student.Institution}</td>
                            <td>{student.Institution_Semester_start_date}</td>
                            <td></td>
                            <td style = {{ width: "40px", textAlign: "center" }}>{student.How_many_total_semesters_will_this_course_take_to}</td>
                            <td>{student.Email}</td>
                            <td>{student.Phone}</td>
                        </tr>
                            )
                            
                          })
                        }
                        
                        </tbody>   
                  </table>
            {/* register-area_End */}
            <div className="card-block-area">
              {/* single-card */}
              
              {/* single-card */}
              {/* single-card */}
              <div className="single-card-block white-box text-center">
              <div className= 'student-card-icon'>
                    {/*<Image width={100} height={100} src={social} alt='' width={20} height={20}/>*/}
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
              <div className="single-card-block white-box text-center">
                <div >
                  <Image
                    width={200}
                    height={180}
                    src={book}
                    alt="resolve icon"
                  />
                </div>
                <div className="card-text">
                  <h4>Resolve</h4>
                  <p>
                  Our journal talks in depth about the challenges of studying
                    overseas, in an accessible, practical and light-hearted way.
                  </p>
                </div>
                <a href="https://workdrive.zohoexternal.com/external/458badae3822df664be86e1bbed71af95c7f747cca5db3573c84177c846407d0" target="_blank" rel="noreferrer noopener" className="btn btn-primary">
                  Read
                </a>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentDashboard;

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
  const { data: agentResp } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
      moduleApiName: "Agents1",
      criteria: `(Email:equals:${session?.user?.email})`,
    }
  );
  agentsResp = agentResp?.data;
  // // //todo Fetching Leads for that Agent
  // const { data: leadResp } = await axios.post(
  //     `${process.env.NEXTAUTH_URL}/api/getZohoData`,
  //     {
  //         moduleApiName: "Leads",
  //         criteria: `(Agent:equals:${agentsResp?.[0]?.id})`,
  //     }
  // );
  // leadsResp = leadResp?.data;

  // //todo Fetching Agent's Students Details
 
  const { data: stuResp } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
      moduleApiName: "Contacts",
      criteria: `(Agent_Name:equals:${agentsResp?.[0]?.id})`,
    }
  );
  studentsResp = stuResp?.data;
  console.log({ studentsResp });

  return {
    props: {
      portalUserResp,
      agentsResp,
      leadsResp,
      studentsResp,
    },
  };
}
