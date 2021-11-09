import React, {useEffect, useState} from 'react'
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import axios from 'axios';
import Navbar from "../../components/Shared/Navbar/Navbar";
import useTrackedStore from '../../store/useTrackedStore'
import {getSession} from 'next-auth/client'
import banner from "../../assets/img/banner-bg.jpg";
import profile__1 from "../../assets/img/profile-1.jpg";
import Image from "next/image"


 const Students =({portalUserResp})=>{
     const [SSProfile, setSSProfile] = useState([]);
     const state = useTrackedStore();
     let  profileUserName = ""
    const topbarLinks = [
        {
          href: "/mentor",
          label: `View Profile`,
        },
      ];

      useEffect(()=>{
          state.setPortalUserResp(portalUserResp)
          console.log(portalUserResp.First_Name)
          profileUserName = `${portalUserResp?.First_Name || ""}`
          console.log(profileUserName)
      }, [])

    return(
        
        <div>
        {<Navbar
                profileUserName={profileUserName}
                topbarLinks={topbarLinks}
            />
        }
        <Sidebar/>
        <div  className = "main-content">

            </div>
        </div>
    )

}

export default Students

export async function getServerSideProps(context){
    const session = await getSession(context)
    let portalUserResp = {}
    const { data: portResp } = await axios.post(
        `${process.env.NEXTAUTH_URL}/api/getZohoData`,
        {
          moduleApiName: "Portal_Users",
          criteria: `(Email:equals:${session?.user?.email})`,
        }
      )
      portalUserResp = portResp?.data?.[0];
    return{
        props:{
            portalUserResp
        }
    }
}