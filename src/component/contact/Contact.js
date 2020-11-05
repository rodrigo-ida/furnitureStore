import React from 'react'

import './Contact.scss'

export default props => {
    

    return(
        <div className="contact">
            <p className="contact__title">Nos Visite</p>
            <div className="contact__address-container">
                <p className="contact__address">R. Teodoro Sampaio, 66</p>
                <p className="contact__address">Próx ao Metro Butantã</p>
                <p className="contact__address">São Paulo - SP</p>
            </div>
            <div className="contact__link-container">
                <a href="#" className="contact__link">Contate-nos</a>
            </div>
        </div>
    )

}