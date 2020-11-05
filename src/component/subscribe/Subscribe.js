import React from 'react'

import './Subscribe.scss'

export default props => {

    return(
        <div className="subscribe">
            <h2 className="subscribe-title">Inscreva-se em nossa Newsletter</h2>
            <p className="subscribe-subtitle">Não Perca Nenhuma das Nossas Novidade e Promoções!!!</p>
            <div className="subscribe__input-container">

                <input type='text' className="subscribe__input" placeholder="Coloque seu Email"/>
                <button className="subscribe-btn">Inscreva-se</button>
            </div>
        </div>
    )
}