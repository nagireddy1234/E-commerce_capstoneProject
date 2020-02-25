import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
// we need to things to create context API 1. Provider and 2. Consumer

class ProductProvider extends Component {

  state={
    products:storeProducts,
    detailProduct:detailProduct
  }
  handleDetail = () => {
    console.log("handleDeatils")
  }
  addToCart = () => {
    console.log("addtocart Deatils")
  }
  render() {
    return (
      <ProductContext.Provider value={{
        ...this.state,
        handleDetail: this.handleDetail,
        addToCart: this.addToCart
      }}> 
      {this.props.children}
      </ProductContext.Provider>
    )
  }
}

const ProductConsumer= ProductContext.Consumer
export {ProductProvider, ProductConsumer}