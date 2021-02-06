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

  const [newProductModalShow, setNewProductModalShow] = useState(false);
  const [newProductModalShowProduct, setNewProductModalShowProduct] = useState(
    false
  );
  const [lorem, setLorem] = useState(false);
  const [qtdOrdered, setQtdOrdered] = useState(0);

  const productOrderedHandler = () =>
    ProductData.map((el) => ({ ...el, orderedQtd: useState(0) }));

  const productsDataWithState = productOrderedHandler();


  return (
    <div className="root">
      <div className="header-container">
        <Header
          headerShow={headerShow}
          setHeaderShow={setHeaderShow}
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
          setNewProductModalShowProduct={setNewProductModalShowProduct}
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
