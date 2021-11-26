import React, {useEffect, useState} from "react";
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
  const [agencyData, setAgencyData] = useState(
    {
      "Email_UK": null,
      "Managing_Principal": "",
      "Owner": {
        "name": "",
        "id": "",
        "email": ""
      },
      "Preferred_contact_method": null,
      "First_Name_UK": null,
      "Languages": "Indonesia",
      "Blueprint_transition": null,
      "No_of_Enrolled_Students_This_Year": 0,
      "BSB": null,
      "Send_Contract": false,
      "$state": "save",
      "$process_flow": false,
      "Currency": "AUD",
      "Top_4_Institutions_Working_With": null,
      "id": "",
      "$approval": {
        "delegate": false,
        "approve": false,
        "reject": false,
        "resubmit": false
      },
      "Approx_UK_Client_Year": null,
      "Approx_Number_of_Students_Next_12_Months": null,
      "IBAN": null,
      "Created_Time": "",
      "Creator_ID": null,
      "Address_Line_2": null,
      "Australian_Institutions": "",
      "Zoho_Form_URL_Submitted": null,
      "Messenger": null,
      "First_Name_CA": null,
      "SWIFT_Code": null,
      "Agent_Source": null,
      "Country": "",
      "Last_Name_CA": null,
      "Email_CA": null,
      "Created_By": {
        "name": "",
        "id": "",
        "email": ""
      },
      "Mailing_list": null,
      "Street_Address": null,
      "About_Myself_Agent": null,
      "Phone_AU": null,
      "$review_process": {
        "approve": false,
        "reject": false,
        "resubmit": false
      },
      "Position_Title_AU": null,
      "Record_Image": null,
      "Bank_Bank_Address": null,
      "Key_Contact1": null,
      "Email_Opt_Out": false,
      "Position_Title_CA": null,
      "Phone_CA": null,
      "LinkedIN_Profile_AU": null,
      "First_Name_AU": null,
      "Mobile": null,
      "$orchestration": false,
      "Postal_Zip_Code": null,
      "Last_Name_AU": null,
      "Skype": null,
      "Bank_Name": null,
      "State_Region_Province": null,
      "Tag": [],
      "Task": false,
      "Bank_Account_Number": null,
      "Sending_Students_To": [
        ""
      ],
      "Email": "",
      "$currency_symbol": "",
      "Nos_of_Staff_Employed": null,
      "Agent_Status": "",
      "Applications_in_Progress": 0,
      "Key_Contact_Email_3": null,
      "Applications_Submitted_This_Month": 0,
      "Name": "",
      "Contract_Status": "",
      "Key_Contact_Email_4": null,
      "Last_Activity_Time": "",
      "No_of_Enrolled_Students": 0,
      "Unsubscribed_Mode": null,
      "Exchange_Rate": 1,
      "Portal_Access": true,
      "LinkedIN_Profile_CA": null,
      "$approved": true,
      "Face_2_Face": null,
      "Position_Title_UK": null,
      "$editable": true,
      "Phone_UK": null,
      "City": "",
      "Approx_Canada_Client_Year": null,
      "Approx_Australia_Client_Year": null,
      "UK_Institutions": "",
      "Business_Operations_Years": null,
      "Live_Chat": null,
      "Secondary_Email": null,
      "Agency_Name": "",
      "LinkedIN_Profile_UK": null,
      "Zoho_Sign_Document_ID": null,
      "No_of_Prospective_Students": 0,
      "Modified_By": {
        "name": "",
        "id": "",
        "email": ""
      },
      "Bank_Account_Name": null,
      "$review": null,
      "Phone": null,
      "Branch": null,
      "Working_Days": null,
      "Send_Registration_Form": false,
      "Modified_Time": "",
      "Unsubscribed_Time": null,
      "Title": "Engineer",
      "Email_AU": null,
      "Last_Name_UK": null,
      "Crm_ID": "",
      "Company_Website": null,
      "$in_merge": false,
      "Earned_Commission_Payed": null,
      "$approval_state": ""
    }
  )



  useEffect(()=>{
    console.log(state.agentsResp)
    if("Branch_Office" in state.agentsResp[0]){
      console.log("Branch Office exist")
    }else{
      console.log("Branch Office doesn't exist")
    }
    


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
              <div className="col-lg-6">
                <div className="user-content-page-wrapper">
                  {/*<form action className="is-readonly">*/}
                  
                    {/* user-iamge-area */}
                    {/*<div className="user-cover-image position-relative">*/}
                      {/*<div className="cover-photo-wrapper position-relative">*/}
                        {/*<div className="photo-edit-btn">
                          <input
                            type="file"
                            id="imageUpload"
                            accept=".png, .jpg, .jpeg"
                            disabled
                          />
                          <label htmlFor="imageUpload">
                            <FontAwesomeIcon icon={faPencilAlt} />
                          </label>
                        </div>*/}
                        {/*<div className="cover-photo-wrap">
                          <div
                            id="imagePreview"
                            style={{
                              backgroundImage: `url(${tortoise.src})`,
                            }}
                          />
                        </div>*/}
                      {/*</div>*/}
                      {/*<div
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
                      </div>*/}
                    {/*</div>*/}
                    {/* user-iamge-area */}
                    <div className="user-content-text-wrapper">
                    {/*state?.agentsResp?.[0]?.Name*/}
                    
                      <h4>Study Village Representative Contact Page</h4>
                      <p style = {{ marginTop: "2%", fontWeight: 750 }}>The following materials allow you to keep your Company details up to date</p>
                      {/*<input
                        type="text"
                        defaultValue={state?.agentsResp?.[0]?.Title}
                        disabled
                      />*/}
                      <div className="user-details-wrapper">
                      <div className = "col-md-10">
                      <table className = "table table-striped table-bordered">
                        <thead>
                          <tr className = "table-dark">
                            <td style = {{ width: "50%" }}>{state?.agentsResp?.[0]?.Agency_Name}</td>
                            <td>Details</td>
                          </tr>
                        </thead>
                        <tbody>
                        <tr  className = "table-secondary">
                            <td>Company Principal</td>
                            <td>{state?.agentsResp?.[0]?.Managing_Principal}</td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Key Contact</td>
                            <td>{state?.agentsResp?.[0]?.Name}</td>
                        </tr>
                        <tr  className = "table-secondary">
                            <td>Key Contact Email Address</td>
                            <td></td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Company Address</td>
                            <td></td>
                        </tr>
                        <tr className = "table-secondary">
                            <td>Phone Number</td>
                            <td>{state?.agentsResp?.[0]?.Phone}</td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Website</td>
                            <td>{state?.agentsResp?.[0]?.Company_Website}</td>
                        </tr>
                        <tr  className = "table-secondary">
                            <td>Branch Office Address</td>
                            <td></td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Branch Office Phone Number</td>
                            <td></td>
                        </tr>
                        <tr  className = "table-secondary">
                            <td>Key Contact at Branch Office</td>
                            <td></td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Key Contact at Branch Office Email</td>
                            <td></td>
                        </tr>
                        </tbody>   
                  </table>
                      </div>
                      
                  <button className = "btn btn-primary">EDIT</button>
                        {/* user-single-details-wrapper */}
                        
                        {/* user-single-details-wrapper */}
                        {/* user-single-details-wrapper */}
                        
                        {/* user-single-details-wrapper */}
                        {/* user-single-details-wrapper */}
                        
                        {/* user-single-details-wrapper */}
                        <hr />
                        {/* user-single-details-wrapper */}
                        
                        {/* user-single-details-wrapper */}
                        <hr />
                        {/* user-single-details-wrapper */}
                        <div className="user-single-details about-input">
                          
                          
                          
                        </div>
                        {/* user-single-details-wrapper */}
                        <div className="edit-btn-area mt-4 mt-lg-5">
                          
                          {/*<a
                            href="javascript:void(0)"
                            className="btn btn-save js-save"
                          >
                            Save Your Profile Info
                          </a>*/}
                        </div>
                      </div>
                    </div>
                  {/*</form>*/}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="user-page-sidebar">
                {/* single-sidebar contact-widget*/}
                  <div style= {{ boxShadow: "0px 3px 3px rgba(0, 0, 0, 0.1)", padding: "30px", paddingTop: "110px"}} className="">
                    <div className="contact-items">
                      <form action className="is-readonly">
                      <table className = "table table-striped table-bordered">
                        <thead>
                          <tr className = "table-dark">
                            <td style = {{ width: "50%" }}>Australian Manager</td>
                            <td>Details</td>
                          </tr>
                        </thead>
                        <tbody>
                        <tr  className = "table-secondary">
                            <td>Counsellor Name</td>
                            <td></td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Counsellor Email</td>
                            <td></td>
                        </tr>
                        <tr  className = "table-secondary">
                            <td>Counsellor Phone Number/Whatsapp</td>
                            <td></td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Skype Address</td>
                            <td></td>
                        </tr>
                        <tr className = "table-secondary">
                            <td>Photo</td>
                            <td></td>
                        </tr>
                        </tbody>   
                  </table>
                  <table className = "table table-striped table-bordered">
                        <thead>
                          <tr className = "table-dark">
                            <td style = {{ width: "50%" }}>Australian Manager</td>
                            <td>Details</td>
                          </tr>
                        </thead>
                        <tbody>
                        <tr  className = "table-secondary">
                            <td>Counsellor Name</td>
                            <td></td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Counsellor Email</td>
                            <td></td>
                        </tr>
                        <tr  className = "table-secondary">
                            <td>Counsellor Phone Number/Whatsapp</td>
                            <td></td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Skype Address</td>
                            <td></td>
                        </tr>
                        <tr className = "table-secondary">
                            <td>Photo</td>
                            <td></td>
                        </tr>
                        </tbody>   
                  </table>
                  <table className = "table table-striped table-bordered">
                        <thead>
                          <tr className = "table-dark">
                            <td style = {{ width: "50%" }}>Australian Manager</td>
                            <td>Details</td>
                          </tr>
                        </thead>
                        <tbody>
                        <tr  className = "table-secondary">
                            <td>Counsellor Name</td>
                            <td></td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Counsellor Email</td>
                            <td></td>
                        </tr>
                        <tr  className = "table-secondary">
                            <td>Counsellor Phone Number/Whatsapp</td>
                            <td></td>
                        </tr>
                        <tr style = {{ backgroundColor: "#aaaaaa" }}>
                            <td>Skype Address</td>
                            <td></td>
                        </tr>
                        <tr className = "table-secondary">
                            <td>Photo</td>
                            <td></td>
                        </tr>
                        </tbody>   
                  </table>
                        <div className="single-contact-item d-flex align-items-center">
                        </div>
                        {/*<div className="single-contact-item d-flex align-items-center">
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
                        </div>*/}
                        {/*<div className="single-contact-item d-flex align-items-center">
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
                        </div>*/}
                        {/*<div className="single-contact-item d-flex align-items-center">
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
                        </div>*/}
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
