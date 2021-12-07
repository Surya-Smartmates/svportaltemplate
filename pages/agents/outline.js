import React, {useEffect, useState} from "react";
import Navbar from "../../components/Shared/Navbar/Navbar";
import Sidebar from "../../components/Shared/Sidebar/Sidebar";

import resource1 from "../../assets/agents/img/resource-1.jpg";
import resource2 from "../../assets/agents/img/resource-2.jpg";
import resource3 from "../../assets/agents/img/resoerce-3.jpg";
import resource4 from "../../assets/agents/img/resorce-4.jpeg";
import resource5 from "../../assets/agents/img/resorce-5.jpg";

import Carousel from 'react-bootstrap/Carousel'

import M1 from '../../assets/img/M1-Settling-In.png'
import M2 from '../../assets/img/M2-Consolidating-Studies.png'
import M3 from '../../assets/img/M3-Tracking-Progressp1.png'
import M4 from '../../assets/img/M4-Goalsettingp1.png'
import M5 from '../../assets/img/M5-GoalTrackingp1.png'
import M6 from '../../assets/img/M6-Transitionp1.png'
import M7 from '../../assets/img/M7-Acceleratorap1.png'
import M8 from '../../assets/img/M8-Acceleratorbp1.png'
import M9 from '../../assets/img/M9-GoalSettingbp1.png'
import ELIA from '../../assets/img/ELICOSAp1.png'
import ELIB from '../../assets/img/ELICOSBp1.png'
import ELIC from '../../assets/img/ELICOSCp1.png'
import ELID from '../../assets/img/ELICOSDp1.png'
import ELIE from '../../assets/img/ELICOSEp1.png'


import Image from "next/image";
import { useRouter } from "next/router";
import useTrackedStore from "../../store/useTrackedStore";

const Outline = () => {
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

  return (
    <>
      <Navbar profileUserName={profName} topbarLinks={topbarLinks} />
      <div class="main-root">
        <Sidebar />
        <div className="main-content">
          <div className="content-wrapper">
          
            {/* marketing-resources */}
            <div className="marketing-res white-box">
            <h4>Your Modules Outlines</h4>

            <p>The following material will assist you to promote StudyVillage programs and build your business</p>
            <div className = "row">
                <div className = "col-sm-2">

                </div>
                <div className = "col-sm-8">
                <Carousel prevIcon={<span className="carousel-control-prev-icon bg-dark"></span>} nextIcon = {<span className = "carousel-control-next-icon bg-dark"></span>} style={{ height: "40vh", marginTop: "10%", marginBottom: "15%" }}>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/5e86ac8a93dc4c4205dd2ce191085bff86b46bb41278a20739640c5496c52789">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={M1}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item  style = {{ marginLeft: "30%"}}>
                    <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/462d563dc5174a52959d68923eae653f5955333332c4d82e726656bd9f90392d">
                        <Image
                            style = {{ marginLeft:"20%" }}
                            width ={300}
                            height = {400}
                            src={M2}
                            alt="First Slide"
                        />
                       </a>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/c08c50f847d9edcd568788efad21eaa6b2b6b6f2f0a824a550c54c4d22eee999">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={M3}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/c965db67b2b9ec30cd69de4267088de60503c6d89333153cd80e38af793b8e66">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={M4}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/1377b0ffb383d319e27082f9316f789da84febf6d85723107704548368e6f759">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={M5}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/8f3b6fae0f00a457ceee5b39a985cf07765122903f2d783ba30cd097f42dc4af">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={M6}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/703c3dc7e7a3cce5b3cf5db14a64e3be2162d91d6164e6dd1fab9e27c6236a22">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={M7}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/402381873032717a332176ba345fe8f0a7d8c14bc4294c9c4c52f289afbac962">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={M8}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/7f9aef9bce9bafbc7fd8e1d2219682040e6e063ebb85eee8aa172566c139cb4e">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={M9}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/93dcd27c59c6b6306470a98e669d13528af98ad8882c3225a4e69ec4028b5971">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={ELIA}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/58a274fbffc16dbd6239c614286593d13b87a85578d27a02c1787eeb4a0f0e3f">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={ELIB}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/dfda9aba7389124831ee0281e2f2e0c8278f4595f0011d3b7a0c399d47ab3689">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={ELIC}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/6149fbdfe678da332f657f58da90cd754416bd4a6df8a392b6abec9ddda1d969">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={ELID}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>
                    </Carousel.Item>
                    <Carousel.Item style = {{ marginLeft: "30%"}}>
                    <div className = "row">
                      <div className = "col-sm-12">
                      <a target="_blank" rel="noreferrer noopener" href = "https://workdrive.zohoexternal.com/external/8afe8d42af547f1fa8df3979326ae58137b20a073815554e7df68c14d9d1dc89">
                      <Image
                        style = {{zIndex: 300, marginLeft:"20%" }}
                        width ={300}
                        height = {400}
                        src={ELIE}
                        alt="First Slide"
                        />
                        </a>
                      </div>
                      <div className = "col-sm-12">
                      <button className = "btn btn-primary" style = {{ zIndex: 1, marginLeft: "5%"}}>Watch Instructional Video</button>
                      </div>
                    </div>

                    </Carousel.Item>
                    {/*<Carousel.Item  style = {{ marginLeft: "30%"}}>
                        <Image
                        
                        style = {{ marginLeft:"20%" }}
                        width ={300}
                        height = {300}
                        src={resource1}
                        alt="First Slide"
                        />
                        
                    </Carousel.Item>*/}
  </Carousel>
                </div>
                <div className = "col-sm-2">
                    
                </div>
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

export default Outline;
