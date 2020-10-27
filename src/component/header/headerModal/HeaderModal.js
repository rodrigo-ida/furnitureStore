import React, { useEffect, useRef} from 'react'

import './HeaderModal.scss'

import ModalItem from './modalItem/ModalItem'

export default props => {

    useEffect(()=> modalhandler())
            
    //fazer a ref
    const modalToggleHandler = (modalLeftValue, modalBackgroundOpacity, marginTopParagraph) => {
        
            console.log('oooo');
            const modal = document.querySelector('.header__modal-container')
            const modalContent = document.querySelector('.header__modal-content-align')
            const modalParagraph = document.querySelectorAll('.modal-item-paragraph')
            if(modalLeftValue === -100){
                modal.style.transition = "left .3s .3s ease-in, background-color .3s ease-in"
            }
            modal.style.left = `${modalLeftValue}%`
            modal.style.backgroundColor = `rgba(0,0,0,${modalBackgroundOpacity})`
            
            modalContent.style.left = `${modalLeftValue}%`
            modalParagraph.forEach(e => e.style.marginTop = `${marginTopParagraph}px`)
            
        
    }


    const modalhandler = () =>{

        if(props.headerModalToggleState){
            modalToggleHandler(0, .4, 0)
        }else{
            modalToggleHandler(-100, 0, 50)
        }
    }

    // modalhandler()



    return(
        <div className="header__modal-container">
            <div className="header__modal-content-align">
                    <div className="header__modal-close-btn">
                        <button className="close-btn" onClick={props.navburgerBtnHandler}> X </button>
                    </div>
                    <div className="header__modal__list">
                        <ul>
                            <ModalItem >Início</ModalItem>
                            <ModalItem >Categorias</ModalItem>
                            <ModalItem >Promoções</ModalItem>
                            <ModalItem >Contato</ModalItem>
                        </ul>
                    </div>
                    <div className="header__modal__account">
                        <ul className="header__modal__account__list">
                            <li className="header__modal__account__list__item">Minha Conta</li>
                            <li className="header__modal__account__list__item">Lista de desejos</li>
                            <li className="header__modal__account__list__item">Compare</li>
                        </ul>
                    </div>
                    <hr></hr>
                    <p>rodrigoida1@hotmail.com</p>
                    <p>(11)98050-8438</p>
            </div>
        </div>
    )
}