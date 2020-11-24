import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./HeaderModal.scss";

import ModalItem from "./modalItem/ModalItem";

import listItemsData from "./listItemData";

const HeaderModal = (props) => {
    const listItems = listItemsData.map((e, index) => (
        <ModalItem
            key={e + index}
            showModalContent={props.showModalContent}
            setShowModalContent={props.setShowModalContent}
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
                            <ul className="header__modal__items-list">
                                {listItems}
                            </ul>
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
