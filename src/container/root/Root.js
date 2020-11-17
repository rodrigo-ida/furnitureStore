import React, {useState} from 'react'

import './Root.scss'

import Header from '../../component/header/Header'
import Carousel from '../../component/carousel/Carousel'
import Categories from '../../component/categories/Categories'
import NewProducts  from '../../component/newProducts/NewProducts'
import Contact from '../../component/contact/Contact'
import Instagram from '../../component/instagram/Instagram'
import Subscribe from '../../component/subscribe/Subscribe'
import Footer from '../../component/footer/Footer'

import Img1 from '../../assets/newProductsImg/img1.jpg'
import Img2 from '../../assets/newProductsImg/img2.jpg'
import Img3 from '../../assets/newProductsImg/img3.webp'
import Img4 from '../../assets/newProductsImg/img4.jpg'
import Img5 from '../../assets/newProductsImg/img5.jpg'
import Img6 from '../../assets/newProductsImg/img6.jpg'
import Img7 from '../../assets/newProductsImg/img7.jpg'
import Img8 from '../../assets/newProductsImg/img8.jpg'

export default props =>{

    const [modalToggle, setModalToggle] = useState(false)
    const [modalItemMenu, setModalItemMenu] = useState(false)
    const [modalItemshowUp, setmodalItemshowUp] = useState(false)
    const [modalContent, setModalContent] = useState(false)
    const [headerCartShow, setHeaderCartShow] = useState(false)


    const [newProductModalShow, setNewProductModalShow] = useState(false)
    const [newProductModalShowProduct, setNewProductModalShowProduct] = useState(false)
    const [lorem, setLorem] = useState(false)
    const [qtdOrdered, setQtdOrdered] = useState(0)


    const burgerBtnToggleHandler = ()=> {
        document.querySelector('body').style.overflow = 'hidden'
        setModalToggle(true)}
    
    const headerCloseModalBtnHandler = () => {
        setModalToggle(false)
        setModalItemMenu(false)
        setModalContent(false)
        document.querySelector('body').style.overflow = 'visible'

    }

    const productsData = [
        {
            img:Img1,
            title:"Bluetooth Speaker",
            review:'',
            price:137,
            alt:"Sala de Estar",
            orderedQtd: useState(0),
            stars:3
        },
        {
            img:Img2,
            title:"Elefante de Madeira",
            review:'',
            price:27.99,
            alt:"Acessórios",
            orderedQtd: useState(0),
            stars:3
        },
        {

            img:Img3,
            title:"Sony Headphone",
            review:'',
            price:750.99,
            alt:"Acessórios",
            orderedQtd: useState(0),
            stars:4
        },
        {
            img:Img4,
            title:"Alarme",
            review:'',
            price:57.99,
            alt:"Acessórios",
            orderedQtd: useState(0),
            stars:5
        },
        {
            img:Img5,
            title:"Cadeira de Plástico",
            review:'',
            price:25.55,
            alt:"Acessórios",
            orderedQtd: useState(0),
            stars:4
        },
        {
            img:Img6,
            title:"Poltrona",
            review:'',
            price:650,
            alt:"Acessórios",
            orderedQtd: useState(0),
            stars:3
        },
        {
            img:Img7,
            title:"Poltrona Fusce",
            review:'',
            price:250.99,
            alt:"Acessórios",
            orderedQtd: useState(0),
            stars:5
        },
        {
            img:Img8,
            title:"Cadeira Mauris",
            review:'',
            price:450.99,
            alt:"Acessórios",
            orderedQtd: useState(0),
            stars:5
        }
    ]
    
    
    return(
        <div className="root">
            <div className="header-container">
                <Header 
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
                    productsData={productsData}
                    qtdOrdered={qtdOrdered}
                    setQtdOrdered={setQtdOrdered}
                    />
            </div>
            <Carousel />
            <div className="main"> 
                    <Categories />
                    <NewProducts 
                    newProductModalShow={newProductModalShow}
                    setNewProductModalShow={setNewProductModalShow}
                    newProductModalShowProduct={newProductModalShowProduct} 
                    setNewProductModalShowProduct={setNewProductModalShowProduct}
                    lorem={lorem}
                    setLorem={setLorem}
                    productsData={productsData}
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
    )
}
