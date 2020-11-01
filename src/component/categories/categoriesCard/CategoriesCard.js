import React from 'react';

import './CategoriesCard.scss'


export default props => {
    return (
        <div className="categories__card">
            <img src={props.img} alt={props.alt} className="categories__card__img"/>
            <p className="categories__card__qtd"> {props.qtd}</p>
            <p className="categories__card__title">{props.title}</p>
        </div>
    );
};