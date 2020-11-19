import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./HeaderModal.scss";

import ModalItem from "./modalItem/ModalItem";

import InicioItemImg1 from '../../../assets/header-modal-item-content/visit-us.jpg'
import InicioItemImg2 from '../../../assets/header-modal-item-content/password.svg'
import InicioImgItem3 from '../../../assets/header-modal-item-content/contact-mail.svg'
import InicioImgItem4 from '../../../assets/header-modal-item-content/visit-us.svg'

import CategoriasImgItem1 from '../../../assets/instagramImg.jpg'
import CategoriasImgItem2 from '../../../assets/newProductsImg/img1.jpg'
import CategoriasImgItem3 from '../../../assets/cards/bathtub.webp'
import CategoriasImgItem4 from '../../../assets/cards/tea.webp'

import ContaImgItem1 from '../../../assets/header-modal-item-content/my-products.jpg'
import ContaImgItem2 from '../../../assets/header-modal-item-content/undraw_Login_re_4vu2.svg'
import ContaImgItem3 from '../../../assets/header-modal-item-content/forgot-password.svg'

import EncomendasImgItem1 from '../../../assets/header-modal-item-content/damage.svg'
import EncomendasImgItem4 from '../../../assets/header-modal-item-content/contact.svg'


const HeaderModal = (props) => {
    const listItemsArray = [
        {
            nome: "Inicio",
            item1: {content:"Visite Nossa Loja", img: InicioItemImg1},
            item2: {content:"Leia Nossas Dicas"},
            item3: {content:"Contate-nos", img: InicioImgItem3},
            item4: {content:"Sobre Nós"},
        },
        {
            nome: "Categorias",
            item1: {content:"Sala", img:  CategoriasImgItem1},
            item2: {content:"Acessórios", img:  CategoriasImgItem2},
            item3: {content:"Banheiro", img:  CategoriasImgItem3},
            item4: {content:"Cozinha", img:  CategoriasImgItem4},
        },
        {
            nome: "Conta",
            item1: {content:"Meus Produtos", img:  ContaImgItem1},
            item2: {content:"Login", img:  ContaImgItem2},
            item3: {content:"esqueci minha senha", img:  ContaImgItem3},
            item4: {content:"histórico de compras"},
        },
        {
            nome: "Encomendas",
            item1: {content:"Produto danificado", img:  EncomendasImgItem1},
            item2: {content:"Produto extraviado"},
            item3: {content:"Produto errado"},
            item4: {content:"Converse com a nossa Central", img:  EncomendasImgItem4},
        },
    ];

    const listItems = listItemsArray.map((e, index) => (
        <ModalItem
            key={e + index}
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
        >
            {e.nome}
        </ModalItem>
    ));

    return (
        <CSSTransition
            mountOnEnter
            unmountOnExit
            in={props.modalToggle}
            timeout={500}
            classNames={{
                enter: "",
                enterActive: "modalOpening",
                enterDone: "modalOpened",
                exit: "modalOpened",
                exitActive: "modalClosing",
                exitDone: "modalClosed",
            }}
        >
            <div className="header__modal-container">
                <div className="header__modal-content-align">
                    <div className="header__modal-close-btn-container">
                        <button
                            className="header__modal-close-btn"
                            onClick={props.headerCloseModalBtnHandler}
                        >
                            X
                        </button>
                    </div>
                    <div className="header__modal__search-container">
                        <input
                            type="text"
                            placeholder="O que você procura?"
                            className="header__modal__search-input"
                        />
                    </div>
                    <div className="header__modal__list-container">
                        <div className="header__modal__items-list-container">
                            <ul className="header__modal__items-list">{listItems}</ul>
                        </div>
                        <div className="header__modal__account">
                            <ul className="header__modal__account__list">
                                <li className="header__modal__account__list__item">
                                    Minha Conta
                                </li>
                                <li className="header__modal__account__list__item">
                                    Lista de desejos
                                </li>
                                <li className="header__modal__account__list__item">
                                    Compare
                                </li>
                            </ul>
                        </div>
                        <div className="header__modal__my-contact">
                            <hr></hr>
                            <p>rodrigoida1@hotmail.com</p>
                            <p>(11)98050-8438</p>
                        </div>
                    </div>
                </div>
            </div>
        </CSSTransition>
    );
};

export default HeaderModal;
