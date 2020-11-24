import InicioItemImg1 from '../../../assets/header-modal-item-content/visit-us.jpg'
import InicioImgItem3 from '../../../assets/header-modal-item-content/contact-mail.svg'

import CategoriasImgItem1 from '../../../assets/instagramImg.jpg'
import CategoriasImgItem2 from '../../../assets/newProductsImg/img1.jpg'
import CategoriasImgItem3 from '../../../assets/cards/bathtub.webp'
import CategoriasImgItem4 from '../../../assets/cards/tea.webp'

import ContaImgItem1 from '../../../assets/header-modal-item-content/my-products.jpg'
import ContaImgItem2 from '../../../assets/header-modal-item-content/undraw_Login_re_4vu2.svg'
import ContaImgItem3 from '../../../assets/header-modal-item-content/forgot-password.svg'

import EncomendasImgItem1 from '../../../assets/header-modal-item-content/damage.svg'
import EncomendasImgItem4 from '../../../assets/header-modal-item-content/contact.svg'

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

export default listItemsArray