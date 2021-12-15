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

  import editdet from "../../assets/agents/img/edit-details.png"

  import Router from "next/router"

  import saveimg from "../../assets/agents/img/saveimg.png"

  import Navbar from "../../components/Shared/Navbar/Navbar";
  import Sidebar from "../../components/Shared/Sidebar/Sidebar";

  import axios from 'axios';

  const AgentProfile = () => {
    const router = useRouter();
    const state = useTrackedStore();
    const [BranchOffice, setBranchOffice] = useState([])
    
    const [agentDetails, setAgentDetails] = useState(
      {
        Agency_Name:"",
        Managing_Principal:"",
        Key_Contact1:"",
        Street_Address:"",
        City:"",
        Phone:"",
        Company_Website:"",
      }
    )

    const [branchDetails, setBranchDetails] = useState({
      Address:"",
      Phone_Number:"",
      Person_managing_this_branch:"",
      Email:""
    })

    const [UKProfile, setUKProfile] = useState({
      First_Name_UK:"",
      Last_Name_UK:"",
      Email_UK:"",
      Phone_UK:""
    })

    const [AUProfile, setAUProfile] = useState({
      First_Name_AU:"",
      Last_Name_AU:"",
      Email_AU:"",
      Phone_AU:"",
      LinkedIN_Profile_AU:"",
      LinkedIN_Profile_UK:""
    })

    const [CAProfile, setCAProfile] = useState({
      First_Name_CA:"",
      Last_Name_CA:"",
      Email_CA:"",
      Phone_CA:"",
      LinkedIN_Profile_CA:""
    })

    const [updatedValue, setUpdatedValue] = useState({
      id: state?.agentsResp?.[0]?.Crm_ID
    })
    
    const [updatedBranchVal, setUpdatedBranchVal] = useState([])
    //Main Table Edit Enabler
    const [editContacts, setEditContacts] = useState(false)
    //Branch Table Edit Enabler
    const [editAUManager, setEditAUManager] = useState(false)
    const [editUKManager, setEditUKManager] = useState(false)
    const [editCAManager, setEditCAManager] = useState(false)


  async function checkSubForm(){
    const subformData =  await axios.post(
      `${process.env.NEXTAUTH_URL}/api/getZohoData`,
      {
        moduleApiName: "Branch_Office",
        criteria: ``,
      }
    )
    console.log(subformData.data.data)
    let subFormArray = subformData.data.data
    let branchOfficeList = [];
    for (let branch of subFormArray){
      if(!!branch?.Parent_Id){
        if(branch.Parent_Id.id === state?.agentsResp?.[0]?.id){
          branchOfficeList.push(branch);
        }
      }
    }
    let agDetBuffer = {
      Agency_Name:"",
      Managing_Principal:"",
      Key_Contact1:"",
      Email:"",
      Street_Address:"",
      City:"",
      Phone:"",
      Company_Website:"",
      First_Name_AU:"",
      Last_Name_AU:"",
      Email_AU:"",
      Phone_AU:"",
      LinkedIN_Profile_AU:"",
      First_Name_UK:"",
      Last_Name_UK:"",
      Email_UK:"",
      Phone_UK:"",
      LinkedIN_Profile_UK:"",
      First_Name_CA:"",
      Last_Name_CA:"",
      Email_CA:"",
      Phone_CA:"",
      LinkedIN_Profile_CA:"",

    }

    agDetBuffer.Agency_Name = state?.agentsResp?.[0]?.Agency_Name,
    agDetBuffer.Managing_Principal = state?.agentsResp?.[0]?.Managing_Principal,
    agDetBuffer.Key_Contact1 = state?.agentsResp?.[0]?.Key_Contact1,
    agDetBuffer.Street_Address= state?.agentsResp?.[0]?.Street_Address,
    agDetBuffer.City = state?.agentsResp?.[0]?.City,
    agDetBuffer.Email = state?.agentsResp?.[0]?.Email,
    agDetBuffer.Phone = state?.agentsResp?.[0]?.Phone,
    agDetBuffer.Company_Website = state?.agentsResp?.[0]?.Company_Website,
    agDetBuffer.First_Name_AU = state?.agentsResp?.[0]?.First_Name_AU,
    agDetBuffer.Last_Name_AU = state?.agentsResp?.[0]?.Last_Name_AU,
    agDetBuffer.Email_AU = state?.agentsResp?.[0]?.Email_AU,
    agDetBuffer.Phone_AU = state?.agentsResp?.[0]?.Phone_AU,
    agDetBuffer.LinkedIN_Profile_AU = state?.agentsResp?.[0]?.LinkedIN_Profile_AU,
    agDetBuffer.First_Name_UK = state?.agentsResp?.[0]?.First_Name_UK,
    agDetBuffer.Last_Name_UK = state?.agentsResp?.[0]?.Last_Name_UK,
    agDetBuffer.Email_UK = state?.agentsResp?.[0]?.Email_UK,
    agDetBuffer.Phone_UK = state?.agentsResp?.[0]?.Phone_UK,
    agDetBuffer.LinkedIN_Profile_UK= state?.agentsResp?.[0]?.LinkedIN_Profile_UK,
    agDetBuffer.First_Name_CA = state?.agentsResp?.[0]?.First_Name_CA,
    agDetBuffer.Last_Name_CA = state?.agentsResp?.[0]?.Last_Name_CA,
    agDetBuffer.Email_CA = state?.agentsResp?.[0]?.Email_CA,
    agDetBuffer.Phone_CA = state?.agentsResp?.[0]?.Phone_CA,
    agDetBuffer.LinkedIN_Profile_CA = state?.agentsResp?.[0]?.LinkedIN_Profile_CA

    
    await setAgentDetails(agDetBuffer)

    await setBranchOffice(branchOfficeList)
  }

  const updatingBranch = async (e)=>{
    let updateBuffer = [...updatedBranchVal]
    let dupeId = updateBuffer.map((data)=>{return data.id})
    let newBranchData = {}


    switch (e.target.id){
      case "Branch_Address":
        updateBuffer.splice(dupeId.indexOf(e.target.id), 1)
        console.log(updateBuffer)
       /** newBranchData.id = e.target.id
        newBranchData.Address = e.target.value
        
        updateBuffer.push(newBranchData)
        
        */
        await setUpdatedBranchVal(updateBuffer) 

        case "Branch_Phone_Number":
        newBranchData.id = e.target.id
        newBranchData.Phone_Number = e.target.value
        updateBuffer.push(newBranchData)
        break;
        await setUpdatedBranchVal(updateBuffer) 
        case "Person_managing_this_branch":
        newBranchData.id = e.target.id
        newBranchData.Person_managing_this_branch = e.target.value
        updateBuffer.push(newBranchData)
        await setUpdatedBranchVal(updateBuffer) 
        break;
        case "Branch_Email":
        newBranchData.id = e.target.id
        newBranchData.Email = e.target.value
        updateBuffer.push(newBranchData)
        await setUpdatedBranchVal(updateBuffer) 
        break; 
    }
  }

  const updatingContacts= async (e)=>{
    let updateBuffer = {...updatedValue}
    
    switch (e.target.id){
      case "Managing_Principal":
        updateBuffer.Managing_Principal = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      case "Street_Address":
        updateBuffer.Street_Address = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      case "Email":
        updateBuffer.Email = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      case "Phone":
        updateBuffer.Phone = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      
      case "Company_Website":
        updateBuffer.Company_Website = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      default:
        console.log("nope")
    }
    

  }

  const updateAUManager = async (e) =>{
    let updateBuffer = {...updatedValue}
    
    switch (e.target.id){
      case "First_Name_AU":
        updateBuffer.First_Name_AU = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      case "Last_Name_AU":
        updateBuffer.Last_Name_AU = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
        case "Email_AU":
          updateBuffer.Last_Name_AU = e.target.value
          await setUpdatedValue(updateBuffer)  
          break
      case "Phone_AU":
        updateBuffer.Phone_AU = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      case "LinkedIN_Profile_AU":
        updateBuffer.LinkedIN_Profile_AU = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      default:
        console.log("nope")
    }
  }

  const updateUKManager = async (e) =>{
    let updateBuffer = {...updatedValue}
    
    switch (e.target.id){
      case "First_Name_UK":
        updateBuffer.First_Name_UK = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
        case "Email_UK":
          updateBuffer.Email_UK = e.target.value
          await setUpdatedValue(updateBuffer)  
          break
      case "Last_Name_UK":
        updateBuffer.Last_Name_UK = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      case "Phone_UK":
        updateBuffer.Phone_UK = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      case "LinkedIN_Profile_UK":
        updateBuffer.LinkedIN_Profile_UK = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      default:
        console.log("nope")
    }
  }

  const updateCAManager = async (e) =>{
    let updateBuffer = {...updatedValue}
    
    switch (e.target.id){
      case "First_Name_CA":
        updateBuffer.First_Name_CA = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
        case "Email_CA":
          updateBuffer.Email_CA = e.target.value
          await setUpdatedValue(updateBuffer)  
          break
      case "Last_Name_CA":
        updateBuffer.Last_Name_CA = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      case "Phone_CA":
        updateBuffer.Phone_CA = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      case "LinkedIN_Profile_CA":
        updateBuffer.LinkedIN_Profile_CA = e.target.value
        await setUpdatedValue(updateBuffer)  
        break
      default:
        console.log("nope")
    }
  }

  const updateAgentsCRM = async () =>{
    const updateTaskinCRM = await axios.put(`/api/updateRecord`, {
      moduleName : "Agents1",
      updated_data : {
        "data": [
          updatedValue
        ]
      }
    })

    console.log(updateTaskinCRM) 
    router.push("/")
  }
  useEffect(()=>{
    console.log(updatedValue)
  },[updatedValue])

  useEffect(()=>{
    console.log(updatedBranchVal)
  },[updatedBranchVal])

  useEffect(()=>{
    console.log("check when there's a change in agentDetails")
    console.log(agentDetails)
  },[agentDetails])


    useEffect(()=>{
      console.log(state.agentsResp)
      checkSubForm();

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
              <div className = "col-lg-12">
                <h4>Study Village Representatives Profile/Key Contacts Page</h4>
                <p style = {{ marginTop: "2%",}}>Please ensure your Company contact details are up-to-date, as well as your key contact staff for each Country you send you students to.</p>
              </div>
                <div className="col-lg-6">
                        <div className="user-details-wrapper">

                        <table className = "table table-striped table-bordered">
                          <thead>
                            <tr className = "table-sv">
                              <td style = {{ width: "50%" }}>{state?.agentsResp?.[0]?.Agency_Name}</td>
                              <td>Details</td>
                            </tr>
                          </thead>
                          <tbody>
                          <tr  className = "table-secondary">
                              <td>Company Principal:</td>
                              <td>{!editContacts ? agentDetails.Managing_Principal : <input id = "Managing_Principal" style = {{width: "100%"}} onChange= {updatingContacts} defaultValue = {agentDetails.Managing_Principal} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td>Referral ID:</td>
                              <td>{state?.agentsResp?.[0]?.Crm_ID}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td>Key Contact Email Address:</td>
                              <td>{!editContacts ? agentDetails.Email : <input id = "Email" style = {{width: "100%"}} onChange= {updatingContacts} defaultValue = {agentDetails.Email} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td>Company Address:</td>
                              <td>{!editContacts ? agentDetails.Street_Address : <input id = "Street_Address" style = {{width: "100%"}} onChange= {updatingContacts} defaultValue = {agentDetails.Street_Address} />}</td>
                          </tr>
                          <tr className = "table-secondary">
                              <td>Phone Number:</td>
                              <td>{!editContacts ? agentDetails.Phone : <input id="Phone" style = {{width: "100%"}} onChange= {updatingContacts} defaultValue = {agentDetails.Phone} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td>Website:</td>
                              <td>{!editContacts ? agentDetails.Company_Website  : <input id="Company_Website" onChange= {updatingContacts} style = {{width: "100%"}} defaultValue = {agentDetails.Company_Website} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td>Branch Office Address:</td>
                              <td>{!editContacts ? BranchOffice[0]?.Address  : <input onChange = {updatingBranch} id = "Branch_Address" style = {{width: "100%"}} defaultValue = {BranchOffice[0]?.Address} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td>Branch Office Phone Number:</td>
                              <td>{!editContacts ? BranchOffice[0]?.Phone_Number  : <input onChange = {updatingBranch} id = "Branch_Phone_Number" style = {{width: "100%"}} defaultValue = {BranchOffice[0]?.Phone_Number} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td>Key Contact at Branch Office:</td>
                              <td>{!editContacts ? BranchOffice[0]?.Person_managing_this_branch  : <input onChange = {updatingBranch} id = "Person_managing_this_branch" style = {{width: "100%"}} defaultValue = {BranchOffice[0]?.Person_managing_this_branch} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td>Key Contact at Branch Office Email:</td>
                              <td>{!editContacts ? BranchOffice[0]?.Email  : <input onChange = {updatingBranch} id = "Branch_Email" style = {{width: "100%"}} defaultValue = {BranchOffice[0]?.Email} />}</td>
                          </tr>
                          </tbody>   
                    </table>
                        
                        
                    <a style = {{ marginTop: "2%" }} onClick={()=>{setEditContacts(!editContacts)}}><Image width= {150} height={35} src={editdet}/></a>
                          
                          

                          
                        </div>                
                </div>
                <div className="col-lg-6">
                  <div className="col-lg-12">
                  <div className="user-details-wrapper">
                  
                  {/*TABLE FOR AU MANAGER */}
                        <table className = "table table-striped table-bordered">
                          <thead>
                            <tr className = "table-dark">
                              <td style = {{ width: "50%" }}>Australian Manager</td>
                              <td>Details</td>
                            </tr>
                          </thead>
                          <tbody>
                          <tr  className = "table-secondary">
                              <td>Counsellor Name:</td>
                              <td>{!editAUManager ? (agentDetails.First_Name_AU ? agentDetails.First_Name_AU : "")+ " " + (agentDetails.Last_Name_AU ? agentDetails.Last_Name_AU : "") : 
                              <div>
                              <label>First Name</label><input onChange={updateAUManager} id = "First_Name_AU" style = {{width: "70%", marginLeft: "5%"}} defaultValue = {agentDetails.First_Name_AU} /><br/>
                              <div style = {{marginTop: "2%"}}><label>Last Name</label><input onChange={updateAUManager} id= "Last_Name_AU" style = {{width: "70%", marginLeft: "5.4%"}} defaultValue = {agentDetails.Last_Name_AU} /></div>
                              </div>}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td>Counsellor Email:</td>
                              <td>{!editAUManager ? agentDetails.Email_AU : <input onChange={updateAUManager} type = "email" id = "Email_AU" style = {{width: "100%"}} defaultValue = {agentDetails.Email_AU} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td>Counsellor Phone Number/Whatsapp:</td>
                              <td>{!editAUManager ? agentDetails.Phone_AU : <input onChange={updateAUManager} id="Phone_AU" style = {{width: "100%"}} defaultValue = {agentDetails.Phone_AU} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td>LinkedIn Profile:</td>
                              <td>{!editAUManager ? agentDetails.LinkedIN_Profile_AU : <input onChange={updateAUManager} id = "LinkedIN_Profile_AU" style = {{width: "100%"}} defaultValue = {agentDetails.LinkedIN_Profile_AU} />}</td>
                          </tr>
                          <tr className = "table-secondary">
                              <td>Photo:</td>
                              <td></td>
                          </tr>
                          </tbody>   
                    </table>
                    <a  style = {{ marginTop: "2%", marginBottom: "2%"}} onClick = {()=>{setEditAUManager(!editAUManager)}}><Image width= {150} height={35} src={editdet}/></a>
                  
                    {/*UK MANAGER TABLE */}
                    <table style ={{marginTop: "2%"}} className = "table table-striped table-bordered">
                          <thead>
                            <tr className = "table-dark">
                              <td style = {{ width: "50%" }}>UK Manager</td>
                              <td>Details:</td>
                            </tr>
                          </thead>
                          <tbody>
                          <tr  className = "table-secondary">
                              <td>Counsellor Name:</td>
                              <td>{!editUKManager ? (agentDetails.First_Name_UK ? agentDetails.First_Name_UK : "")+ " " + (agentDetails.Last_Name_UK ? agentDetails.Last_Name_UK : "") : 
                              <div>
                              <label>First Name</label><input id="First_Name_UK" onChange={updateUKManager} style = {{width: "70%", marginLeft: "5%"}} defaultValue = {agentDetails.First_Name_UK} /><br/>
                              <div style = {{marginTop: "2%"}} ><label>Last Name</label><input id = "Last_Name_UK" onChange={updateUKManager} style = {{width: "70%", marginLeft: "5.4%"}} defaultValue = {agentDetails.Last_Name_UK} /></div>
                              </div>}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td>Counsellor Email:</td>
                              <td>{!editUKManager ? agentDetails.Email_UK : <input id="Email_UK" type = "email" onChange={updateUKManager} style = {{width: "100%"}} defaultValue = {agentDetails.Email_UK} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td>Counsellor Phone Number/Whatsapp:</td>
                              <td>{!editUKManager ? agentDetails.Phone_UK : <input id = "Phone_UK" onChange={updateUKManager} style = {{width: "100%"}} defaultValue = {agentDetails.Phone_UK} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td>LinkedIn Profile:</td>
                              <td>{!editUKManager ? agentDetails.LinkedIN_Profile_UK : <input id = "LinkedIN_Profile_UK" onChange={updateUKManager} style = {{width: "100%"}} defaultValue = {agentDetails.LinkedIN_Profile_UK} />}</td>
                          </tr>
                          <tr className = "table-secondary">
                              <td>Photo:</td>
                              <td></td>
                          </tr>
                          </tbody>   
                    </table>
                    <a style ={{ marginBottom: "2%"}} onClick = {()=>{setEditUKManager(!editUKManager)}}><Image width= {150} height={40} src={editdet}/></a>
                    
                    {/*TABLE MANAGER CA */}
                    <table style ={{marginTop: "2%"}} className = "table table-striped table-bordered">
                          <thead>
                            <tr className = "table-dark">
                              <td style = {{ width: "50%" }}>Canada Manager</td>
                              <td>Details</td>
                            </tr>
                          </thead>
                          <tbody>
                          <tr  className = "table-secondary">
                              <td>Counsellor Name:</td>
                              <td>{!editCAManager ? (agentDetails.First_Name_CA ? agentDetails.First_Name_CA : "")+ " " + (agentDetails.Last_Name_CA ? agentDetails.Last_Name_CA : "") : 
                              <div>
                              <label>First Name</label><input id = "First_Name_CA" onChange={updateCAManager} style = {{width: "70%", marginLeft: "5%"}} defaultValue = {agentDetails.First_Name_CA} /><br/>
                              <div style ={{ marginTop: "2%"}} ><label>Last Name</label><input onChange={updateCAManager} id = "Last_Name_CA" style = {{width: "70%", marginLeft: "5.4%"}} defaultValue = {agentDetails.Last_Name_CA} /></div>
                              </div>}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td>Counsellor Email:</td>
                              <td>{!editCAManager ? agentDetails.Email_CA : <input onChange={updateCAManager} type = "email" id = "Email_CA" style = {{width: "100%"}} defaultValue = {agentDetails.Email_CA} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td>Counsellor Phone Number/Whatsapp:</td>
                              <td>{!editCAManager ? agentDetails.Phone_CA : <input onChange={updateCAManager} id = "Phone_CA" style = {{width: "100%"}} defaultValue = {agentDetails.Phone_CA} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td>LinkedIn Profile:</td>
                              <td>{!editCAManager ? agentDetails.LinkedIN_Profile_CA : <input onChange={updateCAManager} id = "LinkedIN_Profile_CA" style = {{width: "100%"}} defaultValue = {agentDetails.LinkedIN_Profile_CA} />}</td>
                          </tr>
                          <tr className = "table-secondary">
                              <td>Photo:</td>
                              <td></td>
                          </tr>
                          </tbody>   
                    </table>
                    <a  style ={{ marginBottom: "5%"}} onClick = {()=>{setEditCAManager(!editCAManager)}}><Image width= {150} height={40} src={editdet}/></a>
                          <div className="single-contact-item d-flex align-items-center">
                          </div>
                  </div>
                  </div>
                </div>
                <a style ={{ marginTop: "10%", textAlign: "center"}} onClick = {()=>{updateAgentsCRM()}}><Image width= {150} height={40} src={saveimg}/></a>

              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  export default AgentProfile;

  /*const [agencyData, setAgencyData] = useState(
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
    ) */