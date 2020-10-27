import React from 'react'

import './CarouselItem.scss'

export default props => {

    return (
        <div className="carousel-item">
            <div className={props.position}></div>
        </div>
    )
}