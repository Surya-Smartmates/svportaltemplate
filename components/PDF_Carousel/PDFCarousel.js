import React , {useState, useEffect} from 'react'
import { CarouselData } from './CarouselData'
import {FaArrowAltCircleRight as RightArrow, FaArrowAltCircleLeft as LeftArrow} from 'react-icons/fa'
import Image from 'next/image'
//import Slider from "@madzadev/image-slider";


const PDFCarousel = (slides) =>{
    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = (data) =>{
        setCurrent(current === length - 1 ? 0 : current + 1)
        console.log(data.file)
    }

    const prevSlide = () =>{
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return(
        <div>
            <h2>STUDENT REPORT</h2>
            
        </div>
)
}
/*<section className = "slider"><Slider imageList = {CarouselData} width = {1000} height = {300}/>
                <LeftArrow className = "left-arrow"  onClick = {()=>{prevSlide()}}/><RightArrow  onClick = {()=>{nextSlide()}}className = "right-arrow"/>
                {
                    CarouselData.map ((slide, index)=>{
                        return(
                            <div className = { index === current ? "image-view active" : "image-view"} key = {index}>
                            {index === current && (
                                <Image src = {slide.file}
                            width = {500}
                            height = {500}/>
                            )}
                            </div>
                        )
                        
                    })
                }
                
                
            </section> */
export default PDFCarousel