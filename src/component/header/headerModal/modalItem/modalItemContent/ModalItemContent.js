import React,{useEffect} from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import './ModalItemContent.scss'

export default props => { 

    const {setModalContent, setModalItemMenu} = props
    // const setModalItemMenu = props.setModalItemMenu


    const closeBtnHandler = (event)=>{

        event.stopPropagation()
        
        setModalContent(false)
        setTimeout(()=> setModalItemMenu(false),300)
    }


    useEffect(()=>{
        setModalContent(true)
    },[props.modalItemMenu, setModalContent])



    return(
        <CSSTransition
            in={props.modalContent}
            mountOnEnter
            unmountOnExit
            timeout={300}
            classNames={{
                enterActive:'modal-item__content-entering',
                enterDone:'modal-item__content-entered',
                exit:'modal-item__content-entered',
                exitActive:'modal-item__content-exiting',
            }}>
            <div className='modal-item__content' >
                <button className='modal-item__content__close-btn' onClick={closeBtnHandler}>&larr; Voltar</button>
                <hr></hr>
                <ul className='modal-item__content__list'>
                    <li className='modal-item__content__list__title'>{props.title}</li>
                    <li className='modal-item__content__list__item'>{props.item1}</li>
                    <li className='modal-item__content__list__item'>{props.item2}</li>
                    <li className='modal-item__content__list__item'>{props.item3}</li>
                    <li className='modal-item__content__list__item'>{props.item4}</li>
                </ul>
            </div>
        </CSSTransition>
    )
}