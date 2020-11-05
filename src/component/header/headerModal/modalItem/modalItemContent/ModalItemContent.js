import React,{useEffect} from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import './ModalItemContent.scss'

export default props => { 

    const closeBtnHandler = (event)=>{

        event.stopPropagation()
        
        props.setModalContent(false)
        setTimeout(()=> props.setModalItemMenu(false),300)
    }

    const setModalContent = props.setModalContent

    useEffect(()=>{
        props.setModalContent(true)
    },[props.modalItemMenu])



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
                <button onClick={closeBtnHandler}>&larr; Voltar</button>
                <hr></hr>
                <ul>
                    <li>{props.title}</li>
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                    <li>{props.item3}</li>
                    <li>{props.item4}</li>
                </ul>
            </div>
        </CSSTransition>
    )
}