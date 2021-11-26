import React, {useEffect} from "react";
import banner from "../../../assets/img/banner-2.jpg";
import profile from "../../../assets/img/profile-2.jpg";
import gray from "../../../assets/img/gray-file.svg";
import pdf from "../../../assets/img/pdf.svg";
import doc from "../../../assets/img/doc.svg";
import whatsapp from "../../../assets/img/whats-app.svg";
import wechat from "../../../assets/img/we-chat.svg";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import messanger from "../../../assets/img/messsenger.svg";
import instagram from "../../../assets/img/instagram.svg";
import skype from "../../../assets/img/skype.svg";
import envelop from "../../../assets/img/envelop.svg";
import zoom from "../../../assets/img/zoom.svg";
import viver from "../../../assets/img/viver.svg";
import voov from "../../../assets/img/voov.svg";
import mobile from "../../../assets/img/mobile-2.svg";
import phone from "../../../assets/img/phone-green.svg";
import language from "../../../assets/img/language.jpg";
import arts from "../../../assets/img/arts.jpg";
import architecture from "../../../assets/img/aec.jpg";
import laptop from "../../../assets/img/leptop.svg";
import photo from "../../../assets/img/photo.jpg";
import swimming from "../../../assets/img/swiming.jpg";
import line from "../../../assets/img/line-o.svg";
import Image from "next/image";
import useTrackedStore from "../../../store/useTrackedStore";

