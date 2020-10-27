import React, {useEffect, useRef} from 'react'

import './Carousel.scss'
import CarouselItem from './carouselItem/CarouselItem'

export default props =>{
    
    
    const carouselContent = useRef(null)
    let CAROUSEL_TOUCH_START;
    let CAROUSEL_TOUCH_END;
    let CAROUSEL_X_POSITION = 0
    const CAROUSEL_TIMER_VALUE = 4000
        
    useEffect(()=> carouselSelfExecution(CAROUSEL_TIMER_VALUE), [])

    let CAROUSEL_TIMER_ID
    const carouselSelfExecution = timer => CAROUSEL_TIMER_ID = setInterval(carouselSlide, timer)

    const carouselslideCounter = (forward = true) => {
        
        if(forward){
            if(CAROUSEL_X_POSITION === 2){
                CAROUSEL_X_POSITION = 0               
            }else{
                CAROUSEL_X_POSITION++
            }
        }else{
            if(CAROUSEL_X_POSITION === 0){
                CAROUSEL_X_POSITION = 2
            }else{
                CAROUSEL_X_POSITION--
            }
        }

    }

    const carouselSlide = (forward) => {

        carouselslideCounter(forward)
        

        const carouselWidth = carouselContent.current.clientWidth / 3
        
        const carouselSlideCounter = -carouselWidth * CAROUSEL_X_POSITION
        carouselContent.current.style.left = carouselSlideCounter + 'px'
    }

    const carouselTouchStartHandler = (event) => {
        CAROUSEL_TOUCH_START = event.changedTouches[0].clientX

        carouselContent.current.style.transition = 'left 0s'
        clearInterval(CAROUSEL_TIMER_ID)

    }

    const carouselTouchMoveHandler = event => {

        const moviment = event.changedTouches[0].clientX
        const movimentValue = moviment - CAROUSEL_TOUCH_START

        const carouselWidth = carouselContent.current.clientWidth / 3
        const carouselSlideCounter = -carouselWidth * CAROUSEL_X_POSITION
        const photoposition = carouselSlideCounter + movimentValue

        carouselContent.current.style.left = photoposition + 'px'


        if(movimentValue < 0){
            CAROUSEL_TOUCH_END = true
        }
        if(movimentValue > 0){
            CAROUSEL_TOUCH_END = false
        }
    }


    const carouselTouchEndHandler = event => {

        carouselContent.current.style.transition = 'left .2s'
        
        carouselSlide(CAROUSEL_TOUCH_END)
        carouselSelfExecution(CAROUSEL_TIMER_VALUE)
        

    }



    return(
        <div className="carousel">
            <div className="carousel__content" 
                onTouchStart={carouselTouchStartHandler}
                onTouchMove={carouselTouchMoveHandler}
                onTouchEnd={carouselTouchEndHandler}
                ref={carouselContent}
                >
                <CarouselItem position="first"/>
                <CarouselItem position="second"/>
                <CarouselItem position="third"/>
            </div>
        </div>
    )
}