import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import './HeaderCart.scss'

import HeaderCartListItem from './headerCartListItem/HeaderCartListItem'

const HeaderCart = props =>{

    const listItem = props.productsData.map(e => {
        if(e.orderedQtd[0] > 0){
            return <HeaderCartListItem 
                    img={e.img} 
                    title={e.title} 
                    price={e.price} 
                    qtd={e.orderedQtd[0]} 
                    setQtd={e.orderedQtd[1]} />
        }
    })

    
    const subTotalCalculator = () =>{ 
        let subTotalArray = []
        props.productsData.forEach(e => subTotalArray.push(e.price * e.orderedQtd[0]))
        return subTotalArray.reduce((accumulator, current)=> accumulator + current)
        
    }
   
    return(
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.headerCartShow}
            timeout={300}
            classNames={{
                enterActive:'header__cart-container-entering',
                enterDone:'header__cart-container-entered',
                exit:'',
                exitActive:''
            }}>
            <div className="header__cart-container">
                <button onClick={()=>{                     
                    document.querySelector('body').style.overflow = 'visible'
                    props.setHeaderCartShow(false)}} className="header-container__close-btn">X</button>
                <div className="header__cart">
                    <div className="header__cart__list-container">
                        <ul className="header__cart__list">
                            {listItem}
                        </ul>
                    </div>
                    <div className="header__cart__subtotal">
                        <hr className="header__cart__subtotal__line" ></hr>
                        <p className="header__cart__subtotal__title">Subtotal</p>
                        <p className="header__cart__subtotal__value" >R$ {subTotalCalculator().toFixed(2)}</p>
                    </div>
                    <div className="header__cart__finish-btn-container">
                        <button className="header__cart__view-cart">Veja seus Itens</button>
                        <button className="header__cart__view-checkout">Finalizar sua compra</button>
                    </div>
                </div>
            </div>
        </CSSTransition>
    )
}

export default HeaderCart