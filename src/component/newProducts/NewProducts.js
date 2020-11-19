import React from 'react';

import './NewProducts.scss'

import Card from './newProductsCard/NewProductsCard'


export default props => {


    
    const cards = props.productsData.map((e, index) => {
        return <Card 
        setHeaderShow={props.setHeaderShow}
                    key={Math.random()}
                    img={e.img}
                    title={e.title}
                    stars={e.stars}
                    price={e.price}
                    newProductModalShowProduct={props.newProductModalShowProduct} 
                    setNewProductModalShowProduct={props.setNewProductModalShowProduct}
                    newProductModalShow={props.newProductModalShow}
                    setNewProductModalShow={props.setNewProductModalShow}
                    lorem={props.lorem}
                    setLorem={props.setLorem}
                    qtdOrdered={props.qtdOrdered}
                    setQtdOrdered={props.setQtdOrdered}

                    orderedQtd={props.productsData[index].orderedQtd}
                />
    })

    return (
        <div className="new-products">
            <div className="new-products__title-container">
                <h3 className="new-products__title">Novos Produtos</h3>
                <p className="new-products__title-subtitle">Uma seleção dos melhores produtos que acabaram de chegar!</p>
            </div>
            <div className="new-products__cards-container">
                {cards}
            </div> 
            <div className="new-products__description">
                <h2 className="new-products__description-title">Confira todos os nossos novos produtos do mês</h2>
                <p className="new-products__description-body">Furniture axe heirloom ethical man bun sustainable. Pickled normcore selvage, bespoke four dollar toast neutra chartreuse vinyl.. </p>
                <button className="new-products__description-btn">Veja Nossos Novos Produtos</button>
            </div>
        </div>
    );
};