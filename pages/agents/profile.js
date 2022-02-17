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

  
import NavbarAgent from "../../components/Shared/Navbar/Navbar-Agent";

  import Router from "next/router"

  import saveimg from "../../assets/agents/img/saveimg.png"

  import cancel from "../../assets/agents/img/cancel.png"

  import Navbar from "../../components/Shared/Navbar/Navbar";
  import Sidebar from "../../components/Shared/Sidebar/Sidebar";

  import axios from 'axios';
import { addBasePath } from "next/dist/next-server/lib/router/router";

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
      Branch_Address:"",
      Branch_Phone_Number:"",
      Person_managing_this_branch:"",
      Branch_Email:""
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
      Australia_Counsellor_Image_URL: "",
      UK_Counsellor_Image_URL: "",
      Canada_Counsellor_Image_URL: ""
    }

    agDetBuffer.Agency_Name = state?.agentsResp?.[0]?.Agency_Name,
    agDetBuffer.Name = state?.agentsResp?.[0]?.Name,
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
    agDetBuffer.LinkedIN_Profile_CA = state?.agentsResp?.[0]?.LinkedIN_Profile_CA,
    agDetBuffer.Australia_Counsellor_Image_URL = state?.agentsResp?.[0]?.Australia_Counsellor_Image_URL,
    agDetBuffer.UK_Counsellor_Image_URL = state?.agentsResp?.[0]?.UK_Counsellor_Image_URL,
    agDetBuffer.Canada_Counsellor_Image_URL = state?.agentsResp?.[0]?.Canada_Counsellor_Image_URL

    
    await setAgentDetails(agDetBuffer)

    await setBranchOffice(branchOfficeList)
  }

  const addNewBranch = async (e) =>{
    let newBranch = {...branchDetails}
    inputID = e.target.id
    
    switch(inputID){
      case "Branch_Address":
        newBranch.Branch_Address = e.target.value
        setBranchDetails(newBranch)
        break
      case "Branch_Phone_Number":
        newBranch.Branch_Phone_Number = e.target.value
        setBranchDetails(newBranch)
        break
      case "Person_managing_this_branch":
        newBranch.Person_managing_this_branch = e.target.value
        setBranchDetails(newBranch)
        break
      case "Branch_Email":
        newBranch.Branch_Email = e.target.value
        setBranchDetails(newBranch)
        break
      default:
        console.log("no value to read")
    }


  }

  const updatingBranch = async (e)=>{
    let updateBuffer = [...updatedBranchVal]
    let dupeId = updateBuffer.map((data)=>{return data.id})
    let newBranchData = {}
    let splitId = e.target.id.split(" ")

    switch (splitId[0]){
      case "Branch_Address":
        if(dupeId.indexOf(splitId[1]) !== -1){

          newBranchData = await updateBuffer[dupeId.indexOf(splitId[1])]
          updateBuffer.splice(dupeId.indexOf(splitId[1]), 1)

          newBranchData.Address = e.target.value
          updateBuffer.push(newBranchData)
          setUpdatedBranchVal(updateBuffer)
        }else{
          newBranchData.Address = e.target.value
          newBranchData.id= splitId[1]
          updateBuffer.push(newBranchData)
          setUpdatedBranchVal(updateBuffer)

        }
        
       /** newBranchData.id = e.target.id
        newBranchData.Address = e.target.value
        
        
        
        */
        //await setUpdatedBranchVal(updateBuffer) 
        break
        case "Branch_Phone_Number":
          if(dupeId.indexOf(splitId[1]) !== -1){
            let formatSubmit = {...updatedValue}
            newBranchData = await updateBuffer[dupeId.indexOf(splitId[1])]
            updateBuffer.splice(dupeId.indexOf(splitId[1]), 1)
  
            newBranchData.Phone_Number = e.target.value
            updateBuffer.push(newBranchData)
            setUpdatedBranchVal(updateBuffer)

            formatSubmit.Branch_Office = updatedBranchVal
            setUpdatedValue(formatSubmit)
            
          }else{
            let formatSubmit = {...updatedValue}
            newBranchData.Phone_Number = e.target.value
            
            newBranchData.id= splitId[1]
            updateBuffer.push(newBranchData)
            setUpdatedBranchVal(updateBuffer)

            formatSubmit.Branch_Office = updatedBranchVal
            setUpdatedValue(formatSubmit)
            
          }
        break;
        case "Person_managing_this_branch":
          if(dupeId.indexOf(splitId[1]) !== -1){
            let formatSubmit = {...updatedValue}
            newBranchData = await updateBuffer[dupeId.indexOf(splitId[1])]
            updateBuffer.splice(dupeId.indexOf(splitId[1]), 1)
  
            newBranchData.Person_managing_this_branch = e.target.value
            updateBuffer.push(newBranchData)
            setUpdatedBranchVal(updateBuffer)

            formatSubmit.Branch_Office = updatedBranchVal
            setUpdatedValue(formatSubmit)
          }else{
            let formatSubmit = {...updatedValue}
            newBranchData.Person_managing_this_branch = e.target.value
            newBranchData.id= splitId[1]
            updateBuffer.push(newBranchData)
            setUpdatedBranchVal(updateBuffer)

            formatSubmit.Branch_Office = updatedBranchVal
            setUpdatedValue(formatSubmit)
  
          }
        break;
        case "Branch_Email":
          if(dupeId.indexOf(splitId[1]) !== -1){
            let formatSubmit = {...updatedValue}

            newBranchData = await updateBuffer[dupeId.indexOf(splitId[1])]
            updateBuffer.splice(dupeId.indexOf(splitId[1]), 1)
  
            newBranchData.Email = e.target.value
            updateBuffer.push(newBranchData)
            setUpdatedBranchVal(updateBuffer)

            formatSubmit.Branch_Office = updatedBranchVal
            setUpdatedValue(formatSubmit)
          }else{
            let formatSubmit = {...updatedValue}

            newBranchData.Phone_Number = e.target.value
            newBranchData.id= splitId[1]
            updateBuffer.push(newBranchData)
            setUpdatedBranchVal(updateBuffer)

            formatSubmit.Branch_Office = updatedBranchVal
            setUpdatedValue(formatSubmit)
  
          }
        break; 
        default:
          console.log("no value to read")
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
  const updateBranchCRM = async () =>{
    let newBuffer = {...updatedValue}
    newBuffer.Branch_Office = updatedBranchVal
    setUpdatedValue(newBuffer)
  }
  const updateAgentsCRM = async () =>{
    const updateCRMAgent = await axios.put(`/api/updateRecord`, {
      moduleName : "Agents1",
      updated_data : {
        "data": [
          updatedValue
        ]
      }
    })
    console.log(updateCRMAgent)
    router.push("/")
  }
  useEffect(()=>{
    console.log(updatedValue)
  },[updatedValue])

  useEffect(()=>{
    console.log("check Branch Office")
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
       <NavbarAgent agentID = {state?.agentsResp?.[0]?.Crm_ID} profileUserName={profileUserName} topbarLinks={topbarLinks} />
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
                              <td style = {{ width: "40%" }}>{state?.agentsResp?.[0]?.Agency_Name}</td>
                              <td>Details</td>
                            </tr>
                          </thead>
                          <tbody>
                          <tr  className = "table-secondary">
                              <td  className = "table-kn">Company Principal:</td>
                              <td>{!editContacts ? agentDetails.Managing_Principal : <input id = "Managing_Principal" style = {{width: "100%"}} onChange= {updatingContacts} defaultValue = {agentDetails.Managing_Principal} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td  className = "table-kn">Referral ID:</td>
                              <td>{state?.agentsResp?.[0]?.Crm_ID}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td  className = "table-kn">Key Contact Email Address:</td>
                              <td>{!editContacts ? agentDetails.Email : <input id = "Email" style = {{width: "100%"}} onChange= {updatingContacts} defaultValue = {agentDetails.Email} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td  className = "table-kn">Company Address:</td>
                              <td>{!editContacts ? agentDetails.Street_Address : <input id = "Street_Address" style = {{width: "100%"}} onChange= {updatingContacts} defaultValue = {agentDetails.Street_Address} />}</td>
                          </tr>
                          <tr className = "table-secondary">
                              <td  className = "table-kn">Phone Number:</td>
                              <td>{!editContacts ? agentDetails.Phone : <input id="Phone" style = {{width: "100%"}} onChange= {updatingContacts} defaultValue = {agentDetails.Phone} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td  className = "table-kn">Website:</td>
                              <td>{!editContacts ? agentDetails.Company_Website  : <input id="Company_Website" onChange= {updatingContacts} style = {{width: "100%"}} defaultValue = {agentDetails.Company_Website} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td  className = "table-kn">Branch Office Address:</td>
                              <td>
                              {!editContacts ? BranchOffice.map((list)=>{
                                return (
                                  <div>
                                  {list.Address}<br/>
                                  </div>)
                              })  : BranchOffice.length !== 0 ? BranchOffice.map((list) =>{
                                return(
                                  <div><br/>
                                  <input onChange = {updatingBranch} id={`Branch_Address ${list.id}`} style = {{width: "100%"}} defaultValue = {list.Address} />
                                  </div>
                                )
                              }) : <input onChange = {addNewBranch} id = {'Branch_Address'} style = {{width: "100%"}} />}
                              </td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td  className = "table-kn">Branch Office Phone Number:</td>
                              <td>
                              {!editContacts ? BranchOffice.map((list)=>{
                                return (
                                  <div>
                                  {list.Phone_Number}<br/>
                                  </div>)
                              })  : BranchOffice.length !== 0 ? BranchOffice.map((list)=>{
                                  return(
                                    <div>
                                    <input onChange = {updatingBranch} id = {`Branch_Phone_Number ${list.id}`} style = {{width: "100%"}} defaultValue = {list.Phone_Number} />
                                    </div>
                                    
                                  )
                              }) : <input onChange = {addNewBranch} id = {'Branch_Phone_Number'} style = {{width: "100%"}}/>}
                              </td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td className = "table-kn">Key Contact at Branch Office:</td>
                              <td>
                              {!editContacts ? BranchOffice.map((list)=>{
                                return(
                                  <div>
                                  {list.Person_managing_this_branch}<br/>
                                  </div>
                                )
                              })  : BranchOffice.length !== 0 ? BranchOffice.map((list)=>{
                                return(
                                  <div>
                                  <input onChange = {updatingBranch} id = {`Person_managing_this_branch ${list.id}`} style = {{width: "100%"}} defaultValue = {list.Person_managing_this_branch} />
                                  </div>
                                )
                                
                              }) : <input onChange = {addNewBranch} id = {'Person_managing_this_branch'} style = {{width: "100%"}} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td  className = "table-kn">Key Contact at Branch Office Email:</td>
                              <td>{!editContacts ?
                              BranchOffice.map((list)=>{
                                return(
                                  <div>
                                  {list.Email}<br/>
                                  </div>
                                )
                              })   : BranchOffice.length !== 0 ? BranchOffice.map((list)=>{
                                return(
                                  <div>
                                  <input onChange = {updatingBranch} id = {`Branch_Email ${list.id}` }style = {{width: "100%"}} defaultValue = {list.Email} />
                                  </div>
                                )
                              }): <input onChange = {addNewBranch} id = {'Branch_Email' }style = {{width: "100%"}} />}</td>
                          </tr>
                          </tbody>   
                    </table>
                        {/**onClick = {()=>{setEditContacts(true)}} */}
                        
                    <a  style = {{ marginTop: "2%", marginBottom: "2%"}} rel="noreferrer noopener" target="_blank" href={`https://zfrmz.com/7cL2jO8aq1yjY2SZcrCi?id=${state?.agentsResp?.[0]?.id}&key_contact=${state?.agentsResp?.[0]?.Name}&cp=${state?.agentsResp?.[0]?.Managing_Principal}&kcea=${state?.agentsResp?.[0]?.Email}&addr=${state?.agentsResp?.[0]?.Street_Address}&phone=${state?.agentsResp?.[0]?.Phone}&site=${state?.agentsResp?.[0]?.Company_Website}`}><Image width= {150} height={35} src={editdet}/></a>
                        </div>                
                </div>
                <div className="col-lg-6">
                  <div className="col-lg-12">
                  <div className="user-details-wrapper">
                  
                  {/*TABLE FOR AU MANAGER */}
                        <table className = "table table-striped table-bordered">
                          <thead>
                            <tr className = "table-sv">
                              <td style = {{ width: "50%" }}>Australian Manager</td>
                              <td>Details</td>
                            </tr>
                          </thead>
                          <tbody>
                          <tr  className = "table-secondary">
                              <td  className = "table-kn">Counsellor Name:</td>
                              <td>{!editAUManager ? (agentDetails.First_Name_AU ? agentDetails.First_Name_AU : "")+ " " + (agentDetails.Last_Name_AU ? agentDetails.Last_Name_AU : "") : 
                              <div>
                              <label>First Name</label><input onChange={updateAUManager} id = "First_Name_AU" style = {{width: "70%", marginLeft: "5%"}} defaultValue = {agentDetails.First_Name_AU} /><br/>
                              <div style = {{marginTop: "2%"}}><label>Last Name</label><input onChange={updateAUManager} id= "Last_Name_AU" style = {{width: "70%", marginLeft: "5.4%"}} defaultValue = {agentDetails.Last_Name_AU} /></div>
                              </div>}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td  className = "table-kn">Counsellor Email:</td>
                              <td>{!editAUManager ? agentDetails.Email_AU : <input onChange={updateAUManager} type = "email" id = "Email_AU" style = {{width: "100%"}} defaultValue = {agentDetails.Email_AU} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td  className = "table-kn">Counsellor Phone Number/Whatsapp:</td>
                              <td>{!editAUManager ? agentDetails.Phone_AU : <input onChange={updateAUManager} id="Phone_AU" style = {{width: "100%"}} defaultValue = {agentDetails.Phone_AU} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td  className = "table-kn">LinkedIn Profile:</td>
                              <td>{!editAUManager ? <a href={agentDetails.LinkedIN_Profile_AU} target="_blank" rel="noreferrer noopener">{agentDetails.LinkedIN_Profile_AU}</a> : <input onChange={updateAUManager} id = "LinkedIN_Profile_AU" style = {{width: "100%"}} defaultValue = {agentDetails.LinkedIN_Profile_AU} />}</td>
                          </tr>
                          <tr className = "table-secondary">
                              <td  className = "table-kn">Photo:</td>
                              {agentDetails.Australia_Counsellor_Image_URL == "" ?
                                <td><a href={agentDetails.Australia_Counsellor_Image_URL} target="_blank" rel="noreferrer noopener">{agentDetails.Australia_Counsellor_Image_URL}</a></td>:
                                <td><a href={agentDetails.Australia_Counsellor_Image_URL} target="_blank" rel="noreferrer noopener">Click here to view image</a></td>
                              }
                              
                          </tr>
                          </tbody>   
                    </table>
                    <a  style = {{ marginTop: "2%", marginBottom: "2%"}} target="_blank" rel="noreferrer noopener" href = {`https://zfrmz.com/po3D45D4jf2Ubi2xoGMH?id=${state?.agentsResp?.[0]?.id}&email=${state?.agentsResp?.[0]?.Email}&ce=${state?.agentsResp?.[0]?.Email_AU}&cp=${state?.agentsResp?.[0]?.Phone_AU}&lp=${state?.agentsResp?.[0]?.LinkedIN_Profile_AU}&cfn=${state?.agentsResp?.[0]?.First_Name_AU}&cln=${state?.agentsResp?.[0]?.Last_Name_AU}&key_contact=${state?.agentsResp?.[0]?.Name}&img_url=${state?.agentsResp?.[0]?.New_Australia_Counsellor_Image_URL}`}><Image  width= {150} height={35} src={editdet}/></a>
                  
                    {/*UK MANAGER TABLE */}
                    <table style ={{marginTop: "2%"}} className = "table table-striped table-bordered">
                          <thead>
                            <tr className = "table-sv">
                              <td  className = "table-kn" style = {{ width: "50%" }}>UK Manager</td>
                              <td>Details:</td>
                            </tr>
                          </thead>
                          <tbody>
                          <tr  className = "table-secondary">
                              <td  className = "table-kn">Counsellor Name:</td>
                              <td>{!editUKManager ? (agentDetails.First_Name_UK ? agentDetails.First_Name_UK : "")+ " " + (agentDetails.Last_Name_UK ? agentDetails.Last_Name_UK : "") : 
                              <div>
                              <label>First Name</label><input id="First_Name_UK" onChange={updateUKManager} style = {{width: "70%", marginLeft: "5%"}} defaultValue = {agentDetails.First_Name_UK} /><br/>
                              <div style = {{marginTop: "2%"}} ><label>Last Name</label><input id = "Last_Name_UK" onChange={updateUKManager} style = {{width: "70%", marginLeft: "5.4%"}} defaultValue = {agentDetails.Last_Name_UK} /></div>
                              </div>}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td  className = "table-kn">Counsellor Email:</td>
                              <td>{!editUKManager ? agentDetails.Email_UK : <input id="Email_UK" type = "email" onChange={updateUKManager} style = {{width: "100%"}} defaultValue = {agentDetails.Email_UK} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td  className = "table-kn">Counsellor Phone Number/Whatsapp:</td>
                              <td>{!editUKManager ? agentDetails.Phone_UK : <input id = "Phone_UK" onChange={updateUKManager} style = {{width: "100%"}} defaultValue = {agentDetails.Phone_UK} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td  className = "table-kn">LinkedIn Profile:</td>
                              <td>{!editUKManager ? <a href={agentDetails.LinkedIN_Profile_UK} target="_blank" rel="noreferrer noopener">{agentDetails.LinkedIN_Profile_UK}</a> : <input id = "LinkedIN_Profile_UK" onChange={updateUKManager} style = {{width: "100%"}} defaultValue = {agentDetails.LinkedIN_Profile_UK} />}</td>
                          </tr>
                          <tr className = "table-secondary">
                          <td  className = "table-kn">Photo:</td>
                            {agentDetails.UK_Counsellor_Image_URL == "" ?
                              <td><a href={agentDetails.UK_Counsellor_Image_URL} target="_blank" rel="noreferrer noopener">{agentDetails.UK_Counsellor_Image_URL}</a></td>:
                              <td><a href={agentDetails.UK_Counsellor_Image_URL} target="_blank" rel="noreferrer noopener">Click here to view Image</a></td>
                            }
                              
                          </tr>
                          </tbody>   
                    </table>
                    <a  style = {{ marginTop: "2%", marginBottom: "2%"}} target="_blank" rel = "noreferrer noopener"  href={`https://zfrmz.com/fAqflKsPJSyEfgFwWhu9?id=${state?.agentsResp?.[0]?.id}&email=${state?.agentsResp?.[0]?.Email}&ce=${state?.agentsResp?.[0]?.Email_UK}&cp=${state?.agentsResp?.[0]?.Phone_UK}&lp=${state?.agentsResp?.[0]?.LinkedIN_Profile_UK}&cfn=${state?.agentsResp?.[0]?.First_Name_UK}&cln=${state?.agentsResp?.[0]?.Last_Name_UK}&key_contact=${state?.agentsResp?.[0]?.Name}&img_url=${state?.agentsResp?.[0]?.New_UK_Counsellor_Image_URL}`}><Image width= {150} height={35} src={editdet}/></a>
                    
                    {/*TABLE MANAGER CA */}
                    <table style ={{marginTop: "2%"}} className = "table table-striped table-bordered">
                          <thead>
                            <tr className = "table-sv">
                              <td className = "table-kn" style = {{ width: "50%" }}>Canada Manager</td>
                              <td>Details</td>
                            </tr>
                          </thead>
                          <tbody>
                          {/*add this when you want to do direct edit feature in portal
                          */}
                          <tr  className = "table-secondary">
                              <td className = "table-kn">Counsellor Name:</td>
                              <td>{!editCAManager ? (agentDetails.First_Name_CA ? agentDetails.First_Name_CA : "")+ " " + (agentDetails.Last_Name_CA ? agentDetails.Last_Name_CA : "") : 
                              <div>
                              <label>First Name</label><input id = "First_Name_CA" onChange={updateCAManager} style = {{width: "70%", marginLeft: "5%"}} defaultValue = {agentDetails.First_Name_CA} /><br/>
                              <div style ={{ marginTop: "2%"}} ><label>Last Name</label><input onChange={updateCAManager} id = "Last_Name_CA" style = {{width: "70%", marginLeft: "5.4%"}} defaultValue = {agentDetails.Last_Name_CA} /></div>
                              </div>}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td className = "table-kn">Counsellor Email:</td>
                              <td>{!editCAManager ? agentDetails.Email_CA : <input onChange={updateCAManager} type = "email" id = "Email_CA" style = {{width: "100%"}} defaultValue = {agentDetails.Email_CA} />}</td>
                          </tr>
                          <tr  className = "table-secondary">
                              <td className = "table-kn">Counsellor Phone Number/Whatsapp:</td>
                              <td>{!editCAManager ? agentDetails.Phone_CA : <input onChange={updateCAManager} id = "Phone_CA" style = {{width: "100%"}} defaultValue = {agentDetails.Phone_CA} />}</td>
                          </tr>
                          <tr style = {{ backgroundColor: "#aaaaaa" }}>
                              <td className = "table-kn">LinkedIn Profile:</td>
                              <td>{!editCAManager ? <a href={agentDetails.LinkedIN_Profile_CA} target="_blank" rel="noreferrer noopener">{agentDetails.LinkedIN_Profile_CA}</a> : <input onChange={updateCAManager} id = "LinkedIN_Profile_CA" style = {{width: "100%"}} defaultValue = {agentDetails.LinkedIN_Profile_CA} />}</td>
                          </tr>
                          <tr className = "table-secondary">
                              <td className = "table-kn">Photo:</td>
                              {console.log(agentDetails.Canada_Counsellor_Image_URL)}
                              {agentDetails.Canada_Counsellor_Image_URL == "" ?
                                <td><a href={agentDetails.Canada_Counsellor_Image_URL} target="_blank" rel="noreferrer noopener">{agentDetails.Canada_Counsellor_Image_URL}</a></td>:
                                <td><a href={agentDetails.Canada_Counsellor_Image_URL} target="_blank" rel="noreferrer noopener">Click here to view image</a></td>
                              }
                              
                          </tr>
                          </tbody>   
                    </table>
                    <a  style = {{ marginTop: "2%", marginBottom: "2%"}} target="_blank" rel="noreferrer noopener" href={`https://zfrmz.com/hQ8cvkWwWRHFKmwXV6rJ?id=${state?.agentsResp?.[0]?.id}&email=${state?.agentsResp?.[0]?.Email}&ce=${state?.agentsResp?.[0]?.Email_CA}&cp=${state?.agentsResp?.[0]?.Phone_CA}&lp=${state?.agentsResp?.[0]?.LinkedIN_Profile_CA}&cfn=${state?.agentsResp?.[0]?.First_Name_CA}&cln=${state?.agentsResp?.[0]?.Last_Name_CA}&key_contact=${state?.agentsResp?.[0]?.Name}&img_url=${state?.agentsResp?.[0]?.New_CA_Counsellor_Image_URL}`}><Image width= {150} height={35} src={editdet}/></a>
                          <div className="single-contact-item d-flex align-items-center">
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