import React, {useState, useCallback, useEffect} from 'react'
import dynamic from 'next/dynamic'
import book from "../../assets/mentors/img/book-2.jpg"
import {Document, Page, pdfjs} from "react-pdf"


import {useKeenSlider} from 'keen-slider/react'

import Image from "next/image";
//className="keen-slider__slide number-slide1"
const PdfSlider = ({img, title, SlideNum, spc, slClass}) =>{

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`
  const [numPages, setNumPages] = useState(null)
  const [pageNumber, setPageNumber] = useState(1)

  const [currentSlide, setCurrentSlide] = useState(0)


  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s){
      setCurrentSlide(s.details().relativeSlide)
    },
    slidesPerView:SlideNum,
    spacing: spc,
    centered: true,
  loop: false,})

    const frameMatch=(data)=>{
      compID = document.getElementById(data)
      compID.style.height = data.contentWindow.document.documentElement.scrollHeight + 'px'
    }

    useEffect(()=>{
      console.log(slider)
      console.log(sliderRef)
    },[])
    return (
        <div className = "none">{/*   className="keen-slider"*/}
           <div className = {slClass} ref={sliderRef}>
           {/** */}
                <div className="keen-slider__slide"><Document file = "/subfolder-workdrive.pdf"><Page size="A3"  pageNumber={pageNumber} onLoadError={console.error}></Page></Document></div>
                <div className="keen-slider__slide"><Document file = "/subfolder-workdrive.pdf"><Page size="A3"  pageNumber={pageNumber} onLoadError={console.error}></Page></Document></div>
                <div className="keen-slider__slide"><Document file = "/subfolder-workdrive.pdf"><Page size="A3"  pageNumber={pageNumber} onLoadError={console.error}></Page></Document></div>
                <div className="keen-slider__slide"><Document file = "/subfolder-workdrive.pdf"><Page size="A3"  pageNumber={pageNumber} onLoadError={console.error}></Page></Document></div>
                <div className="keen-slider__slide"><Document file = "/subfolder-workdrive.pdf"><Page size="A3"  pageNumber={pageNumber} onLoadError={console.error}></Page></Document></div>
                {/*slider && (<div>
                  <ArrowLeft onClick={(e)=>{e.stopPropagation() || slider.prev()}} disabled={currentSlide === 0}/>
                  <ArrowRight onClick={(e)=>{e.stopPropagation() || slider.next()}} disabled={currentSlide === slider.details().size - 1}/>
                </div>)

                */}
                {/*slider && (<div className= "dots">
                  {[...Array(slider.details().size).keys()].map((idx)=>{
                      return(
                        <button
                        key={idx}
                        onClick={()=>{
                          slider.moveToSlideRelative(idx)
                        }}
                        className={"dot" + (currentSlide === idx ?  " active" : "")}/>
                      )
                  })}
                </div>)*/}
          </div>
          
        </div>
        
    )
}

function ArrowLeft(props){
const dis = props.disabled ? "arrow--disabled" : ""
return(
  <svg
  onClick = {props.onClick}
  className = {"keen-arrow keen-arrow--left" + dis}
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
    className = {"keen-arrow keen-arrow--right" + dis}
    xmlns = "http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    >
    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/>
    </svg>
  )
  }

  PdfSlider.defaultProps = {
    slClass: "alt-slider"
  }
export default PdfSlider