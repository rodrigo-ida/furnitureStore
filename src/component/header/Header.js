import React from 'react'

import './Header.scss'
import Logo from '../../assets/header/logo-desktop.png'
import HeaderModal from './headerModal/HeaderModal'
import HeaderCart from './headerCart/HeaderCart'

export default props => {

    
    const orderedGather = ()=>{

        const orderedGather = []
        props.productsData.forEach(e => orderedGather.push(e.orderedQtd[0]))
        return orderedGather.reduce((accumulator, current)=> accumulator + current)

    }


    return(
        <header className="header">
            <div className="header__burger-btn-container">
                <button 
                    className="header__burger-btn" 
                    onClick={props.burgerBtnToggleHandler}> 
                        <i className="fas fa-bars"></i>
                </button>
                <HeaderModal 

                    modalContent={props.modalContent}
                    setModalContent={props.setModalContent}
                    headerCloseModalBtnHandler={props.headerCloseModalBtnHandler}
                    modalToggle={props.modalToggle} 
                    setModalToggle={props.setModalToggle}
                    burgerBtnToggleHandler={props.burgerBtnToggleHandler}
                    modalItemMenu={props.modalItemMenu} 
                    setModalItemMenu={props.setModalItemMenu}
                    modalItemshowUp={props.modalItemshowUp}
                    setmodalItemshowUp={props.setmodalItemshowUp}
                    setHeaderCartShow={props.setHeaderCartShow}
                />
            </div>
            <div className="logo">
                <img src={Logo} className="logo" alt="logo"/>
            </div>
            <div className="header__right-btns">
                <button className="header__right-btns__search-btn"> <i className="fas fa-search"></i></button>
                <div className="header__right-btns__cart" onClick={()=>{
                    document.querySelector('body').style.overflow = 'hidden'
                    return props.setHeaderCartShow(true)
                    }}> {orderedGather()} </div>
                <HeaderCart 
                headerCartShow={props.headerCartShow}
                setHeaderCartShow={props.setHeaderCartShow}
                productsData={props.productsData}
                qtdOrdered={props.qtdOrdered}
                setQtdOrdered={props.setQtdOrdered}
                />
            </div>
        </header>
    )
}