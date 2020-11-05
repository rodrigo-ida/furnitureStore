import React, {useEffect} from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import './ModalItem.scss'

import ModalItemContent from './modalItemContent/ModalItemContent'

export default props => {

    let modal = props.modalItemMenu === props.children ? (
    <ModalItemContent 
        title={props.children}
        setModalItemMenu={props.setModalItemMenu}
        modalItemMenu={props.modalItemMenu}
        modalContent={props.modalContent}
        setModalContent={props.setModalContent}
        />) : ''
        
    useEffect(()=> props.setmodalItemshowUp(prev => prev = props.modalToggle))

    return(
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.modalItemshowUp}
            timeout={1000}
            classNames={{
                enterActive:'itemEntering',
                enterDone: 'itemEnterDone',
            }}>
                <li className='modal-item'  
                    onClick={()=> props.setModalItemMenu(prevState => prevState = props.children)}>
                    <p className="modal-item-paragraph" >{props.children}<span className="modal-item-paragraph__arrow">&gt;</span></p>
                    {modal}
                </li>
        </CSSTransition>
    )
}