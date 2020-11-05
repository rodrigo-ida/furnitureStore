import React, {useState} from 'react'

import './Root.scss'

import Header from '../../component/header/Header'
import Carousel from '../../component/carousel/Carousel'
import Categories from '../../component/categories/Categories'
import NewProducts  from '../../component/newProducts/NewProducts'
import Contact from '../../component/contact/Contact'
import Instagram from '../../component/instagram/Instagram'
import Subscribe from '../../component/subscribe/Subscribe'
import Footer from '../../component/footer/Footer'

export default props =>{

    const [modalToggle, setModalToggle] = useState(false)
    const [modalItemMenu, setModalItemMenu] = useState(false)
    const [modalItemshowUp, setmodalItemshowUp] = useState(false)
    const [modalContent, setModalContent] = useState(false)
 
    const burgerBtnToggleHandler = ()=> setModalToggle(prev => !prev)
    
    const headerCloseModalBtnHandler = () => {
        setModalToggle(false)
        setModalItemMenu(false)
        setModalContent(false)
    }
 
    
    
    return(
        <div className="root">
            <div className="header-container">
                <Header 
                    modalContent={modalContent}
                    setModalContent={setModalContent}
                    burgerBtnToggleHandler={burgerBtnToggleHandler} 
                    modalToggle={modalToggle}
                    modalItemMenu={modalItemMenu}
                    setModalItemMenu={setModalItemMenu}
                    modalItemshowUp={modalItemshowUp}
                    setmodalItemshowUp={setmodalItemshowUp}
                    headerCloseModalBtnHandler={headerCloseModalBtnHandler}/>
            </div>
            <Carousel />
            <div className="main"> 
                    <Categories />
                    <NewProducts />
                    <Contact />
                    <Instagram />
                    <Subscribe />
            </div>
                    <Footer />
        </div>
    )
}
