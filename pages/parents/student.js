import React, {useEffect} from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import Student__Content from "../../components/User__Profile/Student/Student__Content";
import useTrackedStore from "../../store/useTrackedStore";
import axios from 'axios';

import {getSession} from "next-auth/client";
import * as cookie from 'cookie'

const Student = ({studentsResp, parentsResp}) => {

  const state = useTrackedStore();

  //state.setStudentsResp(studentsResp);


  useEffect(()=>{
  
    console.log(studentsResp)
    console.log(parentsResp)
  },[])
  const topbarLinks = [
    {
      href: "/student",
      label: `View Profile`,
    },
  ];
  const profileUserName = `${state?.studentsResp?.[0]?.Full_Name || ""}`;

  return (
    <>
      <Navbar profileUserName={profileUserName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <Student__Content  stuDetails = {studentsResp}/>
      </div>
    </>
  );
};

export default Student;

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
                  cookie.serialize(
                      "expiredTime",
                      String(parsedCookies.expiredTime),
                      {
                          httpOnly: true,
                          maxAge: 0,
                      }
                  )
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
  const {
      data: { access_token: accessToken },
  } = await axios.get(process.env.ACCESSTOKEN_URL);

  const { data: portResp } = await axios.post(
    `${process.env.NEXTAUTH_URL}/api/getZohoData`,
    {
        moduleApiName: "Portal_Users",
        criteria: `(Email:equals:${session?.user?.email})`,
    }
);
portalUserResp = portResp?.data?.[0];
console.log({ portalUserResp });
  // //todo Fetching Individual Type Details Parents/Students/Supporters etc

  const { data: pResps } = await axios.post(
      `${process.env.NEXTAUTH_URL}/api/getZohoData`,

      {
          moduleApiName: "Accounts",
          criteria: `(Email:equals:${session?.user?.email})`,
      }
  );
  parentsResp = pResps?.data;
  console.log({ parentsResp });

  // //todo Fetching Students based on Parents

  for (const parentResp of parentsResp) {
      const { data: stuResp } = await axios.post(
          `${process.env.NEXTAUTH_URL}/api/getZohoData`,
          
          {
              moduleApiName: "Contacts",
              criteria: `(Account_Name:equals:${parentResp?.id})`,
          }
      );
      studentsResp =stuResp?.data;
  }

 

 

  

  //todo Fetch Parrents Meeting from Portal Assets


//*/
  /*try {
      const resp = await axios.get(
          `https://www.zohoapis.com/crm/v2/Portal_Assets/search?criteria=(Name:equals:${splitedName}%20Details)`,
          { headers: { Authorization: accessToken } }
      );
      lifecycleDetails = resp?.data?.data;
      console.log({ lifecycleDetails });
  } catch (error) {
      const errorCode = error?.response?.data?.code;
      console.log("Error Portal Assets : ", errorCode);
  }*/


  

 

  
 

  return {
      props: {
          studentsResp,
          parentsResp,
          portalUserResp
      },
  };
}
