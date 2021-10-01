import React from "react";
import Link from "next/link";
import question from "../../assets/img/question.svg";
import social from "../../assets/img/social-group.svg";
import book from "../../assets/img/book-2.jpg";
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
                    <h4>Need Help?</h4>
                    <p>
                        ou can contact your Agent or StudyVillage directly.
                        Click below for all contact details.
                    </p>
                </div>
                <Link href={`/${profile}/contact`} className='btn contact-btn'>
                    Contact us
                </Link>
            </div>
            {/* <!-- single-card -->
                  <!-- single-card --> */}
            <div className='single-card-block white-box text-center'>
                <div className='card-icon'>
                    <Image width={100} height={100} src={social} alt='' />
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
                <Link href={`/${profile}`} className='btn contact-btn'>
                    Read
                </Link>
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
