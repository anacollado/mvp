import React from 'react';
import Header from './Header.jsx';
import ProductList from './ProductList.jsx';
import NewProduct from './NewProduct.jsx';
import axios from 'axios';

import '../main.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: []
    }
    this.addProduct = this.addProduct.bind(this);
    this.getProductList = this.getProductList.bind(this);
  }

  addProduct(productInfo) {
    axios({
      method: 'post',
      url: '/api/products',
      data: productInfo
    })
    .then(this.getProductList);
  }

  getProductList() {
    axios({
      url: '/api/products',
      method: 'get',
    })
      .then(results => this.setState({ productList: results.data }));
  }

  componentDidMount() {
    this.getProductList();
  }

  render() {
    return (
      <div>
        <Header />
        <h1>your vanity</h1>
        <ProductList productList={this.state.productList} />
        <NewProduct addProduct={this.addProduct}/>
      </div>
    )
  }
}

export default App;