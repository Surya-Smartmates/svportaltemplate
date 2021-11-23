import React, {useEffect, useState} from 'react'
import Sidebar from "../../components/Shared/Sidebar/Sidebar";
import axios from 'axios';
import Navbar from "../../components/Shared/Navbar/Navbar";
import Accordion from "../../components/Accordion/Accordion"
import useTrackedStore from '../../store/useTrackedStore'
import {getSession} from 'next-auth/client'

const Guidelines = ({portalUserResp}) =>{

    const viewAccordion = (data) =>{
        if(data.class === "hide-acc"){
            data.class = "show-acc"
        }else if(data.class === "show-acc"){
            data.class = "hide-acc"
        }
    }
    let backgroundSectionList = {
        subsection: "1. BACKGROUND",
        section_list: [{
            section_title: "The Mindset Required to Assist International Student",
            embed: "https://workdrive.zohoexternal.com/embed/3ztsd02641e8c11c142c685ff56b9d11664de?toolbar=false",
            class: "hide-acc",
            id:"bg1-header"
        },{
            section_title: "Understanding the Stages of Adjustment",
            embed: "https://workdrive.zohoexternal.com/embed/3ztsd0b98350bb6084d3abe1b2138d2eca97f?toolbar=false",
            class: "hide-acc",
            id:"bg2-header"
        },{
            section_title: "The Impact of Language Difficulties",
            embed: "https://workdrive.zohoexternal.com/embed/3ztsd7105956405324b54a973b4f47dfe7091?toolbar=false",
            class: "hide-acc",
            id:"bg3-header"
        },{
            section_title: "The Impact of Different Academic Traditions and Learning Styles",
            embed: "https://workdrive.zohoexternal.com/embed/3ztsd02641e8c11c142c685ff56b9d11664de?toolbar=false",
            class: "hide-acc",
            id:"bg4-header"
        },{
            section_title: "The International Student Experience: A Recap",
            embed: "https://workdrive.zohoexternal.com/embed/3ztsd4b0501eb981147ce9f5bc97810fa3bb6?toolbar=false",
            class: "hide-acc",
            id:"bg5-header"
        }]
    }
    let hhwSectionList = 
    {subsection: "2. THE HAPPY, HEALTHY & WISE PROGRAM",
    section_list: [
        {
        section_title: "ELICOS A",
        embed: "https://workdrive.zohoexternal.com/embed/3ztsd4b8ae19b2dc64aa4b4ae50cf0876e6d3?toolbar=false",
        class: "hide-acc",
        id: "hhw01-header"
    },
    {
        section_title: "ELICOS B",
        embed: "https://workdrive.zohoexternal.com/embed/3ztsdc20ac1a3b74e405aba68306f7dccc487?toolbar=false",
        class: "hide-acc",
        id: "hhw02-header"
    },
    {
        section_title: "ELICOS C",
        embed: "https://workdrive.zohoexternal.com/embed/3ztsdc20ac1a3b74e405aba68306f7dccc487?toolbar=false",
        class: "hide-acc",
        id:"hhw03-header"
    },
    {
        section_title: "ELICOS D",
        embed: "https://workdrive.zohoexternal.com/embed/3ztsd5e1e1fd68b374677aa6a7c56cff5910e?toolbar=false",
        class: "hide-acc",
        id:"hhw04-header"
    },
    {
        section_title: "Settling In",
        embed: "https://workdrive.zohoexternal.com/embed/a9j4k2fbd5f59dc1f4cf693917383942e566d?toolbar=false",
        class: "hide-acc",
        id:"hhw05-header"
    },
    {
        section_title: "Consolidating Studies",
        embed: "https://workdrive.zohoexternal.com/embed/3ztsd21abac19b28f410eb85302c0385bd87f?toolbar=false",
        class: "hide-acc",
        id:"hhw06-header"
    },
    {
        section_title: "Tracking Progress",
        embed: "https://workdrive.zohoexternal.com/embed/a9j4k955758b4e88e400b9ad1b164a970ed46?toolbar=false",
        class: "hide-acc",
        id:"hhw07-header"
    },
    {
        section_title: "Goal Setting",
        embed: "",
        class: "hide-acc",
        id:"hhw08-header"
    },
    {
        section_title: "Goal Setting B",
        embed: "https://workdrive.zohoexternal.com/embed/3ztsdc18eb6e4859b43efbb164a0c9b0a34eb?toolbar=false",
        class: "hide-acc",
        id:"hhw09-header"
    },
    {
        section_title: "Goal Tracking",
        embed: "https://workdrive.zohoexternal.com/embed/3ztsdc18eb6e4859b43efbb164a0c9b0a34eb?toolbar=false",
        class: "hide-acc",
        id:"hhw10-header"
    },
    {
        section_title: "Transition",
        embed: "https://workdrive.zohoexternal.com/embed/3ztsd717a60ff74a846cf985370efd6750d46?toolbar=false",
        class: "hide-acc",
        id:"hhw11-header"
    },
    {
        section_title: "Accelerator A",
        embed: "https://workdrive.zohoexternal.com/embed/3ztsd7af94c5f4b7c4ca78ca267e2c08669a8?toolbar=false",
        class: "hide-acc",
        id:"hhw12-header"
    },
    {
        section_title: "Accelerator B",
        embed: "https://workdrive.zohoexternal.com/embed/3ztsddbef1d5158614de49ffb29236407988d?toolbar=false",
        class: "hide-acc",
        id:"hhw13-header"
    },
    {
        section_title: "In Depth Practice",
        embed: "",
        class:"hide-acc",
        id:"hhw14-header"
    }
        
    ]
}
let practiceSectionList = {
    subsection: "3. IN DEPTH PRACTICE",
section_list: [{
    section_title: "Professional Practice",
    embed: "https://workdrive.zohoexternal.com/embed/a9j4k75dea968cc494ac7b94636d23fb3a45d?toolbar=false",
    class: "hide-acc",
    id:"ps01-header"
},
{
    section_title: "Connectivity & Independence",
    embed: "https://workdrive.zohoexternal.com/embed/a9j4k6999c5036ccc470bb0c6d90d1e8bdb71?toolbar=false",
    display: "hide-acc",
    id:"ps02-header"
},
{
    section_title: "Program Lengths and Module Combinations",
    embed: "",
    class: "hide-acc",
    id:"ps03-header"
},
{
    section_title: "Background Research",
    embed: "https://workdrive.zohoexternal.com/embed/a9j4k6999c5036ccc470bb0c6d90d1e8bdb71?toolbar=false",
    class: "hide-acc",
    id:"ps04-header"
},
{
    section_title: "Pre Departure Call",
    embed: "https://workdrive.zohoexternal.com/embed/a9j4kcc428157765e4d9797951cbfad6b5e9b?toolbar=false",
    class: "hide-acc",
    id:"ps05-header"
},
{
    section_title: "One on One Meetups",
    embed: "https://workdrive.zohoexternal.com/embed/a9j4k043c02b4420c481788b18c363dc4893c?toolbar=false",
    class: "hide-acc",
    id:"ps06-header"
},
{
    section_title: "Writing Your Interaction Report",
    embed: "https://workdrive.zohoexternal.com/embed/a9j4k000d6833956249b286bb02f324b99f6b?toolbar=false",
    class: "hide-acc",
    id:"ps07-header"
},
{
    section_title: "Meet the Parents",
    embed: "https://workdrive.zohoexternal.com/embed/a9j4k8833bf412a824f9b86724ced2930505b?toolbar=false",
    class: "hide-acc",
    id:"ps08-header"
},
{
    section_title: "Phone Check-In",
    embed: "https://workdrive.zohoexternal.com/embed/a9j4k8833bf412a824f9b86724ced2930505b?toolbar=false",
    class: "hide-acc",
    id:"ps09-header"
},
{
    section_title: "Open Support",
    embed: "",
    class: "hide-acc",
    id:"ps10-header"
},
    
]}
    
    return(
        <div>
        <Navbar/>
        <Sidebar/>
        <div className = "main-content">
            <div className = "content-wrapper">
                <div className = "apply-main-wrapper">
                    <div className = "container-fluid">
                            <div className = "apply-wrapper white-box">
                            <h2>Study Village's Resources</h2>
                                <div className = "row">
                                    <div className = "col-sm-12">
                                                <span className = "guide-section-header">{backgroundSectionList.subsection}</span>
                                                <ul className = "guide-section-lists">
                                                {backgroundSectionList.section_list.map((slist)=>{
                                                    return(
                                                        <div>
                                                        <Accordion title = {slist.section_title} content = {slist.embed}/>
                                                        </div>
                                                    )
                                                })}
                                                    
                                                    <div className = "guide-panel">
                                                    <iframe src="" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                    </div>
                                                    {/*
                                                    <li><button className = "btn guide-accordion">The Mindset Required to Assist International Student</button></li>
                                                    <div className = "guide-panel"><iframe src="https://workdrive.zohoexternal.com/embed/3ztsd02641e8c11c142c685ff56b9d11664de?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe></div>
                                                    <li>Understanding the Stages of Adjustment</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsd0b98350bb6084d3abe1b2138d2eca97f?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                    <li>The Impact of Language Difficulties</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsd7105956405324b54a973b4f47dfe7091?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                    <li>The Impact of Different Academic Traditions and Learning Styles</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsd02641e8c11c142c685ff56b9d11664de?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                    <li>The International Student Experience: A Recap</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsd4b0501eb981147ce9f5bc97810fa3bb6?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="520" ></iframe>*/}
                                                </ul>
                                    </div>
                                    <div className = "col-sm-12">
                                        <ul>
                                            <li>
                                            <span className = "guide-section-header">{hhwSectionList.subsection}</span>
                                                {hhwSectionList.section_list.map((slist, index)=>{
                                                    return(
                                                        <div>
                                                            <li>
                                                            <Accordion title = {slist.section_title} content={slist.embed}/>
                                                               {/* <Accordion>
                                                                <AccordionSummary
                                                                
                                                                id={slist.id}>
                                                                {slist.section_title}
                                                                </AccordionSummary>
                                                                    <AccordionDetails>
                                                                    <iframe className = "accordion-body" src={slist.embed} scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="400" ></iframe>
                                                                    </AccordionDetails>
                                                                </Accordion>*/}
                                                            {/*<li><button className = "btn guide-accordion">{slist.section_title}</button></li>
                                                        <iframe className = "accordion-body" src={slist.embed} scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="400" ></iframe>*/}
                                                            </li>
                                                        </div>
                                                    )
                                                })}
                                                    {/*
                                                    <li>ELICOS A</li>
                                                    <iframe className = "accordion-body" src="https://workdrive.zohoexternal.com/embed/3ztsd4b8ae19b2dc64aa4b4ae50cf0876e6d3?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="400" ></iframe>
                                                    <li>ELICOS B</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsdc20ac1a3b74e405aba68306f7dccc487?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="250" ></iframe>
                                                    <li>ELICOS C</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsdc20ac1a3b74e405aba68306f7dccc487?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="250" ></iframe>
                                                    <li>ELICOS D</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsd5e1e1fd68b374677aa6a7c56cff5910e?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="250" ></iframe>
                                                    <li>Settling In</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/a9j4k2fbd5f59dc1f4cf693917383942e566d?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="250" ></iframe>
                                                    <li>Consolidating Studies</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsd21abac19b28f410eb85302c0385bd87f?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="250" ></iframe>
                                                    <li>Tracking Progress</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/a9j4k955758b4e88e400b9ad1b164a970ed46?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                    <li>Goal Setting</li>
                                                    <li>Goal Setting B</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsdc18eb6e4859b43efbb164a0c9b0a34eb?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                    <li>Goal Tracking</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsdc18eb6e4859b43efbb164a0c9b0a34eb?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                    <li>Transition</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsd717a60ff74a846cf985370efd6750d46?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                    <li>Accelerator A</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsd7af94c5f4b7c4ca78ca267e2c08669a8?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                    <li>Accelerator B</li>
                                                    <iframe src="https://workdrive.zohoexternal.com/embed/3ztsddbef1d5158614de49ffb29236407988d?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                    <li>In Depth Practice</li>*/}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                    <div className = "col-sm-12">
                                        <span className = "guide-section-header">{practiceSectionList.subsection}</span>
                                                    {
                                                        practiceSectionList.section_list.map((slist)=>{
                                                            return(
                                                                <div>
                                                                <Accordion title = {slist.section_title} content = {slist.embed}/>    
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                {/*<li>Professional Practice</li>
                                                <iframe src="https://workdrive.zohoexternal.com/embed/a9j4k75dea968cc494ac7b94636d23fb3a45d?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                <li>Connectivity & Independence</li>
                                                <iframe src="https://workdrive.zohoexternal.com/embed/a9j4k6999c5036ccc470bb0c6d90d1e8bdb71?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                <li>Program Lengths and Module Combinations</li>
                                                <li>Background Research</li>
                                                <iframe src="https://workdrive.zohoexternal.com/embed/a9j4k6999c5036ccc470bb0c6d90d1e8bdb71?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                <li>Pre Departure Call</li>
                                                <iframe src="https://workdrive.zohoexternal.com/embed/a9j4kcc428157765e4d9797951cbfad6b5e9b?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                <li>One on One Meetups</li>
                                                <iframe src="https://workdrive.zohoexternal.com/embed/a9j4k043c02b4420c481788b18c363dc4893c?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                <li>Writing Your Interaction Report</li>
                                                <iframe src="https://workdrive.zohoexternal.com/embed/a9j4k000d6833956249b286bb02f324b99f6b?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                <li>Meet the Parents</li>
                                                <iframe src="https://workdrive.zohoexternal.com/embed/a9j4k8833bf412a824f9b86724ced2930505b?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                <li>Phone Check-In</li>
                                                <iframe src="https://workdrive.zohoexternal.com/embed/3ztsd18a6a47713ca4ffebfbaddc92818a88d?toolbar=false" scrolling="no" frameborder="0" allowfullscreen="true" width="800" height="450" ></iframe>
                                                <li>Open Support</li>*/}
                                    </div>
                                   
                            </div>
                        
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Guidelines