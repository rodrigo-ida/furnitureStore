import React, {useEffect, useRef} from 'react'

import './ModalItem.scss'

import ModalItemContent from './modalItemContent/ModalItemContent'

export default props => {

    const paragraph = useRef(null)

    // useEffect(()=> {
    //     const paragraphUp = (marginTopParagraph) => {

    //         paragraph.current.style.marginTop = `${marginTopParagraph}px`
    //         paragraph.current.nextElementSibling.style.marginTop = `${marginTopParagraph}px`
    
    //     }
    //     if(props.modalToggle){
    //         paragraphUp(0)
    //     }
    //     return ()=> paragraphUp(50)
    // }, [props.modalToggle])


    const coisa = () => {

        props.setModalItemMenu(prevState => prevState = props.modalToggle)
        console.log(props.modalItemMenu);
    }

    let modal = props.modalItemMenu === props.children ? (
    <ModalItemContent 
        title={props.children}
        setModalItemMenu={props.setModalItemMenu}
        modalItemMenu={props.modalItemMenu}
        />) : ''



    return(
        <li className='modal-item' onClick={()=> props.setModalItemMenu(prevState => prevState = props.children)}>
            <p className="modal-item-paragraph" ref={paragraph}>{props.children}</p>
            <p className="modal-item-paragraph" >&gt;</p>
            {modal}
        </li>
    )
}