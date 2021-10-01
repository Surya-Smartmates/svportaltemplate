import { faCheck, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import banner from "../../../assets/img/banner-3.jpg";
import user from "../../../assets/img/user.jpg";
import zoom from "../../../assets/img/zoom.svg";
import viver from "../../../assets/img/viver.svg";
import messenger from "../../../assets/img/messsenger.svg";
import { faLine } from "@fortawesome/free-brands-svg-icons";
import skype from "../../../assets/img/skype.svg";
import whatsapp from "../../../assets/img/whats-app.svg";
import phone from "../../../assets/img/phone-green.svg";
import laptop from "../../../assets/img/leptop.svg";
import question from "../../../assets/img/question.svg";
import line from "../../../assets/img/line-o.svg";
import Link from "next/link";
import Image from "next/image";
import useTrackedStore from "../../../store/useTrackedStore";

const Parent__Content = () => {
    const state = useTrackedStore();
    return (
        <div className='main-content'>
            <div className='content-wrapper'>
                <div className='row'>
                    <div className='col-lg-8'>
                        <div className='user-content-page-wrapper'>
                            {/* user-iamge-area */}
                            <div className='user-cover-image position-relative'>
                                <Image
                                    width={864}
                                    height={300}
                                    className='cover-phot'
                                    src={banner}
                                    alt=''
                                />
                                <button
                                    type='button'
                                    className='edit-btn-cover'>
                                    <FontAwesomeIcon icon={faPencilAlt} />
                                </button>
                                <div className='profile-img abs-img'>
                                    <Image
                                        width={200}
                                        height={200}
                                        className='profile-img abs-img'
                                        src={user}
                                        alt=''
                                    />
                                </div>
                            </div>

                            <form action className='is-readonly'>
                                <div className='user-content-text-wrapper'>
                                    <h4>
                                        {state?.studentsResp?.[0]?.Full_Name}’s
                                        Parents
                                    </h4>
                                    <div className='user-details-wrapper'>
                                        {/* user-single-details-wrapper */}
                                        <div className='user-single-details'>
                                            <h5>Mum’s Name</h5>
                                            <input
                                                type='text'
                                                defaultValue='Christina Garcia Santos'
                                                disabled
                                            />
                                        </div>

                                        <div className='user-single-details'>
                                            <h5>Dad’s Name </h5>
                                            <input
                                                type='text'
                                                defaultValue='Jerome Santos'
                                                disabled
                                            />
                                        </div>

                                        <div className='user-single-details'>
                                            <h5>From:</h5>
                                            <input
                                                type='text'
                                                defaultValue={`${
                                                    state?.parentsResp?.[0]
                                                        ?.Billing_State || ""
                                                }, ${
                                                    state?.parentsResp?.[0]
                                                        ?.Billing_Country || ""
                                                }`}
                                                disabled
                                            />
                                        </div>
                                        {/* user-single-details-wrapper */}
                                        {/* user-single-details-wrapper */}
                                        <div className='user-single-details'>
                                            <h5>Languages:</h5>
                                            <input
                                                type='text'
                                                defaultValue='Tagalog (native)'
                                                disabled
                                            />
                                        </div>
                                        {/* user-single-details-wrapper */}
                                        <hr />
                                        {/* user-single-details-wrapper */}
                                        <div className='user-single-details'>
                                            <h5>
                                                Assistance for StudyVillage
                                                Meeting
                                            </h5>
                                            <p>
                                                Please complete the form below
                                                to help us organise the meeting
                                                with you, your child and
                                                StudyVillage’s Student
                                                Supporter. Please remember to
                                                indicate your preferred contact
                                                details on your right when
                                                editing your profile. This will
                                                help us facilitate general
                                                communication (messages, phone
                                                calls, email) between you and
                                                StudyVillage or your Agent.{" "}
                                            </p>
                                            {/* ask-question */}
                                            <div className='ask-question'>
                                                <div className='single-question'>
                                                    <p>
                                                        <strong>1. </strong>Do
                                                        you feel comfortable
                                                        with English language
                                                        (talking and interacting
                                                        in English)?
                                                    </p>
                                                    <div className='ask-btns d-flex'>
                                                        <div className='ask-check-area'>
                                                            <input
                                                                type='radio'
                                                                id='ask-radio-1'
                                                                name='ask-radio'
                                                                disabled
                                                            />
                                                            <label htmlFor='ask-radio-1'>
                                                                YES
                                                            </label>
                                                        </div>
                                                        <div className='ask-check-area'>
                                                            <input
                                                                type='radio'
                                                                id='ask-radio-2'
                                                                name='ask-radio'
                                                                disabled
                                                            />
                                                            <label htmlFor='ask-radio-2'>
                                                                NO
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='single-question'>
                                                    <p>
                                                        <strong>2.</strong> Do
                                                        you feel comfortable
                                                        holding the meeting
                                                        using your computer or
                                                        phone (I.E. via Skype or
                                                        Zoom)?{" "}
                                                    </p>
                                                    <div className='ask-btns d-flex'>
                                                        <div className='ask-check-area'>
                                                            <input
                                                                type='radio'
                                                                id='ask-radio-3'
                                                                name='ask-radio-2'
                                                                disabled
                                                            />
                                                            <label htmlFor='ask-radio-3'>
                                                                YES
                                                            </label>
                                                        </div>
                                                        <div className='ask-check-area'>
                                                            <input
                                                                type='radio'
                                                                id='ask-radio-4'
                                                                name='ask-radio-2'
                                                                disabled
                                                            />
                                                            <label htmlFor='ask-radio-4'>
                                                                NO
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='single-question'>
                                                    <p>
                                                        <strong>3.</strong> Do
                                                        you feel comfortable
                                                        holding the meeting
                                                        using your computer or
                                                        phone (I.E. via Skype or
                                                        Zoom)?
                                                    </p>
                                                    <div className='ask-btns d-flex'>
                                                        <div className='ask-check-area'>
                                                            <input
                                                                type='radio'
                                                                id='ask-radio-5'
                                                                name='ask-radio-3'
                                                                disabled
                                                            />
                                                            <label htmlFor='ask-radio-5'>
                                                                YES
                                                            </label>
                                                        </div>
                                                        <div className='ask-check-area'>
                                                            <input
                                                                type='radio'
                                                                id='ask-radio-6'
                                                                name='ask-radio-3'
                                                                disabled
                                                            />
                                                            <label htmlFor='ask-radio-6'>
                                                                NO
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='single-question'>
                                                    <p>
                                                        <strong>4.</strong> If
                                                        you don’t need
                                                        assistance please
                                                        indicate below your
                                                        preferrend communication
                                                        medium for the meeting.
                                                    </p>
                                                    <div className='communication-way'>
                                                        <div className='message-chek-area d-flex flex-wrap align-items-center'>
                                                            {/* single-check-area */}
                                                            <div className='single-check'>
                                                                <input
                                                                    type='checkbox'
                                                                    id='check-6'
                                                                    disabled
                                                                />
                                                                <label htmlFor='check-6'>
                                                                    <div className='social-icon'>
                                                                        <Image
                                                                            width={
                                                                                150
                                                                            }
                                                                            height={
                                                                                150
                                                                            }
                                                                            src={
                                                                                zoom
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <p>Zoom</p>
                                                                    <span>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                        />
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* single-check-area */}
                                                            {/* single-check-area */}
                                                            <div className='single-check'>
                                                                <input
                                                                    type='checkbox'
                                                                    id='check-7'
                                                                    disabled
                                                                />
                                                                <label htmlFor='check-7'>
                                                                    <div className='social-icon'>
                                                                        <Image
                                                                            width={
                                                                                150
                                                                            }
                                                                            height={
                                                                                150
                                                                            }
                                                                            src={
                                                                                viver
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <p>Viber</p>
                                                                    <span>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                        />
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* single-check-area */}
                                                            {/* single-check-area */}
                                                            <div className='single-check'>
                                                                <input
                                                                    type='checkbox'
                                                                    id='check-8'
                                                                    disabled
                                                                />
                                                                <label htmlFor='check-8'>
                                                                    <div className='social-icon'>
                                                                        <Image
                                                                            width={
                                                                                150
                                                                            }
                                                                            height={
                                                                                150
                                                                            }
                                                                            src={
                                                                                messenger
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <p>
                                                                        Voov(PRC)
                                                                    </p>
                                                                    <span>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                        />
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* single-check-area */}
                                                            {/* single-check-area */}
                                                            <div className='single-check'>
                                                                <input
                                                                    type='checkbox'
                                                                    id='check-9'
                                                                    disabled
                                                                />
                                                                <label htmlFor='check-9'>
                                                                    <div className='social-icon'>
                                                                        <Image
                                                                            width={
                                                                                150
                                                                            }
                                                                            height={
                                                                                150
                                                                            }
                                                                            src={
                                                                                line
                                                                            }
                                                                            alt='line-o'
                                                                        />
                                                                    </div>
                                                                    <p>Line</p>
                                                                    <span>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                        />
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* single-check-area */}
                                                            {/* single-check-area */}
                                                            <div className='single-check'>
                                                                <input
                                                                    type='checkbox'
                                                                    id='check-10'
                                                                    disabled
                                                                />
                                                                <label htmlFor='check-10'>
                                                                    <div className='social-icon'>
                                                                        <Image
                                                                            width={
                                                                                150
                                                                            }
                                                                            height={
                                                                                150
                                                                            }
                                                                            src={
                                                                                skype
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <p>Skype</p>
                                                                    <span>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                        />
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* single-check-area */}
                                                            {/* single-check-area */}
                                                            <div className='single-check'>
                                                                <input
                                                                    type='checkbox'
                                                                    id='check-11'
                                                                    disabled
                                                                />
                                                                <label htmlFor='check-11'>
                                                                    <div className='social-icon'>
                                                                        <Image
                                                                            width={
                                                                                150
                                                                            }
                                                                            height={
                                                                                150
                                                                            }
                                                                            src={
                                                                                zoom
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <p>
                                                                        Google
                                                                        Meeting
                                                                    </p>
                                                                    <span>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                        />
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* single-check-area */}
                                                            {/* single-check-area */}
                                                            <div className='single-check'>
                                                                <input
                                                                    type='checkbox'
                                                                    id='check-12'
                                                                    disabled
                                                                />
                                                                <label htmlFor='check-12'>
                                                                    <div className='social-icon'>
                                                                        <Image
                                                                            width={
                                                                                150
                                                                            }
                                                                            height={
                                                                                150
                                                                            }
                                                                            src={
                                                                                messenger
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <p>
                                                                        FB
                                                                        Messnger
                                                                    </p>
                                                                    <span>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                        />
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* single-check-area */}
                                                            {/* single-check-area */}
                                                            <div className='single-check'>
                                                                <input
                                                                    type='checkbox'
                                                                    id='check-13'
                                                                    disabled
                                                                />
                                                                <label htmlFor='check-13'>
                                                                    <div className='social-icon'>
                                                                        <Image
                                                                            width={
                                                                                150
                                                                            }
                                                                            height={
                                                                                150
                                                                            }
                                                                            src={
                                                                                whatsapp
                                                                            }
                                                                            alt=''
                                                                        />
                                                                    </div>
                                                                    <p>
                                                                        WhatsApp
                                                                    </p>
                                                                    <span>
                                                                        <FontAwesomeIcon
                                                                            icon={
                                                                                faCheck
                                                                            }
                                                                        />
                                                                    </span>
                                                                </label>
                                                            </div>
                                                            {/* single-check-area */}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* ask-question */}
                                            <div className='edit-btn-area mt-4 mt-lg-5'>
                                                <a
                                                    href='javascript:void(0)'
                                                    className='btn btn-edit js-edit'>
                                                    Edit Your Profile Info
                                                </a>
                                                <a
                                                    href='javascript:void(0)'
                                                    className='btn btn-save js-save'>
                                                    Save Your Profile Info
                                                </a>
                                            </div>
                                        </div>
                                        {/* user-single-details-wrapper */}
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className='col-lg-4'>
                        <div className='user-page-sidebar'>
                            <div className='single-sidebar contact-widget'>
                                <form action className='is-readonly'>
                                    <h4>Christina Contact Details</h4>
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
                                                <span>
                                                    Mobile and WhatsApp:
                                                </span>
                                                <input
                                                    type='text'
                                                    defaultValue='+61 0459123456'
                                                    disabled
                                                />
                                                <a href='tel:610459123456' />
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
                                                <input
                                                    type='text'
                                                    defaultValue='chrisantos@gmail.com'
                                                    disabled
                                                />
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
                                                <input
                                                    type='text'
                                                    defaultValue='lanawilmel81'
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='edit-btn-area mt-4 mt-lg-4'>
                                        <a
                                            href='javascript:void(0)'
                                            className='btn btn-edit js-edit'>
                                            Edit Your Contact Details
                                        </a>
                                        <a
                                            href='javascript:void(0)'
                                            className='btn btn-save js-save'>
                                            Save Your Contact Details
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div className='single-sidebar contact-widget'>
                                <h4>Jerome Contact Details</h4>
                                <form action className='is-readonly'>
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
                                                <span>
                                                    Mobile and WhatsApp:
                                                </span>
                                                <input
                                                    type='text'
                                                    defaultValue='+49 0455676767'
                                                    disabled
                                                />
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
                                                <span>Email (preferred):</span>
                                                <input
                                                    type='text'
                                                    defaultValue='jayantos@gmail.com'
                                                    disabled
                                                />
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
                                                <span>Skype:</span>
                                                <input
                                                    type='text'
                                                    defaultValue='SantosfamilyAUS21'
                                                    disabled
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className='edit-btn-area mt-4 mt-lg-4'>
                                        <a
                                            href='javascript:void(0)'
                                            className='btn btn-edit js-edit'>
                                            Edit Your Contact Details
                                        </a>
                                        <a
                                            href='javascript:void(0)'
                                            className='btn btn-save js-save'>
                                            Save Your Contact Details
                                        </a>
                                    </div>
                                </form>
                            </div>
                            <div className='single-sidebar feedback-widget text-center'>
                                <div className='feedback-widget-content'>
                                    <div className='feedback-wi-icon'>
                                        <Image
                                            width={150}
                                            height={150}
                                            src={question}
                                            alt=''
                                        />
                                    </div>
                                    <div className='feedbac-widget-text'>
                                        <h4>Need Help?</h4>
                                        <p>
                                            You can contact your Agent or
                                            StudyVillage directly. Click below
                                            for all contact details
                                        </p>
                                        <Link
                                            href='/contact'
                                            className='btn feed-btn'>
                                            Contact Us
                                        </Link>
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

export default Parent__Content;
