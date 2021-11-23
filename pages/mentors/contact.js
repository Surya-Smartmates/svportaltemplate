import React from "react";
// import Navbar from '../Shared/Navbar/Navbar';
// import Sidebar from '../Shared/Sidebar/Sidebar';
// import SupportContactContent from './SupportContactContent';
import infined from "../../assets/mentors/img/Infined.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import useTrackedStore from "../../store/useTrackedStore";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";

import {getSession} from "next-auth/client"
import * as cookie from 'cookie'
import axios from 'axios'

const SupportContact = ({studentSupportersResp}) => {
    const router = useRouter();
    const state = useTrackedStore();
    const topbarLinks = [
        {
            href: "/mentor",
            label: `View Profile`,
        },
    ];

    const profile =
        router.pathname.split("/")?.[1] ||
        state?.portalUserResp?.User_Type?.toLowerCase() ||
        "";
    
    state.setStudentSupportersResp(studentSupportersResp)
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
                        {/* contact-content */}
                        <div className='contact-box-wrapper'>
                            <div className='row'>
                                <div className='col-lg-5 col-md-12'>
                                    <div className='contact-box white-box theme-box d-flex'>
                                        <div className='contact-img'>
                                            <Image
                                                width={60}
                                                height={60}
                                                src={infined}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-text'>
                                            <div className='contact-heade'>
                                                <h4>Contact StudyVillage</h4>
                                                <p>
                                                    Sam Wich,Your StudyVillage
                                                    Area Manager
                                                </p>
                                            </div>
                                            <div className='contact-list'>
                                                <ul>
                                                    <li>
                                                        Mobile and WhatsApp:{" "}
                                                        <a href='tel:490459123456'>
                                                            {" "}
                                                            +30 0329123456
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Email:{" "}
                                                        <a href='mailto:simonperez@studyabroad.com.ph'>
                                                            samwinch@studyvillage.org
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Messenger:{" "}
                                                        <a href>Simon Winch</a>
                                                    </li>
                                                    <li>
                                                        Skype:{" "}
                                                        <a href>Sam Winch SV</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-lg-5 col-md-12 pt-4 pt-md-4 pt-lg-0'>
                                    <div className='contact-box white-box d-flex theme-box'>
                                        <div className='contact-img'>
                                            <Image
                                                width={60}
                                                height={60}
                                                src={infined}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-text'>
                                            <div className='contact-heade'>
                                                <h4>Contact StudyVillage</h4>
                                                <p>
                                                    Ana Jvimir <br /> Your
                                                    StudyVillage Head of Student
                                                    Services
                                                </p>
                                            </div>
                                            <div className='contact-list'>
                                                <ul>
                                                    <li>
                                                        Mobile and WhatsApp:{" "}
                                                        <a href='tel:300329123456'>
                                                            +30 0329654321
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Email:{" "}
                                                        <a href='mailto:simonperez@studyabroad.com.ph'>
                                                            samwinch@studyvillage.org
                                                        </a>
                                                    </li>
                                                    <li>
                                                        Messenger:{" "}
                                                        <a href>Ana Jovmir</a>
                                                    </li>
                                                    <li>
                                                        Skype:{" "}
                                                        <a href>Ana89SV</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* contact-content */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default SupportContact;

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