import React, {useState} from "react";

import CSSTransitionComponent from "react-transition-group/CSSTransition";

import "./Header.scss";
import Logo from "../../assets/header/logo-desktop.png";
import HeaderModal from "./headerModal/HeaderModal";
import HeaderCart from "./headerCart/HeaderCart";

export default (props) => {


    const [showModalContent, setShowModalContent] = useState(false);
    const [modalToggle, setModalToggle] = useState(false);
    const [modalItemMenu, setModalItemMenu] = useState(false);
    const [modalItemshowUp, setmodalItemshowUp] = useState(false);
    const [headerCartShow, setHeaderCartShow] = useState(false);


    const orderedGather = () => {
        const orderedGather = [];
        props.productsData.forEach((e) => orderedGather.push(e.orderedQtd[0]));
        return orderedGather.reduce(
            (accumulator, current) => accumulator + current
        );
    };


    const burgerBtnToggleHandler = () => {
        document.querySelector("body").style.overflow = "hidden";
        setModalToggle(true);
    };

    const headerCloseModalBtnHandler = () => {
        setModalToggle(false);
        setModalItemMenu(false);
        setShowModalContent(false);
        document.querySelector("body").style.overflow = "visible";
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
                        onClick={burgerBtnToggleHandler}
                    >
                        <i className="fas fa-bars"></i>
                    </button>
                    <HeaderModal
                        showModalContent={showModalContent}
                        setShowModalContent={setShowModalContent}
                        headerCloseModalBtnHandler={headerCloseModalBtnHandler}
                        modalToggle={modalToggle}
                        setModalToggle={setModalToggle}
                        burgerBtnToggleHandler={burgerBtnToggleHandler}
                        modalItemMenu={modalItemMenu}
                        setModalItemMenu={setModalItemMenu}
                        modalItemshowUp={modalItemshowUp}
                        setmodalItemshowUp={setmodalItemshowUp}
                        setHeaderCartShow={setHeaderCartShow}
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
                            return setHeaderCartShow(true);
                        }}
                    >
                        Meu Carrinho
                    </span>
                    <div
                        className="header__right-btns__cart"
                        onClick={() => {
                            document.querySelector(".root").style.overflow =
                                "hidden";
                            return setHeaderCartShow(true);
                        }}
                    >
                        {orderedGather()}
                    </div>
                    <HeaderCart
                        headerCartShow={headerCartShow}
                        setHeaderCartShow={setHeaderCartShow}
                        productsData={props.productsData}
                        qtdOrdered={props.qtdOrdered}
                        setQtdOrdered={props.setQtdOrdered}
                    />
                </div>
            </header>
        </CSSTransitionComponent>
    );
};
