import React from "react";
import Link from "next/link";
import question from "../../assets/img/question.svg";
import social from "../../assets/img/social-group.svg";
import book from "../../assets/img/book-2.jpg";
import fb from "../../assets/img/facebook-fix-green.svg"
import yt from "../../assets/img/youtube-green.svg"
import ig from "../../assets/img/instagram-fix-green.svg"
import lkin from "../../assets/img/linkedin-fix-green.svg"
import line from "../../assets/img/line-o.svg";
import Image from "next/image";
import useTrackedStore from "../../store/useTrackedStore";
import { useRouter } from "next/router";

const CardArea = () => {
    const state = useTrackedStore();
    // const profile = state?.portalUserResp?.User_Type?.toLowerCase();
    const router = useRouter();
    const profile =
        router.pathname.split("/")?.[1] ||
        state?.portalUserResp?.User_Type?.toLowerCase() ||
        "";

    return (
        <div className='card-block-area'>
            {/* <!-- single-card --> */}
            <div className='single-card-block white-box text-center'>
                <div className='card-icon'>
                    <Image width={100} height={100} src={question} alt='' />
                </div>
                <div className='card-text'>
                    <h4>Open Support Hours</h4>
                    <p>
                        Need to contact your Student Supporter? Click below to
                        find out how to use your Open Support Hours
                    </p>
                </div>
                <div className='btn contact-btn'>
                    <Link
                        href={`/${profile}/contact`}
                        className='btn contact-btn'>
                        <a>Contact us</a>
                    </Link>
                </div>
            </div>
            {/* <!-- single-card -->
                  <!-- single-card --> 'card-icon'*/}
            <div className='single-card-block white-box text-center'>
                <div className= 'student-card-icon'>
                    {/*<Image width={100} height={100} src={social} alt='' width={20} height={20}/>*/}
                    <a href = "https://www.facebook.com/105113841330878" target = "_blank" rel="noreferrer noopener"><Image className = "socmed-image"  src={fb} alt=''/></a>
                    <a href = "https://www.youtube.com/channel/UCbzNF9F-uZDotmUWL_p8vhQ"><Image className = "socmed-image-yt" src={yt} alt=''/></a>
                    <a href = "https://www.linkedin.com/company/69714823" target = "_blank" rel="noreferrer noopener"><Image  className = "socmed-image" src={lkin} alt=''/></a>
                    <a href = "https://instagram.com/study_village" target = "_blank" rel="noreferrer noopener"><Image className = "socmed-image" src={ig} alt=''/></a>
                </div>
                <div className='card-text'>
                    <h4>Follow Us</h4>
                    <p>
                        Follow StudyVillage Social Media to know more about how
                        we help students in their studies and personal growth
                        journey..
                    </p>
                </div>
            </div>
            {/* <!-- single-card -->
                  <!-- single-card --> */}
            <div className='single-card-block white-box text-center'>
                <div className='card-icon'>
                    <Image width={100} height={100} src={book} alt='' />
                </div>
                <div className='card-text'>
                    <h4>Resolve</h4>
                    <p>
                        Our journal talks in depth about the challenges of
                        studying overseas, in an accessible, practical and
                        light-hearted way.
                    </p>
                </div>
                <div className='btn contact-btn'>
                    <Link href={`/${profile}`} className='btn contact-btn'>
                        <a>Read</a>
                    </Link>
                </div>
            </div>
            {/* <!-- single-card -->
                  <!-- single-card --> */}
            {/* <div className="single-card-block white-box text-center">
        <div className="card-icon">
          <Image width={100} height={100} src={line} alt="" />
        </div>
        <div className="card-text">
          <h4>Feedback?</h4>
          <p>
            Do you have any feedback on StudyVillage services? Let us know so we
            can continue to improve.{" "}
          </p>
        </div>
        <Link href={`/${profile}/contact`} className="btn contact-btn">
          Feedback
        </Link>
      </div> */}
            {/* <!-- single-card --> */}
        </div>
    );
};

export default CardArea;
