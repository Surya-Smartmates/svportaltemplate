import React , {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

import useTrackedStore from "../../store/useTrackedStore"

const SingleUserProfile = ({
    imgSrc,
    name,
    details,
    course,
    university,
    stuData,
    btnName = "View Details",
    btnLink,
}) => {
    const state = useTrackedStore()

    useEffect(()=>{
        console.log("check student data")
        console.log(stuData)
    }, [])


    useEffect(()=>{
        return()=>{
            state.setStudentsResp(stuData)
            /*
            console.log(imgSrc)
            console.log(name)
            console.log(details)
            console.log(course)
            console.log(university)
            console.log(stuData)*/
        }
        
    },[])

    
    return (
        <div className='single-profile d-flex align-items-center white-box'>
            <div className='user-profile-img'>
                <Image width={100} height={100} src={imgSrc} alt='' />
            </div>
            <div className='user-profile-content'>
                <h4>{name}</h4>
                <span>{details}</span>
                <p>
                    <strong>{course}</strong> <br />
                </p>
                <p>{university}</p>
                <Link href={btnLink} className='btn profile-btn'>
                    {btnName}
                </Link>
            </div>
        </div>
    );
};

export default SingleUserProfile;
