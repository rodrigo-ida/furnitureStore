import React, {useEffect, useState} from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import './NewProductsCardLookModal.scss'

export default props => {

    const [orderQtd, setOrderQtd] = useState(0)

    const subtract = ()=> {
        setOrderQtd(prev => {
            if(prev === 0){return prev = 0}
            else{return prev -= 1}
        })
    }
    const add = ()=> {
        setOrderQtd(prev => prev += 1)
   }

   const closeModal =(event)=>{
        event.stopPropagation()
        setShow(false)
        props.setNewProductModalShowProduct(false)
   }
    
    const [show, setShow] = useState(false)
    useEffect(()=>{
        setShow(true)
    },[])

    const orderFinished = ()=> {

        props.orderedQtd[1](orderQtd)
        setShow(false)
        props.setNewProductModalShowProduct(false)
    }

    return(
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={show}
            timeout={300}
            classNames={{
                enter:"",
                enterActive:"new-products-look-entering",
                enterDone:'new-products-look-entered',
                exit:"new-products-look-exit",
                exitActive:'new-products-look-exiting'
            }}
            >
            <div className="new-products-look-container">
                <div className="new-products-look-container__close-btn">
                    <button className="new-products-look-container__close-btn" onClick={closeModal}>X</button>
                </div>
                <div className="new-products-look">
                    <div className="new-products-look__img-container">
                        <img className="new-products-look__img"  src={props.img} alt={props.alt} />
                    </div>
                    <div className="new-products-look__description-container">
                        <h1 className="new-products-look__description__title"> {props.title}</h1>
                        <div className="new-products-look__stars-container">
                            <div className="new-products-look__stars">
                            {props.stars}
                            </div>
                            <p className="new-products-look__reviews">{props.review} Avaliações</p>
                        </div>
                        <p className="new-products-look__price">R${props.price}</p>
                        <p className="new-products-look__description">{props.lorem}</p>
                        <hr></hr>
                        <a className="new-products-look__description__link" href="/"> &rarr; Acesse a página do Produto</a>
                        <hr></hr>
                        <div className="new-products-look__btn-container">
                            <button className="new-products-look__btn" onClick={subtract}>-</button>
                            <p className="new-products-look__btn__qtd">{orderQtd}</p>
                            <button className="new-products-look__btn" onClick={add}>+</button>
                        </div>
                        <div className="new-products-look__cart-add-container">
                            <button className="new-products-look__cart-add" onClick={orderFinished}>Adicione ao Carrinho</button>
                        </div>
                    </div>
                </div>
                <p>{props.newProductModalShowProduct}</p>
            </div>
        </CSSTransition>
    )
}