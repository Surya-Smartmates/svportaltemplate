import React, {useEffect} from "react";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tortoise from "../../assets/agents/img/tortoyes.jpg";
import agent from "../../assets/agents/img/agent.jpg";
import phone from "../../assets/agents/img/phone-green.svg";
import laptop from "../../assets/agents/img/leptop.svg";
import messanger from "../../assets/agents/img/messsenger.svg";
import skype from "../../assets/agents/img/skype.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import useTrackedStore from "../../store/useTrackedStore";
import _ from "lodash";

import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";

const AgentProfile = () => {
  const router = useRouter();
  const state = useTrackedStore();

  useEffect(()=>{
    console.log(state.agentsResp)
  },[])
  const topbarLinks = [
    {
      href: "/profile",
      label: `View Profile`,
    },
  ];

  const profile =
    router.pathname.split("/")?.[1] ||
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
            <div className="row">
              <div className="col-lg-8">
                <div className="user-content-page-wrapper">
                  <form action className="is-readonly">
                    {/* user-iamge-area */}
                    <div className="user-cover-image position-relative">
                      <div className="cover-photo-wrapper position-relative">
                        <div className="photo-edit-btn">
                          <input
                            type="file"
                            id="imageUpload"
                            accept=".png, .jpg, .jpeg"
                            disabled
                          />
                          <label htmlFor="imageUpload">
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </label>
                        </div>
                        <div className="cover-photo-wrap">
                          <div
                            id="imagePreview"
                            style={{
                              backgroundImage: `url(${tortoise.src})`,
                            }}
                          />
                        </div>
                      </div>
                      <div
                        className="profile-img-area"
                        id="imagePreviewTwo"
                        style={{
                          backgroundImage: `url(${agent.src})`,
                        }}
                      >
                        <input type="file" id="profile-img" disabled />
                        <label htmlFor="profile-img">
                          <i className="fas fa-pencil" />
                        </label>
                      </div>
                    </div>
                    {/* user-iamge-area */}
                    <div className="user-content-text-wrapper">
                      <h4>{state?.agentsResp?.[0]?.Name}</h4>
                      <input
                        type="text"
                        defaultValue={state?.agentsResp?.[0]?.Title}
                        disabled
                      />
                      <div className="user-details-wrapper">
                        {/* user-single-details-wrapper */}
                        <div className="user-single-details">
                          <h5>Branch:</h5>
                          <input
                            type="text"
                            defaultValue={state?.agentsResp?.[0]?.Branch}
                            disabled
                          />
                        </div>
                        {/* user-single-details-wrapper */}
                        {/* user-single-details-wrapper */}
                        <div className="user-single-details">
                          <h5>Languages:</h5>
                          <input
                            type="text"
                            defaultValue={state?.agentsResp?.[0]?.Languages}
                            disabled
                          />
                        </div>
                        {/* user-single-details-wrapper */}
                        {/* user-single-details-wrapper */}
                        <div className="user-single-details">
                          <h5>Sending Students To:</h5>
                          <input
                            type="text"
                            defaultValue={
                              state?.agentsResp?.[0]?.Sending_Students_To
                            }
                            disabled
                          />
                        </div>
                        {/* user-single-details-wrapper */}
                        <hr />
                        {/* user-single-details-wrapper */}
                        <div className="user-single-details about-input">
                          <h5>About Myself:</h5>
                          <textarea
                            name
                            id
                            cols={30}
                            rows={10}
                            disabled
                            defaultValue={
                              state?.agentsResp?.[0]?.About_Myself_Agent
                            }
                          />
                        </div>
                        {/* user-single-details-wrapper */}
                        <hr />
                        {/* user-single-details-wrapper */}
                        <div className="user-single-details about-input">
                          <h5>Main Institution Partners</h5>
                          <div className="user-single-list">
                            <h4>AUSTRALIA</h4>
                            <ul>
                              {_.split(
                                state?.agentsResp?.[0]?.Australian_Institutions,
                                "\n"
                              )?.map((institutions, index) => {
                                return <li key={index}>{institutions}</li>;
                              })}
                              {/* <li>Australian Catholic University</li>
                              <li>Deakin University</li>
                              <li>James Cook University</li>
                              <li>La Trobe University</li>
                              <li>Monash University</li>
                              <li>Queensland University of Technology</li>
                              <li>RMIT University</li>
                              <li>Southern Cross University</li>
                              <li>Swinburne University of Technology</li>
                              <li>University of Adelaide</li>
                              <li>University of New South Wales</li>
                              <li>University of Western Australia</li>
                              <li>Victoria University</li> */}
                            </ul>
                          </div>
                          <div className="user-single-list">
                            <h4>UK</h4>
                            <ul>
                              {_.split(
                                state?.agentsResp?.[0]?.UK_Institutions,
                                "\n"
                              )?.map((institutions, index) => {
                                return <li key={index}>{institutions}</li>;
                              })}
                              {/* <li>Cardiff Metropolitan University</li>
                              <li>Coventry University</li>
                              <li>Glasgow Caledonian University</li>
                              <li>Kingston University London</li>
                              <li>Liverpool John Moores University</li>
                              <li>London South Bank University</li>
                              <li>Newcastle University</li>
                              <li>University of Aberdeen</li>
                              <li>University of Bristol</li>
                              <li>University of Greenwic</li>
                              <li>University of Sunderland</li>
                              <li>University of Surrey</li>
                              <li>University of West London</li>
                              <li>University of Westminster, London</li>
                              <li>University of York</li> */}
                            </ul>
                          </div>
                        </div>
                        {/* user-single-details-wrapper */}
                        <div className="edit-btn-area mt-4 mt-lg-5">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-edit js-edit"
                          >
                            Edit Your Profile Info
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="btn btn-save js-save"
                          >
                            Save Your Profile Info
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="user-page-sidebar">
                  <div className="single-sidebar contact-widget">
                    <h4>Your Contacts</h4>
                    <div className="contact-items">
                      <form action className="is-readonly">
                        <div className="single-contact-item d-flex align-items-center">
                          <div className="contact-icon">
                            <Image
                              width={50}
                              height={50}
                              src={phone}
                              alt="icon"
                            />
                          </div>
                          <div className="contact-id">
                            <span>Mobile and WhatsApp:</span>
                            <input
                              type="text"
                              defaultValue={state?.agentsResp?.[0]?.Mobile}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="single-contact-item d-flex align-items-center">
                          <div className="contact-icon">
                            <Image
                              width={50}
                              height={50}
                              src={laptop}
                              alt="icon"
                            />
                          </div>
                          <div className="contact-id">
                            <span>Email:</span>
                            <input
                              type="text"
                              defaultValue={state?.agentsResp?.[0]?.Email}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="single-contact-item d-flex align-items-center">
                          <div className="contact-icon">
                            <Image
                              width={50}
                              height={50}
                              src={messanger}
                              alt="icon"
                            />
                          </div>
                          <div className="contact-id">
                            <span>Messenger (preferred):</span>
                            <input
                              type="text"
                              defaultValue={state?.agentsResp?.[0]?.Messenger}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="single-contact-item d-flex align-items-center">
                          <div className="contact-icon">
                            <Image
                              width={50}
                              height={50}
                              src={skype}
                              alt="icon"
                            />
                          </div>
                          <div className="contact-id">
                            <span>Skyper:</span>
                            <input
                              type="text"
                              defaultValue={state?.agentsResp?.[0]?.Skype}
                              disabled
                            />
                          </div>
                        </div>
                        <div className="edit-btn-area mt-3 mt-lg-4">
                          <a
                            href="javascript:void(0)"
                            className="btn btn-edit js-edit"
                          >
                            Edit Your Contact Details
                          </a>
                          <a
                            href="javascript:void(0)"
                            className="btn btn-save js-save"
                          >
                            Save Your Contact Details
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentProfile;
