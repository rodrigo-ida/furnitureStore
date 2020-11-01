import React, { useEffect, useRef} from 'react'

import './HeaderModal.scss'

import ModalItem from './modalItem/ModalItem'

export default props => {


    useEffect(()=> {

        const modalhandler = () =>{
            if(props.modalToggle){
                modalToggleHandler(0, .4)
            }else{
                modalToggleHandler(-100, 0)
            }
        }
        modalhandler()

    }, [props.modalToggle])

            
    const modalContainer = useRef(null)
    const modalToggleHandler = (modalLeftValue, modalBackgroundOpacity) => {
        
            const modalContent = modalContainer.current.childNodes[0]
            if(modalLeftValue === -100){
                modalContainer.current.style.transition = "left .3s .2s ease-in, background-color .3s ease-in"
            }
            modalContainer.current.style.left = `${modalLeftValue}%`
            modalContainer.current.style.backgroundColor = `rgba(0,0,0,${modalBackgroundOpacity})`
            
            modalContent.style.left = `${modalLeftValue}%`
            
        
    }




    return(
        <div className="header__modal-container" ref={modalContainer}>
            <div className="header__modal-content-align">
                    <div className="header__modal-close-btn">
                        <button className="close-btn" onClick={props.burgerBtnToggleHandler}> X </button>
                    </div>
                    <div className="header__modal__list">
                        <ul>
                            <ModalItem
                            modalToggle={props.modalToggle}
                            modalItemMenu={props.modalItemMenu} 
                            setModalItemMenu={props.setModalItemMenu}
                            >Início</ModalItem>
                            <ModalItem
                            modalToggle={props.modalToggle}
                            modalItemMenu={props.modalItemMenu} 
                            setModalItemMenu={props.setModalItemMenu}
                            >Categorias</ModalItem>
                            <ModalItem
                            modalToggle={props.modalToggle}
                            modalItemMenu={props.modalItemMenu} 
                            setModalItemMenu={props.setModalItemMenu}
                            >Promoções</ModalItem>
                            <ModalItem
                            modalToggle={props.modalToggle}
                            modalItemMenu={props.modalItemMenu} 
                            setModalItemMenu={props.setModalItemMenu}
                            >Contato</ModalItem>
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