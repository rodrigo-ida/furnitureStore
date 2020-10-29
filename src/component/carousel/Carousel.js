import React, {useEffect, useRef, useState} from 'react'

import './Carousel.scss'
import CarouselItem from './carouselItem/CarouselItem'

export default props =>{
    
    
    const carouselContent = useRef(null)
    let CAROUSEL_TOUCH_START;
    let CAROUSEL_TOUCH_END;
    let [CAROUSEL_X_POSITION, setCAROUSEL_X_POSITION] = useState(0)
    // const CAROUSEL_TIMER_VALUE = 4000
    let CAROUSEL_TIMER_ID
        
    // useEffect(()=> carouselSelfExecution(CAROUSEL_TIMER_VALUE), [])
    // const carouselSelfExecution = timer => CAROUSEL_TIMER_ID = setInterval(carouselSlide, timer)
    // const carouselSlide = () => {

    //     // carouselslideCounter(forward)
    //     const carouselWidth = carouselContent.current.clientWidth / 3
        
    //     const carouselSlideCounter = -carouselWidth * CAROUSEL_X_POSITION
    //     carouselContent.current.style.left = carouselSlideCounter + 'px'
    // }
     useEffect(()=> {

        const carouselSlide = ()=>{
            const carouselWidth = carouselContent.current.clientWidth / 3
            const carouselSlideCounter = -carouselWidth * CAROUSEL_X_POSITION
            carouselContent.current.style.left = carouselSlideCounter + 'px'
        }
        carouselSlide()
    }, [CAROUSEL_X_POSITION])


    const carouselslideCounter = (forward = true) => {
        
        if(forward){
            setCAROUSEL_X_POSITION(prevState => {
                if(prevState === 2){
                    return prevState = 0
                }else{
                    return prevState = prevState + 1
                }
            })
        }else{
            setCAROUSEL_X_POSITION(prevState => {
                if(prevState === 0){
                    return prevState = 2
                }else{
                    return prevState = prevState - 1
                }
            })
        }

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
        
        // carouselSlide(CAROUSEL_TOUCH_END)
        carouselslideCounter(CAROUSEL_TOUCH_END)
        // carouselSelfExecution(CAROUSEL_TIMER_VALUE)
    
    }






    return(
        <div className="carousel">
            <div className="carousel__content" 
                onTouchStart={carouselTouchStartHandler}
                onTouchMove={carouselTouchMoveHandler}
                onTouchEnd={carouselTouchEndHandler}
                ref={carouselContent}
                >
                <CarouselItem position="first" 
                category="NOVIDADES" 
                title="Novos Portateis"
                description="Bluetooth Speaker"
                carouselState={CAROUSEL_X_POSITION}
                textContainer="first-text-container"/>

                <CarouselItem position="second"
                category="PROMOÇÕES DA BLACK FRIDAY" 
                title="Promoções incríveis"
                description="até 30%"
                carouselState={CAROUSEL_X_POSITION}
                textContainer="second-text-container"/>

                <CarouselItem position="third"
                category="PARA SUA SALA" 
                title="Coleção Outono"
                description="Móveis sob Medida"
                carouselState={CAROUSEL_X_POSITION}
                textContainer="second-text-container"/>
            </div>
        </div>
    )
}