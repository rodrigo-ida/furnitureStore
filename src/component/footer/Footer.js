import React from 'react'

import './Footer.scss'


export default props => {

    return(
        <footer className="footer">
            <div className="subscribe">
                <div className="subscribe__info">
                    <ul className="subscribe__info__list" >
                        <li>
                            <ul className="subscribe__info__inner__list">
                                <li>Sobre nós</li>
                                <li>Leia Nossa Coluna</li>
                                <li>Nos Contate</li>
                                <li>Endereços</li>
                            </ul>
                        </li>
                        <li>
                            <ul className="subscribe__info__inner__list">
                                <li>SAC</li>
                                <li>Rastreie sua Encomenda</li>
                                <li>Política de Privacidade</li>
                                <li>ENvio e Reembolsos</li>
                            </ul>
                        </li>
                        <li>
                            <ul className="subscribe__info__inner__list">
                                <li>Sala de Estar</li>
                                <li>Banheiro</li>
                                <li>Cozinha</li>
                                <li>Iluminação</li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className="subscribe__email">
                    <h2 className="subscribe-title">Inscreva-se em nossa Newsletter</h2>
                    <p className="subscribe-subtitle">Não Perca Nenhuma das Nossas Promoções!!!</p>
                    <div className="subscribe__input-container">
                        <input type='text' className="subscribe__input" placeholder="Coloque seu Email"/>
                        <button className="subscribe-btn">Inscreva-se</button>
                    </div>
                </div>
            </div>
            <div className="footer-container">

            <div className="footer__bottom-icons">
                        <i className="fab fa-facebook-f"></i>
                        <i className="fab fa-twitter"></i>
                        <i className="fab fa-instagram"></i>
                        <i className="fab fa-pinterest-p"></i>
                </div>
                <div className="footer__bottom">
                    <div className="footer__copyright" >
                        <p>&#169; 2020, Todos os direitos reservados. Desenvolvido por Rodrigo Ida</p>
                    </div>
                    <div className="footer__cards">
                        <div className="visa cards__icon"></div>
                        <div className="paypal cards__icon"></div>
                        <div className="mastercard cards__icon"></div>
                        <div className="americanexpress cards__icon"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}