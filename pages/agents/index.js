import React, {useEffect, useState} from "react";
import dynamic from "next/dynamic";

import NavbarAgent from "../../components/Shared/Navbar/Navbar-Agent";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";

import applybtn from "../../assets/agents/img/just-blue.png"

import fb from "../../assets/img/facebook-fix-green.svg"
import yt from "../../assets/img/youtube-green.svg"
import ig from "../../assets/img/instagram-fix-green.svg"
import lkin from "../../assets/img/linkedin-fix-green.svg"

import book from "../../assets/agents/img/resolve-page2.png";

import Image from "next/image";
import { useRouter } from "next/router";
import useTrackedStore from "../../store/useTrackedStore";
import { useSession, signIn, signOut, getSession } from "next-auth/client";
import Cookies from "js-cookie";
import * as cookie from "cookie";
import axios from "axios";
import _ from "lodash";


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
  
//Smartmates Code
const assignStudentsList = async () =>{
  let studentsBuffer = [...studentsList]
  state?.studentsResp !== null || state?.studentsResp !== undefined ? studentsBuffer = state?.studentsResp : studentsBuffer = [{Full_Name:"", Nationality:"", Institution:"",Institution_Semester_start_date:"", Estimated_Completion_Date:"",How_many_total_semesters_will_this_course_take_to:"", Email:"", Phone:"" }]
  await setStudentsList(studentsBuffer)
}

useEffect(()=>{
  //assignStudentsList()
  console.log("portalUserResp")
  console.log(portalUserResp)
},[])




const [studentsList, setStudentsList] = useState([{Full_Name:"", Nationality:"", Institution:"",Institution_Semester_start_date:"", Estimated_Completion_Date:"",How_many_total_semesters_will_this_course_take_to:"", Email:"", Phone:"" }])
  
  const profileUserName = `${state?.agentsResp?.[0]?.Agency_Name || ""}`;
  const agentID = `${state?.agentsResp?.[0]?.id || ""}`
  return (
    <>
      <NavbarAgent agentID = {state?.agentsResp?.[0]?.Crm_ID} imgSrc = {state?.agentsResp?.[0]?.Image_URL} profileUserName={profileUserName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            
            <div className="content-title">
              <h4 className = "home-title">Welcome to your StudyVillage Portal</h4>
            </div>
            <div className = "row" style = {{ marginTop:"5%" }}>
              <div className = "col-md-4 apply-section">
                <div style = {{ paddingTop: "20%" }} className="card-text">
                  
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
              <div style = {{ width: "200%" }}>
              </div>
            </div>
            <div className="register-lead-area d-grid">
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
                          {console.log(`studentResp val: ${studentsResp}`)/** for testing purpose */}; 
                        {state?.studentsResp.length === 0 || state?.studentsResp === "Request failed with status code 401" ?
                          <div>
                          You currently don't have any students registered
                          </div>:
                            state?.studentsResp?.map((students)=>{
                              return(
                                
                                <tr>
                                <td style = {{ textAlign: "center" }}>{students.Full_Name}</td>
                                <td style = {{ textAlign: "center" }}>{students.Nationality}</td>
                                <td style = {{ textAlign: "center" }}>{students.Institution}</td>
                                <td style = {{ textAlign: "center" }}>{students.Institution_Semester_start_date}</td>
                                <td style = {{ textAlign: "center" }}>{students.Estimated_Completion_Date}</td>
                                <td style = {{ width: "40px", textAlign: "center" }}>{students.How_many_total_semesters_will_this_course_take_to}</td>
                                <td style = {{ textAlign: "center" }}>{students.Email}</td>
                                <td style = {{ textAlign: "center" }}>{students.Phone}</td>
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
  let studentsResp = [];
  let agentsResp = [];
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
 
  const { data: stuResp } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
      moduleApiName: "Contacts",
      criteria: `(Agent_Name:equals:${agentsResp?.[0]?.id})`,
    }
  );
  studentsResp = stuResp?.data !== undefined ? stuResp?.data : [];
  console.log("ANTON DEBUGG")
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
