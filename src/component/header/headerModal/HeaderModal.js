import React from 'react'
import CSSTransition from 'react-transition-group/CSSTransition'

import './HeaderModal.scss'

import ModalItem from './modalItem/ModalItem'

export default props => {

    // const listItemsArray = ['Inicio', 'Categorias', 'Promoções', 'Contato']
    const listItemsArray = [{nome:'Inicio',
                            item1:'Sobre Nós',
                            item2:'Leia Nossas Dicas',
                            item3:'Contate-nos',
                            item4:'Visite Nossa Loja'
                            }, 
                            {nome:'Categorias',
                            item1:'Sala',
                            item2:'Acessórios',
                            item3:'Banheiro',
                            item4:'Cozinha'
                            }, 
                            {nome:'Minha Conta',
                            item1:'Meus Produtos',
                            item2:'Login',
                            item3:'esqueci minha senha',
                            item4:'histórico de compras'
                            }, 
                            {nome:'Problemas no Envio',
                            item1:'Produto danificado',
                            item2:'Produto extraviado',
                            item3:'Produto errado',
                            item4:'Converse com a nossa Central'
                            }]
    
    const listItems = listItemsArray.map((e,index) => (
        <ModalItem
            key={e+index}
            modalContent={props.modalContent}
            setModalContent={props.setModalContent}
            modalToggle={props.modalToggle}
            modalItemMenu={props.modalItemMenu} 
            setModalItemMenu={props.setModalItemMenu}
            modalItemshowUp={props.modalItemshowUp}
            setmodalItemshowUp={props.setmodalItemshowUp}
            item1={e.item1}
            item2={e.item2}
            item3={e.item3}
            item4={e.item4}
            >{e.nome}
        </ModalItem>))


    return(
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.modalToggle}
            timeout={500}
            classNames={{
                enter:'',
                enterActive:'modalOpening',
                enterDone:'modalOpened',
                exit:'modalOpened',
                exitActive:'modalClosing',
                exitDone:'modalClosed'
            }}>
            <div className="header__modal-container" >
                <div className="header__modal-content-align">
                        <div className="header__modal-close-btn">
                            <button className="close-btn" onClick={props.headerCloseModalBtnHandler}> X </button>
                        </div>
                        <div className="header__modal__list-container">
                            <ul className="header__modal__list">
                                {listItems}
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
        </CSSTransition>

    )
}