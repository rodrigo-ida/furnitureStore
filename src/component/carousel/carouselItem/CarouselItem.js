import React, {useEffect, useRef} from 'react'

import './CarouselItem.scss'

export default props => {

    const position = useRef(null)


    useEffect( () => {

        const animation = (position1, backgroundSize) =>{

            const first = position.current
    
            if(props.position === position1){
    
                first.style.backgroundSize = `${backgroundSize}%`
                first.childNodes[0].style.transform = "skew(0deg)"
    
            }else{
                
                if(window.screen.availWidth < 400){

                    first.style.backgroundSize = '203%'
                    first.childNodes[0].style.transform = "skew(8deg)"
                }
                if(window.screen.availWidth > 999){
                    first.style.backgroundSize = '120%'

                }
    
            }
        }
        
        const animationExecution = carouselState =>{
            
            if(carouselState === 0){
               if(window.screen.availWidth < 400){

                   animation('first', 185)
               }
               if(window.screen.availWidth > 999){
                animation('first', 125)
                   
               }
                
            }
            
            if(carouselState === 1){
                
               if(window.screen.availWidth < 400){

                   animation('second', 198)
               }
               if(window.screen.availWidth > 999){
                animation('second', 114)
                   
               }
            }
            
            if(carouselState === 2){
               if(window.screen.availWidth < 400){

                   animation('third', 198)
               }
               if(window.screen.availWidth > 999){
                animation('third', 114)
                   
               }
            }
            
            
        }
        animationExecution(props.carouselState)
    
    }, [props.carouselState, props.position] )




    return (
        <div className="carousel-item">
            <div className={props.position} ref={position}>
                <div className='carousel-item__text-container' >

                    <div className="carousel-item__category-container">
                        <p className="carousel-item__category">{props.category}</p>
                    </div>
                    <div className="carousel-item__title-container">
                        <p className="carousel-item__title">{props.title}</p>
                        <p className="carousel-item__title">{props.description}</p>
                    </div>
                    <div className="carousel-item__shop-now-container">
                        <p className="carousel-item__shop-now">Compre Agora</p>
                    </div>
                </div>
            </div>

        </div>
    )
}