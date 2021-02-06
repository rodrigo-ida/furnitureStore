import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'


import './Carousel.scss'
import CarouselItem from './carouselItem/CarouselItem'

export default props => {


    // const carouselContent = useRef(null)
    // let CAROUSEL_TOUCH_START;
    // let CAROUSEL_TOUCH_END;
    // let [CAROUSEL_X_POSITION, setCAROUSEL_X_POSITION] = useState(0)
    // const CAROUSEL_TIMER_VALUE = 4000
    // let CAROUSEL_TIMER_ID
    // let MOUSE_MOVIMENT_ACTIVATOR = false


    // useEffect(()=> carouselSelfExecution(CAROUSEL_TIMER_VALUE), [])
    // const carouselSelfExecution = timer => CAROUSEL_TIMER_ID = setInterval(carouselSlide, timer)
    // const carouselSlide = () => {

    //     // carouselslideCounter(forward)
    //     const carouselWidth = carouselContent.current.clientWidth / 3

    //     const carouselSlideCounter = -carouselWidth * CAROUSEL_X_POSITION
    //     carouselContent.current.style.left = carouselSlideCounter + 'px'
    // }
    //  useEffect(()=> {

    //     const carouselSlide = ()=>{
    //         const carouselWidth = carouselContent.current.clientWidth / 3
    //         const carouselSlideCounter = -carouselWidth * CAROUSEL_X_POSITION
    //         carouselContent.current.style.left = carouselSlideCounter + 'px'
    //     }
    //     carouselSlide()
    // }, [CAROUSEL_X_POSITION])


    // const carouselslideCounter = (forward = true) => {

    //     if(forward){
    //         setCAROUSEL_X_POSITION(prevState => {
    //             if(prevState === 2){
    //                 return prevState = 0
    //             }else{
    //                 return prevState = prevState + 1
    //             }
    //         })
    //     }else{
    //         setCAROUSEL_X_POSITION(prevState => {
    //             if(prevState === 0){
    //                 return prevState = 2
    //             }else{
    //                 return prevState = prevState - 1
    //             }
    //         })
    //     }

    // }



    // const carouselTouchStartHandler = (event) => {
    //     CAROUSEL_TOUCH_START = event.changedTouches[0].clientX

    //     carouselContent.current.style.transition = 'left 0s'
    //     clearInterval(CAROUSEL_TIMER_ID)

    // }

    // const carouselTouchMoveHandler = event => {

    //     const moviment = event.changedTouches[0].clientX
    //     const movimentValue = moviment - CAROUSEL_TOUCH_START

    //     const carouselWidth = carouselContent.current.clientWidth / 3
    //     const carouselSlideCounter = -carouselWidth * CAROUSEL_X_POSITION
    //     const photoposition = carouselSlideCounter + movimentValue

    //     carouselContent.current.style.left = photoposition + 'px'


    //     if(movimentValue < 0){
    //         CAROUSEL_TOUCH_END = true
    //     }
    //     if(movimentValue > 0){
    //         CAROUSEL_TOUCH_END = false
    //     }
    // }

    // const carouselTouchEndHandler = event => {

    //     carouselContent.current.style.transition = 'left .2s'

    //     // carouselSlide(CAROUSEL_TOUCH_END)
    //     carouselslideCounter(CAROUSEL_TOUCH_END)
    //     // carouselSelfExecution(CAROUSEL_TIMER_VALUE)

    // }


    //     const carouselClickStartHandler = event =>{

    //         console.log(event.button);
    //         if(event.button === 2){ return;}
    //             CAROUSEL_TOUCH_START = event.clientX
    //             carouselContent.current.style.transition = 'left 0s'
    //             clearInterval(CAROUSEL_TIMER_ID)

    //     }



    //     const carouselClickMoveHandler = event =>{

    //         if(CAROUSEL_TOUCH_START){

    //             MOUSE_MOVIMENT_ACTIVATOR = true
    //             const moviment = event.clientX
    //             const movimentValue = moviment - CAROUSEL_TOUCH_START

    //             const carouselWidth = carouselContent.current.clientWidth / 3
    //             const carouselSlideCounter = -carouselWidth * CAROUSEL_X_POSITION
    //             const photoposition = carouselSlideCounter + movimentValue

    //             carouselContent.current.style.left = photoposition + 'px'


    //             if(movimentValue < 0){
    //                 CAROUSEL_TOUCH_END = true
    //             }
    //             if(movimentValue > 0){
    //                 CAROUSEL_TOUCH_END = false
    //             }


    //         }
    //     }

    //     const carouselClickUpHandler = event => {

    //         if(MOUSE_MOVIMENT_ACTIVATOR === true && !!CAROUSEL_TOUCH_START === true){

    //             carouselContent.current.style.transition = 'left .2s'

    //             // carouselSlide(CAROUSEL_TOUCH_END)
    //             carouselslideCounter(CAROUSEL_TOUCH_END)
    //             // carouselSelfExecution(CAROUSEL_TIMER_VALUE)
    //             MOUSE_MOVIMENT_ACTIVATOR = false
    //             CAROUSEL_TOUCH_START = false
    //         }
    //         MOUSE_MOVIMENT_ACTIVATOR = false
    //         CAROUSEL_TOUCH_START = false

    // }

    const [carouselPosition, setCarouselPosition] = useState(1)
    const carouselTimer = 2000

    const intervalId = useRef(null)


    useEffect(() => {

        intervalId.current = setInterval(() => setCarouselPosition(prev => {
            return prev <= 2 ? prev + 1
            : prev = 1
        }), carouselTimer)
        
    }, [])

    const mouseOverHandler = () =>  clearInterval(intervalId.current)

         

    const mouseLeaveHandler = ()=> {

        intervalId.current = setInterval(() => setCarouselPosition(prev => {
            return prev <= 2 ? prev + 1
            : prev = 1
        }), carouselTimer)
    }




    const carouselVariants1 = {
        animate1: { x: '0vw', transition: { duration: .3 } },
        animate2: { x: '-100vw', transition: { duration: .3 } },
        animate3: { x: '-200vw', transition: { duration: .3 } },
        animate4: { x: '0vw', transition: { duration: .3 } },

    }

    



    const carouselPositionDetector = () => {
        const carouselPositionDetector = carouselVariants1['animate'+carouselPosition].x.replace('vw', '')
        return +carouselPositionDetector


    }

   
    function onPanHandler(event, info) {
        mouseOverHandler()
        console.log('coosaa');
        const carouselTranslatedvalue = carouselPositionDetector()


        carousel.current.style.transform = `translateX(calc(${carouselTranslatedvalue}vw + ${info.offset.x}px))`
      }

    const onPanEndHandler = (event, info) => {

        if(info.offset.x < 0){
            setCarouselPosition(prev => prev <= 2 ? prev + 1 : prev = 1)
        }
        if(info.offset.x > 0){
            setCarouselPosition(prev => prev === 0 ? prev = 3 : prev - 1)

        }
        mouseLeaveHandler()
    }
      const carousel = useRef(null)


    return (
        <motion.div className="carousel"

        >

            <motion.div
                ref={carousel}
                animate={'animate' + carouselPosition}
                variants={carouselVariants1}
                onMouseOver={mouseOverHandler}
                onMouseLeave={mouseLeaveHandler}
                whileTap={{ cursor: "grabbing"}}
                onPan={onPanHandler}
                onPanEnd={onPanEndHandler}

                
    // onTouchStart={carouselTouchStartHandler}
    // onTouchMove={carouselTouchMoveHandler}
    // onTouchEnd={carouselTouchEndHandler}
    // onMouseDown={carouselClickStartHandler}
    // onMouseMove={carouselClickMoveHandler}
    // onMouseUp={carouselClickUpHandler}
    // ref={carouselContent}



                className="carousel__content">

                <motion.div   >
                    <CarouselItem position="first" category="NOVIDADES" title="Novos Portateis" description="Bluetooth Speaker" />
                </motion.div>

                <motion.div >
                    <CarouselItem position="second" category="PROMOÇÕES DA BLACK FRIDAY" title="Promoções incríveis" description="até 30%" />
                </motion.div>

                <motion.div  >
                    <CarouselItem position="third" category="PARA SUA SALA" title="Coleção Outono" description="Móveis sob Medida" />
                </motion.div>
            </motion.div>
        </motion.div>
    )
}