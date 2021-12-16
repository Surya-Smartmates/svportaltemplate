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

const NavbarAgent = ({ profileUserName, topbarLinks, imgSrc, agentID }) => {

    const [profileImage, setProfileImage] = useState("")


    const state = useTrackedStore();
    const router = useRouter();
    const profile =
        router.pathname.split("/")?.[1] ||
        state?.portalUserResp?.User_Type?.toLowerCase() ||
        "";
    useEffect(()=>{
        setProfileImage(state?.agentsResp?.[0]?.Image_URL)
        console.log(profileImage)
    },[profileImage])


        return (
        <header className='header-area'>
            <div className='header-wrapper d-flex align-items-center justify-content-between'>
            
                <div className='logo-area'>
                
                    <Link href={`/${profile}`}>
                        <Image src={logo} alt='logo' width={200} height={200} />
                    </Link>
                </div>
                <div className='header-right-area d-flex align-items-center'>
                <div className = "comp-test">{agentID}</div>
                    {/* <!-- search-area --> */}
                    {/* <div className='search-area position-relative'>
                        <input type='text' placeholder='Search' />
                        <span>
                            <FontAwesomeIcon icon={faSearch} />
                        </span>
                    </div> */}
                    {/* <div className='mobo-bar d-md-none'>
                        <div className='bar'>
                            <span className='border-bar'></span>
                            <span className='border-bar hide-bar'></span>
                            <span className='border-bar'></span>
                        </div>
                    </div> */}
                    {/* <div className='notifiation-area'>
                        <div className='notification-icon'>
                            <FontAwesomeIcon className='fas' icon={faBell} />
                            <span>2</span>
                        </div>
                    </div> */}
                    <div className='user-btn-area dropdown'>
                        <div
                            className='user-btn-wrapper d-flex align-items-center dropdown-toggle'
                            id='dropdownMenuButton1'
                            data-bs-toggle='dropdown'
                            aria-expanded='false'>
                            <div>
                            <div style = {{ width: "50%" }}>
                            {/*<img style = {{ width: 150, overflow: "hidden" }} className = "comp-logo" src={profileImage}/>*/}
                            </div>
                            
                                {/*!!profileImage ? <></> : <div>
                                <Image
                                    width={200}
                                    height={"70%"}
                                    src={profileImage}
                                    alt=''
                                />
                                </div>*/}
                                                             
                            
                                

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
                                {/* <li>
                  <Link
                    href={`/${profile}/parents`}
                    className="dropdown-menu-item"
                  >
                    View Your Profile
                  </Link>
                </li>
                <li>
                  <Link
                    href={`/${profile}/student`}
                    className="dropdown-menu-item"
                  >
                    View Angelica's Profile
                  </Link>
                </li> */}
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
                </div>
            </div>
        </header>
    );
};

export default NavbarAgent;

