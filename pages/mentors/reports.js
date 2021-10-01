import { useRouter } from "next/router";
import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import useTrackedStore from "../../store/useTrackedStore";
import cliniko from "../../assets/mentors/img/Cliniko.jpg";
import Link from "next/link";
import Image from "next/image";

const InteractionReport = () => {
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

    const profileUserName = `${state?.studentsResp?.[0]?.Full_Name || ""}`;
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
                        {/* apply-wrapper */}
                        <div className='apply-main-wrapper'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-lg-12'>
                                        <div className='apply-grid-box'>
                                            <div className='apply-wrapper white-box'>
                                                <h4>Interaction Report</h4>
                                                <p>
                                                    Use the form below to
                                                    complete your latest
                                                    Interaction Report.
                                                </p>
                                                <div className='apply-form-wrapp'>
                                                    <form action>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Students Name
                                                            </label>
                                                            <input type='text' />
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Module Number
                                                                and Name (eg, M2
                                                                Consolidating
                                                                Studies or
                                                                ELICOS C)
                                                            </label>
                                                            <input type='text' />
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Meeting Type
                                                                (Please select)
                                                            </label>
                                                            <select className='nice-select'>
                                                                <option data-display='One-on-one Meetups'>
                                                                    One-on-one
                                                                    Meetups
                                                                </option>
                                                                <option
                                                                    value={1}>
                                                                    Meet the
                                                                    Parents
                                                                </option>
                                                            </select>
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Meeting Date
                                                                (DD-MM-YYYY)
                                                            </label>
                                                            <input type='text' />
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Meeting Time
                                                                (am/pm)
                                                            </label>
                                                            <input type='text' />
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Meeting Location
                                                                (eg, Zee Cafe,
                                                                University of
                                                                Manchester
                                                                Campus or Web
                                                                Meeting, Zoom)
                                                            </label>
                                                            <input type='text' />
                                                        </div>
                                                        <div className='single-input-wrap'>
                                                            <label htmlFor>
                                                                Your Report
                                                            </label>
                                                            <textarea
                                                                name
                                                                id
                                                                cols={30}
                                                                rows={10}
                                                                defaultValue={
                                                                    ""
                                                                }
                                                            />
                                                        </div>
                                                        <div className='register-btn pt-3'>
                                                            <button
                                                                type='submit'
                                                                className='btn'>
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </form>
                                                </div>
                                                {/* previous-report */}
                                                <div className='previous-report-wrapper pt-4 pt-lg-5'>
                                                    <div className='previous-report'>
                                                        <h5>
                                                            View Your Previous
                                                            Reports
                                                        </h5>
                                                        <a href>
                                                            Student’s Profiles
                                                            &gt;&gt;
                                                        </a>
                                                    </div>
                                                    <div className='previous-report'>
                                                        <h5>
                                                            For Guidelines on
                                                            Writing Your
                                                            Interaction Report
                                                        </h5>
                                                        <a href>
                                                            Learning Materials
                                                            &gt;&gt;
                                                        </a>
                                                    </div>
                                                </div>
                                                {/* previous-report */}
                                            </div>
                                            <div className='check-active-sidebar'>
                                                <div className='others-active white-box'>
                                                    <h4>
                                                        Check In Other
                                                        Activities
                                                    </h4>
                                                    <div className='apply-form-wrapp'>
                                                        <form action=''>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Which
                                                                    activity are
                                                                    you checking
                                                                    in?(please
                                                                    select)
                                                                </label>
                                                                <select className='nice-select'>
                                                                    <option data-display='Follow Up Call'>
                                                                        Follow
                                                                        Up Call
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            1
                                                                        }>
                                                                        Pre-Departure
                                                                        Call
                                                                    </option>
                                                                    <option
                                                                        value={
                                                                            2
                                                                        }>
                                                                        Open
                                                                        Support
                                                                    </option>
                                                                </select>
                                                            </div>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Student’s
                                                                    Name
                                                                </label>
                                                                <input type='text' />
                                                            </div>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Module
                                                                    Number and
                                                                    Name
                                                                </label>
                                                                <input type='text' />
                                                            </div>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Meeting Date
                                                                    and Time
                                                                </label>
                                                                <input type='date' />
                                                            </div>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Activity
                                                                    Date
                                                                    (DD-MM-YYYY)
                                                                </label>
                                                                <input type='text' />
                                                            </div>
                                                            <div className='single-input-wrap'>
                                                                <label htmlFor>
                                                                    Activity
                                                                    Time (am/pm)
                                                                </label>
                                                                <input type='text' />
                                                            </div>
                                                            <div className='register-btn pt-3'>
                                                                <button
                                                                    type='submit'
                                                                    className='btn'>
                                                                    Check In
                                                                </button>
                                                            </div>
                                                        </form>
                                                    </div>
                                                </div>
                                                <div className='single-sidebar feedback-widget text-center mt-lg-5 mt-4'>
                                                    <div className='feedback-widget-content'>
                                                        <div className='feedback-wi-icon'>
                                                            <Image
                                                                src={cliniko}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <div className='feedbac-widget-text pt-3'>
                                                            <h4>Case Notes</h4>
                                                            <p>
                                                                Access Cliniko
                                                                to update your
                                                                case notes by
                                                                clicking on the
                                                                button below.
                                                            </p>
                                                            <a href='page-5.html'></a>
                                                            <Link
                                                                className='btn cliniko-btn'
                                                                href='/support'>
                                                                Cliniko
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* apply-wrapper_End */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default InteractionReport;
