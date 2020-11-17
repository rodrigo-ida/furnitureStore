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
            item1={props.item1}
            item2={props.item2}
            item3={props.item3}
            item4={props.item4}
        />
    ) : ''
        
    useEffect(()=> props.setmodalItemshowUp(prev => prev = props.modalToggle))

    return(
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.modalItemshowUp}
            timeout={300}
            classNames={{
                enterActive:'itemEntering',
                enterDone: 'itemEnterDone',
            }}>
                <li className='modal-item'  
                    onClick={()=> props.setModalItemMenu(prevState => prevState = props.children)}
                    // onMouseOver={()=> props.setModalItemMenu(prevState => prevState = props.children)}
                    // onMouseOut={()=> {
                    //     props.setModalItemMenu(prevState => prevState = false)
                    //     props.setModalContent(prevState => prevState = false)
                    // }}
                    >
                    <p className="modal-item-paragraph" >
                        {props.children}
                        <span className="modal-item-paragraph__arrow-mobile">&gt;</span>
                        <span className="modal-item-paragraph__arrow-pc">  <i class="fas fa-caret-down"></i></span>                        
                        </p>
                    {modal}
                </li>
        </CSSTransition>
    )
}