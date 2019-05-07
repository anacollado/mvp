import React from 'react';

const formatDate = str => {
  const date = new Date(str);
  return date.toLocaleDateString();
}

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const id = this.props.product.productId;
    return (
      <div className="product-row">
        <div>{this.props.product.brand}</div>
        <div>{this.props.product.productName}</div>
        <div>{this.props.product.notes}</div>
        <div>{formatDate(this.props.product.datePurchased)}</div>
        <div>{this.props.product.amountRemaining}%</div>
        <div>
          <button>edit</button>
          <button onClick={() => this.props.deleteProduct(id)}>delete</button>
        </div>
      </div>
    )
  }
}



function ProductList(props) {
  return (
    <div>
      {props.productList.map(product => {
        return <Product product={product} key={product.productId} deleteProduct={props.deleteProduct} />
      })}
    </div>
  )
}

export default ProductList;