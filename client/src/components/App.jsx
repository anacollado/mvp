import React from 'react';
import Header from './Header.jsx';
import ProductList from './ProductList.jsx';
import NewProduct from './NewProduct.jsx';
import axios from 'axios';

import '../main.css';

const filterProductsBySearch = (searchString, productList) => {
  const lowerCaseSearchStr = searchString.toLowerCase();
  return productList.filter(product => {

    return product.brand.toLowerCase().includes(lowerCaseSearchStr) || product.productName.toLowerCase().includes(lowerCaseSearchStr) || product.notes.toLowerCase().includes(lowerCaseSearchStr);
  })
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productList: [],
      searchInputValue: ''
    }
    this.addProduct = this.addProduct.bind(this);
    this.getProductList = this.getProductList.bind(this);
    this.updateProduct = this.updateProduct.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  onSearchInputChange(e) {
    this.setState({searchInputValue: e.target.value});
  }

  addProduct(productInfo) {
    axios({
      method: 'post',
      url: '/api/products',
      data: productInfo
    })
    .then(this.getProductList);
  }

  updateProduct(id, productInfo) {
    axios({
      method: 'put',
      url: `/api/products/${id}`,
      data: productInfo
    })
    .then(this.getProductList);
  }

  deleteProduct(id) {
    axios({
      method: 'delete',
      url: `/api/products/${id}`
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
    const filteredProductList = filterProductsBySearch(this.state.searchInputValue, this.state.productList);
    return (
      <div>
        <Header onSearchInputChange={this.onSearchInputChange} value={this.state.searchInputValue}/>
        <h1>your vanity</h1>
        <ProductList productList={filteredProductList} deleteProduct={this.deleteProduct} />
        <NewProduct addProduct={this.addProduct}/>
      </div>
    )
  }
}

export default App;