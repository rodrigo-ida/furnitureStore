import React, {Component} from 'react'

import './Root.scss'

import Header from '../../component/header/Header'
import Carousel from '../../component/carousel/Carousel'

class Root extends Component{

    state = {
        headerModalToggle: false
    }

    navburgerBtnHandler = () => {
        console.log(this.state.headerModalToggle);
        this.setState((prevState) => { return {headerModalToggle: !prevState.headerModalToggle}
    })}
    
    
    render(){

        return(
            <div className="root">
                <Header navburgerBtnHandler={this.navburgerBtnHandler} headerModalToggleState={this.state.headerModalToggle}/>
                <Carousel />
            </div>
        )
    }
}

export default Root