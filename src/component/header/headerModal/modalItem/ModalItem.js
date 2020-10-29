import React, {useEffect, useRef} from 'react'

import './ModalItem.scss'

import ModalItemContent from './modalItemContent/ModalItemContent'

export default props => {

    const paragraph = useRef(null)

    

    const contentToggle = (event, contentLeftValue) => {

        // console.log(event.currentTarget.classList[1])
        event.stopPropagation()
            const content = document.querySelector(`.${props.children}`)
            const content1 = document.querySelector('.header__modal__list')
            console.log(content);
            content.style.position = 'absolute'
            content.style.transition = "left .3s ease-in"
            content.style.top = content1.offsetTop + 'px'
            content.style.left = `${contentLeftValue}%`
    }


    const paragraphUp = (marginTopParagraph) => {

        paragraph.current.style.marginTop = `${marginTopParagraph}px`

        paragraph.current.nextElementSibling.style.marginTop = `${marginTopParagraph}px`
        console.log(paragraph.current.nextElementSibling);

    }
    useEffect(()=> {
        if(props.modalToggle){
            paragraphUp(0)
        }
        return ()=> paragraphUp(50)
    }, [props.modalToggle])




    const modalItemHandler = (event) => contentToggle(event,0)
    const itemContentCloseBtnHandler = (event) => contentToggle(event, 300)

    return(
        <li className='modal-item' onClick={modalItemHandler}>
            <p className="modal-item-paragraph" ref={paragraph}>{props.children}</p>
            <p className="modal-item-paragraph" >&gt;</p>
            <ModalItemContent itemContentCloseBtnHandler={itemContentCloseBtnHandler}
            title={props.children}/>
        </li>
    )
}