import React, { useState } from "react";

import "./Root.scss";

import Header from "../../component/header/Header";
import Carousel from "../../component/carousel/Carousel";
import Categories from "../../component/categories/Categories";
import NewProducts from "../../component/newProducts/NewProducts";
import Contact from "../../component/contact/Contact";
import Instagram from "../../component/instagram/Instagram";
import Footer from "../../component/footer/Footer";

import ProductData from "../../assets/productData/productData";

export default () => {
    const [headerShow, setHeaderShow] = useState(true);
    const [modalToggle, setModalToggle] = useState(false);
    const [modalItemMenu, setModalItemMenu] = useState(false);
    const [modalItemshowUp, setmodalItemshowUp] = useState(false);
    const [modalContent, setModalContent] = useState(false);
    const [headerCartShow, setHeaderCartShow] = useState(false);

    const [newProductModalShow, setNewProductModalShow] = useState(false);
    const [
        newProductModalShowProduct,
        setNewProductModalShowProduct,
    ] = useState(false);
    const [lorem, setLorem] = useState(false);
    const [qtdOrdered, setQtdOrdered] = useState(0);

    const burgerBtnToggleHandler = () => {
        document.querySelector("body").style.overflow = "hidden";
        setModalToggle(true);
    };

    const headerCloseModalBtnHandler = () => {
        setModalToggle(false);
        setModalItemMenu(false);
        setModalContent(false);
        document.querySelector("body").style.overflow = "visible";
    };

    const productorderedHandler = () =>
        ProductData.map((el) => ({ ...el, orderedQtd: useState(0) }));

    const productsDataWithState = productorderedHandler();

    return (
        <div className="root">
            <div className="header-container">
                <Header
                    headerShow={headerShow}
                    setHeaderShow={setHeaderShow}
                    modalContent={modalContent}
                    setModalContent={setModalContent}
                    burgerBtnToggleHandler={burgerBtnToggleHandler}
                    modalToggle={modalToggle}
                    setModalToggle={setModalToggle}
                    modalItemMenu={modalItemMenu}
                    setModalItemMenu={setModalItemMenu}
                    modalItemshowUp={modalItemshowUp}
                    setmodalItemshowUp={setmodalItemshowUp}
                    headerCloseModalBtnHandler={headerCloseModalBtnHandler}
                    headerCartShow={headerCartShow}
                    setHeaderCartShow={setHeaderCartShow}
                    productsData={productsDataWithState}
                    qtdOrdered={qtdOrdered}
                    setQtdOrdered={setQtdOrdered}
                />
            </div>
            <Carousel />
            <div className="main">
                <Categories />
                <NewProducts
                    setHeaderShow={setHeaderShow}
                    newProductModalShow={newProductModalShow}
                    setNewProductModalShow={setNewProductModalShow}
                    newProductModalShowProduct={newProductModalShowProduct}
                    setNewProductModalShowProduct={
                        setNewProductModalShowProduct
                    }
                    lorem={lorem}
                    setLorem={setLorem}
                    productsData={productsDataWithState}
                    qtdOrdered={qtdOrdered}
                    setQtdOrdered={setQtdOrdered}
                />
                <div className="contact-container">
                    <Contact />
                    <Instagram />
                </div>
            </div>
            <div className="footer-placeholder">
                <Footer />
            </div>
        </div>
    );
};
