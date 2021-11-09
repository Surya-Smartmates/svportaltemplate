import React, {useState, useCallback, useEffect} from 'react'
import dynamic from 'next/dynamic'
import book from "../../assets/mentors/img/book-2.jpg"
import {Document, Page} from "react-pdf"


import {useKeenSlider} from 'keen-slider/react'
/*const Swiper = dynamic(() =>
  import('swiper/react').then((sw) => sw.Swiper), {ssr: false})
const SwiperSlide = dynamic(() =>
import('swiper/react').then((sw) => sw.SwiperSlide),  {ssr: false})

*/
import Image from "next/image";
//className="keen-slider__slide number-slide1"
const PdfSlider = ({img, title}) =>{

  const [currentSlide, setCurrentSlide] = useState(0)


  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s){
      setCurrentSlide(s.details().relativeSlide)
    }
    /*slidesPerView: 3,
    spacing: 10,
    centered: true,
  loop: false,*/})

    const frameMatch=(data)=>{
      compID = document.getElementById(data)
      compID.style.height = data.contentWindow.document.documentElement.scrollHeight + 'px'
    }
    return (
        <div className = "slider-container">
           <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide ks-slider"><iframe scrolling="no" frameborder="0" src="/PDFForm(2).pdf" id = "data1"></iframe>TEST 1</div>
                <div className="keen-slider__slide"><iframe scrolling="no" frameborder="0" src="/PDFForm(2).pdf" id = "data2"></iframe>TEST 2</div>
                <div className="keen-slider__slide"><iframe scrolling="no" frameborder="0" src="/PDFForm(2).pdf" id = "data3"></iframe>TEST 3</div>
                <div className="keen-slider__slide"><iframe scrolling="no" frameborder="0" src="/PDFForm(2).pdf" id = "data4"></iframe>TEST 4</div>
                <div className="keen-slider__slide"><iframe scrolling="no" frameborder="0" src="/PDFForm(2).pdf" id = "data5"></iframe>TEST 5</div>
                <div className= "dots">
                  {[...Array(slider.details().size).keys()].map((idx)=>{
                      return(
                        <button
                        key={idx}
                        onClick={()=>{
                          slider.moveToSlideRelative(idx)
                        }}
                        className={"dot" + (currentSlide === idx ?  " active" : "")}/>

                        
                      )
                  })

                  }
                </div>
          </div>
          {slider && (
            <>
            <ArrowLeft
            onClick = {(e)=>{e.stopPropagation() || slider.prev()}}
            disabled={currentSlide === 0}
            />

            <ArrowRight
            onClick = {(e)=>{e.stopPropagation() || slider.prev()}}
            disabled={currentSlide === 0}
            />
            </>
          )}
        </div>
        
    )
}

function ArrowLeft(props){
const dis = props.disabled ? "arrow--disabled" : ""
return(
  <svg
  onClick = {props.onClick}
  className = {"arrow arrow--left" + dis}
  xmlns = "http://www.w3.org/2000/svg"
  viewBox="0 0 24 24"
  >
  <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
  </svg>
)
}

function ArrowRight(props){
  const dis = props.disabled ? "arrow--disabled" : ""
  return(
    <svg
    onClick = {props.onClick}
    className = {"arrow arrow--right" + dis}
    xmlns = "http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    >
    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
    </svg>
  )
  }
export default PdfSlider