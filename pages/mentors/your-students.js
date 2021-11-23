import React, {useEffect, useState} from 'react'
import Sidebar from "../../components/Shared/Sidebar/Sidebar";

import axios from 'axios';
import Navbar from "../../components/Shared/Navbar/Navbar";
import useTrackedStore from '../../store/useTrackedStore'

import {getSession} from 'next-auth/client'

import banner from "../../assets/img/banner-bg.jpg";
import profile__1 from "../../assets/img/profile-1.jpg";
import Image from "next/image"

import Accordion from "../../components/Accordion/Accordion"
import PdfSlider from "../../components/pdf-slider/PdfSlider";

import * as cookie from "cookie";

 const Students =({studentSupportersResp, studentsResp})=>{
    const state = useTrackedStore()

    state.setStudentSupportersResp(studentSupportersResp)
    state.setStudentsResp(studentsResp)

    const [studentData, setStudentData] = useState(
      {student_name:"",
      enr_name:"",
      stage:"",
      parent_name:"",
      email:"",
      institution:"",
      last_status:"",
      life_cycle_stage:"",
      module_comm_status:"",
      parent_email:"",
      next_survey_url:""
    })
    useEffect(()=>{
    console.log(studentSupportersResp)
    }, [])

    const profileUserName = `${studentSupportersResp?.[0]?.Vendor_Name || ""}`;

    const topbarLinks = [
        {
          href: "/mentor",
          label: `View Profile`,
        },
      ];

      const showStudentDetails = (data) => {
        console.log(data)
        let student_name = data.Contact_Name.name
        let enr_name = data.Deal_Name
        let stage = data.Stage
        let parent_name = data.Account_Name.name
        let email = data.Cont_Email
        let institution = data.Institution
        let last_status = data.Last_Status
        let life_cycle_stage = data.Life_Cycle_Stage
        let module_comm_status = data.Module_Comm_Status
        let parent_email = data.Parent_1_Email
        let next_survey_url = data.Zoho_Form_URL

        setStudentData({student_name:student_name,
          enr_name: enr_name,
          stage: stage,
          parent_name:parent_name,
          email:email,
          institution: institution,
          last_status:last_status,
          life_cycle_stage:life_cycle_stage,
          module_comm_status: module_comm_status,
          parent_email: parent_email,
          next_survey_url: next_survey_url})
      }
    return(
        
        <div>
        <Navbar profileUserName = {profileUserName}/>
            <Sidebar />
            <div className = "main-content">
                <div className = "content-wrapper">
                    <div className = "apply-main-wrapper">
                        <div className = "container-fluid">
                            <div className = "apply-wrapper white-box">
                              <div className = "row">
                                <div className = "col-sm-12">
                                <select className = "nice-select">
                                {state?studentsResp ? state?.studentsResp?.map((stu)=>{
                                  return(
                                    <option onClick = {()=>{showStudentDetails(stu)}}>
                                    {stu.Contact_Name.name}
                                    </option>
                                  )
                                }) :  <option>THERE ARE NO STUDENTS TO SUPPORT CURRENTLY</option> :  <option>THERE ARE NO STUDENTS TO SUPPORT CURRENTLY</option>}
                                </select>
                                <div className = "row">
                                  <div className = "col-sm-6">
                                    <h5>
                                      Student Name:
                                    </h5>
                                    <p>
                                      {studentData.student_name}
                                    </p>
                                  </div>
                                  <div className = "col-sm-6">
                                    <h5>
                                      Enrollment:
                                    </h5>
                                    <p>
                                    {studentData.enr_name}
                                    </p>
                                  </div>
                                  <div className = "col-sm-6">
                                    <h5>
                                      Stage:
                                    </h5>
                                    <p>
                                      {studentData.stage}
                                    </p>
                                  </div>
                                  <div className = "col-sm-6">
                                    <h5>
                                      Email:
                                    </h5>
                                    <p>
                                      {studentData.email}
                                    </p>
                                  </div>
                                  <div className = "col-sm-6">
                                    <h5>
                                      Parents:
                                    </h5>
                                    <p>
                                      {studentData.parent_name}
                                    </p>
                                  </div>
                                  <div className = "col-sm-6">
                                    <h5>
                                      Institution:
                                    </h5>
                                    <p>
                                      {studentData.institution}
                                    </p>
                                  </div>
                                  <div className = "col-sm-6">
                                    <h5>
                                      Last Status:
                                    </h5>
                                    <p>
                                      {studentData.last_status}
                                    </p>
                                  </div>
                                  <div className = "col-sm-6">
                                    <h5>
                                      Life Cycle Stage:
                                    </h5>
                                    <p>
                                      {studentData.life_cycle_stage}
                                    </p>
                                  </div>
                                  <div className = "col-sm-6">
                                    <h5>
                                      Module Comm. Status:
                                    </h5>
                                    <p>
                                      {studentData.module_comm_status}
                                    </p>
                                  </div>
                                  <div className = "col-sm-6">
                                    <h5>
                                      Parents' Email:
                                    </h5>
                                    <p>
                                      {studentData.parent_email}
                                    </p>
                                  </div>
                                  
                                    <div className = "slider-limiter">
                                          <PdfSlider slClass = "alt-slider2" SlideNum = {1} spc = {0} />
                                    </div>
                                </div>
                                {/*state?studentsResp ? state?.studentsResp?.map((stu)=>{
                                    console.log(stu)
                                    return(
                                        <Accordion title = {stu.Contact_Name.name}>
                                        <ul style = {{ listStyleType: "disc" }}>
                                          <li>Student Name: {stu.Contact_Name.name}</li>
                                          <li>Enrollment Name: {stu.Deal_Name}</li>
                                          <li>Stage: {stu.Stage}</li>
                                          <div className = "slider-limiter">
                                          
                                          </div>
                                          
                                        </ul>
                                          
                                          
                                          
                                        </Accordion>
                                    )
                                }) : <h3>THERE ARE NO STUDENTS TO SUPPORT CURRENTLY</h3> : <h3>THERE ARE NO STUDENTS TO SUPPORT CURRENTLY</h3>*/}
                                <a href="/mentors"><button className = "btn">BACK TO DASHBOARD</button></a>
                                </div>
                              </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )

}

export default Students

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