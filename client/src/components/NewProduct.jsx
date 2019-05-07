import React from 'react';

class NewProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      brand: '',
      productName: '',
      notes: '',
      datePurchased: '',
      amountRemaining: 100
    };
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
    const {brand, productName, notes, datePurchased, amountRemaining} = this.state;
    const newProductInfo = {brand, productName, notes, datePurchased, amountRemaining};
    this.props.addProduct(newProductInfo);
  }

  render() {
    return (
      <div>
        <form  onSubmit={this.handleSubmit}>
          <label>
            Brand: <input type="text" value={this.state.brand} onChange={e => this.setState({brand: e.target.value})}/>
          </label>
          <label>
            Product Name: <input type="text" value={this.state.productName} onChange={e => this.setState({productName: e.target.value})}/>
          </label>
          <label>
            Notes: <textarea value={this.state.notes} onChange={e => this.setState({notes: e.target.value})}/>
          </label>
          <label>
            Date Purchased <input type="date" value={this.state.datePurchased} onChange={e => this.setState({datePurchased: e.target.value})}/>
          </label>
          <label>
            Amount Remaining:
          <select value={this.state.amountRemaining} onChange={e => this.setState({amountRemaining: e.target.value})}>
            <option value="0">0%</option>
            <option value="25">25%</option>
            <option value="50">50%</option>
            <option value="75">75%</option>
            <option value="100">100%</option>
          </select>
          </label>
          <input type="submit" value="Add" />
        </form>
      </div>
    )
  }
}

export default NewProduct;