import React,{useEffect} from 'react';

import './NewProductsCard.scss'

import NewProductsModalShow from './newProductsCardLookModal/NewProductsCardLookModal'


export default props => {

    let stars = []

    useEffect(()=>{
        const loremFetch = ()=>{
            fetch("http://www.randomtext.me/api/lorem/ul-1/5-10")
            .then(response => response.json())
            .then(e => props.setLorem(e.text_out.replace(/<.*?>\r<.*?>/gm, '')))
            .catch(err => {
                console.error(err);
            })
        }
        if(!props.lorem){
            loremFetch()
        }
    })

    for(let i = 0; i < props.stars; i++ ){
        stars.push(<li 
                        key={Math.random()} 
                        className="new-products__card_stars__list__item">
                        <i className="fas fa-star"></i>
                    </li>)
    }

    const reviewGenerator = ()=>{
        return Math.floor(Math.random()* (600 - 80 + 1)) + 2
    }

    let REVIEW_NUMBER = reviewGenerator()

    const modal =  props.newProductModalShowProduct === props.title ? <NewProductsModalShow 
    setHeaderShow={props.setHeaderShow}
                    newProductModalShow={props.newProductModalShow}
                    setNewProductModalShow={props.setNewProductModalShow}
                    newProductModalShowProduct={props.newProductModalShowProduct} 
                    setNewProductModalShowProduct={props.setNewProductModalShowProduct}
                    img={props.img}
                    alt={props.alt}
                    stars={stars}
                    lorem={props.lorem}
                    title={props.title}
                    review={REVIEW_NUMBER}
                    price={props.price}
                    qtdOrdered={props.qtdOrdered}
                    setQtdOrdered={props.setQtdOrdered} 
                    orderedQtd={props.orderedQtd}
                /> : ''
                    

    return (
        <div className="new-products__card">
            {modal}
            <div className="new-products__card__img-container">
                <img src={props.img} alt={props.alt} className="new-products__card__img"/>
            </div>
            <ul className="new-products__card__icon-list" >
                <li className="new-products__card__icon">
                    <button className="new-products__card__icon-btn" 
                        onClick={()=>{
                            props.setHeaderShow(false)
                            document.querySelector("body").style.overflow ="hidden";
                            props.setNewProductModalShowProduct(props.title)}}>
                        <i className="far fa-eye"></i>
                    </button>
                </li>
                <li className="new-products__card__icon">
                    <button className="new-products__card__icon-btn" onClick={()=>props.orderedQtd[1](prev => prev = prev + 1)}>
                        <i className="fas fa-shopping-cart"></i>
                    </button>
                </li>
                <li className="new-products__card__icon">
                    <button className="new-products__card__icon-btn">
                        <i className="far fa-heart"></i>
                    </button>
                </li>
                <li className="new-products__card__icon">
                    <button className="new-products__card__icon-btn">
                        <i className="fas fa-share-alt"></i>
                    </button>
                </li>
            </ul>
            <div className="new-products__card_stars">
                <ul className="new-products__card_stars__list">
                    {stars}
                </ul>
            
            </div>
            <p className="new-products__card__title">{props.title}</p>
            <p className="new-products__card__price">R${props.price}</p>
        </div>
    );
};