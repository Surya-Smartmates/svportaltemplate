import React, {useState, useCallback, useEffect} from 'react'
import dynamic from 'next/dynamic'

import {useKeenSlider} from 'keen-slider/react'
/*const Swiper = dynamic(() =>
  import('swiper/react').then((sw) => sw.Swiper), {ssr: false})
const SwiperSlide = dynamic(() =>
import('swiper/react').then((sw) => sw.SwiperSlide),  {ssr: false})

*/
import Image from "next/image";

const PdfSlider = (props) =>{
   const [sliderRef] = useKeenSlider({loop: true})
    return (
        <div>
           <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">1</div>
                <div className="keen-slider__slide number-slide2">2</div>
                <div className="keen-slider__slide number-slide3">3</div>
                <div className="keen-slider__slide number-slide4">4</div>
                <div className="keen-slider__slide number-slide5">5</div>
                <div className="keen-slider__slide number-slide6">6</div>
    </div>
        </div>
    )
}

export default PdfSlider