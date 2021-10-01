import React from "react";
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
}) => {
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
                {/* <Link href={btnLink} className='btn profile-btn'>
                    {btnName}
                </Link> */}
            </div>
        </div>
    );
};

export default SingleUserProfile;
