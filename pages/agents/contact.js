import React from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import infined from "../../assets/agents/img/Infined.jpg";
import student1 from "../../assets/agents/img/student-1.jpg";
import student2 from "../../assets/agents/img/student-2.jpg";
import student3 from "../../assets/agents/img/student-3.jpg";
import student4 from "../../assets/agents/img/student-4.jpg";
import student5 from "../../assets/agents/img/studernt-5.jpg";
import student6 from "../../assets/agents/img/student-6.jpg";
import Image from "next/image";
import { useRouter } from "next/router";
import useTrackedStore from "../../store/useTrackedStore";
const AgentContact = () => {
  const router = useRouter();
  const state = useTrackedStore();
  const topbarLinks = [
    {
      href: "/profile",
      label: `View Profile`,
    },
  ];

  const profile =
    router?.pathname?.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";

  const profileUserName = `${state?.agentsResp?.[0]?.Agency_Name || ""}`;
  return (
    <>
      <Navbar profileUserName={profileUserName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
            <div className="contact-box-wrapper">
              <div className="row">
                <div className="col-lg-5 col-md-12" >
                  <div style={{ minHeight: '50vh' }} className="contact-box white-box theme-box d-flex">
                    <div className="contact-img">
                      <Image
                        width={150}
                        height={150}
                        src={infined}
                        alt="icon"
                      />
                    </div>
                    <div className="contact-text">
                      <div className="contact-heade">
                        <h4>Contact StudyVillage</h4>
                        <p>
                          Sam Winch <br></br> Your StudyVillage Area Manager in
                          Australia
                        </p>
                      </div>
                      <div className="contact-list">
                        <ul>
                          <li>
                            Mobile and WhatsApp:{" "}
                            <a href="tel:0329123456">+30 0329123456</a>
                          </li>
                          <li>
                            Email:{" "}
                            <a href="mailto:samwinch@studyvillage.org">
                              samwinch@studyvillage.org
                            </a>
                          </li>
                          <li>
                            Messenger: <a href>Sam Winch</a>
                          </li>
                          <li>Skype: Sam Winch SV</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 col-md-12">
                  <div style={{ minHeight: '50vh' }} className="contact-box white-box d-flex theme-box">
                    <div className="contact-img">
                      <Image
                        width={150}
                        height={150}
                        src={infined}
                        alt="icon"
                      />
                    </div>
                    <div className="contact-text">
                      <div className="contact-heade">
                        <h4>Your Local Manager Contact</h4>
                        <p>
                          {`${state?.agentsResp?.[0]?.Agency_Name}`} <br />{" "}
                          {`${state?.agentsResp?.[0]?.City} in ${state?.agentsResp?.[0]?.Country} `}
                        </p>
                      </div>
                      <div className="contact-list">
                        <ul>
                          <li>
                            Mobile and WhatsApp:{" "}
                            <a href={`tel:${state?.agentsResp?.[0]?.Country}`}>
                              {state?.agentsResp?.[0]?.Mobile}
                            </a>
                          </li>
                          <li>
                            Email:{" "}
                            <a href={`mailto:{state?.agentsResp?.[0]?.Email}`}>
                              {state?.agentsResp?.[0]?.Email}
                            </a>
                          </li>
                          <li>
                            Messenger:{" "}
                            <a href>{state?.agentsResp?.[0]?.Messenger}</a>
                          </li>
                          <li>Skype: {state?.agentsResp?.[0]?.Skype}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="contact-students">
              {/*<div className="sec-title pb-3 pb-lg-4">
                <h4>Contact Your StudyVillage Students</h4>
              </div>
              <div className="studets-content-grid">
                {state?.studentsResp?.map((student, index) => {
                  return (
                    <div
                      className="single-st-contact d-flex align-items-center"
                      key={index}
                    >
                      <div className="st-img">
                        <Image
                          width={50}
                          height={50}
                          src={student1}
                          alt="student picture"
                        />
                      </div>
                      <div className="studets-details position-relative">
                        <h6>{student?.Full_Name}</h6>
                        <div className="st-hover-details">
                          <ul>
                            <li>
                              <a href>
                                <strong>E:</strong>
                                {student?.Email}
                              </a>
                            </li>
                            <li>
                              <a href>
                                <strong>M:</strong>
                                {student?.Mobile}
                              </a>
                            </li>
                            <li>
                              <a href>
                                <strong>FB:</strong>
                                {student?.Messenger}
                              </a>
                            </li>
                            <li>
                              <a href>
                                <strong>SKYPE:</strong>
                                {student?.Skype}
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>*/}
            </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentContact;
