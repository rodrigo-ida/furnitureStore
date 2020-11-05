import React from 'react'

import './Header.scss'
import Logo from '../../assets/header/logo_x36.png'
import HeaderModal from './headerModal/HeaderModal'

export default props => {


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
                burgerBtnToggleHandler={props.burgerBtnToggleHandler}
                modalItemMenu={props.modalItemMenu} 
                setModalItemMenu={props.setModalItemMenu}
                modalItemshowUp={props.modalItemshowUp}
                setmodalItemshowUp={props.setmodalItemshowUp}
                />
            </div>
            <div className="logo">
                <img src={Logo} className="logo" alt="logo"/>
            </div>
            <div className="header__right-btns">
                <button className="header__right-btns__search-btn"> <i className="fas fa-search"></i></button>
                <div className="header__right-btns__cart"> 0</div>
            </div>
        </header>
    )
}