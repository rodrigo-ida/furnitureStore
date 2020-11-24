import React from "react";

import CSSTransitionComponent from "react-transition-group/CSSTransition";

import "./Header.scss";
import Logo from "../../assets/header/logo-desktop.png";
import HeaderModal from "./headerModal/HeaderModal";
import HeaderCart from "./headerCart/HeaderCart";

export default (props) => {
    const orderedGather = () => {
        const orderedGather = [];
        props.productsData.forEach((e) => orderedGather.push(e.orderedQtd[0]));
        return orderedGather.reduce(
            (accumulator, current) => accumulator + current
        );
    };

    return (
        <CSSTransitionComponent
            unmountOnExit
            mountOnEnter
            in={props.headerShow}
            timeout={300}
            classNames={{
                enterActive: "header-entering",
                enterDone: "header-entered",
                exit: "header-exit",
                exitActive: "header-exiting",
                exitDone: "header-exited",
            }}
        >
            <header className="header">
                <div className="header__burger-btn-container">
                    <button
                        className="header__burger-btn"
                        onClick={props.burgerBtnToggleHandler}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <HeaderModal
                        modalContent={props.modalContent}
                        setModalContent={props.setModalContent}
                        headerCloseModalBtnHandler={
                            props.headerCloseModalBtnHandler
                        }
                        modalToggle={props.modalToggle}
                        setModalToggle={props.setModalToggle}
                        burgerBtnToggleHandler={props.burgerBtnToggleHandler}
                        modalItemMenu={props.modalItemMenu}
                        setModalItemMenu={props.setModalItemMenu}
                        modalItemshowUp={props.modalItemshowUp}
                        setmodalItemshowUp={props.setmodalItemshowUp}
                        setHeaderCartShow={props.setHeaderCartShow}
                    />
                </div>
                <div className="logo">
                    <img src={Logo} className="logo" alt="logo" />
                </div>
                <div className="header__right-btns">
                    <button className="header__right-btns__search-btn">
                        <i className="fas fa-search"></i>
                    </button>
                    <span
                        className="header__right-btn__cart-pc-description"
                        onClick={() => {
                            document.querySelector(".root").style.overflow =
                                "hidden";
                            return props.setHeaderCartShow(true);
                        }}
                    >
                        Meu Carrinho
                    </span>
                    <div
                        className="header__right-btns__cart"
                        onClick={() => {
                            document.querySelector(".root").style.overflow =
                                "hidden";
                            return props.setHeaderCartShow(true);
                        }}
                    >
                        {orderedGather()}
                    </div>
                    <HeaderCart
                        headerCartShow={props.headerCartShow}
                        setHeaderCartShow={props.setHeaderCartShow}
                        productsData={props.productsData}
                        qtdOrdered={props.qtdOrdered}
                        setQtdOrdered={props.setQtdOrdered}
                    />
                </div>
            </header>
        </CSSTransitionComponent>
    );
};
