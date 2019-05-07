import React from 'react';
import { formatDate } from './ProductList.jsx';

const defaultState = {
  brand: '',
  productName: '',
  notes: '',
  datePurchased: '',
  amountRemaining: 100
};

class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { brand, productName, notes, datePurchased, amountRemaining } = this.state;
    const newProductInfo = { brand, productName, notes, datePurchased: formatDate(datePurchased), amountRemaining };
    this.props.addProduct(newProductInfo).then(() => {
      this.setState(defaultState);
    })
  }

  render() {
    return (
      <div className="new-product-container" >
        <form onSubmit={this.handleSubmit}>
          <label className="new-product-label">
            Brand: <input type="text" value={this.state.brand} onChange={e => this.setState({ brand: e.target.value })} />
          </label>
          <label className="new-product-label">
            Product Name: <input type="text" value={this.state.productName} onChange={e => this.setState({ productName: e.target.value })} />
          </label>
          <label className="new-product-label">
            Notes: <textarea value={this.state.notes} onChange={e => this.setState({ notes: e.target.value })} />
          </label>
          <label className="new-product-label">
            Date Purchased: <input type="date" value={this.state.datePurchased} onChange={e => this.setState({ datePurchased: e.target.value })} />
          </label>
          <label className="new-product-label">
            Amount Remaining:
          <select className="new-product-label" value={this.state.amountRemaining} onChange={e => this.setState({ amountRemaining: e.target.value })}>
              <option value="0">0%</option>
              <option value="25">25%</option>
              <option value="50">50%</option>
              <option value="75">75%</option>
              <option value="100">100%</option>
            </select>
          </label>
          <input className="add-button" type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default NewProduct;