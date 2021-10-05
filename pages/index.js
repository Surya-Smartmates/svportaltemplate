import { useEffect } from "react";
import { useSession, signIn, signOut, getSession } from "next-auth/client";
import Cookies from "js-cookie";
import * as cookie from "cookie";

import Home from "../components/Home/Home";
// import RemoveDataFromCookies from "../shared/_helper/RemoveFromCookies";
// import TopCards from "../components/Home/TopCards";
// import HomeBlock from "../components/Home/_HomeBlock";
// import FullLayout from "../layouts/full-layout/FullLayout";
// import useTrackedStore from "../store/useTrackedStore";
import Button from "@material-ui/core/Button";
import Navbar from "../components/Shared/Navbar/Navbar";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import axios from "axios";
import useTrackedStore from "../store/useTrackedStore";
import _ from "lodash";
export default function App({
  // customizer,
  // enrolmentsResp,
  // studentsResp,
  portalUserResp,
  // parentsResp,
  // svTasksResp,
  // surveysResp,
  // studentSupportersResp,
  // agentsResp,
}) {
  // console.log({ enrolmentsResp });
  const [session, loading] = useSession();
  const state = useTrackedStore();

  let time;

  useEffect(() => {
    //todo Setting all data to the State for Reuse
    // state.setEnrolmentsResp(enrolmentsResp);
    // state.setStudentsResp(studentsResp);
    state.setPortalUserResp(portalUserResp);
    // state.setParentsResp(parentsResp);
    // state.setSvTasksResp(svTasksResp);
    // state.setSurveysResp(surveysResp);
    // state.setStudentSupportersResp(studentSupportersResp);
    // state.setAgentsResp(agentsResp);
    if (!!session && session.remember === false) {
      time = setInterval(async () => {
        Cookies.set("expiredTime", Date.now() + 2 * 10000);
      }, 10000);
    }
  }, [!!session]);

  useEffect(() => {
    // Remove those data from cookies which u set them at the time of reset password
    Cookies.get("name") && Cookies.remove("name", { path: "" });
    Cookies.get("user_email") && Cookies.remove("user_email", { path: "" });
    Cookies.get("remember") && Cookies.remove("remember", { path: "" });
  }, []);

  return (
    <>
      {/* <Button variant='contained' onClick={() => signOut()}>
                Signout
            </Button> */}
      {!_.isEqual(state.studentsResp, {}) && <Home />}
      {/* <FullLayout customizer={customizer}> */}
      {/* <HomeBlock /> */}
      {/* </FullLayout> */}
    </>
  );
}

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
  // let parentsResp = [];
  // let studentsResp = [];
  // let enrolmentsResp = [];
  // let surveysResp = [];
  // let svTasksResp = [];
  // let studentSupportersResp = [];
  // let agentsResp = [];
  const {
    data: { access_token: accessToken },
  } = await axios.get(process.env.ACCESSTOKEN_URL);

  //todo Fetching Portal User Details
  try {
    const {
      data: protalUsersResp,
    } = await axios.get(
      `https://www.zohoapis.com/crm/v2/Portal_Users/search?criteria=(Email:equals:${session?.user?.email})`,
      { headers: { Authorization: accessToken } }
    );
    portalUserResp = protalUsersResp?.data?.[0];
  } catch (error) {
    const errorCode = error?.response?.data?.code;
    console.log("Error Portal User: ", errorCode);
  }
  if (portalUserResp?.User_Type) {
    return {
      redirect: {
        destination: `/${portalUserResp?.User_Type?.toLowerCase()}`,
      },
      props: { portalUserResp },
    };
  }
  // //todo Fetching Individual Type Details Parents/Students/Supporters etc
  // if (portalUserResp?.User_Type === "Parents") {
  //   try {
  //     const resp = await axios.get(
  //       `https://www.zohoapis.com/crm/v2/Accounts/search?criteria=(Email:equals:${session?.user?.email})`,
  //       { headers: { Authorization: accessToken } }
  //     );

  //     parentsResp = resp?.data?.data;
  //   } catch (error) {
  //     const errorCode = error?.response?.data?.code;
  //     console.log("Error Parents Resp : ", errorCode);
  //   }
  // }

  // //todo Fetching Students based on Parents
  // for (const parentResp of parentsResp) {
  //   try {
  //     const resp = await axios.get(
  //       `https://www.zohoapis.com/crm/v2/Contacts/search?criteria=(Account_Name:equals:${parentResp?.id})`,
  //       { headers: { Authorization: accessToken } }
  //     );
  //     studentsResp = [...studentsResp, ...resp?.data?.data];
  //   } catch (error) {
  //     const errorCode = error?.response;
  //     console.log("Error Students Resp : ", errorCode);
  //   }
  // }

  // //todo Fetching Enrollments of All Students
  // for (const studentResp of studentsResp) {
  //   try {
  //     const resp = await axios.get(
  //       `https://www.zohoapis.com/crm/v2/Deals/search?criteria=(Contact_Name:equals:${studentResp?.id})`,
  //       { headers: { Authorization: accessToken } }
  //     );

  //     enrolmentsResp = [...enrolmentsResp, ...resp?.data?.data];
  //   } catch (error) {
  //     const errorCode = error?.response?.data?.code;
  //     console.log("Error Enrolments Resp : ", errorCode);
  //   }
  // }
  // //todo Fetching SV Tasks of All Students
  // for (const studentResp of studentsResp) {
  //   try {
  //     const resp = await axios.get(
  //       `https://www.zohoapis.com/crm/v2/SV_Tasks/search?criteria=(Student:equals:${studentResp?.id})`,
  //       { headers: { Authorization: accessToken } }
  //     );

  //     svTasksResp = [...svTasksResp, ...resp?.data?.data];
  //   } catch (error) {
  //     const errorCode = error?.response?.data?.code;
  //     console.log("Error SV Tasks : ", errorCode);
  //   }
  // }

  // //todo Fetching Surveys of All Students
  // for (const studentResp of studentsResp) {
  //   try {
  //     const resp = await axios.get(
  //       `https://www.zohoapis.com/crm/v2/Student_Surveys/search?criteria=(Student:equals:${studentResp?.id})`,
  //       { headers: { Authorization: accessToken } }
  //     );

  //     surveysResp = [...surveysResp, ...resp?.data?.data];
  //   } catch (error) {
  //     const errorCode = error?.response?.data?.code;
  //     console.log("Error Surveys Resp : ", errorCode);
  //   }
  // }

  // //todo Fetching Student Supporters of All Enrollments
  // for (const enrolmentResp of enrolmentsResp) {
  //   if (enrolmentResp?.Assigned_Student_Supporters?.id) {
  //     try {
  //       const resp = await axios.get(
  //         `https://www.zohoapis.com/crm/v2/Vendors/${enrolmentResp?.Assigned_Student_Supporters?.id}`,
  //         { headers: { Authorization: accessToken } }
  //       );
  //       // console.log("Student Supporters ", resp?.data?.data);
  //       studentSupportersResp = [...studentSupportersResp, ...resp?.data?.data];
  //     } catch (error) {
  //       const errorCode = error?.response?.data?.code;
  //       console.log("Error Student Supporters : ", error);
  //     }
  //   }
  // }
  // //todo Fetching Agents of All Enrollments
  // for (const enrolmentResp of enrolmentsResp) {
  //   if (enrolmentResp?.Agent_Name?.id) {
  //     try {
  //       const resp = await axios.get(
  //         `https://www.zohoapis.com/crm/v2/Agents1/${enrolmentResp?.Agent_Name?.id}`,
  //         { headers: { Authorization: accessToken } }
  //       );
  //       agentsResp = [...agentsResp, ...resp?.data?.data];
  //     } catch (error) {
  //       const errorCode = error?.response?.data?.code;
  //       console.log("Error Student Supporters : ", error);
  //     }
  //   }
  // }

  return {
    props: {
      portalUserResp,
      // enrolmentsResp,
      // studentsResp,

      // parentsResp,
      // svTasksResp,
      // surveysResp,
      // studentSupportersResp,
      // agentsResp,
    },
  };
}
