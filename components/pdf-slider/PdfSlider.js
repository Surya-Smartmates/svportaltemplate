import React, {useState, useCallback, useEffect} from 'react'
import dynamic from 'next/dynamic'
import book from "../../assets/mentors/img/book-2.jpg"

import {useKeenSlider} from 'keen-slider/react'
/*const Swiper = dynamic(() =>
  import('swiper/react').then((sw) => sw.Swiper), {ssr: false})
const SwiperSlide = dynamic(() =>
import('swiper/react').then((sw) => sw.SwiperSlide),  {ssr: false})

*/
import Image from "next/image";
//className="keen-slider__slide number-slide1"
const PdfSlider = (props) =>{
   const [sliderRef] = useKeenSlider({
    slidesPerView: 3,
    spacing: 10,
    centered: true,
    loop: false,})
    return (
        <div className = "slider-container">
           <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide ks-slider"><Image width={100} height={100} src={book} alt=''/></div>
                <div className="keen-slider__slide"><Image width={100} height={100} src={book} alt=''/></div>
                <div className="keen-slider__slide"><Image width={100} height={100} src={book} alt=''/></div>
                <div className="keen-slider__slide"><Image width={100} height={100} src={book} alt=''/></div>
                <div className="keen-slider__slide"><Image width={100} height={100} src={book} alt=''/></div>
                <div className="keen-slider__slide"><Image width={100} height={100} src={book} alt=''/></div>
    </div>
        </div>
    )
}

export default PdfSlider