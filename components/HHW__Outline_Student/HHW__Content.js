import React from "react";
// import OwlCarousel from "react-owl-carousel";
// import "owl.carousel/dist/assets/owl.carousel.css";
// import "owl.carousel/dist/assets/owl.theme.default.css";
import slider__2 from "../../assets/img/slider-2.jpg";
import slider__3 from "../../assets/img/slider-3.jpg";
import slider__4 from "../../assets/img/slider-4.jpg";
import slider__5 from "../../assets/img/slider-5.jpg";
import slider__6 from "../../assets/img/slider-6.jpg";
import useTrackedStore from "../../store/useTrackedStore";
// import "../../assets/css/style.css";
// import "../../assets/css/responsive.css";
// import "./owl__style.css";
import need__1 from "../../assets/img/need-1.jpg";
import need__2 from "../../assets/img/need-2.jpg";
import need__3 from "../../assets/img/need-3.jpg";
import need__4 from "../../assets/img/need-4.jpg";
import Link from "next/link";
import Image from "next/image";

const HHW__Content = () => {
    const state = useTrackedStore();
    const responsive = {
        0: {
            items: 1,
        },
        767: {
            items: 3,
            margin: 60,
        },
    };
    return (
        <div className='main-content'>
            <div className='content-wrapper'>
                <div className='outline-area'>
                    <div className='white-box'>
                        <div className='outline-content-box'>
                            <h4>Your Modules Outlines</h4>
                            {/* <OwlCarousel
                className="outline-slide-active"
                center
                autoplay
                loop
                nav
                responsive={responsive}
              >
                <div className="single-sldie-outline">
                  <div className="outline-img">
                    <Image
                      height={250}
                      width={250}
                      layout="responsive"
                      src={slider__2}
                      alt=""
                    />
                  </div>
                  <button className="btn">Download Outline</button>
                </div>
                <div className="single-sldie-outline">
                  <div className="outline-img">
                    <Image
                      height={250}
                      width={250}
                      layout="responsive"
                      src={slider__3}
                      alt=""
                    />
                  </div>
                  <button className="btn">Download Outline</button>
                </div>
                <div className="single-sldie-outline">
                  <div className="outline-img">
                    <Image
                      height={250}
                      width={250}
                      layout="responsive"
                      src={slider__5}
                      alt=""
                    />
                  </div>
                  <button className="btn">Download Outline</button>
                </div>
                <div className="single-sldie-outline">
                  <div className="outline-img">
                    <Image
                      height={250}
                      width={250}
                      layout="responsive"
                      src={slider__6}
                      alt=""
                    />
                  </div>
                  <button className="btn">Download Outline</button>
                </div>
                <div className="single-sldie-outline active">
                  <div className="outline-img position-relative">
                    <span className="checked-doc">
                      <i className="fas fa-check-circle"></i>
                    </span>
                    <Image
                      height={250}
                      width={250}
                      layout="responsive"
                      src={slider__4}
                      alt=""
                    />
                  </div>
                  <button className="btn">Download Outline</button>
                </div>
              </OwlCarousel> */}

                            <div className='text-box'>
                                <h5>
                                    Understanding your Happy, Healthy and Wise
                                    Outline{" "}
                                </h5>
                                <p>
                                    The Happy, Healthy and Wise Outline includes
                                    a graphic presentation of your child’s
                                    responses to the self-survey that he/she
                                    completed earlier in the semester/study
                                    period. Your responses are compared to the
                                    overall responses of other students at the
                                    same stage of their studies. Your responses
                                    that differed most from the responses of
                                    other similar students are highlighted here.
                                    Your responses to key survey questions are
                                    tracked over time and presented here with a
                                    written report from Your student supporter
                                    that combines survey results and discussion
                                    points from the face-to-face catch up.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='more-info-text-wrapper'>
                    <div className='more-info-wrapper'>
                        <div className='single-wrapper-info white-box'>
                            <h4>Need more info?</h4>
                            <p>
                                We have prepared an introduction to each module
                                outline. This introduction describes briefly
                                what each module is about and what your child
                                and his/her mentor will be canvassing together.
                                You candownload them by clicking the buttons
                                below.
                            </p>

                            <div className='info-items'>
                                <div
                                    className='single-info-item'
                                    style={{
                                        backgroundImage: `url(${need__1.src})`,
                                    }}>
                                    <h5>
                                        M2 CONSOLIDATING <br />
                                        <i>STUDIES</i>
                                    </h5>
                                    <p>Front Page Introduction</p>
                                </div>
                                <div
                                    className='single-info-item'
                                    style={{
                                        backgroundImage: `url(${need__2.src})`,
                                    }}>
                                    <h5>
                                        M3 <i>GOAL SETTING</i>
                                    </h5>
                                    <p>Front Page Introduction</p>
                                </div>
                                <div
                                    className='single-info-item'
                                    style={{
                                        backgroundImage: `url(${need__3.src})`,
                                    }}>
                                    <h5>
                                        M4 <i>GOAL TRACKING</i>
                                    </h5>
                                    <p>Front Page Introduction</p>
                                </div>
                                <div
                                    className='single-info-item'
                                    style={{
                                        backgroundImage: `url(${need__4.src})`,
                                    }}>
                                    <h5>
                                        M5 <i>TRANSITION</i>{" "}
                                    </h5>
                                    <p>Front Page Introduction</p>
                                </div>
                            </div>
                        </div>

                        <div className='single-wrapper-info white-box'>
                            <h4>Complete your Self-Survey</h4>
                            <p>
                                No Self-Survey to complete at the moment. The
                                Goal Setting Survey will need to be completed by
                                January the 15th. Come back later!
                            </p>
                        </div>
                    </div>
                    <div className='more-info-text-wrapper'>
                        <div className='single-wrapper-info white-box'>
                            <h4>Your Latest Interaction Report </h4>
                            {/* <h6>
                                {state?.enrolmentsResp?.[0]
                                    ?.Life_Cycle_Stage_ELICOS ||
                                    state?.enrolmentsResp?.[0]
                                        ?.Life_Cycle_Stage}
                            </h6> */}
                            <span className='author-wrote'>
                                By{" "}
                                {state?.studentSupportersResp?.[0]?.Vendor_Name}{" "}
                            </span>

                            <p>
                                {
                                    state?.enrolmentsResp?.[0]
                                        ?.Latest_Interaction_Report
                                }
                            </p>
                            {/* <p>
                                Consequat nisl vel pretium lectus quam id.
                                Quisque non tellus orci ac. Sapien eget mi proin
                                sed libero enim sed faucibus turpis. Nisl
                                condimentum id venenatis a condimentum vitae
                                sapien pellentesquehabitant. Maecenas volutpat
                                blandit aliquam etiam erat velit scelerisque in
                                dictum. Sed enim ut sem viverra aliquet eget
                                sit. At volutpat diam ut venenatis tellus in
                                metus vulputate eu. Ut etiam sit ametnisl.
                                Ultrices neque ornare aenean euismod elementum
                                nisi quis. Sed id semper risus in.
                            </p>
                            <p>
                                Egestas integer eget aliquet nibh praesent
                                tristique magna sit. Eu lobortis elementum nibh
                                tellus molestie nunc. Ut etiam sit amet nisl
                                purus. Eu ultrices vitae auctor eu. Aenean
                                euismod elementumnisi quis eleifend quam.
                                Suspendisse in est ante in nibh. Est ullamcorper
                                eget nulla facilisi etiam dignissim diam quis.
                                Augue interdum velit euismod in. Augue eget arcu
                                dictum varius duis at consectetur lorem. Purus
                                sit amet volutpat consequat mauris nunc congue.
                                Facilisis magna etiam tempor orci. Pretium
                                vulputate sapien nec sagittis aliquam. Diam
                                phasellus vestibulum lorem sed risus ultricies
                                tristique. Sed egestas egestas fringilla
                                phasellus faucibus scelerisque eleifend donec
                                pretium
                            </p> */}

                            {/* <Link
                                href={`${state.portalUserResp.User_Type?.toLowerCase()}/contact`}
                                className='btn'>
                                Feedback? Contact Us
                            </Link> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HHW__Content;
