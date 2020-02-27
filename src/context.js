import React, { Component } from 'react';
import {storeProducts, detailProduct} from './data'

const ProductContext = React.createContext();
// we need to things to create context API 1. Provider and 2. Consumer

class ProductProvider extends Component {

  state={
    products:storeProducts,
    detailProduct:detailProduct
  }
  componentDidMount = () =>{
      this.setProducts()
  }

  setProducts = ()=>{
    let tempProducts =[];
    storeProducts.forEach(item =>{
      const singleItem ={...item};
      tempProducts=[...tempProducts,singleItem]
    });
    this.setState(() =>{
    return {products:tempProducts}
  })
  }

  getItem = id => {
    const product = this.state.products.find(item => item.id === id);
    return product;
  };  
  
  handleDetail = (id) => {
    const product = this.getItem(id);
    this.setState(() => {
      return { detailProduct: product };
    });
  }

  addToCart = (id) => {
    let tempProducts = [...this.state.products];
    const index = tempProducts.indexOf(this.getItem(id));
    const product = tempProducts[index];
    product.inCart = true;
    product.count = 1;
    const price = product.price;
    product.total = price;

    this.setState(() => {
      return {
        products: [...tempProducts],
        cart: [...this.state.cart, product],
        detailProduct: { ...product }
      };
    }, this.addTotals);
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