import React, {Component} from 'react'

import './Root.scss'

import Header from '../../component/header/Header'
import Carousel from '../../component/carousel/Carousel'

class Root extends Component{


    
    
    render(){

        return(
            <div className="root">
                <Header />
                <Carousel />
            </div>
        )
    }
}

export default Root