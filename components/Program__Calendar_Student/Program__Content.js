import React, { useState, useEffect } from "react";
import wheel from "../../assets/img/Wheel.jpg";
import file__white from "../../assets/img/file-white.svg";
import two__men from "../../assets/img/two-men.svg";
import parents from "../../assets/img/parents-small.svg";
import phone from "../../assets/img/phone.svg";
import My__Calendar from "../Calendar/My__Calendar";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../store/useTrackedStore";
import _ from "lodash";
import { current } from "immer";
const Program__Content = ({ quickLink, events }) => {
    const state = useTrackedStore();
    let splitedName = _.split(
        state?.enrolmentsResp?.[0]?.Life_Cycle_Stage,
        "("
    )?.[1];
    splitedName = _.split(splitedName, ")")?.[0];
    const [heading, setHeading] = useState("");
    const [selectedAsset, setSelectedAsset] = useState({});

    // console.log({ heading }, state?.allAssets);
    
    useEffect(() => {
        const selAsset = state?.allAssets?.filter((asset) => {
            return asset?.Name?.toLowerCase() === heading?.toLowerCase();
        });
        console.log("Selected Assets ", selAsset);
        setSelectedAsset(selAsset);
    }, [heading]);
    console.log({ selectedAsset });
    let currentFound = false;
    return (
        // <!-- main-content -->
        <div className='main-content'>
            <div className='content-wrapper'>
                {/* <!-- progrum-desc-wrapper --> */}
                <div className='progrum-desc-wrapper'>
                    <div className='white-box'>
                        <h4>Your Current Happy, Healthy and Wise Module</h4>
                        <div className='row align-items-center pt-lg-5'>
                            <div className='col-lg-6 order-2 order-lg-1'>
                                <div className='program-img text-center'>
                                    <Image
                                        width={150}
                                        height={150}
                                        src={wheel}
                                        alt=''
                                        layout='responsive'
                                    />
                                </div>
                            </div>
                            <div className='col-lg-6 order-1 order-lg-2'>
                                <div className='program-descrip-wrap'>
                                    <h4>
                                        {
                                            _.split(
                                                state?.enrolmentsResp?.[0]
                                                    ?.Life_Cycle_Stage,
                                                "("
                                            )?.[0]
                                        }
                                    </h4>
                                    <p>
                                        {
                                            state?.lifecycleDetails?.[0]
                                                ?.Description
                                        }
                                    </p>

                                    <ul className='module-list'>
                                        <li>
                                            The{" "}
                                            {
                                                _.split(
                                                    state?.enrolmentsResp?.[0]
                                                        ?.Life_Cycle_Stage,
                                                    "("
                                                )?.[0]
                                            }{" "}
                                            module is about:
                                        </li>
                                        {state?.lifecycleDetails?.[0]?.Bullet_Points?.split(
                                            "\n"
                                        ).map((indvPoint, index) => {
                                            return (
                                                <li key={index}>
                                                    <span>{index + 1}.</span>{" "}
                                                    {indvPoint}
                                                </li>
                                            );
                                        })}
                                    </ul>

                                    <div className='program-modiule pt-3 pt-lg-4'>
                                        <h5>Modules</h5>
                                        <div className='modiule-btns page-2'>
                                            {_.split(
                                                state?.enrolmentsResp?.[0]
                                                    ?.Life_Cycle_Stages_String,
                                                ","
                                            )?.map((stage, index) => {
                                                if (
                                                    state?.enrolmentsResp?.[0]
                                                        ?.Life_Cycle_Stage ===
                                                    stage
                                                ) {
                                                    currentFound = true;
                                                }
                                                return (
                                                    <div className='single-modiule-btn d-flex align-items-center'>
                                                        <div className='btn modulebtn'>
                                                            <Link
                                                                href='/'
                                                                className='btn modulebtn'>
                                                                {stage.toUpperCase()}
                                                            </Link>
                                                        </div>

                                                        <p>
                                                            {state
                                                                ?.enrolmentsResp?.[0]
                                                                ?.Life_Cycle_Stage ===
                                                            stage
                                                                ? "Current Module"
                                                                : currentFound
                                                                ? "Next Module"
                                                                : "Previous Module"}
                                                        </p>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>

                                    {/* <ul className='tips-list pt-3 pt-lg-4'>
                                        <h5>
                                            {
                                                state?.enrolmentsResp?.[0]
                                                    ?.Life_Cycle_Stage
                                            }{" "}
                                            Outline’s Topics
                                        </h5>
                                        {state?.lifecycleDetails?.[0]?.Outline_Topics?.split(
                                            "\n"
                                        ).map((indvPoint, index) => {
                                            return (
                                                <li key={index}>{indvPoint}</li>
                                            );
                                        })}
                                    </ul> */}

                                    <div className='quick-link pt-3 pt-lg-4'>
                                        <h5>Quick Links</h5>
                                        <a href='page-3.html'> </a>
                                        <Link href={quickLink.href}>
                                            {quickLink.label}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- progrum-desc-wrapper --> */}

                <div className='activitis-area'>
                    <div className='single-activities white-box'>
                        <div className='single-activitis-head'>
                            <h4>Consolidating Studies Activities</h4>
                            <p>
                                Click on the boxes below to discover what
                                activities your child willl be doing for his/her
                                StudyVillage Program.{" "}
                            </p>
                        </div>

                        <div className='activities-items d-grid'>
                            {/* <!-- single-event-item --> */}
                            <div
                                className='single-event-item text-center single-event-1'
                                onClick={() => {
                                    setHeading(`Self Survey`);
                                }}>
                                <div className='event-icons'>
                                    <Image
                                        width={50}
                                        height={50}
                                        src={file__white}
                                        alt=''
                                    />
                                </div>
                                <div className='event-text'>
                                    <h5>{splitedName} Self-Survey</h5>
                                    <p>
                                        {state?.enrolmentsResp?.[0]
                                            ?.Survey_Sent_Date || "TBD"}
                                    </p>
                                </div>
                            </div>
                            {/* <!-- single-event-item_End -->
                          <!-- single-event-item --> */}
                            <div
                                className='single-event-item text-center single-event-1'
                                onClick={() => {
                                    setHeading(`One-On-One Meetup`);
                                }}>
                                <div className='event-icons'>
                                    <Image
                                        width={50}
                                        height={50}
                                        src={two__men}
                                        alt=''
                                    />
                                </div>
                                <div className='event-text'>
                                    <h5>{splitedName} One-On-One Meetup</h5>
                                    <p>
                                        {state?.enrolmentsResp?.[0]
                                            ?.Face_to_Face_Meeting_Date ||
                                            "TBD"}
                                    </p>
                                </div>
                            </div>
                            {/* <!-- single-event-item_End -->
                          <!-- single-event-item --> */}
                            <div
                                className='single-event-item text-center single-event-1'
                                onClick={() => {
                                    setHeading(`Parents Meeting`);
                                }}>
                                <div className='event-icons'>
                                    <Image
                                        width={50}
                                        height={50}
                                        src={parents}
                                        alt=''
                                    />
                                </div>
                                <div className='event-text'>
                                    <h5>{splitedName} Parents Meeting</h5>
                                    <p>
                                        {state?.enrolmentsResp?.[0]
                                            ?.Parent_s_Meeting_Date || "TBD"}
                                    </p>
                                </div>
                            </div>
                            {/* <!-- single-event-item_End -->
                          <!-- single-event-item --> */}
                            <div
                                className='single-event-item text-center single-event-1'
                                onClick={() => {
                                    setHeading(`Follow Up Call`);
                                }}>
                                <div className='event-icons'>
                                    <Image
                                        width={50}
                                        height={50}
                                        src={phone}
                                        alt=''
                                    />
                                </div>
                                <div className='event-text'>
                                    <h5>{splitedName} Follow Up Call</h5>
                                    <p>
                                        {state?.enrolmentsResp?.[0]
                                            ?.Follow_Up_Call_1_Start_Date ||
                                            "TBD"}
                                    </p>
                                </div>
                            </div>
                            {/* <!-- single-event-item_End -->
                          <!-- single-event-item --> */}
                            <div
                                className='single-event-item text-center single-event-1'
                                onClick={() => {
                                    setHeading(`Follow Up Call`);
                                }}>
                                <div className='event-icons'>
                                    <Image
                                        width={50}
                                        height={50}
                                        src={phone}
                                        alt=''
                                    />
                                </div>
                                <div className='event-text'>
                                    <h5>{splitedName} Follow Up Call</h5>
                                    <p>
                                        {" "}
                                        {state?.enrolmentsResp?.[0]
                                            ?.Follow_Up_Call_2_Start_Date ||
                                            "TBD"}
                                    </p>
                                </div>
                            </div>
                            {/* <!-- single-event-item_End --> */}
                        </div>

                        <div className='activits-text pt-3 pt-lg-4'>
                            <h5>{heading}</h5>
                            <p>{selectedAsset?.[0]?.Description}</p>
                        </div>
                    </div>

                    <div className='single-activities white-box'>
                        <div className='calender-title'>
                            <h4>Your Calendar</h4>

                            <div className='calender-wrapper mt-3 mt-lg-4'>
                                <div className='calender-wrapp'>
                                    <My__Calendar events={events} />
                                </div>
                            </div>
                            {/* Will need to search for Next Data */}
                            {/* <div className='calender-bottom mt-3 mt-lg-4'>
                                <p>
                                    Your next meeting will be on the{" "}
                                    {
                                        state?.enrolmentsResp?.[0]
                                            ?.Parent_s_Meeting_Date
                                    }
                                    . Need to reschedule? Contact your Agent or
                                    the Student Supporter by clicking the button
                                    below.
                                </p>
                                <Link href='/contact' className='btn'>
                                    Contact Us
                                </Link>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Program__Content;
