import React from 'react';

import './Categories.scss'

import Card from './categoriesCard/CategoriesCard'
import ChairImg from '../../assets/cards/chair.webp'
import PhonesImg from '../../assets/cards/phones.webp'
import BathroomImg from '../../assets/cards/bathtub.webp'
import KitchenImg from '../../assets/cards/tea.webp'



export default props => {
    return (
        <div className="categories">
            <Card img={ChairImg} alt="uma imagem de cadeira" qtd="8 produtos" title="Sala de Estar"/>
            <Card img={PhonesImg} alt="uma imagem de um fone" qtd="3 produtos" title="Acessórios"/>
            <Card img={BathroomImg} alt="uma imagem de uma pia" qtd="7 produtos" title="Banheiro"/>
            <Card img={KitchenImg} alt="uma imagem de uma chaleira" qtd="5 produtos" title="Cozinha"/>
        </div>
    );
};