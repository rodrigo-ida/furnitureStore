import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'


import './Carousel.scss'
import CarouselItem from './carouselItem/CarouselItem'

export default () => {

    const [carouselPosition, setCarouselPosition] = useState(1)
    const carouselTimer = 4000

    const intervalId = useRef(null)
    const carousel = useRef(null)

    useEffect(() => {

        intervalId.current = setInterval(() => setCarouselPosition(prev =>  prev <= 2 ? prev + 1 : 1
        ), carouselTimer)

    }, [])

    const mouseOverHandler = () => clearInterval(intervalId.current)

    const mouseLeaveHandler = () => (
        intervalId.current = setInterval(() => setCarouselPosition(prev => prev <= 2 ? prev + 1 : 1
        ), carouselTimer))

    const carouselVariants1 = {
        animate1: { x: '0vw', transition: { duration: .3 } },
        animate2: { x: '-100vw', transition: { duration: .3 } },
        animate3: { x: '-200vw', transition: { duration: .3 } },
    }

    const carouselPositionDetector = () => {
        const carouselPositionDetector = carouselVariants1['animate' + carouselPosition].x.replace('vw', '')
        return +carouselPositionDetector
    }


    function onPanHandler(event, info) {
        const carouselTranslatedvalue = carouselPositionDetector()
        mouseOverHandler()

        carousel.current.style.transform = `translateX(calc(${carouselTranslatedvalue}vw + ${info.offset.x}px))`
    }

    const onPanEndHandler = (event, info) => {

        if (info.offset.x < 0) setCarouselPosition(prev => prev < 3 ? prev + 1 : prev = 1)
        if (info.offset.x > 0) setCarouselPosition(prev => prev === 1 ? prev = 3 : prev - 1)
        mouseLeaveHandler()
    }

    return (
        <motion.div className="carousel">
            <motion.div
                ref={carousel}
                animate={'animate' + carouselPosition}
                variants={carouselVariants1}
                onMouseOver={mouseOverHandler}
                onMouseLeave={mouseLeaveHandler}
                whileTap={{ cursor: "grabbing" }}
                onPan={onPanHandler}
                onPanEnd={onPanEndHandler}
                className="carousel__content">

                    <CarouselItem position="first" category="NOVIDADES" title="Novos Portateis" description="Bluetooth Speaker" />
                    <CarouselItem position="second" category="PROMOÇÕES DA BLACK FRIDAY" title="Promoções incríveis" description="até 30%" />
                    <CarouselItem position="third" category="PARA SUA SALA" title="Coleção Outono" description="Móveis sob Medida" />
            
            </motion.div>
        </motion.div>
    )
}