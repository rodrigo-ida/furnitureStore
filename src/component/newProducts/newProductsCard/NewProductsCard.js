import React from 'react';

import './NewProductsCard.scss'


export default props => {
    return (
        <div className="new-products__card">
            <div className="new-products__card__img-container">
                <img src={props.img} alt={props.alt} className="new-products__card__img"/>
            </div>
            <ul className="new-products__card__icon-list" >
                <li className="new-products__card__icon"><button><i className="far fa-eye"></i></button></li>
                <li className="new-products__card__icon"><button><i className="fas fa-shopping-cart"></i></button></li>
                <li className="new-products__card__icon"><button><i className="far fa-heart"></i></button></li>
                <li className="new-products__card__icon"><button><i className="fas fa-share-alt"></i></button></li>
            </ul>
            <div className="new-products__card_stars">
                <ul className="new-products__card_stars__list">
                    <li className="new-products__card_stars__list__item"><i className="fas fa-star"></i></li>
                    <li className="new-products__card_stars__list__item"><i className="fas fa-star"></i></li>
                    <li className="new-products__card_stars__list__item"><i className="fas fa-star"></i></li>
                    <li className="new-products__card_stars__list__item"><i className="fas fa-star"></i></li>
                    <li className="new-products__card_stars__list__item"><i className="fas fa-star-half-alt"></i></li>
                </ul>
            
            </div>
            <p className="new-products__card__title">{props.title}</p>
            <p className="new-products__card__price">R${props.price}</p>
        </div>
    );
};