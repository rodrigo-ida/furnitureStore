import React, {useState} from 'react'

import './Root.scss'

import Header from '../../component/header/Header'
import Carousel from '../../component/carousel/Carousel'
import Categories from '../../component/categories/Categories'
import NewProducts  from '../../component/newProducts/NewProducts'

export default props =>{

    const [modalToggle, setModalToggle] = useState(false)
    const [modalItemMenu, setModalItemMenu] = useState(false)
 
    const burgerBtnToggleHandler = ()=> setModalToggle(prev => !prev)
 

    
    return(
        <div className="root">
            <Header 
            burgerBtnToggleHandler={burgerBtnToggleHandler} 
            modalToggle={modalToggle}
            modalItemMenu={modalItemMenu}
            setModalItemMenu={setModalItemMenu}/>
            <Carousel />
            <div className="main"> 
                    <Categories />
                    <NewProducts />
            </div>
        </div>
    )
}
