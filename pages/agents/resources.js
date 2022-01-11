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
                        <td  style = {{ width: "35%" }}>Parents Brochure<br/><i>PDF Format for sharing with Parents</i></td>
                        <td>Happy, Healthy & Wise Overview Video<br/><i>A quick overview/program explainer on video</i></td>
                        <td>Counsellor Training<br/><i>Certificate course for counsellors to become StudyVillage experts!</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}>Parents Video Explainer<br/><i>Video format for sharing with parents</i></td>
                        <td>StudyVillage Student Guide<br/><i>Everything a student needs to know about their StudyVillage Program –  A handy reference in PDF format</i></td>
                        <td>Agent FAQs<br/><i>Questions you may have about working with us answered</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}>Sales Kit & FAQs<br/><i>Scripts and guides to talking about StudyVillage</i></td>
                        <td>Your Student Supporter<br/><i>A quick video explainer</i></td>
                        <td>Interacting with StudyVillage<br/><i>A quick guide to the portal and working with the team</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}>Resolve Magazine<br/><i>PDF format for sharing with student & parents</i></td>
                        <td>Open Hours<br/><i>A quick video explainer</i></td>
                        <td >Portal Intro and Meeting Family Instructions<br/><i>A training video explaining the Meeting the Family component to each module</i></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/register-aus-prep/" target="_blank" rel="noreferrer noopener">Australia PREP</a><br/><i>Free Pre-departure courseware for your Australia-bound student</i></td>
                        <td>Connectivity & Independence<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/register-for-uk-prep/" target="_blank" rel="noreferrer noopener">UK PREP</a><br/><i>Free Pre-departure courseware for your UK-bound student</i></td>
                        <td>Self-surveys<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr >
                        <td  style = {{ width: "35%" }}><a href="https://studyvillage.org/register-ca-prep/" target="_blank" rel="noreferrer noopener">Canada PREP</a><br/><i>Free Pre-departure courseware for your Canada-bound student</i></td>
                        <td>Settling In<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}></td>
                        <td>Consolidating Studies<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}></td>
                        <td>Tracking Progress<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}>StudyVillage Slidedeck<br/><i>Powerpoint Slides for Student/Parents</i></td>
                        <td>Goal Setting<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}>Sample Modules<br/><i>Consolidating studies explained in a 5 minute video</i></td>
                        <td>Goal Setting B<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}> <a href="studyvillage.org/why
" rel="noreferrer noopener" target="_blank">The “Why File” </a><br/><i>A new model to deal with an enduring challenge –a quick explainer</i>
                        
                        </td>
                        <td>Goaltracking<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                        <td  style = {{ width: "35%" }}><a href="studyvillage.org/story
" rel="noreferrer noopener" target="_blank">The StudyVillage Backstory<br/></a><i>How we came to be</i></td>
                        <td>Transition<br/><i>A quick video explainer</i></td>
                        <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Accelerator A<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>Accelerator B<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>ELICOS A<br/><i>A quick video explainer</i></td>
                          <td></td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>ELICOS B<br/><i>A quick video explainer</i></td>
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
