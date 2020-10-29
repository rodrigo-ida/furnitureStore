import React from 'react'

import './ModalItemContent.scss'

export default props => {

    if(props.title)

    return(

        <div className={`modal-item__content ${props.title}`}>
            <button onClick={props.itemContentCloseBtnHandler}>&larr; Voltar</button>
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