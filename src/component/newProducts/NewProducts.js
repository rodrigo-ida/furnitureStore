import React from 'react';

import './NewProducts.scss'

import Card from './newProductsCard/NewProductsCard'
import Img1 from '../../assets/newProductsImg/img1.jpg'
import Img2 from '../../assets/newProductsImg/img2.jpg'
import Img3 from '../../assets/newProductsImg/img3.webp'
import Img4 from '../../assets/newProductsImg/img4.jpg'
import Img5 from '../../assets/newProductsImg/img5.jpg'
import Img6 from '../../assets/newProductsImg/img6.jpg'
import Img7 from '../../assets/newProductsImg/img7.jpg'
import Img8 from '../../assets/newProductsImg/img8.jpg'

console.log(Math.random()*100);

export default props => {
    return (
        <div className="new-products">
            <div className="new-products__title-container">
                <h3 className="new-products__title">Novos Produtos</h3>
                <p className="new-products__title-subtitle">Uma seleção dos melhores produtos que acabaram de chegar!</p>
            </div>
            <div className="new-products__cards-container">
                <Card img={Img1} title1="Blooth Speaker" price={(Math.random() * 100).toFixed(2)} alt="Sala de Estar"/>
                <Card img={Img2} title1="Elefante de Madeira" price={(Math.random() * 100).toFixed(2)} alt="Acessórios"/>
                <Card img={Img3} title1="Sony Headphone" price={(Math.random() * 100).toFixed(2)} alt="Banheiro"/>
                <Card img={Img4} title1="Alarme" price={(Math.random() * 100).toFixed(2)} alt="Cozinha"/>
                <Card img={Img5} title1="Cadeira de Plástico" price={(Math.random() * 100).toFixed(2)} alt="Sala de Estar"/>
                <Card img={Img6} title1="Poltrona" price={(Math.random() * 100).toFixed(2)} alt="Acessórios"/>
                <Card img={Img7} title1="Poltrona Fusce" price={(Math.random() * 100).toFixed(2)} alt="Banheiro"/>
                <Card img={Img8} title1="Cadeira Mauris" price={(Math.random() * 100).toFixed(2)} alt="Cozinha"/>
            </div>
            <div className="new-products__description">
                <h2 className="new-products__description-title">Confira todos os nossos novos produtos do mês</h2>
                <p className="new-products__description-body">Furniture axe heirloom ethical man bun sustainable. Pickled normcore selvage, bespoke four dollar toast neutra chartreuse vinyl.. </p>
                <button className="new-products__description-btn">Veja Nossos Novos Produtos</button>
            </div>
        </div>
    );
};