import React, {useState} from 'react'

import './Header.scss'
import Logo from '../../assets/header/logo_x36.png'
import HeaderModal from './headerModal/HeaderModal'

export default props => {

   const [modalToggle, setModalToggle] = useState(false)
   const [modalItemMenu, setModalItemMenu] = useState(false)
    
   const burgerBtnToggleHandler = ()=> setModalToggle(prev => !prev)

    return(
        <header className="header">
            <div className="header__burger-btn-container">
            <button className="header__burger-btn" onClick={burgerBtnToggleHandler}> <i className="fas fa-bars"></i></button>
            <HeaderModal 
                modalToggle={modalToggle} 
                burgerBtnToggleHandler={burgerBtnToggleHandler}
                modalItemMenu={modalItemMenu} 
                setModalItemMenu={setModalItemMenu}
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