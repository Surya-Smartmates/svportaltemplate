import React, {useEffect, useState} from "react";
// import "../../../assets/css/style.css";
import logo from "../../../assets/img/SVLogo.svg";
import user from "../../../assets/img/user.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../../store/useTrackedStore";
import { signOut } from "next-auth/client";
import { useRouter } from "next/router";

//base64 converter
import imageToBase64 from 'image-to-base64/browser'

const NavbarAgent = ({ profileUserName, topbarLinks, imgSrc, agentID }) => {


    const state = useTrackedStore();
    const router = useRouter();

    const [blurBase64, setBlurBase64] = useState('')
    const [agentImg, setAgentImg] = useState(<Image
        width={200}
        height={'85%'}
        src="/images/users/welcome.jpg"
        alt=''
        
    />)

    const profile =
        router.pathname.split("/")?.[1] ||
        state?.portalUserResp?.User_Type?.toLowerCase() ||
        "";

async function convertTo64 (){
    await imageToBase64('/images/users/welcome.jpg').then((res)=>{
        setBlurBase64(res)
    }).catch((error)=>{
        console.log(error)
    })
}


useEffect(()=>{
    convertTo64()
    console.log("state")
    console.log(state?.agentsResp?.[0]?.New_Agent_Image_URL)

    if(state?.agentsResp?.[0]?.New_Agent_Image_URL !== null && state?.agentsResp?.[0]?.New_Agent_Image_URL !== undefined){
        setAgentImg(
            <Image
                width={120}
                height={'85%'}
                src={state?.agentsResp?.[0]?.New_Agent_Image_URL}
                alt='agent image' />
        )
    }
},[])

        return (
        <header className='header-area'>
            <div className='header-wrapper d-flex align-items-center justify-content-between'>
            
                <div className='logo-area'>
                
                    <Link href={`/${profile}`}>
                        <Image src={logo} alt='logo' width={200} height={200} />
                    </Link>
                </div>
                <div className='header-right-area d-flex align-items-center'>
                
                   
                    <div className='user-btn-area dropdown'>
                        <div
                            className='user-btn-wrapper d-flex align-items-center dropdown-toggle'
                            id='dropdownMenuButton1'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'>
                            <div>
                            <div style = {{ width: "50%" }}>
                            {/*<img className = "comp-logo"
                                '/images/users/welcome.jpg'
                             src={state?.agentsResp?.[0]?.New_Agent_Image_URL}/>
                            https://workdrive.zohoexternal.com/external/fd1fd0f17974ef90…81f222a5ba6f79faaacf9681e54ce66768cf0ea7?directDownload=true
                            {state?.agentsResp?.[0]?.New_Agent_Image_URL}*/}
                            </div>
                            
                                 <div>
                                {agentImg}
                                </div>
                                                             
                            
                                

                            </div>
                            <div className='user-btn-text'>

                                <span>
                                    <i className='fas fa-angle-down'></i>
                                </span>
                                {/* <button
                  type="button"
                  class="btn btn-primary"
                  onClick={() => signOut()}
                >
                  Logout
                </button> */}
                            </div>
                        </div>
                        <div
                            className='user-menu dropdown-menu'
                            aria-labelledby='dropdownMenuButton1'
                            //   style={{ left: "-100px" }}
                        >
                            <ul>
                                {topbarLinks?.map((topbarLink, index) => {
                                    return (
                                        <li>
                                            <Link
                                                href={`/${profile}${topbarLink.href}`}
                                                className='dropdown-menu-item'>
                                                {topbarLink.label}
                                            </Link>
                                        </li>
                                    );
                                })}
                               
                                <li>
                                    <button
                                        type='button'
                                        class='btn btn-primary'
                                        onClick={() => signOut()}
                                        style={{ width: "100%" }}>
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className = "comp-test">{agentID}</div>
                </div>
            </div>
        </header>
    );
};

export default NavbarAgent;

