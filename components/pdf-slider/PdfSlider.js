import React, {useState, useCallback, useEffect} from 'react'
import dynamic from 'next/dynamic'

const Swiper = dynamic(() =>
  import('swiper/react').then((sw) => sw.Swiper), {ssr: false})
const SwiperSlide= dynamic(() =>
import('swiper/react').then((sw) => sw.SwiperSlide),  {ssr: false})


import Image from "next/image";

const PdfSlider = (props) =>{
   
    return (
        <div>
            <div>
                <h2>Trending</h2>
            </div>
            <Swiper
                spaceBetween={50}
                slidesPerView={3}
                onSlideChange={()=>{console.log('slide change')}}
                onSwiper={(swiper)=>{console.log(swiper)}}>
                <SwiperSlide>Slide 1</SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
            </Swiper>
        </div>
    )
}

export default PdfSlider