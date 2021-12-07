import React, {useState, useEffect} from "react";
import Link from "next/link";
import Image from "next/image";

const SingleUserProfile = ({
    imgSrc,
    name,
    details,
    course,
    university,
    btnName = "View Details",
    btnLink,
    defClass = "single-profile d-flex align-items-center white-box"
}) => {
    useEffect(()=>{
        if(imgSrc === undefined){
            console.log("imgSrc is undefined")
        }
        else{
            console.log("imgSrc value is" + imgSrc)
        }
        console.log(imgSrc)
    },[])

    const checkImg = imgSrc !== undefined
    return (
        <div className={defClass}>
            <div className='user-profile-img'>
            {/**/}
                { checkImg ? <Image width={100} height={100} src={imgSrc} alt='' /> :<></>}
            </div>
            <div className='user-profile-content'>
                <h4>{name}</h4>
                <strong>{course}</strong>
                <p>
                <br />
                <span>{details}</span>
                </p>
                <p>{university}</p>
                {/* <Link href={btnLink} className='btn profile-btn'>
                    {btnName}
                </Link> */}
            </div>
        </div>
    );
};

export default SingleUserProfile;
