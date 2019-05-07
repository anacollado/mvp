import React from 'react';

const formatDateForDisplay = str => {
  const date = new Date(str);
  return date.toLocaleDateString();
}

export const formatDate = str => {
  const date = new Date(str);
  return date.toISOString().split("T")[0];
}

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      brand: props.product.brand,
      productName: props.product.productName,
      notes: props.product.notes,
      datePurchased: props.product.datePurchased,
      amountRemaining: props.product.amountRemaining
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const {brand, productName, notes, datePurchased, amountRemaining} = this.state;
    const updatedProductInfo = {brand, productName, notes, datePurchased: formatDate(datePurchased), amountRemaining};
    this.props.updateProduct(this.props.product.productId, updatedProductInfo).then(() => this.setState({isEditing: false}));

  }

  render() {
    const id = this.props.product.productId;
    if (this.state.isEditing) {
      return (
        <div>

          <div>
            <form onSubmit={this.handleSubmit}>
              <label>
                Brand: <input type="text" value={this.state.brand} onChange={e => this.setState({ brand: e.target.value })} />
              </label>
              <label>
                Product Name: <input type="text" value={this.state.productName} onChange={e => this.setState({ productName: e.target.value })} />
              </label>
              <label>
                Notes: <textarea value={this.state.notes} onChange={e => this.setState({ notes: e.target.value })} />
              </label>
              <label>
                Date Purchased <input type="date" value={formatDate(this.state.datePurchased)} onChange={e => this.setState({ datePurchased: e.target.value })} />
              </label>
              <label>
                Amount Remaining:
          <select value={this.state.amountRemaining} onChange={e => this.setState({ amountRemaining: e.target.value })}>
                  <option value="0">0%</option>
                  <option value="25">25%</option>
                  <option value="50">50%</option>
                  <option value="75">75%</option>
                  <option value="100">100%</option>
                </select>
              </label>
              <input type="submit" value="Save" />
            </form>
          </div>

        </div>
      )
    } else {
      return (
        <div className="product-row">
          <div>{this.props.product.brand}</div>
          <div>{this.props.product.productName}</div>
          <div>{this.props.product.notes}</div>
          <div>{formatDateForDisplay(this.props.product.datePurchased)}</div>
          <div>{this.props.product.amountRemaining}%</div>
          <div className="product-buttons">
            <button onClick={() => this.setState({ isEditing: true })}>edit</button>
            <button onClick={() => this.props.deleteProduct(id, this.props.product)}>delete</button>
          </div>
        </div>
      )
    }

  }
}



function ProductList(props) {
  return (
    <div>
      {props.productList.map(product => {
        return <Product product={product} key={product.productId} updateProduct={props.updateProduct} deleteProduct={props.deleteProduct} />
      })}
    </div>
  )
}

export default ProductList;