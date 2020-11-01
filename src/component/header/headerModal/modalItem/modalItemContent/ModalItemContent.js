import React,{useEffect, useRef} from 'react'

import './ModalItemContent.scss'

export default props => {

    const itemContent = useRef(null)
    useEffect(()=>{

        const contentToggle = () => {

                const content = itemContent.current
                const content1 = itemContent.current.parentNode.parentNode

                content.style.position = 'absolute'
                content.style.transition = "left .7s ease-in"
                content.style.top = content1.offsetTop + 'px'
                content.style.left = `0%`
        }
        contentToggle()

        return ()=>{

        }

    }, [props.modalItemMenu])

    const btnHandler = (event)=>{

        event.stopPropagation()

        const content = itemContent.current
        const content1 = itemContent.current.parentNode.parentNode

        content.style.position = 'absolute'
        content.style.transition = "left .5s ease-in"
        content.style.top = content1.offsetTop + 'px'
        content.style.left = `200%`
        setTimeout(()=> props.setModalItemMenu(false), 550)
        

    }



    return(
        
        <div className={`modal-item__content ${props.title}`} ref={itemContent}>
            <button onClick={btnHandler}>&larr; Voltar</button>
            <hr></hr>
            <ul>
                <li>{props.title}</li>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
                <li>{props.item3}</li>
                <li>{props.item4}</li>
            </ul>
        </div>
    )
}