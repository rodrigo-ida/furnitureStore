import React from 'react'

import './Footer.scss'

export default props => {

    return(
        <footer className="footer">
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
        </footer>
    )
}