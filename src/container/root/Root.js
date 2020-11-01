import React, {Component} from 'react'

import './Root.scss'

import Header from '../../component/header/Header'
import Carousel from '../../component/carousel/Carousel'
import Categories from '../../component/categories/Categories'
import NewProducts  from '../../component/newProducts/NewProducts'

class Root extends Component{


    render(){

        return(
            <div className="root">
                <Header />
                <Carousel />
                <div className="main"> 
                     <Categories />
                     <NewProducts />
                </div>
            </div>
        )
    }
}

export default Root