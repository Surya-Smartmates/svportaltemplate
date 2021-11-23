import React, {useEffect, useState} from 'react'
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Navbar from "../../components/Shared/Navbar/Navbar";

import { useSession, signIn, signOut, getSession } from "next-auth/client";

import useTrackedStore from "../../store/useTrackedStore";
import * as cookie from "cookie";

import axios from "axios";
const RepList = ({studentSupportersResp, studentsResp}) =>{

    const state = useTrackedStore()

    state.setStudentSupportersResp(studentSupportersResp)
    state.setStudentsResp(studentsResp)

    useEffect(()=>{
    console.log(studentSupportersResp)
    }, [])

    const profileUserName = `${studentSupportersResp?.[0]?.Vendor_Name || ""}`;
    return(
        <div>
        <Navbar profileUserName = {profileUserName}/>
            <Sidebar />
            <div className = "main-content">
                <div className = "content-wrapper">
                    <div className = "apply-main-wrapper">
                        <div className = "container-fluid">
                            <div className = "apply-wrapper white-box">
                                {state?.studentsResp?.map((stu)=>{
                                    console.log(stu)
                                    return(
                                        <div>{stu.Contact_Name.name}</div>
                                    )
                                })}
                            </div>
                            <a href="/mentors"><button className = "btn">BACK TO DASHBOARD</button></a>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
    
}
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

export default RepList