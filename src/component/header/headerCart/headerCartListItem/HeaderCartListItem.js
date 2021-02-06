import React from 'react'

import './HeaderCartListItem.scss'

const ListItem = props => {


    return(
        <li className="header__cart__list-item__container">

            <div className="header__cart__list-item">
                <div className="header__cart__list-item__img-container">
                    <img src={props.img} className="header__cart__list-item__img" alt="imagem do carrinho"/>
                    <button className="header__cart__list-item__close-btn"
                    onClick={()=>props.setQtd(0)}>X</button>
                </div>
                <div className="header__cart__list-item__description">
                    <p className="header__cart__list-item__description__title">{props.title} Bluetooth Speaker</p>
                    <div className="header__cart__list-item__description__counter-container">
                        <button className="header__cart__list-item__description__counter-btn"
                            onClick={()=>props.setQtd(prev=> prev - 1)}>-</button>
                        <p className="header__cart__list-item__description__counter-visor">{props.qtd}</p>
                        <button className="header__cart__list-item__description__counter-btn"
                        onClick={()=> props.setQtd(prev=> prev + 1)}>+</button>
                    </div>
                    <p className="header__cart__list-item__description__price">R${(props.price * props.qtd).toFixed(2)}</p>
                </div>
            </div>
        </li>
    )
}

export default ListItem