const Student__Content = ({stuDetails}) => {
    const state = useTrackedStore();

    useEffect(()=>{
        console.log(stuDetails)
    })
    return (
        <div className='main-content'>
            <div className='content-wrapper'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='user-content-page-wrapper'>
                            {/* <!-- user-iamge-area --> */}
                            <div className='user-cover-image position-relative'>
                                <Image
                                    width={864}
                                    height={300}
                                    className='cover-phot'
                                    layout='responsive'
                                    src={banner}
                                    alt=''
                                />
                                <div className='profile-img abs-img'>
                                    <Image
                                        width={200}
                                        height={200}
                                        className='profile-img abs-img'
                                        src={profile}
                                        alt=''
                                    />
                                </div>
                            </div>
                            {/* <!-- user-iamge-area --> */}

                            <div className='user-content-text-wrapper'>
                                <h4>{stuDetails?.[0]?.Full_Name}</h4>
                                <span>
                                    {`Studying a ${stuDetails?.[0]?.Award_type} at ${stuDetails?.[0]?.Institution}, ${stuDetails?.[0]?.Campus}, ${stuDetails?.[0]?.Country_Region}`}
                                </span>
                                <div className='user-details-wrapper'>
                                    {/* <!-- user-single-details-wrapper --> */}
                                    <div className='user-single-details'>
                                        <h5>From:</h5>
                                        <p>{`${stuDetails?.[0]?.Mailing_State}, ${stuDetails?.[0]?.Mailing_Country}`}</p>
                                    </div>
                                    {/* <!-- user-single-details-wrapper -->

                                  <!-- user-single-details-wrapper --> */}
                                    <div className='user-single-details'>
                                        <h5>Languages:</h5>
                                        <p>
                                            {
                                                stuDetails?.[0]
                                                    ?.Languages
                                            }
                                        </p>
                                    </div>
                                    {/* <!-- user-single-details-wrapper -->

                                  <!-- user-single-details-wrapper --> */}
                                    <div className='user-single-details'>
                                        <h5>Previous Education:</h5>
                                        <p>
                                            {
                                                stuDetails?.[0]
                                                    ?.Previous_Education
                                            }
                                        </p>
                                    </div>
                                    {/* <!-- user-single-details-wrapper --> */}
                                    <hr />
                                    {/* <!-- user-single-details-wrapper --> */}
                                    <div className='user-single-details'>
                                        <h5>About myself</h5>
                                        <p>
                                            {
                                                stuDetails?.[0]
                                                    ?.About_myself
                                            }
                                        </p>
                                    </div>
                                    {/* <!-- user-single-details-wrapper --> */}
                                    <hr />

                                    {/* <!-- user-single-details-wrapper --> */}
                                    <div className='user-single-details'>
                                        <h5>{stuDetails?.[0]?.Full_Name}’s Documents</h5>
                                        <p>
                                            These are documents Agelica uploaded
                                            about herself and her studies
                                        </p>

                                        <div className='document-wrapper'>
                                            <div className='single-document d-flex align-items-center'>
                                                <div className='doc-name d-flex align-items-center'>
                                                    <Image
                                                        width={150}
                                                        height={150}
                                                        src={gray}
                                                        alt=''
                                                    />
                                                    <p>Resume</p>
                                                </div>

                                                <div className='download-doc d-flex align-items-center'>
                                                    <div className='file-icon'>
                                                        <Image
                                                            width={150}
                                                            height={150}
                                                            src={pdf}
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div className='file-text'>
                                                        <p>
                                                            {stuDetails?.[0]?.Full_Name}'s Resume 08 2020
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='single-document d-flex align-items-center'>
                                                <div className='doc-name d-flex align-items-center'>
                                                    <Image
                                                        width={150}
                                                        height={150}
                                                        src={gray}
                                                        alt=''
                                                    />
                                                    <p>Statement of Purpose</p>
                                                </div>

                                                <div className='download-doc d-flex align-items-center'>
                                                    <div className='file-icon'>
                                                        <Image
                                                            width={150}
                                                            height={150}
                                                            src={pdf}
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div className='file-text'>
                                                        <p>SOP_Deakin</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='single-document d-flex align-items-center'>
                                                <div className='doc-name d-flex align-items-center'>
                                                    <Image
                                                        width={150}
                                                        height={150}
                                                        src={gray}
                                                        alt=''
                                                    />
                                                    <p>Portfolio</p>
                                                </div>

                                                <div className='download-doc d-flex align-items-center'>
                                                    <div className='file-icon'>
                                                        <Image
                                                            width={150}
                                                            height={150}
                                                            src={doc}
                                                            alt=''
                                                        />
                                                    </div>
                                                    <div className='file-text'>
                                                        <p>
                                                            Articles_Portfolio
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- user-single-details-wrapper -->

                                  <!-- user-single-details-wrapper --> */}
                                    <div className='user-single-details pt-4 pt-lg-4'>
                                        <h5>
                                            {stuDetails?.[0]?.Full_Name}'s ' Preferred Communication
                                            Mediums
                                        </h5>

                                        <div className='communication-way  pt-3 pt-lg-4'>
                                            <h6>Messaging or Texting</h6>

                                            <div className='message-chek-area d-flex flex-wrap align-items-center'>
                                                {/* <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-1'
                                                    />
                                                    <label htmlFor='check-1'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={whatsapp}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>WhatsApp</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-2'
                                                    />
                                                    <label htmlFor='check-2'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={wechat}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>WeChat(PRC)</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-3'
                                                    />
                                                    <label htmlFor='check-3'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={messanger}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>FB Messenger</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-4'
                                                    />
                                                    <label htmlFor='check-4'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={instagram}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>Instagram DB</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-5'
                                                    />
                                                    <label htmlFor='check-5'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={envelop}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>Mail</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area --> */}
                                            </div>
                                        </div>

                                        <div className='communication-way  mt-3 mt-lg-4'>
                                            <h6>Video Calling</h6>

                                            <div className='message-chek-area d-flex flex-wrap align-items-center'>
                                                {/* <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-6'
                                                    />
                                                    <label htmlFor='check-6'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={zoom}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>Zoom</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-7'
                                                    />
                                                    <label htmlFor='check-7'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={viver}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>Viber</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-8'
                                                    />
                                                    <label htmlFor='check-8'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={voov}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>Voov(PRC)</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-9'
                                                    />
                                                    <label htmlFor='check-9'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={line}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>Line</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-10'
                                                    />
                                                    <label htmlFor='check-10'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={skype}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>Skype</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-11'
                                                    />
                                                    <label htmlFor='check-11'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={zoom}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>Google Meeting</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-12'
                                                    />
                                                    <label htmlFor='check-12'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={messanger}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>FB Messnger</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-13'
                                                    />
                                                    <label htmlFor='check-13'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={whatsapp}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>WhatsApp</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area --> */}
                                            </div>
                                        </div>

                                        <div className='communication-way  mt-3 mt-lg-4'>
                                            <h6>Phone Call</h6>

                                            <div className='message-chek-area d-flex flex-wrap align-items-center'>
                                                {/* <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-14'
                                                    />
                                                    <label htmlFor='check-14'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={mobile}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>Mobile</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-15'
                                                    />
                                                    <label htmlFor='check-15'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={whatsapp}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>WhatsApp</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area -->

                                              <!-- single-check-area --> */}
                                                <div className='single-check'>
                                                    <input
                                                        type='checkbox'
                                                        id='check-16'
                                                    />
                                                    <label htmlFor='check-16'>
                                                        <div className='social-icon'>
                                                            <Image
                                                                width={150}
                                                                height={150}
                                                                src={messanger}
                                                                alt=''
                                                            />
                                                        </div>
                                                        <p>FB Messenger</p>
                                                        <span>
                                                            <FontAwesomeIcon
                                                                icons={faCheck}
                                                            />
                                                        </span>
                                                    </label>
                                                </div>
                                                {/* <!-- single-check-area --> */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- user-single-details-wrapper --> */}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-4'>
                        <div className='user-page-sidebar'>
                            <div className='single-sidebar contact-widget'>
                                <h4>
                                    {stuDetails?.[0]?.Full_Name}’s
                                    Contact Details
                                </h4>
                                <div className='contact-items'>
                                    <div className='single-contact-item d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={phone}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <span>Mobile and WhatsApp:</span>
                                            <a
                                                href={`tel:${state?.studentsResp?.[0]?.Mobile}`}>
                                                {
                                                    stuDetails?.[0]
                                                        ?.Mobile
                                                }
                                            </a>
                                        </div>
                                    </div>

                                    <div className='single-contact-item d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={laptop}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <span>Email:</span>
                                            <a
                                                href={`mailto:${state?.studentsResp?.[0]?.Email}`}>
                                                {
                                                    stuDetails?.[0]
                                                        ?.Email
                                                }
                                            </a>
                                        </div>
                                    </div>

                                    <div className='single-contact-item d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={messanger}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <span>Messenger (preferred):</span>
                                            <a href=''>
                                                {
                                                    stuDetails?.[0]
                                                        ?.Messenger
                                                }
                                            </a>
                                        </div>
                                    </div>

                                    <div className='single-contact-item d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={skype}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <span>Skyper:</span>
                                            <a href=''>
                                                {
                                                    stuDetails?.[0]
                                                        ?.Skype
                                                }
                                            </a>
                                        </div>
                                    </div>

                                    <div className='single-contact-item d-flex align-items-center'>
                                        <div className='contact-icon'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={instagram}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <span>Instagram:</span>
                                            <a href=''>
                                                {
                                                    stuDetails?.[0]
                                                        ?.Instagram
                                                }
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='single-sidebar interest-widget'>
                                <h4>
                                    {stuDetails?.[0]?.Full_Name}’s
                                    Interests
                                </h4>
                                <div className='interest-items'>
                                    <div className='single-inderest-item d-flex align-items-center'>
                                        <div className='interest-img'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={language}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <a href=''>Languages</a>
                                        </div>
                                    </div>

                                    <div className='single-inderest-item d-flex align-items-center'>
                                        <div className='interest-img'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={arts}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <a href=''>Arts</a>
                                        </div>
                                    </div>

                                    <div className='single-inderest-item d-flex align-items-center'>
                                        <div className='interest-img'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={architecture}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <a href=''>Architecture</a>
                                        </div>
                                    </div>

                                    <div className='single-inderest-item d-flex align-items-center'>
                                        <div className='interest-img'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={photo}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <a href=''>Photography</a>
                                        </div>
                                    </div>

                                    <div className='single-inderest-item d-flex align-items-center'>
                                        <div className='interest-img'>
                                            <Image
                                                width={150}
                                                height={150}
                                                src={swimming}
                                                alt=''
                                            />
                                        </div>
                                        <div className='contact-id'>
                                            <a href=''>Sports</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Student__Content;
