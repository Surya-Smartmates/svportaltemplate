import React, {useEffect, useState} from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";

import resource1 from "../../assets/agents/img/resource-1.jpg";
import resource2 from "../../assets/agents/img/resource-2.jpg";
import resource3 from "../../assets/agents/img/resoerce-3.jpg";
import resource4 from "../../assets/agents/img/resorce-4.jpeg";
import resource5 from "../../assets/agents/img/resorce-5.jpg";

import vietnam from "../../assets/agents/img/lang.jpg";
import xlfile from "../../assets/agents/img/xl.svg";

import Carousel from 'react-bootstrap/Carousel'

import Image from "next/image";


import NavbarAgent from "../../components/Shared/Navbar/Navbar-Agent";

import { useRouter } from "next/router";
import useTrackedStore from "../../store/useTrackedStore";

const Resources = () => {
  const router = useRouter();
  const state = useTrackedStore();

  const [profName, setProfName] = useState("")
  const topbarLinks = [
    {
      href: "/profile",
      label: `View Profile`,
    },
  ];

  useEffect(()=>{
    setProfName(state?.agentsResp?.[0]?.Agency_Name)
  }, [])

  const profile =
    router.pathname.split("/")?.[1] ||
    state?.portalUserResp?.User_Type?.toLowerCase() ||
    "";

  const profileUserName = `${state?.agentsResp?.[0]?.Agency_Name || ""}`;
  return (
    <>
      <NavbarAgent agentID = {state?.agentsResp?.[0]?.Crm_ID} imgSrc= {state?.agentsResp?.[0]?.Image_URL} profileUserName={profileUserName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
          
            {/* marketing-resources */}
            <div className="marketing-res white-box">
            <h4>StudyVillage Representatives Promotional Resources</h4>

            <p>The resources below will assist you understand and promote StudyVillage programs and build your business. The Sales Kit and FAQ Guide also helps explain how use each resource.  You’ll note, most of the explainer videos are available to our agents and enrolled students and their parents.  ‘The Guide’ is a comprehensive description to the Happy, Healthy & Wise program.  We will continue to add new resources to this page. </p>
            <div className = "col-sm-10">
            <table className = "table-res table table-striped table-bordered">
            <colgroup>
              <col colspan="1" style = {{ width: "30%" }}></col>
              <col colspan="1" style = {{ width: "30%" }}></col>
              <col span="1" style = {{ width: "30%" }}></col>
            </colgroup>
                        <thead>
                          <tr className = "table-sv">
                            <td style = {{ width: "35%" }}>Promotional Tools</td>
                            <td>Instructional Guides for Students & Agents</td>
                            <td>Agent Resources</td>
                          </tr>
                        </thead>
                        <tbody>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href = "https://workdrive.zohoexternal.com/external/caa05ee22bafdbe8ac225f369c2692daa062acac6c431e7535a07f556e7ff99c" target="_blank" rel="noreferrer noopener">Parents Brochure</a><br/><i>PDF Format for sharing with Parents</i></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/100c3ce41b4040750f029b96181b52fd944b0ab61250c3febb073d2b71ed5fbb">Happy, Healthy & Wise Overview Video</a><br/><i>A quick overview/program explainer on video</i></td>
                        <td>Counsellor Training<br/><i>Certificate course for counsellors to become StudyVillage experts!</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://workdrive.zohoexternal.com/external/2c64a613e7be273182689ddd14d6f266c4c147c1884136617104e8d144835a20" target="_blank" rel="noreferrer noopener">Parents Video Explainer</a><br/><i>Video format for sharing with parents</i></td>
                        <td><a href="https://workdrive.zohoexternal.com/external/e6ed5e8f928e8dee16ad0289ebbf0378533a63b5b6375cd03f767e55a10d7a55" target="_blank" rel="noreferrer noopener">StudyVillage Student Guide</a><br/><i>Everything a student needs to know about their StudyVillage Program –  A handy reference in PDF format</i></td>
                        <td>Agent FAQs<br/><i>Questions you may have about working with us answered</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}>Sales Kit & FAQs<br/><i>Scripts and guides to talking about StudyVillage</i></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/bcd0c2132dc49ddabb52108b34a99ff170372867be708429d9fba6aa327fcf05" target="_blank" rel="noreferrer noopener">Your Student Supporter</a><br/><i>A quick video explainer</i></td>
                        <td>Interacting with StudyVillage<br/><i>A quick guide to the portal and working with the team</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href = "https://workdrive.zohoexternal.com/external/dd32c97010477f95b77ad1398d44fd6150ddbb217731b7d4765ba566c89695f4" target="_blank" rel="noreferrer noopener">Resolve Magazine</a><br/><i>PDF format for sharing with student & parents</i></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/34488db5b29e697f7b5f22e57814a76e1c082db13f18d54d20acd991199a0a38" target="_blank" rel="noreferrer noopener">Open Hours</a><br/><i>A quick video explainer</i></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/5e78a200d1c81e475307a19c36c7ce515da9edfed56ed6d39cbc0d70228e2901" target="_blank" rel="noreferrer noopener">Portal Intro and Meeting Family Instructions</a><br/><i>A training video explaining the Meeting the Family component to each module</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/register-aus-prep/" target="_blank" rel="noreferrer noopener" target="_blank" rel="noreferrer noopener">Australia PREP</a><br/><i>Free Pre-departure courseware for your Australia-bound student</i></td>
                        <td><a href="https://workdrive.zohoexternal.com/external/0dc7c2094014beb9fe7dc76a508de2a7473d33f577c22cb55a0dbf5a866c8d37" target="_blank" rel="noreferrer noopener">Connectivity & Independence</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/register-for-uk-prep/" target="_blank" rel="noreferrer noopener" target="_blank" rel="noreferrer noopener">UK PREP</a><br/><i>Free Pre-departure courseware for your UK-bound student</i></td>
                        <td><a href="https://workdrive.zohoexternal.com/external/15a6a27003ca670b41f1bc36b92d1632e738266bc7f6a768def9911127fee71d" target="_blank" rel="noreferrer noopener">Self-surveys</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr >
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/register-ca-prep/" target="_blank" rel="noreferrer noopener" target="_blank" rel="noreferrer noopener">Canada PREP</a><br/><i>Free Pre-departure courseware for your Canada-bound student</i></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/07ec9ad35dcf172ccc45f93519fbbbe80f6b680372cbb895ab01d0bce747a424" target="_blank" rel="noreferrer noopener"></a>Settling In<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href ="https://workdrive.zohoexternal.com/external/562e2558ddc5732efb7a582faa61e97154ac95298dd7ccc42ed530498bbf057d" target="_blank" rel="noreferrer noopener">StudyVillage Slidedeck</a><br/><i>Powerpoint Slides for Student/Parents</i></td>
                        <td><a href="https://workdrive.zohoexternal.com/external/fbee00707fcf237916f5e5e797c98a040170d1c547922a53eaebf820f05a7d41" target="_blank" rel="noreferrer noopener">Consolidating Studies</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href = "https://workdrive.zohoexternal.com/external/7564738b3f927294105fcba624aa29ad744cf51872ab5a28fd9e2ca98c4391ae" target="_blank" rel="noreferrer noopener">Sample Modules</a><br/><i>Consolidating studies explained in a 5 minute video</i></td>
                        <td><a href="https://workdrive.zohoexternal.com/external/420dd5ff376c5dc076fa41292f4390c7fee46fbb427a828384271cc153c14ac4" target="_blank" rel="noreferrer noopener">Tracking Progress</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/why" rel="noreferrer noopener" target="_blank">The “Why File” </a><br/><i>A new model to deal with an enduring challenge –a quick explainer</i></td>
                        <td><a href="https://workdrive.zohoexternal.com/external/56f87abf8f85587e169e1833374586caede37458acf0fd9801fe16a18082ccd1" target="_blank" rel="noreferrer noopener">Goal Setting</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/story" rel="noreferrer noopener" target="_blank">The StudyVillage Backstory<br/></a><i>How we came to be</i></td>
                        <td><a href="https://workdrive.zohoexternal.com/external/536b1a674fb7de4da4301721a49735a342336313dee8e306309d45e61fe449c5" target="_blank" rel="noreferrer noopener">Goal Setting B</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}>
                        </td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/2a775366d0f7ad2c4f9d5adda0a9033b9c68b383eee5ead042ed15446fc22ac7" target="_blank" rel="noreferrer noopener">Goaltracking</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}></td>
                        <td><a href = "https://workdrive.zohoexternal.com/external/e4103febc8f8153932a47c0853469ee8317f75838327230b8fc3d9db810bab28" target="_blank" rel="noreferrer noopener">Transition</a><br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><a href = "https://workdrive.zohoexternal.com/external/8040399fcb1e276492caba6ed1477be044eb1fd65edf307d7754e15ea6850eb5" target="_blank" rel="noreferrer noopener">Accelerator A</a><br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Accelerator B<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><a href = "https://workdrive.zohoexternal.com/external/60c42e4df04038d1ae672f9e0df5c4cacba66b67657e9f18231ec57b674239ce" target="_blank" rel="noreferrer noopener"></a>ELICOS A<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td><a href = "https://workdrive.zohoexternal.com/external/c0c97554f24063539312709dfb71d17536f629bafbbdbd62990c68e70e6cbc8d" target="_blank" rel="noreferrer noopener">ELICOS B</a><br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>ELICOS C<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>ELICOS D<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>ELICOS E<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        </tbody>   
                  </table>
            </div>
          
              {/* resources-title */}
              {/*<div className="res-title pb-lg-4 pb-3">
                <h4>Marketing Resources</h4>
                <p>
                  <i>
                    These resources are available to help you with your
                    promotional activities. Please check this page frequently as
                    we add resources regularly
                  </i>
                </p>
              </div>*/}
              {/* resources-title */}
              {/* single-marketing-resource */}
              {/*<div className="single-resource">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="resource-left-content">
                      <div className="resource-img">
                        <Image
                          height={250}
                          width={350}
                          layout="responsive"
                          src={resource1}
                          alt="resource picture"
                        />
                        <a onClick = {()=>{console.log(state.agentsResp)}}href className="btn download-res">
                          Download (EN)
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="resource-content-right">
                      <h5>Parents Brochure</h5>
                      <p>
                        An Introductory brochure for parents, which includes:{" "}
                      </p>
                      <ul>
                        <li>
                          Introductory information and StudyVillage Background;{" "}
                        </li>
                        <li>
                          Explanation of the Happy, Healthy and Wise framework;
                        </li>
                        <li>Destination Prep course introduction;</li>
                        <li>Students StudyVillage caters to;</li>
                        <li>
                          StudyVillage Program benefits for parents and
                          students;{" "}
                        </li>
                        <li>Program Structure and fees;</li>
                        <li>Student Supporter testimonial;</li>
                        <li>Parents FAQs;</li>
                        <li>
                          List of countries and cities where StudyVillage is
                          available.
                        </li>
                      </ul>
                      <h5>Other Languages Available</h5>
                      <div className="laguage-ab d-flex align-items-center pt-lg-3 pt-3">
                        <div className="lang-left d-flex align-items-center">
                          <Image
                            height={40}
                            width={60}
                            src={vietnam}
                            alt="vietnam flag"
                          />
                          <span>Vietnamese</span>
                        </div>
                        <a href className="res-pdf d-flex align-items-center">
                          <Image
                            height={40}
                            width={60}
                            src={xlfile}
                            alt="xl file upload icon"
                          />
                          <p>Parents Brochure_Vietnamese</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>*/}
              
              {/*<div className="single-resource">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="resource-left-content">
                      <div className="resource-img">
                        <Image
                          height={250}
                          width={350}
                          src={resource2}
                          alt="resource picture"
                        />
                      </div>
                      <a
                        href="startstudyvillage.org"
                        className="btn download-res"
                      >
                        Register (EN)
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="resource-content-right">
                      <h5>DestinationPREP (For Students/Parents)</h5>
                      <p>
                        To provide insight into StudyVillage programs, for a
                        limited time we are offering our DestinationPrep tool
                        free to future international students. This course
                        provides:
                      </p>
                      <ul>
                        <li>
                          Cultural and practical orientation to our key
                          destinations, Australia, UK and Canada;
                        </li>
                        <li>
                          Context in which StudyVillage Programs and Student
                          Supporters can assist;
                        </li>
                        <li> Lead into StudyVillage’s CountryEssentials</li>
                      </ul>
                      <h5>Only Available in English</h5>
                    </div>
                  </div>
                </div>
              </div>*/}
              
              {/*<div className="single-resource">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="resource-left-content text-center">
                      <div className="resource-img">
                        <Image
                          height={250}
                          width={350}
                          id="portraitTwo"
                          src={resource3}
                          alt="resource picture"
                        />
                      </div>
                      <a href className="btn download-res portraitTwo">
                        Read (EN)
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="resource-content-right">
                      <h5>Resolve (ForParents & Students)</h5>
                      <p>
                        A magazine like no other, Resolve magazine hopes to
                        engender serious, honest dialogue about the lived
                        student experience. There’s so much to be gained by
                        studying overseas. But for many international students,
                        there’s a gap between the promise of international
                        education in Anglosphere countries and reality on the
                        ground. But far from being pessimistic or losing hope,
                        there’s tremendous power in sharing stories, networking
                        and participating in open, honest discussion. It’s a
                        perfect compliment to student supporter experience, but
                        also a way of future students to engage in a more
                        nuanced and empowered discussion about making
                        international education work for you
                      </p>
                      <h5>Only Available in English</h5>
                    </div>
                  </div>
                </div>
              </div>*/}
              {/* single-marketing-resource */}
            </div>
            {/* marketing-resources */}
            {/* Learning-resources */}
            {/*<div className="learning-res white-box">*/}
              {/* resources-title */}
              {/*<div className="res-title pb-lg-4 pb-5">               
              </div>*/}
              {/* resources-title */}
              {/* single-marketing-resource */}
              {/*<div className="single-resource">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="resource-left-content">
                      <div className="resource-img">
                        <Image
                          height={250}
                          width={350}
                          src={resource4}
                          alt="resource picture"
                        />
                      </div>
                      <a
                        href="learn.studyvillage.org"
                        className="btn download-res"
                      >
                        Watch Video (EN)
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="resource-content-right">
                      <h5>Parents Meeting for Agent Respresentatives</h5>
                      <p>
                        The video-conference meeting that takes place between a
                        student, their student supporter and the student’s
                        parents is one of the most important elements of
                        StudyVillage’s offering. And you, as StudyVillage
                        representative, can play a vital role - bridging
                        communication and cultural literacy gaps between your
                        student’s supporter and your student’s parents. This
                        short video will exaplin how you can assist during this
                        key phase of the program.
                      </p>
                      <h5>Only Available in English</h5>
                    </div>
                  </div>
                </div>
              </div>*/}
              {/* single-marketing-resource */}
              {/* single-marketing-resource */}
              {/*<div className="single-resource">
                <div className="row">
                  <div className="col-lg-5">
                    <div className="resource-left-content text-center">
                      <div className="resource-img">
                        <Image
                          height={250}
                          width={350}
                          id="portraitTwo"
                          src={resource5}
                          alt="resource picture"
                        />
                      </div>
                      <a
                        href="startstudyvillage.org"
                        className="btn download-res portraitOne"
                      >
                        Dowload (EN)
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <div className="resource-content-right">
                      <h5>
                        An Introduction to the Happy, Healthy and Wise Program
                      </h5>
                      <p>
                        This Guide gves an overview of the key features of the
                        StudyVillage Happy, Healthy and Wise Program. It
                        includes a brief introduction on:
                      </p>
                      <ul>
                        <li>HHW Framework</li>
                        <li>HHW Modules for Award Programs;</li>
                        <li>HHW Modules ofr ELICOS Programs;</li>
                        <li>Core Elements of the HHW Modules</li>
                      </ul>
                      <h5>Only Available in English</h5>
                    </div>
                  </div>
                </div>
              </div>*/}
              {/* single-marketing-resource */}
            {/*</div>*/}
            {/* Learning-resources */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Resources;
