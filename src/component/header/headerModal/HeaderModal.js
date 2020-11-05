import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import './HeaderModal.scss'

import ModalItem from './modalItem/ModalItem'

export default props => {

    const listItemsArray = ['Inicio', 'Categorias', 'Promoções', 'Contato']
    const listItems = listItemsArray.map((e,index) => (
        <ModalItem
            key={e+index}
            modalContent={props.modalContent}
            setModalContent={props.setModalContent}
            modalToggle={props.modalToggle}
            modalItemMenu={props.modalItemMenu} 
            setModalItemMenu={props.setModalItemMenu}
            modalItemshowUp={props.modalItemshowUp}
            setmodalItemshowUp={props.setmodalItemshowUp}
            >{e}
        </ModalItem>))


    return(
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.modalToggle}
            timeout={500}
            classNames={{
                enter:'',
                enterActive:'modalOpening',
                enterDone:'modalOpened',
                exit:'modalOpened',
                exitActive:'modalClosing',
                exitDone:'modalClosed'
            }}>
            <div className="header__modal-container" >
                <div className="header__modal-content-align">
                        <div className="header__modal-close-btn">
                            <button className="close-btn" onClick={props.headerCloseModalBtnHandler}> X </button>
                        </div>
                        <div className="header__modal__list-container">
                            <ul className="header__modal__list">
                                {listItems}
                            </ul>
                        </div>
                        <div className="header__modal__account">
                            <ul className="header__modal__account__list">
                                <li className="header__modal__account__list__item">Minha Conta</li>
                                <li className="header__modal__account__list__item">Lista de desejos</li>
                                <li className="header__modal__account__list__item">Compare</li>
                            </ul>
                        </div>
                        <hr></hr>
                        <p>rodrigoida1@hotmail.com</p>
                        <p>(11)98050-8438</p>
                </div>
            </div>
        </CSSTransition>

    )
}