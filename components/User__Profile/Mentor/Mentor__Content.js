import React from "react";
import banner from "../../../assets/img/banner-bg.jpg";
import profile__1 from "../../../assets/img/profile-1.jpg";
import phone from "../../../assets/img/phone-green.svg";
import laptop from "../../../assets/img/leptop.svg";
import messenger from "../../../assets/img/messsenger.svg";
import skype from "../../../assets/img/skype.svg";
import travel from "../../../assets/img/trabvel.jpg";
import food from "../../../assets/img/food.jpg";
import photography from "../../../assets/img/photo.jpg";
import swiming from "../../../assets/img/swiming.jpg";
import crafts from "../../../assets/img/crafts.jpg";
import line__o from "../../../assets/img/line-o.svg";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../../store/useTrackedStore";
import { useRouter } from "next/router";

const Mentor__Content = () => {
    const state = useTrackedStore();
    const router = useRouter();
    const profile =
        router.pathname.split("/")?.[1] ||
        state?.portalUserResp?.User_Type?.toLowerCase() ||
        "";
    return (
        <div className='main-content'>
            <div className='content-wrapper'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='user-content-page-wrapper'>
                            {/* <!-- user-iamge-area --> */}
                            <div className='user-cover-image position-relative'>
                                <Image
                                    width={864}
                                    height={300}
                                    layout='responsive'
                                    className='cover-phot'
                                    src={banner}
                                    alt=''
                                />
                                <div className='profile-img abs-img'>
                                    <Image
                                        width={200}
                                        height={200}
                                        className='profile-img abs-img'
                                        src={profile__1}
                                        alt=''
                                    />
                                </div>
                            </div>
                            {/* <!-- user-iamge-area --> */}

                            <div className='user-content-text-wrapper ex-pb-140'>
                                <h4>
                                    {
                                        state?.studentSupportersResp?.[0]
                                            ?.Vendor_Name
                                    }
                                </h4>
                                <span>
                                    {`${state?.studentsResp?.[0]?.Full_Name}’s Student Supporter in ${state?.studentsResp?.[0]?.Mailing_State}, ${state?.studentsResp?.[0]?.Mailing_Country}`}
                                </span>

                                <div className='user-details-wrapper'>
                                    {/* <!-- user-single-details-wrapper --> */}
                                    {/* <div className='user-single-details'>
                                        <h5>Servicing Students From:</h5>
                                        <p>
                                            Deakin University, RMIT, University
                                            of Melbourne, Swinburne University,
                                            Monash University, La Trobe
                                            University.
                                        </p>
                                    </div> */}
                                    {/* <!-- user-single-details-wrapper -->

                                    <!-- user-single-details-wrapper --> */}
                                    <div className='user-single-details'>
                                        <h5>Servicing Students From:</h5>
                                        <p>
                                            {
                                                state
                                                    ?.studentSupportersResp?.[0]
                                                    ?.Servicing_Students_From
                                            }
                                        </p>
                                    </div>
                                    {/* <!-- user-single-details-wrapper --> */}
                                    <hr />
                                    {/* <!-- user-single-details-wrapper --> */}
                                    <div className='user-single-details'>
                                        <h5>
                                            {
                                                state
                                                    ?.studentSupportersResp?.[0]
                                                    ?.Vendor_Name
                                            }
                                            ’s approach with International
                                            Students
                                        </h5>
                                        <p>
                                            {
                                                state
                                                    ?.studentSupportersResp?.[0]
                                                    ?.approach_with_International_Students
                                            }
                                        </p>
                                    </div>
                                    {/* <!-- user-single-details-wrapper -->

                                    <!-- user-single-details-wrapper --> */}
                                    <div className='user-single-details'>
                                        <h5>About myself</h5>
                                        <p>
                                            {
                                                state
                                                    ?.studentSupportersResp?.[0]
                                                    ?.About_Student_Supporter
                                            }
                                        </p>
                                    </div>
                                    {/* <!-- user-single-details-wrapper --> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='user-page-sidebar'>
                            <div className='single-sidebar contact-widget'>
                                <h4>
                                    {" "}
                                    {
                                        state?.studentSupportersResp?.[0]
                                            ?.Vendor_Name
                                    }
                                    ’s Contact Details
                                </h4>
                                <div className='contact-items'>
                                    <div className='single-contact-item d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={phone}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <span>Mobile and WhatsApp:</span>
                                            <a
                                                href={`tel:${state?.studentSupportersResp?.[0]?.Phone}`}>
                                                {
                                                    state
                                                        ?.studentSupportersResp?.[0]
                                                        ?.Phone
                                                }
                                            </a>
                                        </div>
                                    </div>

                                    <div className='single-contact-item d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={laptop}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <span>Email:</span>
                                            <a
                                                href={`mailto:${state?.studentSupportersResp?.[0]?.Email}`}>
                                                {
                                                    state
                                                        ?.studentSupportersResp?.[0]
                                                        ?.Email
                                                }
                                            </a>
                                        </div>
                                    </div>

                                    <div className='single-contact-item d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={messenger}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <span>Messenger (preferred):</span>
                                            <a href=''>
                                                {
                                                    state
                                                        ?.studentSupportersResp?.[0]
                                                        ?.Messenger
                                                }
                                            </a>
                                        </div>
                                    </div>

                                    <div className='single-contact-item d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={skype}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <span>Skyper:</span>
                                            <a href=''>
                                                {
                                                    state
                                                        ?.studentSupportersResp?.[0]
                                                        ?.Skype
                                                }
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='single-sidebar interest-widget'>
                                <h4>
                                    {
                                        state?.studentSupportersResp?.[0]
                                            ?.Vendor_Name
                                    }{" "}
                                    Interests
                                </h4>
                                <div className='interest-items'>
                                    {state?.studentSupportersResp?.[0]?.Interests?.map(
                                        (interest, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className='single-inderest-item d-flex align-items-center'>
                                                    <div className='interest-img'>
                                                        <Image
                                                            width={150}
                                                            height={150}
                                                            src={travel}
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div className='contact-id'>
                                                        <a href=''>
                                                            {interest}
                                                        </a>
                                                    </div>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mentor__Content;
